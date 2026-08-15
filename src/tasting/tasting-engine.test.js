import assert from "node:assert/strict";
import test from "node:test";
import { sensoryProfiles } from "../data/sensory-profiles.js";
import { createSensoryMatcher } from "./sensory-matcher.js";
import { createSensoryTaxonomy } from "./sensory-taxonomy.js";
import { computeDescriptorRarity, scoreSensoryProfile } from "./sensory-score.js";

const matcher = createSensoryMatcher({ profiles: sensoryProfiles });
const taxonomy = createSensoryTaxonomy(sensoryProfiles);

function tasting({ color, clarity, nose = {}, palate = {}, structure = {}, finish = [] } = {}) {
  return { appearance: { color, clarity }, nose, palate, structure, finish };
}

function isolatedCatalog() {
  return sensoryProfiles.map((entry) => ({
    ...entry,
    type: "A",
    parentPrincipalId: null
  }));
}

function controlledCandidate(source, {
  cardId,
  type,
  parentPrincipalId = null,
  marker = "agrumes",
  collectionId = "test-sensoriel"
}) {
  return {
    ...source,
    schemaVersion: 3,
    collectionId,
    collectionName: "Test sensoriel",
    cardId,
    name: cardId,
    aliases: [],
    type,
    parentPrincipalId,
    appearance: { colors: ["dore"], clarity: ["claire"] },
    nose: { [marker]: 3 },
    palate: { [marker]: 3 },
    structure: { amertume: [2, 3], sucrosite: [0, 1], corps: [1, 2] },
    finish: ["seche"],
    contradictions: [],
    keyMarkers: [marker]
  };
}

function controlledMatcher({ duplicateStyles = false, signature = false, autonomous = false } = {}) {
  const catalog = isolatedCatalog();
  catalog[0] = controlledCandidate(catalog[0], { cardId: "family-test", type: "F" });
  catalog[1] = controlledCandidate(catalog[1], {
    cardId: "style-a",
    type: "S",
    parentPrincipalId: autonomous ? null : "family-test"
  });
  catalog[2] = controlledCandidate(catalog[2], {
    cardId: "style-b",
    type: "S",
    parentPrincipalId: "family-test",
    marker: duplicateStyles ? "agrumes" : "cafe-torrefie"
  });
  if (signature) {
    catalog[3] = controlledCandidate(catalog[3], {
      cardId: "coffee-signature",
      type: "T",
      marker: "cafe-torrefie"
    });
  }
  return createSensoryMatcher({ profiles: catalog });
}

const citrusTasting = tasting({
  color: "dore",
  clarity: "claire",
  nose: { agrumes: 3 },
  palate: { agrumes: 3 },
  structure: { amertume: 3, sucrosite: 0, corps: 1 },
  finish: ["seche"]
});

test("le matcher refuse explicitement un ancien sous-catalogue de prototype", () => {
  assert.throws(() => createSensoryMatcher({ profiles: sensoryProfiles.slice(0, 40) }), /251 profils/);
});

test("un profil vide reste explicitement ambigu", () => {
  const result = matcher.match({});
  assert.equal(result.confidence.id, "ambiguous");
  assert.equal(result.family, null);
  assert.equal(result.style, null);
  assert.equal(result.styleMatch.id, "open");
  assert.deepEqual(result.signatures, []);
});

test("une valeur inconnue est ignorée et n'est jamais transformée en zéro", () => {
  const candidate = sensoryProfiles.find(({ cardId }) => cardId === "west-coast-ipa");
  assert.ok(candidate);
  const result = scoreSensoryProfile(tasting({ nose: { agrumes: 3 } }), candidate, { rarity: {} });
  assert.equal(result.groupScores.taste, null);
  assert.equal(result.groupScores.body, null);
});

test("la rareté est calculée sur les candidats taxonomiques fournis, sans rôle historique", () => {
  const rarity = computeDescriptorRarity(taxonomy.baseProfiles);
  assert.ok(Number.isFinite(rarity.cereale));
  assert.ok(Number.isFinite(rarity.banane));
  assert.ok(rarity.banane >= 1 && rarity.banane <= 2.6);
  assert.ok(rarity.cereale >= 1 && rarity.cereale <= 2.6);
});

