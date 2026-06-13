import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { APP_VERSION, TAXONOMY_VERSION } from '../../src/config.js';
import { canonicalSpriteSize, createSpriteCache, MAX_PHYSICAL_SPRITE_PX, MAX_SPRITE_CACHE_ENTRIES, SOURCE_SPRITE_DIAMETERS } from '../../src/canvas/sprite-cache.js';
import { getApparentNodeRadius, getApparentStructureSize, STYLE_APPARENT_RADII } from '../../src/map/bubble-presentation.js';

const nodes = JSON.parse(await readFile(new URL('../../data/taxonomy-nodes.json', import.meta.url)));
const version = JSON.parse(await readFile(new URL('../../data/taxonomy-version.json', import.meta.url)));
const style = nodes.find(n => n.functionalType === 'capturable');
const structures = nodes.filter(n => n.functionalType === 'structure');

test('V0.2.5 conserve la taxonomie et corrige les rayons LOD finaux', () => {
  assert.equal(APP_VERSION, '0.2.5');
  assert.equal(TAXONOMY_VERSION, '0.1.2-prototype.3');
  assert.equal(version.taxonomyVersion, '0.1.2-prototype.3');
  assert.deepEqual(STYLE_APPARENT_RADII.unknown, [7, 15, 27]);
  assert.deepEqual(STYLE_APPARENT_RADII.discovered, [11, 25, 39]);
  assert.equal(getApparentNodeRadius(style, 'unknown', 0, 0.2), 7);
  assert.equal(getApparentNodeRadius(style, 'unknown', 1, 2), 15);
  assert.equal(getApparentNodeRadius(style, 'unknown', 2, 3), 27);
  assert.equal(getApparentNodeRadius(style, 'discovered', 2, 3), 39);
});

test('contrat sprite source vs cible : le cache ne décide pas la taille drawImage', () => {
  for (const radius of [7, 15, 27, 39]) {
    const targetDiameterPx = radius * 2;
    const sourceDiameterPx = canonicalSpriteSize(targetDiameterPx);
    assert.ok(SOURCE_SPRITE_DIAMETERS.includes(sourceDiameterPx));
    assert.equal(targetDiameterPx, radius * 2);
    assert.notEqual(sourceDiameterPx, targetDiameterPx, 'source et cible peuvent diverger sans changer drawImage');
  }
});

test('limites maximales structures, styles et sprites physiques', () => {
  for (const node of structures) for (const lod of [0, 1, 2]) {
    const size = getApparentStructureSize(node, lod);
    assert.ok(size.width <= 160, node.id);
    assert.ok(size.height <= 80, node.id);
  }
  for (const state of ['unknown', 'discovered', 'selected', 'reveal-pending']) for (const lod of [0, 1, 2]) {
    assert.ok(getApparentNodeRadius(style, state, lod, 4) * 2 <= 88);
  }
  for (const source of SOURCE_SPRITE_DIAMETERS) assert.ok(source * 2 <= MAX_PHYSICAL_SPRITE_PX);
});

test('cache borné à 64 entrées et dimensions sources stables entre zooms', () => {
  const created = [];
  const cache = createSpriteCache(o => { created.push(o.sourceDiameterPx); return { width: o.sourceDiameterPx * o.dpr, height: o.sourceDiameterPx * o.dpr }; });
  for (let zoom = 0; zoom < 20; zoom++) cache.get({ type: 'capturable', family: 'ipa', state: 'unknown', targetDiameterPx: 30, lod: 1, dpr: 2, themeVersion: 1 });
  assert.deepEqual([...new Set(created)], [48]);
  assert.equal(cache.stats().maxEntries, MAX_SPRITE_CACHE_ENTRIES);
  assert.equal(MAX_SPRITE_CACHE_ENTRIES, 64);
});
