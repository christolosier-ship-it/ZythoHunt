import assert from "node:assert/strict";
import test from "node:test";
import { sensoryProfiles } from "../data/sensory/sensory-profiles.js";
import { createSensoryMatcher } from "./sensory-matcher.js";

const matcher = createSensoryMatcher({ profiles: sensoryProfiles });

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