test("le moteur identifie d'abord la famille puis un style suffisamment discriminé", () => {
  const result = controlledMatcher().match(citrusTasting);

  assert.equal(result.family?.cardId, "family-test");
  assert.equal(result.family?.resolved, true);
  assert.equal(result.familyConfidence.id, "strong");
  assert.equal(result.style?.cardId, "style-a");
  assert.equal(result.styleConfidence.id, "strong");
  assert.equal(result.styleMatch.id, "net");
  assert.equal(result.style?.family?.cardId, "family-test");
});

test("une famille peut être reconnue sans forcer un style lorsque ses descendants restent indifférenciables", () => {
  const result = controlledMatcher({ duplicateStyles: true }).match(citrusTasting);

  assert.equal(result.family?.cardId, "family-test");
  assert.equal(result.family?.resolved, true);
  assert.equal(result.styleConfidence.id, "plausible");
  assert.equal(result.styleMatch.id, "probable");
  assert.equal(result.style, null);
  assert.deepEqual(result.styleCandidates.slice(0, 2).map(({ cardId }) => cardId), ["style-a", "style-b"]);
});

test("une famille générique très large ne peut plus battre une branche portée par un meilleur style", () => {
  const catalog = isolatedCatalog();
  catalog[0] = controlledCandidate(catalog[0], { cardId: "family-a", type: "F", marker: "agrumes" });
  catalog[1] = controlledCandidate(catalog[1], { cardId: "style-a", type: "S", parentPrincipalId: "family-a", marker: "cafe-torrefie" });
  catalog[2] = controlledCandidate(catalog[2], { cardId: "family-b", type: "F", marker: "cafe-torrefie" });
  catalog[3] = controlledCandidate(catalog[3], { cardId: "style-b", type: "S", parentPrincipalId: "family-b", marker: "agrumes" });
  const controlled = createSensoryMatcher({ profiles: catalog });
  const result = controlled.match(citrusTasting, { limit: 5 });

  assert.equal(result.styleCandidates[0]?.cardId, "style-b");
  assert.equal(result.family?.cardId, "family-b");
});

test("le Top 5 des styles peut traverser plusieurs familles sans forcer un Top 1 artificiel", () => {
  const catalog = isolatedCatalog();
  catalog[0] = controlledCandidate(catalog[0], { cardId: "family-a", type: "F", marker: "agrumes" });
  catalog[1] = controlledCandidate(catalog[1], { cardId: "style-a", type: "S", parentPrincipalId: "family-a", marker: "agrumes" });
  catalog[2] = controlledCandidate(catalog[2], { cardId: "family-b", type: "F", marker: "agrumes" });
  catalog[3] = controlledCandidate(catalog[3], { cardId: "style-b", type: "S", parentPrincipalId: "family-b", marker: "agrumes" });
  const controlled = createSensoryMatcher({ profiles: catalog });
  const result = controlled.match(citrusTasting, { limit: 5 });

  assert.equal(result.style, null);
  assert.equal(result.styleMatch.id, "probable");
  assert.deepEqual(result.styleCandidates.slice(0, 2).map(({ cardId }) => cardId), ["style-a", "style-b"]);
  assert.deepEqual(result.styleCandidates.slice(0, 2).map(({ family }) => family?.cardId), ["family-a", "family-b"]);
  assert.ok(result.styleCandidates.every(({ compatibility, score }) => compatibility === score));
});

test("un style autonome peut être identifié sans famille artificielle", () => {
  const catalog = isolatedCatalog();
  catalog[0] = controlledCandidate(catalog[0], { cardId: "sahti-test", type: "S", parentPrincipalId: null });
  const controlled = createSensoryMatcher({ profiles: catalog });
  const result = controlled.match(citrusTasting);

  assert.equal(result.family, null);
  assert.equal(result.style?.cardId, "sahti-test");
  assert.equal(result.styleConfidence.id, "strong");
});

