import test from "node:test";
import assert from "node:assert/strict";
import { revealablePorterStoutCards } from "../data/porters-stouts-collection.js";
import { createBeerResolver } from "./beer-resolver.js";

const resolver = createBeerResolver(revealablePorterStoutCards);
const cases = {
  "Stout": "stout",
  "Porter": "porter",
  "Imperial Stout": "imperial-stout",
  "Russian Imperial Stout": "imperial-stout",
  "Smoke Porter": "smoke-porter",
  "Smoked Porter": "smoke-porter",
  "Dry Stout": "dry-stout-irish-dry-stout",
  "Irish Dry Stout": "dry-stout-irish-dry-stout",
  "Sweet Stout": "sweet-milk-cream-stout",
  "Milk Stout": "sweet-milk-cream-stout",
  "Cream Stout": "sweet-milk-cream-stout",
  "Coffee Stout": "coffee-stout-or-porter",
  "Coffee Porter": "coffee-stout-or-porter",
  "American Imperial Porter": "american-imperial-porter",
  "American Imperial Stout": "american-imperial-stout"
};

test("resolves official Porters & Stouts names and aliases exactly after normalization", () => {
  for (const [input, cardId] of Object.entries(cases)) assert.equal(resolver.resolve(input).cardId, cardId, input);
});

test("does not reveal parents, children, or neighboring imperial cards by accident", () => {
  assert.equal(resolver.resolve("Porter").cardId, "porter");
  assert.notEqual(resolver.resolve("Porter").cardId, "english-porter");
  assert.equal(resolver.resolve("Stout").cardId, "stout");
  assert.notEqual(resolver.resolve("Stout").cardId, "dry-stout-irish-dry-stout");
  assert.equal(resolver.resolve("American Imperial Porter").cardId, "american-imperial-porter");
  assert.equal(resolver.resolve("American Imperial Stout").cardId, "american-imperial-stout");
});
