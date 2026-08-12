import test from "node:test";
import assert from "node:assert/strict";
import { applyAmbienceProfile } from "./ambience-profile.js";

const base = { beerT: 72, bubbleDensity: 60, foamIntensity: 50 };

test("les modes d'ambiance conservent la palette éditoriale", () => {
  assert.equal(applyAmbienceProfile(base, "full").beerT, 72);
  assert.equal(applyAmbienceProfile(base, "light").beerT, 72);
  assert.equal(applyAmbienceProfile(base, "static").beerT, 72);
});

test("Allégée réduit les particules et Statique supprime les bulles", () => {
  assert.deepEqual(applyAmbienceProfile(base, "light"), { beerT: 72, bubbleDensity: 27, foamIntensity: 36 });
  assert.deepEqual(applyAmbienceProfile(base, "static"), { beerT: 72, bubbleDensity: 0, foamIntensity: 31 });
});