test("une catégorie transversale ressort comme signature et jamais comme famille ou style", () => {
  const controlled = controlledMatcher({ signature: true });
  const coffeeTasting = tasting({
    color: "dore",
    clarity: "claire",
    nose: { agrumes: 3, "cafe-torrefie": 3 },
    palate: { agrumes: 3, "cafe-torrefie": 3 },
    structure: { amertume: 3, sucrosite: 0, corps: 1 },
    finish: ["seche"]
  });
  const result = controlled.match(coffeeTasting);

  assert.ok(result.signatures.some(({ cardId }) => cardId === "coffee-signature"));
  assert.notEqual(result.family?.cardId, "coffee-signature");
  assert.notEqual(result.style?.cardId, "coffee-signature");
  assert.ok(result.styleCandidates.every(({ cardId }) => cardId !== "coffee-signature"));
});

test("les appellations A/R sont totalement absentes du matching automatique", () => {
  assert.equal(matcher.taxonomy.commercialProfiles.length, 30);
  assert.equal(matcher.taxonomy.automaticProfiles.length, 221);
  assert.ok(matcher.taxonomy.commercialProfiles.every(({ collectionId }) => collectionId === "appellations-commerciales"));

  const result = matcher.match(citrusTasting);
  const automaticIds = new Set([
    result.family?.cardId,
    result.style?.cardId,
    ...result.styleCandidates.map(({ cardId }) => cardId),
    ...result.alternatives.map(({ representative }) => representative?.cardId),
    ...result.signatures.map(({ cardId }) => cardId)
  ].filter(Boolean));

  matcher.taxonomy.commercialProfiles.forEach(({ cardId }) => assert.equal(automaticIds.has(cardId), false, cardId));
});

test("le résultat de style transporte toujours son chemin taxonomique", () => {
  const result = controlledMatcher().match(citrusTasting);
  assert.deepEqual(result.style?.path.map(({ cardId }) => cardId), ["family-test", "style-a"]);
});

test("le matching reste déterministe et indépendant de l'ordre des réponses", () => {
  const first = tasting({
    color: "dore",
    clarity: "claire",
    nose: { agrumes: 3, "resine-pin": 3 },
    palate: { agrumes: 3, "resine-pin": 3 },
    structure: { amertume: 4, corps: 1 },
    finish: ["seche", "amere-persistante"]
  });
  const second = tasting({
    color: "dore",
    clarity: "claire",
    nose: { "resine-pin": 3, agrumes: 3 },
    palate: { "resine-pin": 3, agrumes: 3 },
    structure: { corps: 1, amertume: 4 },
    finish: ["amere-persistante", "seche"]
  });
  assert.deepEqual(matcher.match(first), matcher.match(second));
});

test("aucun score automatique ne produit NaN, Infinity ou une valeur hors bornes", () => {
  const result = matcher.match(tasting({
    color: "noir",
    clarity: "opaque",
    nose: { banane: 3, "cafe-torrefie": 3, "lactique-yaourt": 3, "resine-pin": 3 },
    palate: { "clou-girofle": 3, "vinaigre-acetique": 3 },
    structure: { amertume: 4, sucrosite: 4, acidite: 4, corps: 4, carbonatation: 4, alcool: 4 }
  }));

  const entries = [
    result.family,
    result.style,
    ...result.styleCandidates,
    ...result.alternatives.map(({ representative }) => representative),
    ...result.signatures
  ].filter(Boolean);

  entries.forEach(({ score, branchScore, compatibility }) => {
    const value = Number.isFinite(score) ? score : branchScore;
    assert.ok(Number.isFinite(value));
    assert.ok(value >= 0 && value <= 100);
    if (Number.isFinite(compatibility)) assert.equal(compatibility, score);
  });
});

