import assert from "node:assert/strict";
import test from "node:test";
import { sensoryProfiles } from "../data/sensory-profiles.js";
import { createSensoryMatcher } from "./sensory-matcher.js";
import { computeDescriptorRarity, scoreSensoryProfile } from "./sensory-score.js";

const matcher = createSensoryMatcher({ profiles: sensoryProfiles });

function profile({ color, clarity, nose = {}, palate = {}, structure = {}, finish = [] } = {}) {
  return { appearance: { color, clarity }, nose, palate, structure, finish };
}

function isolatedCatalog() {
  return sensoryProfiles.map((entry) => ({ ...entry, role: "excluded" }));
}

function controlledCandidate(source, { cardId, role, marker = "agrumes", collectionId = "test-sensoriel" }) {
  return {
    ...source,
    collectionId,
    collectionName: "Test sensoriel",
    cardId,
    name: cardId,
    aliases: [],
    role,
    appearance: { colors: ["dore"], clarity: ["claire"] },
    nose: { [marker]: 3 },
    palate: { [marker]: 3 },
    structure: { amertume: [2, 3], sucrosite: [0, 1], corps: [1, 2] },
    finish: ["seche"],
    contradictions: [],
    keyMarkers: [marker]
  };
}

function controlledMatcher({ includeFallback = false, includeOverlay = false } = {}) {
  const catalog = isolatedCatalog();
  catalog[0] = controlledCandidate(catalog[0], { cardId: "primary-test", role: "primary" });
  if (includeFallback) catalog[1] = controlledCandidate(catalog[1], { cardId: "fallback-test", role: "fallback" });
  if (includeOverlay) catalog[2] = controlledCandidate(catalog[2], { cardId: "overlay-test", role: "overlay", marker: "boise-vanille" });
  return createSensoryMatcher({ profiles: catalog });
}

test("le matcher refuse explicitement un ancien sous-catalogue de prototype", () => {
  assert.throws(() => createSensoryMatcher({ profiles: sensoryProfiles.slice(0, 40) }), /251 profils/);
});

test("un profil vide reste explicitement ambigu", () => {
  const result = matcher.match({});
  assert.equal(result.confidence.id, "ambiguous");
  assert.deepEqual(result.results, []);
});

test("une seule couleur ne produit jamais une forte confiance", () => {
  const result = matcher.match(profile({ color: "dore" }));
  assert.notEqual(result.confidence.id, "strong");
});

test("une valeur inconnue est ignorée et n'est jamais transformée en zéro", () => {
  const candidate = sensoryProfiles.find(({ cardId }) => cardId === "west-coast-ipa");
  assert.ok(candidate);
  const result = scoreSensoryProfile(profile({ nose: { agrumes: 3 } }), candidate, { rarity: {} });
  assert.equal(result.groupScores.taste, null);
  assert.equal(result.groupScores.body, null);
});

test("la rareté des marqueurs est calculée sur le catalogue complet", () => {
  const rarity = computeDescriptorRarity(sensoryProfiles);
  assert.ok(Number.isFinite(rarity.cereale));
  assert.ok(Number.isFinite(rarity.banane));
  assert.ok(rarity.banane >= 1 && rarity.banane <= 2.6);
  assert.ok(rarity.cereale >= 1 && rarity.cereale <= 2.6);
});

test("le catalogue réel ne laisse entrer que primary et fallback dans les résultats principaux", () => {
  const result = matcher.match(profile({
    color: "dore",
    clarity: "claire",
    nose: { agrumes: 3, "resine-pin": 3 },
    palate: { agrumes: 3, "resine-pin": 3 },
    structure: { amertume: 4, corps: 1, sucrosite: 0 },
    finish: ["seche"]
  }), { limit: 50 });

  assert.ok(result.results.length > 0);
  assert.ok(result.results.every(({ collectionId, role }) => (
    collectionId !== "bizarre-et-insolite" && (role === "primary" || role === "fallback")
  )));
  assert.ok(result.overlays.every(({ role }) => role === "overlay"));
});

test("un primary bien déterminé garde la priorité sur un fallback identique", () => {
  const controlled = controlledMatcher({ includeFallback: true });
  const result = controlled.match(profile({
    color: "dore",
    clarity: "claire",
    nose: { agrumes: 3 },
    palate: { agrumes: 3 },
    structure: { amertume: 3, sucrosite: 0, corps: 1 },
    finish: ["seche"]
  }));
  assert.equal(result.results[0]?.cardId, "primary-test");
  assert.equal(result.results[0]?.role, "primary");
});

