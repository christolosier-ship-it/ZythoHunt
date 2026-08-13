import assert from "node:assert/strict";
import test from "node:test";
import { sensoryProfiles } from "../data/sensory/sensory-profiles.js";
import { SENSORY_ROLE_COUNTS } from "../data/sensory/sensory-role-map.js";
import { sensoryMatcher } from "./sensory-matcher.js";
import { REAL_BEERS } from "./sensory-stress-real-beers.js";
import {
  APPEARANCE_COLORS,
  CLARITY_LEVELS,
  FINISH_IDS,
  SENSORY_DESCRIPTOR_IDS,
  STRUCTURE_AXIS_IDS
} from "./tasting-vocabulary.js";

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
  const candidates = [index - 1, index + 1].filter((value) => value >= 0 && value < values.length);
  return candidates.length ? values[pick(random, candidates)] : current;
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
      if (maybe(random, 0.18)) {
        delete copy[mapName][id];
      } else if (maybe(random, 0.28)) {
        copy[mapName][id] = Math.min(3, Math.max(1, copy[mapName][id] + (maybe(random, 0.5) ? 1 : -1)));
      }
    }
    if (maybe(random, 0.12)) addNoiseDescriptor(copy[mapName], random);
  }
  for (const id of Object.keys(copy.structure || {})) {
    if (maybe(random, 0.15)) {
      delete copy.structure[id];
    } else if (maybe(random, 0.32)) {
      copy.structure[id] = Math.min(4, Math.max(0, copy.structure[id] + (maybe(random, 0.5) ? 1 : -1)));
    }
  }
  copy.finish = (copy.finish || []).filter(() => !maybe(random, 0.20));
  if (maybe(random, 0.10)) {
    const finish = pick(random, FINISH_IDS);
    if (!copy.finish.includes(finish)) copy.finish.push(finish);
  }
  return copy;
}

function randomMap(random, probability = 0.10) {
  return Object.fromEntries(SENSORY_DESCRIPTOR_IDS
    .filter(() => maybe(random, probability))
    .map((id) => [id, 1 + Math.floor(random() * 3)]));
}

function randomStructure(random) {
  return Object.fromEntries(STRUCTURE_AXIS_IDS
    .filter(() => maybe(random, 0.68))
    .map((id) => [id, Math.floor(random() * 5)]));
}

function randomProfile(random) {
  return {
    appearance: {
      color: maybe(random, 0.84) ? pick(random, COLORS) : undefined,
      clarity: maybe(random, 0.78) ? pick(random, CLARITIES) : undefined
    },
    nose: randomMap(random),
    palate: randomMap(random),
    structure: randomStructure(random),
    finish: FINISH_IDS.filter(() => maybe(random, 0.12))
  };
}

function validate(result, label) {
  assert.ok(result.results.length <= 3, `${label}: plus de trois candidats.`);
  result.results.forEach(({ score, role, collectionId }) => {
    assert.ok(Number.isFinite(score) && score >= 0 && score <= 100, `${label}: score principal invalide ${score}.`);
    assert.notEqual(role, "overlay", `${label}: overlay dans les résultats principaux.`);
    assert.notEqual(role, "excluded", `${label}: excluded dans les résultats principaux.`);
    assert.notEqual(collectionId, "bizarre-et-insolite", `${label}: Collection 10 dans les résultats.`);
  });
  result.overlays.forEach(({ score, role, collectionId }) => {
    assert.ok(Number.isFinite(score) && score >= 0 && score <= 100, `${label}: score overlay invalide ${score}.`);
    assert.equal(role, "overlay", `${label}: résultat secondaire non overlay.`);
    assert.notEqual(collectionId, "bizarre-et-insolite", `${label}: Collection 10 dans les overlays.`);
  });
}

function inc(map, key) {
  map.set(key, (map.get(key) || 0) + 1);
}

function top(map, limit = 12) {
  return [...map.entries()].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0]), "fr")).slice(0, limit);
}