const REAL_BEER_PILOT_CASES = Object.freeze([
  {
    beer: "Sierra Nevada Pale Ale",
    targetFamily: "pale-ale",
    targetStyle: "american-pale-ale",
    references: [
      "https://styles.bjcp.org/bjcp-2021-beer/18/18b-american-pale-ale",
      "https://sierranevada.com/brews/pale-ale"
    ],
    profile: tasting({
      color: "ambre",
      clarity: "claire",
      nose: { agrumes: 3, "resine-pin": 3, "caramel-toffee": 1 },
      palate: { agrumes: 3, "resine-pin": 3, "caramel-toffee": 1 },
      structure: { amertume: 2, sucrosite: 1, corps: 2, carbonatation: 2 }
    })
  },
  {
    beer: "Russian River Blind Pig IPA",
    targetFamily: "ipa-india-pale-ale",
    targetStyle: "american-ipa",
    references: [
      "https://www.bjcp.org/style/2021/21/21A/american-ipa/",
      "https://www.russianriverbrewing.com/brew/blind-pig-ipa/"
    ],
    profile: tasting({
      color: "dore",
      clarity: "claire",
      nose: { agrumes: 3, "resine-pin": 3 },
      palate: { agrumes: 3, "resine-pin": 3 },
      structure: { amertume: 4, sucrosite: 0, corps: 2, carbonatation: 2, alcool: 2 },
      finish: ["seche", "amere-persistante"]
    })
  },
  {
    beer: "Russian River Simcoe 25",
    targetFamily: "ipa-india-pale-ale",
    targetStyle: "west-coast-ipa",
    references: [
      "https://www.bjcp.org/style/2021/21/21A/american-ipa/",
      "https://www.russianriverbrewing.com/brew/simcoe-25/"
    ],
    profile: tasting({
      color: "dore",
      clarity: "claire",
      nose: { agrumes: 3, "resine-pin": 3 },
      palate: { agrumes: 3, "resine-pin": 3 },
      structure: { amertume: 4, sucrosite: 0, corps: 1, carbonatation: 2, alcool: 2 },
      finish: ["seche", "amere-persistante"]
    })
  },
  {
    beer: "Russian River Pliny the Elder",
    targetFamily: "ipa-india-pale-ale",
    targetStyle: "double-imperial-ipa",
    references: [
      "https://www.bjcp.org/style/2021/22/22A/double-ipa/",
      "https://www.russianriverbrewing.com/brew/pliny-the-elder/"
    ],
    profile: tasting({
      color: "dore",
      clarity: "claire",
      nose: { agrumes: 3, "resine-pin": 3, "fruits-a-noyau": 2 },
      palate: { agrumes: 3, "resine-pin": 3, "fruits-a-noyau": 2 },
      structure: { amertume: 4, sucrosite: 1, corps: 2, carbonatation: 2, alcool: 3 },
      finish: ["seche", "amere-persistante", "chaleureuse"]
    })
  },
  {
    beer: "Tree House Julius",
    targetFamily: "ipa-india-pale-ale",
    targetStyle: "neipa-juicy-hazy-ipa",
    references: [
      "https://www.bjcp.org/style/2021/21/21C/",
      "https://treehousebrew.com/julius-ipa"
    ],
    profile: tasting({
      color: "ambre",
      clarity: "trouble",
      nose: { agrumes: 3, "fruits-tropicaux": 3, "fruits-a-noyau": 2 },
      palate: { agrumes: 3, "fruits-tropicaux": 3, "fruits-a-noyau": 2 },
      structure: { amertume: 1, sucrosite: 1, corps: 3, carbonatation: 2, alcool: 2 },
      finish: ["ronde"]
    })
  }
]);

function cloneTasting(profile) {
  return {
    appearance: { ...(profile.appearance || {}) },
    nose: { ...(profile.nose || {}) },
    palate: { ...(profile.palate || {}) },
    structure: { ...(profile.structure || {}) },
    finish: [...(profile.finish || [])]
  };
}

