import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { WORLD, APP_VERSION, TAXONOMY_VERSION } from '../../src/config.js';
import { detectLayoutCollisions, getDescendantBounds } from '../../src/canvas/canvas-map-renderer.js';
import { getApparentNodeRadius, getStructureLabelText } from '../../src/map/bubble-presentation.js';

const nodes = JSON.parse(await readFile(new URL('../../data/taxonomy-nodes.json', import.meta.url)));
const version = JSON.parse(await readFile(new URL('../../data/taxonomy-version.json', import.meta.url)));
const byId = new Map(nodes.map(node => [node.id, node]));

test('V0.2.4 versions et monde agrandi sans changement de corpus', () => {
  assert.equal(APP_VERSION, '0.2.4');
  assert.equal(TAXONOMY_VERSION, '0.1.2-prototype.3');
  assert.equal(version.taxonomyVersion, '0.1.2-prototype.3');
  assert.equal(nodes.length, 28);
  assert.deepEqual(WORLD, { width: 4000, height: 3000 });
});

test('layout V0.2.4 sans collisions majeures', () => {
  const collisions = detectLayoutCollisions(nodes, { scale: 1 });
  assert.deepEqual(collisions.structureCollisions, []);
  assert.deepEqual(collisions.styleCollisions, []);
  assert.deepEqual(collisions.labelCollisions, []);
  for (const node of nodes) {
    assert.ok(node.position.x >= 0 && node.position.x <= WORLD.width, node.id);
    assert.ok(node.position.y >= 0 && node.position.y <= WORLD.height, node.id);
  }
});

test('bounds descendants incluent branches et excluent les étrangers évidents', () => {
  const ale = getDescendantBounds('fermentation-high', nodes, { padding: 0 });
  const pale = getDescendantBounds('family-pale-ale-ipa', nodes, { padding: 0 });
  const lager = byId.get('india-pale-lager').position;
  assert.ok(ale.minX <= byId.get('family-pale-ale-ipa').position.x);
  assert.ok(ale.maxX >= byId.get('west-coast-ipa').position.x);
  assert.ok(pale.maxX >= byId.get('brown-ipa').position.x);
  assert.ok(pale.minY <= byId.get('classic-english-pale-ale').position.y);
  assert.ok(lager.y > pale.maxY, 'India Pale Lager reste hors bounds Pale Ale & IPA');
});

test('tailles LOD des inconnues et labels structurels complets', () => {
  const west = byId.get('west-coast-ipa');
  assert.equal(getApparentNodeRadius(west, 'unknown', 0, 0.2), 6);
  assert.equal(getApparentNodeRadius(west, 'unknown', 1, 0.8), 18);
  assert.equal(getApparentNodeRadius(west, 'unknown', 2, 1.4), 40);
  assert.equal(getApparentNodeRadius(west, 'discovered', 2, 1.4), 52);
  assert.deepEqual(getStructureLabelText(byId.get('family-wheat-beer')), ['Bières', 'de blé']);
  assert.deepEqual(getStructureLabelText(byId.get('family-pale-lager')), ['Lagers', 'blondes']);
  assert.deepEqual(getStructureLabelText(byId.get('fermentation-mixed-wild')), ['Mixte /', 'sauvage']);
});
