import assert from "node:assert/strict";
import test from "node:test";
import { buildSensoryPayload } from "../../scripts/build-sensory-payload.mjs";
import { createSensoryMatcher } from "./sensory-matcher.js";
import { REAL_BEERS_251 } from "./sensory-251-stress-real-beers.js";
import { APPEARANCE_COLORS, CLARITY_LEVELS, FINISH_IDS, SENSORY_DESCRIPTOR_IDS, STRUCTURE_AXIS_IDS } from "./tasting-vocabulary.js";

const REAL_COUNT = 25_000;
const RANDOM_COUNT = 25_000;
const COLORS = APPEARANCE_COLORS.map(({ id }) => id);
const CLARITIES = CLARITY_LEVELS.map(({ id }) => id);

function mulberry32(seed) {
  return function random() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const pick = (random, values) => values[Math.floor(random() * values.length)];
const maybe = (random, probability) => random() < probability;
function adjacent(random, current, values) {
  const index = values.indexOf(current);
  const choices = [index - 1, index + 1].filter((i) => i >= 0 && i < values.length);
  return choices.length ? values[pick(random, choices)] : current;
}
function addNoiseDescriptor(map, random) {
  const candidates = SENSORY_DESCRIPTOR_IDS.filter((id) => !Object.hasOwn(map, id));
  if (candidates.length) map[pick(random, candidates)] = 1;
}
function noisyReal(source, random) {
  const copy = structuredClone(source);
  if (copy.appearance?.color) {
    if (maybe(random, 0.10)) copy.appearance.color = null;
    else if (maybe(random, 0.08)) copy.appearance.color = adjacent(random, copy.appearance.color, COLORS);
  }
  if (copy.appearance?.clarity) {
    if (maybe(random, 0.12)) copy.appearance.clarity = null;
    else if (maybe(random, 0.08)) copy.appearance.clarity = adjacent(random, copy.appearance.clarity, CLARITIES);
  }
  for (const mapName of ["nose", "palate"]) {
    for (const id of Object.keys(copy[mapName] || {})) {
      if (maybe(random, 0.18)) delete copy[mapName][id];
      else if (maybe(random, 0.28)) copy[mapName][id] = Math.min(3, Math.max(1, copy[mapName][id] + (maybe(random, 0.5) ? 1 : -1)));
    }
    if (maybe(random, 0.12)) addNoiseDescriptor(copy[mapName], random);
  }
  for (const id of Object.keys(copy.structure || {})) {
    if (maybe(random, 0.15)) delete copy.structure[id];
    else if (maybe(random, 0.32)) copy.structure[id] = Math.min(4, Math.max(0, copy.structure[id] + (maybe(random, 0.5) ? 1 : -1)));
  }
  copy.finish = (copy.finish || []).filter(() => !maybe(random, 0.20));
  if (maybe(random, 0.10)) {
    const finish = pick(random, FINISH_IDS);
    if (!copy.finish.includes(finish)) copy.finish.push(finish);
  }
  return copy;
}
function randomMap(random, probability = 0.10) {
  return Object.fromEntries(SENSORY_DESCRIPTOR_IDS.filter(() => maybe(random, probability)).map((id) => [id, 1 + Math.floor(random() * 3)]));
}
function randomProfile(random) {
  return {
    appearance: { color: maybe(random, 0.84) ? pick(random, COLORS) : undefined, clarity: maybe(random, 0.78) ? pick(random, CLARITIES) : undefined },
    nose: randomMap(random),
    palate: randomMap(random),
    structure: Object.fromEntries(STRUCTURE_AXIS_IDS.filter(() => maybe(random, 0.68)).map((id) => [id, Math.floor(random() * 5)])),
    finish: FINISH_IDS.filter(() => maybe(random, 0.12))
  };
}
function validate(result, label) {
  assert.ok(result.results.length <= 3, `${label}: plus de trois candidats`);
  result.results.forEach(({ score, role, collectionId }) => {
    assert.ok(Number.isFinite(score) && score >= 0 && score <= 100, `${label}: score invalide ${score}`);
    assert.notEqual(role, "overlay");
    assert.notEqual(role, "excluded");
    assert.notEqual(collectionId, "bizarre-et-insolite");
  });
  result.overlays.forEach(({ score, role, collectionId }) => {
    assert.ok(Number.isFinite(score) && score >= 0 && score <= 100, `${label}: score overlay invalide ${score}`);
    assert.equal(role, "overlay");
    assert.notEqual(collectionId, "bizarre-et-insolite");
  });
}
function inc(map, key) { map.set(key, (map.get(key) || 0) + 1); }
function top(map, limit = 15) { return [...map.entries()].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0]), "fr")).slice(0, limit); }