function realBeerObservations(profile) {
  const baseline = cloneTasting(profile);
  const withoutClarity = cloneTasting(profile);
  withoutClarity.appearance.clarity = undefined;

  const descriptors = [...new Set([...Object.keys(profile.nose || {}), ...Object.keys(profile.palate || {})])];
  const primaryDescriptor = descriptors[0];
  const secondaryDescriptor = descriptors.at(-1);

  const softerPrimary = cloneTasting(profile);
  if (primaryDescriptor) {
    if (Number.isFinite(softerPrimary.nose[primaryDescriptor])) {
      softerPrimary.nose[primaryDescriptor] = Math.max(1, softerPrimary.nose[primaryDescriptor] - 1);
    }
    if (Number.isFinite(softerPrimary.palate[primaryDescriptor])) {
      softerPrimary.palate[primaryDescriptor] = Math.max(1, softerPrimary.palate[primaryDescriptor] - 1);
    }
  }

  const withoutSecondary = cloneTasting(profile);
  if (secondaryDescriptor && secondaryDescriptor !== primaryDescriptor) {
    delete withoutSecondary.nose[secondaryDescriptor];
    delete withoutSecondary.palate[secondaryDescriptor];
  }

  const bodyJitter = cloneTasting(profile);
  if (Number.isFinite(bodyJitter.structure.corps)) {
    bodyJitter.structure.corps = Math.min(4, bodyJitter.structure.corps + 1);
  } else if (Number.isFinite(bodyJitter.structure.amertume)) {
    bodyJitter.structure.amertume = Math.max(0, bodyJitter.structure.amertume - 1);
  }

  return [baseline, withoutClarity, softerPrimary, withoutSecondary, bodyJitter];
}

function evaluateRealBeerCase(beerCase) {
  const observations = realBeerObservations(beerCase.profile);
  const rankings = observations.map((observation) => {
    const result = matcher.match(observation, { limit: 5 });
    const top5 = result.styleCandidates.slice(0, 5);
    return {
      family: result.family?.cardId || null,
      match: result.styleMatch.id,
      top3: top5.slice(0, 3).map(({ cardId }) => cardId),
      top5: top5.map(({ cardId }) => cardId),
      compatibilities: top5.map(({ cardId, compatibility }) => `${cardId}:${compatibility}`)
    };
  });
  const familyHits = rankings.filter(({ family }) => family === beerCase.targetFamily).length;
  const top1Hits = rankings.filter(({ top5 }) => top5[0] === beerCase.targetStyle).length;
  const top3Hits = rankings.filter(({ top3 }) => top3.includes(beerCase.targetStyle)).length;
  const top5Hits = rankings.filter(({ top5 }) => top5.includes(beerCase.targetStyle)).length;

  return {
    observations: observations.length,
    familyRate: familyHits / observations.length,
    top1Rate: top1Hits / observations.length,
    top3Rate: top3Hits / observations.length,
    top5Rate: top5Hits / observations.length,
    rankings
  };
}

test("benchmark réel pilote : les bières étalons restent toutes dans le Top 5", () => {
  const diagnostics = REAL_BEER_PILOT_CASES.map((beerCase) => {
    const metrics = evaluateRealBeerCase(beerCase);
    assert.equal(metrics.observations, 5, beerCase.beer);
    assert.ok(beerCase.references.length >= 2, beerCase.beer);
    assert.ok(metrics.top3Rate >= metrics.top1Rate, beerCase.beer);
    metrics.rankings.forEach(({ top3, top5, compatibilities }) => {
      assert.ok(top3.length <= 3, beerCase.beer);
      assert.ok(top5.length <= 5, beerCase.beer);
      assert.equal(top5.length, compatibilities.length, beerCase.beer);
    });
    return {
      beer: beerCase.beer,
      targetStyle: beerCase.targetStyle,
      top5Rate: metrics.top5Rate,
      rankings: metrics.rankings
    };
  });

  const failures = diagnostics.filter(({ top5Rate }) => top5Rate !== 1);
  assert.deepEqual(
    failures,
    [],
    failures.map(({ beer, targetStyle, top5Rate, rankings }) => (
      `${beer} → ${targetStyle}: Top5 ${(top5Rate * 100).toFixed(0)}%; ${JSON.stringify(rankings)}`
    )).join("\n\n")
  );
});

