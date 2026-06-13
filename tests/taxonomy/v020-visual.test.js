import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { canSelectNode, resolveNodeVisualState } from '../../src/domain/node-visual-state.js';
import { createDiscoveryController } from '../../src/map/discovery-animation.js';
import { createMicroBubbles, getApparentNodeRadius, getFamilyClass, getNodeRadius, getNodeVisualKind, getStructureLabelText, wrapNodeLabel } from '../../src/map/bubble-presentation.js';
import { getActiveSecondaryLinkIds, getPrimaryPathToRoot } from '../../src/map/selection-path.js';

const nodes = JSON.parse(await readFile(new URL('../../data/taxonomy-nodes.json', import.meta.url)));
const links = JSON.parse(await readFile(new URL('../../data/taxonomy-links.json', import.meta.url)));
const byId = new Map(nodes.map(node => [node.id, node]));

test('états visuels et priorité', () => {
  const west = byId.get('west-coast-ipa');
  assert.equal(resolveNodeVisualState(byId.get('beer'), {}), 'structure');
  assert.equal(resolveNodeVisualState(west, {}, new Set()), 'unknown');
  assert.equal(resolveNodeVisualState(west, {}, new Set([west.id])), 'discovered');
  assert.equal(resolveNodeVisualState(west, { revealPendingId: west.id, selectedId: west.id, exploredIds: new Set([west.id]) }, new Set([west.id])), 'reveal-pending');
  assert.equal(resolveNodeVisualState(west, { selectedId: west.id, exploredIds: new Set([west.id]) }, new Set([west.id])), 'selected');
  assert.equal(resolveNodeVisualState(west, { exploredIds: new Set([west.id]) }, new Set([west.id])), 'explored');
});

test('présentation des rayons, familles, labels et microbulles', () => {
  assert.equal(getNodeRadius(byId.get('beer')), 62);
  assert.equal(getNodeRadius(byId.get('fermentation-high')), 60);
  assert.equal(getNodeRadius(byId.get('family-pale-ale-ipa')), 56);
  assert.equal(getNodeRadius(byId.get('west-coast-ipa')), 48);
  assert.equal(getNodeVisualKind(byId.get('beer')), 'root-medallion');
  assert.equal(getNodeVisualKind(byId.get('fermentation-high')), 'fermentation-cartouche');
  assert.equal(getNodeVisualKind(byId.get('family-pale-ale-ipa')), 'family-capsule');
  assert.equal(getNodeVisualKind(byId.get('west-coast-ipa')), 'style-bubble');
  assert.deepEqual(getStructureLabelText(byId.get('family-pale-ale-ipa')), ['Pale Ale', '& IPA']);
  assert.equal(getApparentNodeRadius(byId.get('west-coast-ipa'), 'unknown', 0, 0.2), 6);
  assert.equal(getApparentNodeRadius(byId.get('west-coast-ipa'), 'unknown', 2, 1.2), 40);
  assert.equal(getApparentNodeRadius(byId.get('west-coast-ipa'), 'discovered', 2, 1.2), 52);
  assert.equal(getFamilyClass(byId.get('witbier')), 'family-wheat');
  assert.ok(wrapNodeLabel('Australian Sparkling Ale').length <= 3);
  assert.ok(wrapNodeLabel('Fermentation mixte / sauvage').length <= 3);
  const a = createMicroBubbles(byId.get('west-coast-ipa'));
  const b = createMicroBubbles(byId.get('west-coast-ipa'));
  assert.equal(a.length, 3);
  assert.deepEqual(a, b);
});

test('chemin sélectionné sans révélation de nœuds cachés', () => {
  const path = getPrimaryPathToRoot('west-coast-ipa', nodes, links);
  assert.deepEqual(path, ['primary-american-ipa-west-coast-ipa', 'primary-ipa-american-ipa', 'primary-family-pale-ale-ipa-ipa', 'primary-fermentation-high-family-pale-ale-ipa', 'primary-beer-fermentation-high']);
  assert.deepEqual(getActiveSecondaryLinkIds('white-ipa', links), ['secondary-white-ipa-witbier']);
  assert.equal(canSelectNode(byId.get('beer'), new Set(['beer'])), false);
  assert.equal(canSelectNode(byId.get('west-coast-ipa'), new Set()), false);
  assert.equal(canSelectNode(byId.get('west-coast-ipa'), new Set(['west-coast-ipa'])), true);
});

test('contrôleur de révélation annulable avec horloge injectable', () => {
  const tasks = [];
  const clock = { setTimeout(fn) { tasks.push(fn); return tasks.length - 1; }, clearTimeout(id) { tasks[id] = null; } };
  const events = [];
  const controller = createDiscoveryController({ clock, duration: 1000 });
  controller.preview('west-coast-ipa', { onStart: id => events.push(['start', id]), onName: id => events.push(['name', id]), onFinish: id => events.push(['finish', id]) });
  controller.preview('witbier', { onStart: id => events.push(['start', id]), onName: id => events.push(['name', id]), onFinish: id => events.push(['finish', id]) });
  while (tasks.length) tasks.shift()?.();
  assert.deepEqual(events, [['start', 'west-coast-ipa'], ['start', 'witbier'], ['name', 'witbier'], ['finish', 'witbier']]);
});

test('révélation réduite immédiate sans autre style révélé', () => {
  const events = [];
  createDiscoveryController().preview('west-coast-ipa', { onStart: id => events.push(id), onName: id => events.push(id), onFinish: id => events.push(id) }, { reducedMotion: true });
  assert.deepEqual(events, ['west-coast-ipa', 'west-coast-ipa', 'west-coast-ipa']);
});
