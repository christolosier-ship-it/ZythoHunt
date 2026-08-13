import assert from "node:assert/strict";
import test from "node:test";
import { sensoryProfiles } from "../data/sensory/sensory-profiles.js";
import { createSensoryMatcher } from "./sensory-matcher.js";
import { computeDescriptorRarity, scoreSensoryProfile } from "./sensory-score.js";

const matcher = createSensoryMatcher();

function profile({ color, clarity, nose = {}, palate = {}, structure = {}, finish = [] } = {}) {
  return { appearance: { color, clarity }, nose, palate, structure, finish };
}

function assertTop(expectedCardId, input, message = expectedCardId) {
  const result = matcher.match(input);
  assert.equal(result.results[0]?.cardId, expectedCardId, `${message}\n${JSON.stringify(result.results.slice(0, 3), null, 2)}`);
  return result;
}

const obviousCases = [
  ["weissbier-hefeweizen", profile({ color: "paille", clarity: "trouble", nose: { banane: 3, "clou-girofle": 3 }, palate: { banane: 3, "clou-girofle": 3 }, structure: { carbonatation: 4 } })],
  ["gose", profile({ color: "paille", clarity: "voilee", nose: { "lactique-yaourt": 3, "salin-mineral": 2, coriandre: 2 }, palate: { "lactique-yaourt": 3, "salin-mineral": 2, coriandre: 2 }, structure: { acidite: 3 } })],
  ["imperial-stout", profile({ color: "noir", clarity: "opaque", nose: { "cafe-torrefie": 3, "chocolat-cacao": 3, "fruits-noirs-murs": 2 }, palate: { "cafe-torrefie": 3, "chocolat-cacao": 3, "fruits-noirs-murs": 2 }, structure: { corps: 4, alcool: 4 } })],
  ["west-coast-ipa", profile({ color: "dore", clarity: "claire", nose: { agrumes: 3, "resine-pin": 3 }, palate: { agrumes: 3, "resine-pin": 3 }, structure: { amertume: 4, corps: 1, sucrosite: 0 }, finish: ["seche"] })],
  ["neipa-juicy-hazy-ipa", profile({ color: "paille", clarity: "trouble", nose: { "fruits-tropicaux": 3, agrumes: 3, "fruits-a-noyau": 3 }, palate: { "fruits-tropicaux": 3, agrumes: 3, "fruits-a-noyau": 3 }, structure: { amertume: 1, corps: 3 } })],
  ["dubbel", profile({ color: "brun", clarity: "claire", nose: { "fruits-noirs-murs": 3, "caramel-toffee": 2, "pain-biscuit": 2 }, palate: { "fruits-noirs-murs": 3, "caramel-toffee": 2, "pain-biscuit": 2 }, structure: { carbonatation: 4, alcool: 3 } })],
  ["berliner-weisse", profile({ color: "paille", clarity: "voilee", nose: { "lactique-yaourt": 3, agrumes: 3 }, palate: { "lactique-yaourt": 3, agrumes: 3 }, structure: { acidite: 4, corps: 1, carbonatation: 4 } })],
  ["gueuze", profile({ color: "dore", clarity: "voilee", nose: { "funky-cuir-ferme": 3, "lactique-yaourt": 3 }, palate: { "funky-cuir-ferme": 3, "lactique-yaourt": 3 }, structure: { sucrosite: 0, carbonatation: 4 }, finish: ["seche"] })]
];

test("les huit signatures étalons retrouvent leur style en première position", () => {
  obviousCases.forEach(([expected, input]) => assertTop(expected, input));
});

