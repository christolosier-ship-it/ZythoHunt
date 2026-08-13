import assert from "node:assert/strict";
import test from "node:test";
import { sensoryMatcher } from "./sensory-matcher.js";
import {
  APPEARANCE_COLORS,
  CLARITY_LEVELS,
  FINISH_IDS,
  SENSORY_DESCRIPTOR_IDS,
  STRUCTURE_AXIS_IDS
} from "./tasting-vocabulary.js";

function profile({ color, clarity, nose = {}, palate = {}, structure = {}, finish = [] } = {}) {
  return { appearance: { color, clarity }, nose, palate, structure, finish };
}

const REAL_WORLD_CASES = [
  {
    label: "BJCP 10A Weissbier",
    expected: "weissbier-hefeweizen",
    input: profile({
      color: "paille",
      clarity: "trouble",
      nose: { banane: 3, "clou-girofle": 3, cereale: 1, "pain-biscuit": 1 },
      palate: { banane: 2, "clou-girofle": 2, cereale: 1 },
      structure: { amertume: 0, sucrosite: 1, acidite: 0, corps: 2, carbonatation: 4, alcool: 2 },
      finish: ["vive"]
    })
  },
  {
    label: "BJCP 23G Gose",
    expected: "gose",
    input: profile({
      color: "paille",
      clarity: "trouble",
      nose: { "lactique-yaourt": 2, agrumes: 2, coriandre: 2, "salin-mineral": 2, "pain-biscuit": 1 },
      palate: { "lactique-yaourt": 3, agrumes: 2, coriandre: 2, "salin-mineral": 2, "pain-biscuit": 1 },
      structure: { amertume: 0, sucrosite: 0, acidite: 3, corps: 2, carbonatation: 4, alcool: 1 },
      finish: ["seche", "vive", "acide-persistante"]
    })
  },
  {
    label: "BJCP 25B Saison",
    expected: "saison",
    input: profile({
      color: "dore",
      clarity: "voilee",
      nose: { "poivre-epices-levure": 3, "herbace-epice": 2, "fruits-legers": 2, agrumes: 1, floral: 1 },
      palate: { "poivre-epices-levure": 3, "herbace-epice": 2, "fruits-legers": 1 },
      structure: { amertume: 2, sucrosite: 0, acidite: 0, corps: 1, carbonatation: 4, alcool: 2 },
      finish: ["seche", "vive"]
    })
  },
  {
    label: "BJCP 26B Belgian Dubbel",
    expected: "dubbel",
    input: profile({
      color: "cuivre",
      clarity: "claire",
      nose: { "fruits-noirs-murs": 3, "caramel-toffee": 2, "pain-biscuit": 2, toaste: 1, epices: 1 },
      palate: { "fruits-noirs-murs": 3, "caramel-toffee": 2, "pain-biscuit": 2, epices: 1 },
      structure: { amertume: 1, sucrosite: 2, acidite: 0, corps: 3, carbonatation: 3, alcool: 3 },
      finish: ["seche", "chaleureuse"]
    })
  },
  {
    label: "BJCP 3B Czech Premium Pale Lager",
    expected: "czech-premium-pale-lager",
    input: profile({
      color: "dore",
      clarity: "claire",
      nose: { "pain-biscuit": 2, cereale: 2, floral: 2, "herbace-epice": 2 },
      palate: { "pain-biscuit": 2, cereale: 2, floral: 1, "herbace-epice": 2 },
      structure: { amertume: 3, sucrosite: 1, acidite: 0, corps: 2, carbonatation: 2, alcool: 2 },
      finish: ["ronde"]
    })
  },
  {
    label: "BJCP 21A American IPA",
    expected: "american-ipa",
    input: profile({
      color: "ambre",
      clarity: "voilee",
      nose: { agrumes: 3, "fruits-tropicaux": 2, "resine-pin": 2, floral: 1, "fruits-a-noyau": 1 },
      palate: { agrumes: 3, "fruits-tropicaux": 2, "resine-pin": 2 },
      structure: { amertume: 4, sucrosite: 0, acidite: 0, corps: 2, carbonatation: 2, alcool: 3 },
      finish: ["seche", "amere-persistante"]
    })
  },
  {
    label: "BJCP 20C Imperial Stout",
    expected: "imperial-stout",
    input: profile({
      color: "noir",
      clarity: "opaque",
      nose: { "cafe-torrefie": 3, "chocolat-cacao": 3, "fruits-noirs-murs": 2, "caramel-toffee": 1, toaste: 1 },
      palate: { "cafe-torrefie": 3, "chocolat-cacao": 3, "fruits-noirs-murs": 2, "caramel-toffee": 1 },
      structure: { amertume: 3, sucrosite: 2, acidite: 0, corps: 4, carbonatation: 1, alcool: 4 },
      finish: ["ronde", "chaleureuse", "astringente"]
    })
  },
  {
    label: "BJCP 23B Flanders Red Ale",
    expected: "flanders-red-ale",
    input: profile({
      color: "cuivre",
      clarity: "claire",
      nose: { "fruits-rouges": 3, "vinaigre-acetique": 2, "fruits-noirs-murs": 2, "boise-vanille": 1, "caramel-toffee": 1 },
      palate: { "fruits-rouges": 3, "vinaigre-acetique": 2, "fruits-noirs-murs": 2, "boise-vanille": 1 },
      structure: { amertume: 0, sucrosite: 1, acidite: 4, corps: 2, carbonatation: 2, alcool: 2 },
      finish: ["acide-persistante", "astringente"]
    })
  },
  {
    label: "BJCP 23E Gueuze",
    expected: "gueuze",
    input: profile({
      color: "dore",
      clarity: "claire",
      nose: { "funky-cuir-ferme": 3, "lactique-yaourt": 2, agrumes: 2, "boise-vanille": 1, "pain-biscuit": 1 },
      palate: { "funky-cuir-ferme": 3, "lactique-yaourt": 2, agrumes: 2, "boise-vanille": 1 },
      structure: { amertume: 0, sucrosite: 0, acidite: 3, corps: 1, carbonatation: 4, alcool: 2 },
      finish: ["seche", "vive", "acide-persistante"]
    })
  }
];