function midpoint(range) {
  if (!Array.isArray(range) || range.length !== 2) return undefined;
  const [min, max] = range;
  if (!Number.isFinite(min) || !Number.isFinite(max)) return undefined;
  return Math.round((min + max) / 2);
}

function benchmarkObservationFromProfile(profile) {
  return tasting({
    color: profile.appearance?.colors?.[Math.floor((profile.appearance.colors.length - 1) / 2)],
    clarity: profile.appearance?.clarity?.[0],
    nose: { ...(profile.nose || {}) },
    palate: { ...(profile.palate || {}) },
    structure: Object.fromEntries(
      Object.entries(profile.structure || {})
        .map(([axis, range]) => [axis, midpoint(range)])
        .filter(([, value]) => Number.isFinite(value))
    ),
    finish: [...(profile.finish || [])]
  });
}

function softenDescriptor(profile, descriptor) {
  [profile.nose, profile.palate].forEach((map) => {
    if (!Number.isFinite(map?.[descriptor])) return;
    map[descriptor] = Math.max(1, map[descriptor] - 1);
  });
}

function removeDescriptor(profile, descriptor) {
  if (!descriptor) return;
  delete profile.nose?.[descriptor];
  delete profile.palate?.[descriptor];
}

function benchmarkObservations(profile) {
  const baseline = benchmarkObservationFromProfile(profile);
  const descriptors = [...new Set([...Object.keys(baseline.nose), ...Object.keys(baseline.palate)])]
    .sort((a, b) => {
      const left = Math.max(baseline.nose[a] || 0, baseline.palate[a] || 0);
      const right = Math.max(baseline.nose[b] || 0, baseline.palate[b] || 0);
      return right - left || a.localeCompare(b, "fr");
    });
  const axes = Object.keys(baseline.structure);

  const withoutClarity = cloneTasting(baseline);
  withoutClarity.appearance.clarity = undefined;

  const withoutColor = cloneTasting(baseline);
  withoutColor.appearance.color = undefined;

  const softerPrimary = cloneTasting(baseline);
  softenDescriptor(softerPrimary, descriptors[0]);

  const withoutSecondary = cloneTasting(baseline);
  removeDescriptor(withoutSecondary, descriptors[1] || descriptors[0]);

  const withoutFinish = cloneTasting(baseline);
  withoutFinish.finish = [];

  const withoutNose = cloneTasting(baseline);
  withoutNose.nose = {};

  const withoutPalate = cloneTasting(baseline);
  withoutPalate.palate = {};

  const withoutStructureAxis = cloneTasting(baseline);
  if (axes.length) delete withoutStructureAxis.structure[axes.at(-1)];

  const bodyJitter = cloneTasting(baseline);
  const bodyRange = profile.structure?.corps;
  if (Number.isFinite(bodyJitter.structure.corps) && Array.isArray(bodyRange)) {
    const [min, max] = bodyRange;
    if (bodyJitter.structure.corps < max) bodyJitter.structure.corps += 1;
    else if (bodyJitter.structure.corps > min) bodyJitter.structure.corps -= 1;
  } else if (Number.isFinite(bodyJitter.structure.amertume)) {
    bodyJitter.structure.amertume = Math.max(0, bodyJitter.structure.amertume - 1);
  }

  return [
    baseline,
    withoutClarity,
    withoutColor,
    softerPrimary,
    withoutSecondary,
    withoutFinish,
    withoutNose,
    withoutPalate,
    withoutStructureAxis,
    bodyJitter
  ];
}

function rate(hits, total) {
  return total ? hits / total : 0;
}

