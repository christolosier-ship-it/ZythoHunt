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
  assert.equal(result.style?.family?.cardId, "family-test");
});

test("une famille peut être reconnue sans forcer un style lorsque ses descendants restent indifférenciables", () => {
  const result = controlledMatcher({ duplicateStyles: true }).match(citrusTasting);

  assert.equal(result.family?.cardId, "family-test");
  assert.equal(result.family?.resolved, true);
  assert.equal(result.styleConfidence.id, "plausible");
  assert.equal(result.style, null);
  assert.deepEqual(result.styleCandidates.slice(0, 2).map(({ cardId }) => cardId), ["style-a", "style-b"]);
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

  entries.forEach(({ score, branchScore }) => {
    const value = Number.isFinite(score) ? score : branchScore;
    assert.ok(Number.isFinite(value));
    assert.ok(value >= 0 && value <= 100);
  });
});

const REAL_BEER_PILOT_CASES = Object.freeze([
  {
    beer: "Sierra Nevada Pale Ale",
    targetFamily: "pale-ale",
    targetStyle: "american-pale-ale",
    references: [
      "https://www.bjcp.org/style/2021/18/18B/american-pale-ale/",
      "https://sierranevada.com/brews/pale-ale"
    ],
    profile: tasting({
      color: "ambre",
      clarity: "claire",
      nose: { agrumes: 3, "resine-pin": 2, "caramel-toffee": 1 },
      palate: { agrumes: 3, "resine-pin": 2, "caramel-toffee": 1 },
      structure: { amertume: 2, sucrosite: 1, corps: 2, carbonatation: 2, alcool: 1 }
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
    const result = matcher.match(observation, { limit: 3 });
    return {
      family: result.family?.cardId || null,
      top3: result.styleCandidates.slice(0, 3).map(({ cardId }) => cardId),
      scores: result.styleCandidates.slice(0, 3).map(({ cardId, score }) => `${cardId}:${score}`)
    };
  });
  const familyHits = rankings.filter(({ family }) => family === beerCase.targetFamily).length;
  const top1Hits = rankings.filter(({ top3 }) => top3[0] === beerCase.targetStyle).length;
  const top3Hits = rankings.filter(({ top3 }) => top3.includes(beerCase.targetStyle)).length;

  return {
    observations: observations.length,
    familyRate: familyHits / observations.length,
    top1Rate: top1Hits / observations.length,
    top3Rate: top3Hits / observations.length,
    rankings
  };
}

test("benchmark réel pilote : famille correcte et objectifs Top 1 / Top 3 par bière étalon", () => {
  REAL_BEER_PILOT_CASES.forEach((beerCase) => {
    const metrics = evaluateRealBeerCase(beerCase);
    const diagnostic = `${beerCase.beer} → attendu ${beerCase.targetFamily}/${beerCase.targetStyle}; `
      + `famille ${(metrics.familyRate * 100).toFixed(0)}%, Top1 ${(metrics.top1Rate * 100).toFixed(0)}%, `
      + `Top3 ${(metrics.top3Rate * 100).toFixed(0)}%; classements ${JSON.stringify(metrics.rankings)}`;

    assert.equal(metrics.familyRate, 1, diagnostic);
    assert.ok(metrics.top1Rate >= 0.8, diagnostic);
    assert.equal(metrics.top3Rate, 1, diagnostic);
  });
});
