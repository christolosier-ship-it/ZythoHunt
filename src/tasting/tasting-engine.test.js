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
