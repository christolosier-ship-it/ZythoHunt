import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { WORLD } from '../../src/config.js';
import { computeVisibleMapState } from '../../src/domain/map-visibility.js';
import { buildSearchIndex, findDebugStyleMatches, normalizeSearchText } from '../../src/domain/search.js';
import { computeVisibleBounds } from '../../src/map/viewport.js';

const nodes = JSON.parse(await readFile(new URL('../../data/taxonomy-nodes.json', import.meta.url)));
const links = JSON.parse(await readFile(new URL('../../data/taxonomy-links.json', import.meta.url)));
const aliases = JSON.parse(await readFile(new URL('../../data/aliases.json', import.meta.url)));
const byId = new Map(nodes.map(node => [node.id, node]));

test('V0.1.1 ajoute deux troncs structurels visibles', () => {
  for (const id of ['fermentation-spontaneous', 'fermentation-mixed-wild']) {
    const node = byId.get(id);
    assert.equal(node.parentId, 'beer');
    assert.equal(node.functionalType, 'structure');
    assert.equal(node.capturable, false);
  }
  const state = computeVisibleMapState(nodes, links, new Set());
  assert.ok(state.visibleNodeIds.has('fermentation-spontaneous'));
  assert.ok(state.visibleNodeIds.has('fermentation-mixed-wild'));
});

test('compteurs V0.1.1', () => {
  assert.equal(nodes.length, 28);
  assert.equal(nodes.filter(node => node.functionalType === 'structure').length, 8);
  assert.equal(nodes.filter(node => node.functionalType === 'capturable').length, 20);
  assert.equal(links.filter(link => link.linkType === 'primary').length, 27);
  assert.equal(links.filter(link => link.linkType !== 'primary').length, 2);
});

test('coordonnées dans le monde SVG cohérent', () => {
  assert.deepEqual(WORLD, { width: 2400, height: 1800 });
  for (const node of nodes) {
    assert.ok(node.position.x >= 0 && node.position.x <= WORLD.width, node.id);
    assert.ok(node.position.y >= 0 && node.position.y <= WORLD.height, node.id);
  }
});

test('computeVisibleBounds inclut extrémités cachées et marge', () => {
  const state = computeVisibleMapState(nodes, links, new Set(['west-coast-ipa']));
  const bounds = computeVisibleBounds(state.visibleNodes, state.visibleLinks, byId, { nodeRadius: 0, labelPadding: 0, margin: 0 });
  assert.ok(bounds.minX <= byId.get('family-pale-ale-ipa').position.x);
  assert.ok(bounds.maxX >= byId.get('west-coast-ipa').position.x);
  assert.ok(bounds.minY <= byId.get('west-coast-ipa').position.y);
  assert.ok(bounds.maxY >= byId.get('american-ipa').position.y);
});

test('computeVisibleBounds applique la marge et gère le vide', () => {
  assert.equal(computeVisibleBounds([], [], byId), null);
  const node = byId.get('beer');
  const bounds = computeVisibleBounds([node], [], byId, { nodeRadius: 10, labelPadding: 20, margin: 30 });
  assert.equal(bounds.minX, node.position.x - 60);
  assert.equal(bounds.maxX, node.position.x + 60);
});

test('recherche développeur par noms et alias', () => {
  const index = buildSearchIndex(nodes, aliases);
  const cases = new Map([
    ['WCIPA', 'west-coast-ipa'],
    ['west coast ipa', 'west-coast-ipa'],
    ['NEIPA', 'new-england-ipa'],
    ['Hazy IPA', 'new-england-ipa'],
    ['APA', 'american-pale-ale'],
    ['IPL', 'india-pale-lager'],
    ['Blanche belge', 'witbier']
  ]);
  for (const [query, expected] of cases) {
    const result = findDebugStyleMatches(query, index);
    assert.equal(result.status, 'single');
    assert.equal(result.matches[0].id, expected);
  }
  assert.equal(findDebugStyleMatches('', index).status, 'empty');
  assert.equal(findDebugStyleMatches('style inexistant', index).status, 'none');
  assert.equal(normalizeSearchText('  Blânche---belge  '), 'blanche belge');
});
