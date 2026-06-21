import test from "node:test";
import assert from "node:assert/strict";
import { porterStoutCardImages } from "./card-assets/porters-stouts-assets.js";
import { porterStoutCards, porterStoutCollection, porterStoutCardsById, validatePorterStoutCollection } from "./porters-stouts-collection.js";

test("Porters & Stouts collection has 22 unique image-backed cards", () => {
  assert.equal(porterStoutCards.length, 22);
  assert.equal(new Set(porterStoutCards.map((card) => card.id)).size, 22);
  assert.ok(porterStoutCards.every((card) => card.image));
  assert.ok(porterStoutCollection.cardBack.endsWith("dos-porters-et-stouts.webp"));
  assert.ok(porterStoutCollection.collectionFace.endsWith("face-porters-et-stouts.webp"));
});

test("image manifest references only known card IDs", () => {
  assert.deepEqual(validatePorterStoutCollection(), { valid: true, errors: [] });
  for (const id of Object.keys(porterStoutCardImages)) assert.ok(porterStoutCardsById[id], id);
});
