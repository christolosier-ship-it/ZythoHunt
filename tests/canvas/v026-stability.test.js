import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { APP_VERSION, TAXONOMY_VERSION } from '../../src/config.js';
import { computeEffectiveDpr } from '../../src/canvas/canvas-resize-manager.js';
import { getApparentNodeRadius, getApparentStructureSize, getQuestionSize, clamp } from '../../src/map/bubble-presentation.js';
import { getStyleNeighborhood } from '../../src/canvas/canvas-map-renderer.js';

const nodes = JSON.parse(await readFile(new URL('../../data/taxonomy-nodes.json', import.meta.url)));
const style = nodes.find(n => n.functionalType === 'capturable');
const byId = new Map(nodes.map(n => [n.id, n]));

test('V0.2.6 conserve la taxonomie et applique les échelles progressives', () => {
  assert.equal(APP_VERSION, '0.2.6');
  assert.equal(TAXONOMY_VERSION, '0.1.2-prototype.3');
  assert.equal(clamp(12, 10, 20), 12);
  assert.deepEqual([0.10, 0.25, 0.40, 0.60, 0.80, 1.50].map(s => getApparentNodeRadius(style, 'unknown', 0, s)), [10, 10, 12, 18, 24, 24]);
  assert.deepEqual([0.10, 0.40, 0.60, 1.00].map(s => getApparentNodeRadius(style, 'discovered', 0, s)), [15, 16.8, 25.2, 36]);
  assert.equal(getApparentNodeRadius(style, 'selected', 2, 2), 40);
  assert.ok(Math.abs(getApparentNodeRadius(style, 'unknown', 0, 0.49) - getApparentNodeRadius(style, 'unknown', 2, 0.51)) < 1);
  assert.equal(getQuestionSize(10), 9);
  assert.equal(getQuestionSize(24), 20);
});

test('structures progressives bornées', () => {
  for (const node of nodes.filter(n => n.functionalType === 'structure')) for (const scale of [0.1, 0.5, 1, 2]) {
    const size = getApparentStructureSize(node, 0, scale);
    assert.ok(size.width <= 170, node.id);
    assert.ok(size.height <= 94, node.id);
  }
  assert.deepEqual(getApparentStructureSize(byId.get('beer'), 0, 1), { width: 150, height: 94 });
  assert.deepEqual(getApparentStructureSize(byId.get('fermentation-high'), 0, 0.1), { width: 112, height: 50 });
});

test('voisinage local de révélation borné et contextualisé', () => {
  for (const id of ['ipa', 'west-coast-ipa', 'witbier', 'india-pale-lager']) {
    const ids = getStyleNeighborhood(id, nodes).map(n => n.id);
    assert.ok(ids.length <= 10, id);
    assert.ok(ids.includes(id), id);
    assert.ok(ids.includes(byId.get(id).parentId), id);
    assert.ok(ids.some(nid => byId.get(nid)?.nodeType === 'family'), id);
  }
});

test('DPR adaptatif respecte le budget de pixels', () => {
  const phone = computeEffectiveDpr(390, 844, 3);
  assert.equal(phone, 2);
  const ipad = computeEffectiveDpr(1366, 1024, 2);
  assert.ok(ipad >= 1.3 && ipad <= 1.5);
  const pixels = Math.round(1366 * ipad) * Math.round(1024 * ipad);
  assert.ok(pixels <= 2_500_000 + 4000);
});

test('CSS normal sans backdrop-filter', async () => {
  const css = `${await readFile(new URL('../../styles/layout.css', import.meta.url), 'utf8')}\n${await readFile(new URL('../../styles/map.css', import.meta.url), 'utf8')}`;
  assert.equal(css.includes('backdrop-filter'), false);
  assert.equal(css.includes('-webkit-backdrop-filter'), false);
});