const duelCases = [
  ["munich-helles", profile({ color: "dore", clarity: "claire", nose: { "pain-biscuit": 2, cereale: 2, miel: 1 }, palate: { "pain-biscuit": 2, cereale: 2 }, structure: { amertume: 1, corps: 2 }, finish: ["ronde"] })],
  ["german-pilsner", profile({ color: "paille", clarity: "claire", nose: { floral: 2, "herbace-epice": 2, cereale: 1 }, palate: { "herbace-epice": 2 }, structure: { amertume: 4, corps: 1 }, finish: ["seche"] })],
  ["vienna-lager", profile({ color: "ambre", clarity: "claire", nose: { toaste: 2, "pain-biscuit": 2 }, palate: { toaste: 2, "pain-biscuit": 2 }, structure: { corps: 2, alcool: 2 }, finish: ["seche"] })],
  ["marzen", profile({ color: "cuivre", clarity: "claire", nose: { toaste: 3, "pain-biscuit": 2 }, palate: { toaste: 3, "pain-biscuit": 2 }, structure: { corps: 3, alcool: 3 }, finish: ["ronde"] })],
  ["american-pale-ale", profile({ color: "dore", clarity: "claire", nose: { agrumes: 3, "resine-pin": 2 }, palate: { agrumes: 3, "resine-pin": 2 }, structure: { amertume: 2, corps: 2, alcool: 2 } })],
  ["american-ipa", profile({ color: "ambre", clarity: "voilee", nose: { agrumes: 3, "fruits-tropicaux": 2, "resine-pin": 2 }, palate: { agrumes: 3, "fruits-tropicaux": 2, "resine-pin": 2 }, structure: { amertume: 4, corps: 2, alcool: 3 } })],
  ["american-ipa", profile({ color: "ambre", clarity: "voilee", nose: { agrumes: 3, "fruits-tropicaux": 2, "resine-pin": 2 }, structure: { amertume: 3, corps: 2 } })],
  ["west-coast-ipa", profile({ color: "paille", clarity: "claire", nose: { agrumes: 3, "resine-pin": 3 }, palate: { agrumes: 3, "resine-pin": 3 }, structure: { amertume: 4, corps: 1 }, finish: ["seche", "amere-persistante"] })],
  ["west-coast-ipa", profile({ color: "paille", clarity: "claire", nose: { agrumes: 3, "resine-pin": 3 }, structure: { amertume: 4, corps: 1, sucrosite: 0 }, finish: ["seche"] })],
  ["neipa-juicy-hazy-ipa", profile({ color: "dore", clarity: "trouble", nose: { "fruits-tropicaux": 3, agrumes: 3, "fruits-a-noyau": 3 }, structure: { amertume: 1, corps: 3, sucrosite: 2 }, finish: ["cremeuse"] })],
  ["american-porter", profile({ color: "brun", clarity: "opaque", nose: { "chocolat-cacao": 3, "cafe-torrefie": 2, toaste: 2 }, palate: { "chocolat-cacao": 3, "cafe-torrefie": 2 }, structure: { amertume: 2, corps: 3 } })],
  ["american-stout", profile({ color: "noir", clarity: "opaque", nose: { "cafe-torrefie": 3, "chocolat-cacao": 2, "resine-pin": 2 }, palate: { "cafe-torrefie": 3, "resine-pin": 2 }, structure: { amertume: 4, corps: 4 }, finish: ["astringente"] })],
  ["sweet-milk-cream-stout", profile({ color: "noir", clarity: "opaque", nose: { "chocolat-cacao": 3, "cafe-torrefie": 2, "caramel-toffee": 2 }, structure: { sucrosite: 4, corps: 4 }, finish: ["cremeuse"] })],
  ["oatmeal-stout", profile({ color: "noir", clarity: "opaque", nose: { cereale: 2, "chocolat-cacao": 2, "cafe-torrefie": 2 }, palate: { cereale: 2 }, structure: { sucrosite: 2, corps: 4 }, finish: ["cremeuse"] })],
  ["witbier", profile({ color: "paille", clarity: "trouble", nose: { agrumes: 3, coriandre: 3 }, palate: { agrumes: 3, coriandre: 3 }, structure: { carbonatation: 4, acidite: 1 } })],
  ["weissbier-hefeweizen", profile({ color: "dore", clarity: "trouble", nose: { banane: 3, "clou-girofle": 3 }, palate: { banane: 3, "clou-girofle": 3 }, structure: { carbonatation: 4 } })],
  ["lambic", profile({ color: "dore", clarity: "voilee", nose: { "funky-cuir-ferme": 3, "lactique-yaourt": 2 }, palate: { "funky-cuir-ferme": 3 }, structure: { carbonatation: 0, acidite: 4 }, finish: ["seche"] })],
  ["gueuze", profile({ color: "dore", clarity: "voilee", nose: { "funky-cuir-ferme": 3, "lactique-yaourt": 2, agrumes: 2 }, palate: { "funky-cuir-ferme": 3, agrumes: 2 }, structure: { carbonatation: 4, acidite: 4 }, finish: ["vive"] })],
  ["saison", profile({ color: "dore", clarity: "voilee", nose: { "poivre-epices-levure": 3, "herbace-epice": 2, "fruits-legers": 2 }, palate: { "poivre-epices-levure": 3 }, structure: { alcool: 2, carbonatation: 4 }, finish: ["seche"] })],
  ["belgian-golden-strong-ale-belgian-strong-blonde-ale", profile({ color: "paille", clarity: "claire", nose: { "fruits-legers": 3, "poivre-epices-levure": 2 }, palate: { "fruits-legers": 3 }, structure: { alcool: 4, carbonatation: 4, corps: 1 }, finish: ["chaleureuse"] })],
  ["dubbel", profile({ color: "brun", clarity: "claire", nose: { "fruits-noirs-murs": 3, "caramel-toffee": 2, "pain-biscuit": 2 }, structure: { carbonatation: 4, alcool: 3, corps: 3 } })],
  ["baltic-porter", profile({ color: "noir", clarity: "opaque", nose: { "fruits-noirs-murs": 3, "caramel-toffee": 2, "chocolat-cacao": 2 }, palate: { "chocolat-cacao": 2 }, structure: { carbonatation: 2, alcool: 4, corps: 4 } })],
  ["black-ipa", profile({ color: "noir", clarity: "opaque", nose: { agrumes: 3, "resine-pin": 3, "cafe-torrefie": 1 }, palate: { agrumes: 2, "resine-pin": 3 }, structure: { amertume: 4, corps: 2 }, finish: ["seche"] })],
  ["american-stout", profile({ color: "noir", clarity: "opaque", nose: { "cafe-torrefie": 3, "chocolat-cacao": 2, "resine-pin": 2 }, palate: { "cafe-torrefie": 3 }, structure: { amertume: 4, corps: 4 }, finish: ["astringente"] })]
];