test("un overlay reste séparé du classement principal et exige son marqueur clé", () => {
  const controlled = controlledMatcher({ includeOverlay: true });
  const withMarker = controlled.match(profile({
    color: "dore",
    clarity: "claire",
    nose: { "boise-vanille": 3 },
    palate: { "boise-vanille": 3 },
    structure: { amertume: 3 },
    finish: ["seche"]
  }));
  assert.ok(withMarker.overlays.some(({ cardId }) => cardId === "overlay-test"));
  assert.ok(withMarker.results.every(({ cardId }) => cardId !== "overlay-test"));

  const withoutMarker = controlled.match(profile({
    color: "dore",
    clarity: "claire",
    nose: { agrumes: 3 },
    palate: { agrumes: 3 },
    structure: { amertume: 3 },
    finish: ["seche"]
  }));
  assert.deepEqual(withoutMarker.overlays, []);
});

test("Collection 10 et excluded ne peuvent jamais entrer dans les résultats principaux", () => {
  const catalog = isolatedCatalog();
  catalog[0] = controlledCandidate(catalog[0], {
    cardId: "C10-test",
    role: "primary",
    collectionId: "bizarre-et-insolite"
  });
  catalog[1] = controlledCandidate(catalog[1], { cardId: "excluded-test", role: "excluded" });
  catalog[2] = controlledCandidate(catalog[2], { cardId: "primary-valide", role: "primary" });

  const controlled = createSensoryMatcher({ profiles: catalog });
  const result = controlled.match(profile({
    color: "dore",
    clarity: "claire",
    nose: { agrumes: 3 },
    palate: { agrumes: 3 },
    structure: { amertume: 3, sucrosite: 0, corps: 1 },
    finish: ["seche"]
  }), { limit: 50 });

  assert.ok(result.results.length > 0);
  assert.ok(result.results.every(({ collectionId, role }) => collectionId !== "bizarre-et-insolite" && role !== "excluded"));
});

test("le matching est déterministe et indépendant de l'ordre des réponses", () => {
  const first = profile({
    color: "dore",
    clarity: "claire",
    nose: { agrumes: 3, "resine-pin": 3 },
    palate: { agrumes: 3, "resine-pin": 3 },
    structure: { amertume: 4, corps: 1 },
    finish: ["seche", "amere-persistante"]
  });
  const second = profile({
    color: "dore",
    clarity: "claire",
    nose: { "resine-pin": 3, agrumes: 3 },
    palate: { "resine-pin": 3, agrumes: 3 },
    structure: { corps: 1, amertume: 4 },
    finish: ["amere-persistante", "seche"]
  });
  assert.deepEqual(matcher.match(first), matcher.match(second));
});

test("aucun score ne produit NaN, Infinity ou une valeur hors bornes", () => {
  const result = matcher.match(profile({
    color: "noir",
    clarity: "opaque",
    nose: { banane: 3, "cafe-torrefie": 3, "lactique-yaourt": 3, "resine-pin": 3 },
    palate: { "clou-girofle": 3, "vinaigre-acetique": 3 },
    structure: { amertume: 4, sucrosite: 4, acidite: 4, corps: 4, carbonatation: 4, alcool: 4 }
  }), { limit: 50 });

  [...result.results, ...result.overlays].forEach(({ score }) => {
    assert.ok(Number.isFinite(score));
    assert.ok(score >= 0 && score <= 100);
  });
  assert.notEqual(result.confidence.id, "strong");
});

test("une West Coast IPA précise départage une India Pale Lager également compatible", () => {
  const result = matcher.match({
    appearance: { color: "dore", clarity: "claire" },
    nose: { agrumes: 3, "resine-pin": 3 },
    palate: { agrumes: 3, "resine-pin": 3 },
    structure: { amertume: 4, corps: 1, sucrosite: 0 },
    finish: ["seche"]
  }, { limit: 5 });

  const westCoast = result.results.find(({ cardId }) => cardId === "west-coast-ipa");
  const indiaPaleLager = result.results.find(({ cardId }) => cardId === "india-pale-lager");

  assert.ok(westCoast);
  assert.ok(indiaPaleLager);
  assert.equal(westCoast.score, indiaPaleLager.score);
  assert.equal(result.results[0].cardId, "west-coast-ipa");
});
