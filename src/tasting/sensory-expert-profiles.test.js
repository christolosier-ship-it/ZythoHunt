import assert from "node:assert/strict";
import test from "node:test";
import { buildSensoryPayload } from "../../scripts/build-sensory-payload.mjs";
import { createSensoryMatcher } from "./sensory-matcher.js";

const p = ({ color, clarity, nose = {}, palate = {}, structure = {}, finish = [] }) => ({
  appearance: { color, clarity },
  nose,
  palate,
  structure,
  finish
});

const CASES = Object.freeze([
  {
    label: "Czech Premium Pale Lager bat Helles Bock sur un profil Pilsner tchèque",
    expected: "czech-premium-pale-lager",
    input: p({
      color: "dore",
      clarity: "claire",
      nose: { "pain-biscuit": 2, "herbace-epice": 2, floral: 1, "caramel-toffee": 1 },
      palate: { "pain-biscuit": 2, "herbace-epice": 2, "caramel-toffee": 1 },
      structure: { amertume: 3, sucrosite: 1, acidite: 0, corps: 2, carbonatation: 3, alcool: 2 },
      finish: ["vive", "amere-persistante"]
    })
  },
  {
    label: "American Pale Ale bat American ESB et Double IPA",
    expected: "american-pale-ale",
    input: p({
      color: "ambre",
      clarity: "claire",
      nose: { agrumes: 3, "resine-pin": 3, floral: 1, "caramel-toffee": 1 },
      palate: { agrumes: 3, "resine-pin": 2, "caramel-toffee": 1 },
      structure: { amertume: 3, sucrosite: 1, acidite: 0, corps: 2, carbonatation: 2, alcool: 2 },
      finish: ["seche", "amere-persistante"]
    })
  },
  {
    label: "Saison bat Belgian IPA et American-Belgo Ale",
    expected: "saison",
    input: p({
      color: "dore",
      clarity: "voilee",
      nose: { agrumes: 2, "clou-girofle": 2, "poivre-epices-levure": 2, "fruits-legers": 2, floral: 1 },
      palate: { agrumes: 2, "poivre-epices-levure": 2, "fruits-legers": 1 },
      structure: { amertume: 3, sucrosite: 0, acidite: 1, corps: 1, carbonatation: 4, alcool: 3 },
      finish: ["seche", "vive"]
    })
  },
  {
    label: "Irish Dry Stout bat les Brown Ales sur un profil Guinness",
    expected: "dry-stout-irish-dry-stout",
    input: p({
      color: "brun",
      clarity: "opaque",
      nose: { "cafe-torrefie": 2, "chocolat-cacao": 2, toaste: 2 },
      palate: { "cafe-torrefie": 2, "chocolat-cacao": 2, toaste: 2 },
      structure: { amertume: 2, sucrosite: 1, acidite: 0, corps: 2, carbonatation: 1, alcool: 1 },
      finish: ["cremeuse", "seche"]
    })
  },
  {
    label: "Hefeweizen garde la priorité sur Leichtes et Bernsteinfarbenes Weizen",
    expected: "weissbier-hefeweizen",
    input: p({
      color: "ambre",
      clarity: "trouble",
      nose: { banane: 3, "clou-girofle": 3, epices: 1 },
      palate: { banane: 3, "clou-girofle": 3 },
      structure: { amertume: 0, sucrosite: 1, acidite: 1, corps: 2, carbonatation: 4, alcool: 2 },
      finish: ["cremeuse", "vive"]
    })
  },
  {
    label: "Belgian Golden Strong reste devant American-Belgo Ale",
    expected: "belgian-golden-strong-ale-belgian-strong-blonde-ale",
    input: p({
      color: "paille",
      clarity: "claire",
      nose: { "fruits-legers": 3, "poivre-epices-levure": 2, agrumes: 1, floral: 1 },
      palate: { "fruits-legers": 3, "poivre-epices-levure": 2, agrumes: 1 },
      structure: { amertume: 2, sucrosite: 0, acidite: 0, corps: 1, carbonatation: 4, alcool: 4 },
      finish: ["seche", "vive", "chaleureuse"]
    })
  }
]);

let contextPromise;
async function context() {
  if (!contextPromise) {
    contextPromise = buildSensoryPayload().then((payload) => ({
      payload,
      matcher: createSensoryMatcher({ profiles: payload.profiles, rarity: payload.rarity })
    }));
  }
  return contextPromise;
}

test("la première vague experte est réellement appliquée aux 251 profils", async () => {
  const { payload } = await context();
  assert.equal(payload.totalCards, 251);
  assert.equal(payload.scorableCards, 223);
  const expertProfiles = payload.profiles.filter(({ expert }) => expert === true);
  assert.equal(expertProfiles.length, 11);
  assert.ok(expertProfiles.some(({ cardId }) => cardId === "dry-stout-irish-dry-stout"));
  assert.ok(expertProfiles.some(({ cardId }) => cardId === "american-pale-ale"));
  assert.ok(expertProfiles.some(({ cardId }) => cardId === "saison"));
});

for (const scenario of CASES) {
  test(scenario.label, async () => {
    const { matcher } = await context();
    const result = matcher.match(scenario.input, { limit: 3 });
    assert.equal(result.results[0]?.cardId, scenario.expected, JSON.stringify(result.results, null, 2));
  });
}