test("les douze duels sensoriels basculent dans les deux sens", () => {
  assert.equal(duelCases.length, 24);
  duelCases.forEach(([expected, input], index) => assertTop(expected, input, `duel ${index + 1}: ${expected}`));
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
  const result = scoreSensoryProfile(profile({ nose: { agrumes: 3 } }), candidate, { rarity: {} });
  assert.equal(result.groupScores.taste, null);
  assert.equal(result.groupScores.body, null);
});

test("les marqueurs rares pèsent davantage que la céréale commune", () => {
  const rarity = computeDescriptorRarity(sensoryProfiles);
  assert.ok(rarity.banane > rarity.cereale);
  assert.ok(rarity["clou-girofle"] > rarity.cereale);
});

test("Coffee Beer reste un overlay, même sur une base pâle", () => {
  const result = matcher.match(profile({
    color: "dore",
    clarity: "claire",
    nose: { "cafe-torrefie": 3, agrumes: 2 },
    palate: { "cafe-torrefie": 3 },
    structure: { amertume: 2, corps: 2 }
  }));
  assert.notEqual(result.results[0]?.cardId, "coffee-beer");
  assert.ok(result.overlays.some(({ cardId }) => cardId === "coffee-beer"));
});

test("l'élevage bois reste un overlay d'un Imperial Stout", () => {
  const result = matcher.match(profile({
    color: "noir",
    clarity: "opaque",
    nose: { "cafe-torrefie": 3, "chocolat-cacao": 3, "boise-vanille": 3 },
    palate: { "cafe-torrefie": 3, "boise-vanille": 3 },
    structure: { corps: 4, alcool: 4 },
    finish: ["chaleureuse", "astringente"]
  }));
  assert.equal(result.results[0]?.cardId, "imperial-stout");
  assert.ok(result.overlays.some(({ cardId }) => cardId === "wood-and-barrel-aged-beer"));
});

test("aucun overlay n'est inventé sans son marqueur clé", () => {
  const result = matcher.match(obviousCases[3][1]);
  assert.deepEqual(result.overlays, []);
});

test("Radler / Shandy peut remonter sur un profil citronné très spécifique", () => {
  const result = matcher.match(profile({
    color: "paille",
    clarity: "claire",
    nose: { agrumes: 3 },
    palate: { agrumes: 3 },
    structure: { amertume: 0, sucrosite: 4, acidite: 2, corps: 1, carbonatation: 4, alcool: 0 },
    finish: ["vive"]
  }));
  assert.equal(result.results[0]?.cardId, "radler-shandy");
  assert.equal(result.results[0]?.role, "fallback");
});

test("un primary bien déterminé garde la priorité sur le fallback", () => {
  const result = matcher.match(obviousCases[3][1]);
  assert.equal(result.results[0]?.cardId, "west-coast-ipa");
  assert.equal(result.results[0]?.role, "primary");
});

test("la Collection 10, les excluded et les overlays ne peuvent jamais entrer dans les résultats principaux", () => {
  const custom = createSensoryMatcher({ profiles: [
    ...sensoryProfiles,
    { ...sensoryProfiles[0], collectionId: "bizarre-et-insolite", cardId: "C10-test", role: "primary" },
    { ...sensoryProfiles[0], cardId: "excluded-test", role: "excluded" }
  ] });
  const result = custom.match(obviousCases[3][1], { limit: 50 });
  assert.ok(result.results.every(({ collectionId, role }) => collectionId !== "bizarre-et-insolite" && role !== "overlay" && role !== "excluded"));
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
