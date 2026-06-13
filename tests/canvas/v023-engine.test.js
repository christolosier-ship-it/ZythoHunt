import test from 'node:test';
import assert from 'node:assert/strict';
import { createRenderScheduler } from '../../src/map/render-scheduler.js';
import { createSpriteCache, makeSpriteKey, MAX_SPRITE_CACHE_ENTRIES } from '../../src/canvas/sprite-cache.js';
import { getLod, getLodProfile } from '../../src/canvas/lod.js';
import { getQuestionFontSize, getNameFontSize } from '../../src/canvas/text-renderer.js';

test('scheduler fusionne plusieurs demandes dans une seule frame', () => {
  const frames = []; const payloads = [];
  const scheduler = createRenderScheduler(p => payloads.push(p), cb => frames.push(cb));
  scheduler.scheduleRender('pan', { static: true });
  scheduler.scheduleRender('wheel', { dynamic: true });
  scheduler.scheduleRender('hit', { hitLayer: true });
  assert.equal(frames.length, 1);
  frames[0]();
  assert.equal(payloads.length, 1);
  assert.deepEqual(payloads[0].reasons, ['pan', 'wheel', 'hit']);
  assert.equal(payloads[0].static, true);
  assert.equal(payloads[0].dynamic, true);
  assert.equal(payloads[0].hitLayer, true);
  assert.equal(scheduler.state.mergedRequests, 2);
});

test('cache sprites borné avec clé canonique indépendante des tailles intermédiaires', () => {
  const cache = createSpriteCache(o => ({ width: o.size, height: o.size }), { maxEntries: 3 });
  const a = makeSpriteKey({ type: 'capturable', family: 'ipa', state: 'unknown', size: 63, lod: 1, dpr: 1, themeVersion: 1 });
  const b = makeSpriteKey({ type: 'capturable', family: 'ipa', state: 'unknown', size: 64, lod: 1, dpr: 1, themeVersion: 1 });
  assert.equal(a, b);
  for (let i = 0; i < 10; i++) cache.get({ type: `t${i}`, family: 'ipa', state: 'unknown', size: 64 + i, lod: 1, dpr: 1, themeVersion: 1 });
  assert.equal(cache.size, 3);
  assert.equal(cache.stats().maxEntries, 3);
  assert.ok(cache.stats().evictions > 0);
  assert.equal(MAX_SPRITE_CACHE_ENTRIES, 128);
});

test('LOD différenciés et hystérésis', () => {
  assert.equal(getLod(0.49, 1), 0);
  assert.equal(getLod(0.54, 0), 0);
  assert.equal(getLod(0.59, 0), 1);
  assert.equal(getLod(1.3, 1), 1);
  assert.equal(getLod(1.33, 1), 2);
  assert.equal(getLodProfile(0).microbubbles, false);
  assert.equal(getLodProfile(2).microbubbles, true);
});

test('typographie adapte ? et noms au rayon apparent', () => {
  assert.equal(getQuestionFontSize(4), 10);
  assert.equal(getQuestionFontSize(100), 42);
  assert.ok(getNameFontSize(80, 2, 'West Coast IPA') > getNameFontSize(20, 0, 'West Coast IPA'));
});