function mulberry32(seed) {
  return function random() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function pick(random, values) {
  return values[Math.floor(random() * values.length)];
}

function maybe(random, probability = 0.5) {
  return random() < probability;
}

function randomDescriptorMap(random, probability = 0.12) {
  const result = {};
  SENSORY_DESCRIPTOR_IDS.forEach((id) => {
    if (maybe(random, probability)) result[id] = 1 + Math.floor(random() * 3);
  });
  return result;
}

function randomStructure(random, probability = 0.72) {
  const result = {};
  STRUCTURE_AXIS_IDS.forEach((id) => {
    if (maybe(random, probability)) result[id] = Math.floor(random() * 5);
  });
  return result;
}

function randomFinish(random) {
  return FINISH_IDS.filter(() => maybe(random, 0.14));
}

function randomProfile(random) {
  return profile({
    color: maybe(random, 0.88) ? pick(random, APPEARANCE_COLORS).id : undefined,
    clarity: maybe(random, 0.82) ? pick(random, CLARITY_LEVELS).id : undefined,
    nose: randomDescriptorMap(random),
    palate: randomDescriptorMap(random),
    structure: randomStructure(random),
    finish: randomFinish(random)
  });
}

function noisyCopy(source, random) {
  const copy = structuredClone(source);
  if (copy.appearance?.color && maybe(random, 0.18)) copy.appearance.color = null;
  if (copy.appearance?.clarity && maybe(random, 0.18)) copy.appearance.clarity = null;

  for (const mapName of ["nose", "palate"]) {
    for (const id of Object.keys(copy[mapName] || {})) {
      if (maybe(random, 0.28)) {
        delete copy[mapName][id];
        continue;
      }
      if (maybe(random, 0.3)) {
        const delta = maybe(random) ? 1 : -1;
        copy[mapName][id] = Math.min(3, Math.max(1, copy[mapName][id] + delta));
      }
    }
  }

  for (const id of Object.keys(copy.structure || {})) {
    if (maybe(random, 0.24)) {
      delete copy.structure[id];
      continue;
    }
    if (maybe(random, 0.35)) {
      const delta = maybe(random) ? 1 : -1;
      copy.structure[id] = Math.min(4, Math.max(0, copy.structure[id] + delta));
    }
  }
  copy.finish = (copy.finish || []).filter(() => !maybe(random, 0.25));
  return copy;
}

test("sonde terrain : les neuf profils BJCP arrivent dans le top 3", () => {
  const rows = REAL_WORLD_CASES.map(({ label, expected, input }) => {
    const result = sensoryMatcher.match(input, { limit: 3 });
    const rank = result.results.findIndex(({ cardId }) => cardId === expected) + 1;
    return {
      label,
      expected,
      rank,
      confidence: result.confidence.id,
      evidence: result.evidence,
      top3: result.results.map(({ cardId, score }) => `${cardId}:${score}`)
    };
  });
  console.log("FIELD_PROBE_REAL_WORLD", JSON.stringify(rows));
  rows.forEach((row) => assert.ok(row.rank >= 1 && row.rank <= 3, `${row.label}: ${row.expected} absent du top 3 (${row.top3.join(", ")})`));
});

test("sonde terrain : les profils BJCP restent raisonnablement robustes avec des réponses bruitées", () => {
  const random = mulberry32(0xBEEFBABE);
  const perCase = 80;
  const rows = REAL_WORLD_CASES.map(({ label, expected, input }) => {
    let top1 = 0;
    let top3 = 0;
    for (let index = 0; index < perCase; index += 1) {
      const result = sensoryMatcher.match(noisyCopy(input, random), { limit: 3 });
      if (result.results[0]?.cardId === expected) top1 += 1;
      if (result.results.some(({ cardId }) => cardId === expected)) top3 += 1;
    }
    return {
      label,
      expected,
      top1Pct: Math.round(top1 / perCase * 1000) / 10,
      top3Pct: Math.round(top3 / perCase * 1000) / 10
    };
  });
  console.log("FIELD_PROBE_NOISY", JSON.stringify(rows));
  const globalTop3 = rows.reduce((total, row) => total + row.top3Pct, 0) / rows.length;
  assert.ok(globalTop3 >= 70, `Robustesse top 3 globale trop faible : ${globalTop3.toFixed(1)} %`);
});

test("sonde terrain : 5 000 profils aléatoires ne cassent aucun invariant", () => {
  const random = mulberry32(0xC0FFEE);
  const confidence = { ambiguous: 0, fragile: 0, plausible: 0, strong: 0 };
  const topStyles = new Map();
  const overlayCounts = new Map();
  let totalTopScore = 0;
  let ranked = 0;
  let fallbackTop = 0;

  for (let index = 0; index < 5000; index += 1) {
    const input = randomProfile(random);
    const first = sensoryMatcher.match(input, { limit: 3 });
    const second = sensoryMatcher.match(input, { limit: 3 });
    assert.deepEqual(first, second, `Résultat non déterministe au profil aléatoire ${index}`);
    assert.ok(Object.hasOwn(confidence, first.confidence.id), `Confiance inconnue : ${first.confidence.id}`);
    confidence[first.confidence.id] += 1;
    assert.ok(first.results.length <= 3);
    first.results.forEach(({ score, role, collectionId }) => {
      assert.ok(Number.isFinite(score) && score >= 0 && score <= 100, `Score invalide : ${score}`);
      assert.notEqual(role, "overlay");
      assert.notEqual(role, "excluded");
      assert.notEqual(collectionId, "bizarre-et-insolite");
    });
    first.overlays.forEach(({ score, role, collectionId, cardId }) => {
      assert.ok(Number.isFinite(score) && score >= 0 && score <= 100, `Score overlay invalide : ${score}`);
      assert.equal(role, "overlay");
      assert.notEqual(collectionId, "bizarre-et-insolite");
      overlayCounts.set(cardId, (overlayCounts.get(cardId) || 0) + 1);
    });
    if (first.results[0]) {
      const top = first.results[0];
      ranked += 1;
      totalTopScore += top.score;
      topStyles.set(top.cardId, (topStyles.get(top.cardId) || 0) + 1);
      if (top.role === "fallback") fallbackTop += 1;
    }
  }

  const summary = {
    samples: 5000,
    confidence,
    averageTopScore: ranked ? Math.round(totalTopScore / ranked * 10) / 10 : 0,
    fallbackTop,
    overlayCounts: Object.fromEntries([...overlayCounts.entries()].sort((a, b) => b[1] - a[1])),
    mostFrequentTopStyles: [...topStyles.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12)
  };
  console.log("FIELD_PROBE_RANDOM", JSON.stringify(summary));
  assert.equal(ranked, 5000);
  assert.ok(fallbackTop < 1000, `Le fallback prend trop souvent la tête : ${fallbackTop}/5000`);
});