let contextPromise;
async function getContext() {
  if (!contextPromise) contextPromise = buildSensoryPayload().then((payload) => ({ payload, matcher: createSensoryMatcher({ profiles: payload.profiles, rarity: payload.rarity }) }));
  return contextPromise;
}

test("stress 251 — 25 000 variantes de bières réelles", async () => {
  const { payload, matcher } = await getContext();
  assert.equal(payload.totalCards, 251);
  assert.equal(payload.scorableCards, 223);
  const random = mulberry32(0x251BEE5);
  const rows = new Map(REAL_BEERS_251.map(({ label }) => [label, { samples: 0, top1: 0, top3: 0, tops: new Map() }]));
  let top1 = 0;
  let top3 = 0;
  for (let index = 0; index < REAL_COUNT; index += 1) {
    const beer = REAL_BEERS_251[index % REAL_BEERS_251.length];
    const result = matcher.match(noisyReal(beer.input, random), { limit: 3 });
    validate(result, `real-${index}`);
    const row = rows.get(beer.label);
    row.samples += 1;
    const rank = result.results.findIndex(({ cardId }) => cardId === beer.expected) + 1;
    if (rank === 1) { top1 += 1; row.top1 += 1; }
    if (rank >= 1 && rank <= 3) { top3 += 1; row.top3 += 1; }
    if (result.results[0]) inc(row.tops, result.results[0].cardId);
  }
  const summary = {
    samples: REAL_COUNT,
    totalProfiles: payload.totalCards,
    scorableProfiles: payload.scorableCards,
    top1Pct: Math.round(top1 / REAL_COUNT * 1000) / 10,
    top3Pct: Math.round(top3 / REAL_COUNT * 1000) / 10,
    rows: REAL_BEERS_251.map((beer) => { const row = rows.get(beer.label); return { beer: beer.label, expected: beer.expected, top1Pct: Math.round(row.top1 / row.samples * 1000) / 10, top3Pct: Math.round(row.top3 / row.samples * 1000) / 10, frequentTop: top(row.tops, 3) }; })
  };
  console.log("STRESS_251_REAL", JSON.stringify(summary));
  assert.ok(summary.top3Pct >= 75, `Top 3 réel trop faible : ${summary.top3Pct}%`);
});

test("stress 251 — 25 000 profils aléatoires", async () => {
  const { payload, matcher } = await getContext();
  const random = mulberry32(0x251C0FFE);
  const confidence = { ambiguous: 0, fragile: 0, plausible: 0, strong: 0 };
  const topStyles = new Map();
  let fallbackTop = 0;
  let totalTopScore = 0;
  for (let index = 0; index < RANDOM_COUNT; index += 1) {
    const input = randomProfile(random);
    const result = matcher.match(input, { limit: 3 });
    validate(result, `random-${index}`);
    confidence[result.confidence.id] += 1;
    const first = result.results[0];
    assert.ok(first);
    totalTopScore += first.score;
    inc(topStyles, first.cardId);
    if (first.role === "fallback") fallbackTop += 1;
    if (index % 250 === 0) assert.deepEqual(result, matcher.match(input, { limit: 3 }), `Non déterministe ${index}`);
  }
  const summary = {
    samples: RANDOM_COUNT,
    totalProfiles: payload.totalCards,
    scorableProfiles: payload.scorableCards,
    confidence,
    strongPct: Math.round(confidence.strong / RANDOM_COUNT * 1000) / 10,
    fallbackTopPct: Math.round(fallbackTop / RANDOM_COUNT * 1000) / 10,
    averageTopScore: Math.round(totalTopScore / RANDOM_COUNT * 10) / 10,
    frequentTopStyles: top(topStyles)
  };
  console.log("STRESS_251_RANDOM", JSON.stringify(summary));
  assert.ok(summary.strongPct < 8, `Confiance forte excessive : ${summary.strongPct}%`);
  assert.ok(summary.fallbackTopPct < 15, `Fallback trop dominant : ${summary.fallbackTopPct}%`);
});