function pct(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function hasSignatureKeyEvidence(observation, profile) {
  return (profile.keyMarkers || []).some((id) => (
    Number(observation.nose?.[id]) > 0 || Number(observation.palate?.[id]) > 0
  ));
}

function evaluateFullCatalogCalibration() {
  const styleProfiles = taxonomy.baseProfiles.filter((profile) => taxonomy.isStyle(profile));
  const signatureProfiles = taxonomy.signatureProfiles;
  const styleRows = [];
  const familyCounters = new Map();
  const top1Magnets = new Map();
  let totalObservations = 0;
  let totalFamilyHits = 0;
  let totalFamilyTop3Hits = 0;
  let totalTop1Hits = 0;
  let totalTop3Hits = 0;
  let totalTop5Hits = 0;

  styleProfiles.forEach((profile) => {
    const expectedFamily = taxonomy.nearestFamily(profile)?.cardId || null;
    const observations = benchmarkObservations(profile);
    let familyHits = 0;
    let familyTop3Hits = 0;
    let top1Hits = 0;
    let top3Hits = 0;
    let top5Hits = 0;
    const misses = [];

    observations.forEach((observation, index) => {
      const result = matcher.match(observation, { limit: 5 });
      const top5 = result.styleCandidates.slice(0, 5).map(({ cardId }) => cardId);
      const predictedFamily = result.family?.cardId || null;
      const familyTop3 = [
        predictedFamily,
        ...result.alternatives.map(({ family }) => family?.cardId || null)
      ].slice(0, 3);
      const top1 = top5[0] || null;
      totalObservations += 1;
      top1Magnets.set(top1, (top1Magnets.get(top1) || 0) + 1);

      const familyOk = predictedFamily === expectedFamily;
      const familyTop3Ok = expectedFamily ? familyTop3.includes(expectedFamily) : predictedFamily === null;
      const top1Ok = top1 === profile.cardId;
      const top3Ok = top5.slice(0, 3).includes(profile.cardId);
      const top5Ok = top5.includes(profile.cardId);
      if (familyOk) familyHits += 1;
      if (familyTop3Ok) familyTop3Hits += 1;
      if (top1Ok) top1Hits += 1;
      if (top3Ok) top3Hits += 1;
      if (top5Ok) top5Hits += 1;
      if (!top5Ok || !familyTop3Ok) {
        misses.push({ index, predictedFamily, familyTop3, top5, match: result.styleMatch.id });
      }
    });

    totalFamilyHits += familyHits;
    totalFamilyTop3Hits += familyTop3Hits;
    totalTop1Hits += top1Hits;
    totalTop3Hits += top3Hits;
    totalTop5Hits += top5Hits;

    const familyKey = expectedFamily || "__autonomous__";
    const familyCounter = familyCounters.get(familyKey) || { observations: 0, hits: 0, top3Hits: 0, styles: 0 };
    familyCounter.observations += observations.length;
    familyCounter.hits += familyHits;
    familyCounter.top3Hits += familyTop3Hits;
    familyCounter.styles += 1;
    familyCounters.set(familyKey, familyCounter);

    styleRows.push({
      cardId: profile.cardId,
      name: profile.name,
      family: expectedFamily,
      familyRate: rate(familyHits, observations.length),
      familyTop3Rate: rate(familyTop3Hits, observations.length),
      top1Rate: rate(top1Hits, observations.length),
      top3Rate: rate(top3Hits, observations.length),
      top5Rate: rate(top5Hits, observations.length),
      misses
    });
  });

  const signatureRows = signatureProfiles.map((profile) => {
    const observations = benchmarkObservations(profile).filter((observation) => hasSignatureKeyEvidence(observation, profile));
    let hits = 0;
    observations.forEach((observation) => {
      const result = matcher.match(observation, { limit: 5 });
      if (result.signatures.some(({ cardId }) => cardId === profile.cardId)) hits += 1;
    });
    return {
      cardId: profile.cardId,
      name: profile.name,
      observations: observations.length,
      recall: rate(hits, observations.length)
    };
  });

  return {
    styleProfiles,
    signatureProfiles,
    styleRows,
    signatureRows,
    totalObservations,
    familyRate: rate(totalFamilyHits, totalObservations),
    familyTop3Rate: rate(totalFamilyTop3Hits, totalObservations),
    top1Rate: rate(totalTop1Hits, totalObservations),
    top3Rate: rate(totalTop3Hits, totalObservations),
    top5Rate: rate(totalTop5Hits, totalObservations),
    familyRows: [...familyCounters.entries()]
      .map(([cardId, counter]) => ({
        cardId,
        ...counter,
        rate: rate(counter.hits, counter.observations),
        top3Rate: rate(counter.top3Hits, counter.observations)
      }))
      .sort((a, b) => a.rate - b.rate || a.cardId.localeCompare(b.cardId, "fr")),
    magnets: [...top1Magnets.entries()]
      .filter(([cardId]) => cardId)
      .map(([cardId, wins]) => ({ cardId, wins }))
      .sort((a, b) => b.wins - a.wins || a.cardId.localeCompare(b.cardId, "fr"))
  };
}

test("étalonnage exhaustif : les 175 styles restent dans le Top 5 sur 1 750 observations", () => {
  const calibration = evaluateFullCatalogCalibration();
  assert.equal(calibration.styleProfiles.length, 175);
  assert.equal(taxonomy.familyProfiles.length, 24);
  assert.equal(calibration.signatureProfiles.length, 22);
  assert.equal(calibration.totalObservations, 1750);

  const worstStyles = calibration.styleRows
    .filter(({ familyTop3Rate, top5Rate }) => familyTop3Rate < 1 || top5Rate < 1)
    .sort((a, b) => a.top5Rate - b.top5Rate || a.familyTop3Rate - b.familyTop3Rate || a.cardId.localeCompare(b.cardId, "fr"))
    .slice(0, 40)
    .map(({ cardId, familyRate, familyTop3Rate, top1Rate, top3Rate, top5Rate, misses }) => ({
      cardId,
      family: pct(familyRate),
      familyTop3: pct(familyTop3Rate),
      top1: pct(top1Rate),
      top3: pct(top3Rate),
      top5: pct(top5Rate),
      sample: misses.slice(0, 2)
    }));
  const weakFamilies = calibration.familyRows
    .filter(({ top3Rate }) => top3Rate < 1)
    .slice(0, 24)
    .map(({ cardId, rate: familyRate, top3Rate, styles }) => ({
      cardId,
      family: pct(familyRate),
      familyTop3: pct(top3Rate),
      styles
    }));
  const weakSignatures = calibration.signatureRows
    .filter(({ recall }) => recall < 1)
    .sort((a, b) => a.recall - b.recall || a.cardId.localeCompare(b.cardId, "fr"))
    .map(({ cardId, observations, recall }) => ({ cardId, observations, recall: pct(recall) }));

  console.log("[calibration-catalog]", JSON.stringify({
    observations: calibration.totalObservations,
    family: pct(calibration.familyRate),
    familyTop3: pct(calibration.familyTop3Rate),
    top1: pct(calibration.top1Rate),
    top3: pct(calibration.top3Rate),
    top5: pct(calibration.top5Rate),
    weakFamilies,
    weakSignatures,
    worstStyles,
    magnets: calibration.magnets.slice(0, 15)
  }));

  assert.ok(calibration.familyRate >= 0.97, `Famille principale ${pct(calibration.familyRate)}`);
  assert.ok(calibration.top3Rate >= 0.99, `Top 3 ${pct(calibration.top3Rate)}`);
  assert.equal(calibration.top5Rate, 1, `Top 5 ${pct(calibration.top5Rate)}`);
  assert.ok(calibration.familyTop3Rate >= calibration.familyRate);
  calibration.styleRows.forEach(({ familyTop3Rate, top1Rate, top3Rate, top5Rate, cardId }) => {
    assert.ok(top1Rate >= 0 && top1Rate <= 1, cardId);
    assert.ok(top3Rate >= top1Rate, cardId);
    assert.equal(top5Rate, 1, `${cardId}: Top 5 ${pct(top5Rate)}`);
    assert.ok(familyTop3Rate >= 0 && familyTop3Rate <= 1, cardId);
  });
  calibration.signatureRows.forEach(({ observations, recall, cardId }) => {
    assert.ok(observations > 0, cardId);
    assert.equal(recall, 1, `${cardId}: rappel conditionnel ${pct(recall)}`);
  });
});