test("50k stress — 25 000 variantes dérivées de bières commerciales réelles", () => {
  const started = Date.now();
  const random = mulberry32(0x20260813);
  const stats = new Map(REAL_BEERS.map(({ label }) => [label, {
    samples: 0, top1: 0, top3: 0, strong: 0, plausible: 0, fragile: 0, ambiguous: 0, tops: new Map()
  }]));
  let supportedSamples = 0;
  let supportedTop1 = 0;
  let supportedTop3 = 0;
  let gapSamples = 0;
  let gapStrong = 0;

  for (let index = 0; index < REAL_COUNT; index += 1) {
    const beer = REAL_BEERS[index % REAL_BEERS.length];
    const result = sensoryMatcher.match(noisyReal(beer.input, random), { limit: 3 });
    validate(result, `real-${index}-${beer.label}`);
    const row = stats.get(beer.label);
    row.samples += 1;
    row[result.confidence.id] += 1;
    if (result.results[0]) inc(row.tops, result.results[0].cardId);

    if (beer.expected) {
      supportedSamples += 1;
      const rank = result.results.findIndex(({ cardId }) => cardId === beer.expected) + 1;
      if (rank === 1) { supportedTop1 += 1; row.top1 += 1; }
      if (rank >= 1 && rank <= 3) { supportedTop3 += 1; row.top3 += 1; }
    } else {
      gapSamples += 1;
      if (result.confidence.id === "strong") gapStrong += 1;
    }
  }

  const rows = REAL_BEERS.map((beer) => {
    const row = stats.get(beer.label);
    return {
      beer: beer.label,
      target: beer.expected || `coverage-gap:${beer.coverageGap}`,
      samples: row.samples,
      top1Pct: beer.expected ? Math.round(row.top1 / row.samples * 1000) / 10 : null,
      top3Pct: beer.expected ? Math.round(row.top3 / row.samples * 1000) / 10 : null,
      confidence: { strong: row.strong, plausible: row.plausible, fragile: row.fragile, ambiguous: row.ambiguous },
      frequentTop: top(row.tops, 3)
    };
  });
  const summary = {
    samples: REAL_COUNT,
    beers: REAL_BEERS.length,
    detailedProfilesAvailable: sensoryProfiles.length,
    supportedSamples,
    supportedTop1Pct: Math.round(supportedTop1 / supportedSamples * 1000) / 10,
    supportedTop3Pct: Math.round(supportedTop3 / supportedSamples * 1000) / 10,
    coverageGapSamples: gapSamples,
    coverageGapStrongPct: Math.round(gapStrong / gapSamples * 1000) / 10,
    elapsedMs: Date.now() - started,
    rows
  };
  console.log("STRESS_50K_REAL", JSON.stringify(summary));
  assert.ok(summary.supportedTop1Pct >= 65, `Top 1 réel trop faible: ${summary.supportedTop1Pct}%`);
  assert.ok(summary.supportedTop3Pct >= 82, `Top 3 réel trop faible: ${summary.supportedTop3Pct}%`);
});

test("50k stress — 25 000 profils aléatoires", () => {
  const started = Date.now();
  const random = mulberry32(0x50C0FFEE);
  const confidence = { ambiguous: 0, fragile: 0, plausible: 0, strong: 0 };
  const topStyles = new Map();
  const overlays = new Map();
  let ranked = 0;
  let fallbackTop = 0;
  let totalTopScore = 0;

  for (let index = 0; index < RANDOM_COUNT; index += 1) {
    const input = randomProfile(random);
    const result = sensoryMatcher.match(input, { limit: 3 });
    validate(result, `random-${index}`);
    confidence[result.confidence.id] += 1;
    if (result.results[0]) {
      ranked += 1;
      totalTopScore += result.results[0].score;
      inc(topStyles, result.results[0].cardId);
      if (result.results[0].role === "fallback") fallbackTop += 1;
    }
    result.overlays.forEach(({ cardId }) => inc(overlays, cardId));
    if (index % 100 === 0) assert.deepEqual(result, sensoryMatcher.match(input, { limit: 3 }), `Non déterministe: ${index}`);
  }

  const strongPct = Math.round(confidence.strong / RANDOM_COUNT * 1000) / 10;
  const fallbackTopPct = Math.round(fallbackTop / RANDOM_COUNT * 1000) / 10;
  const summary = {
    samples: RANDOM_COUNT,
    detailedProfilesAvailable: sensoryProfiles.length,
    mappedRoles: SENSORY_ROLE_COUNTS,
    confidence,
    strongPct,
    averageTopScore: Math.round(totalTopScore / ranked * 10) / 10,
    fallbackTop,
    fallbackTopPct,
    overlayCounts: Object.fromEntries(top(overlays, 20)),
    frequentTopStyles: top(topStyles, 15),
    elapsedMs: Date.now() - started
  };
  console.log("STRESS_50K_RANDOM", JSON.stringify(summary));
  assert.equal(ranked, RANDOM_COUNT);
  assert.equal(Object.values(SENSORY_ROLE_COUNTS).reduce((sum, value) => sum + value, 0), 251);
  assert.ok(strongPct < 5, `Confiance forte excessive sur hasard: ${strongPct}%`);
  assert.ok(fallbackTopPct < 10, `Fallback trop dominant sur hasard: ${fallbackTopPct}%`);
});
