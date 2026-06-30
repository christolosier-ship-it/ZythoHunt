import test from "node:test";
import assert from "node:assert/strict";
import { getInitialCarouselIndex, getInitialPreloadUrls } from "./preload-assets.js";

const cards = Array.from({ length: 10 }, (_, index) => ({ image: `assets/card-${index}.webp` }));
const collection = {
  assetStatus: { shellReady: true, cardsReady: true },
  cardBack: "assets/back.webp",
  cardBackThumb: "assets/thumb/back.webp",
  cardFrame: "assets/frame.webp",
  collectionFaceThumb: "assets/thumb/frame.webp"
};

test("preloads only active collection assets and the initial carousel window", () => {
  const urls = getInitialPreloadUrls({ collection, cards, activeIndex: 4, radius: 2 });

  assert.equal(urls.length, 7);
  assert.ok(urls.some((url) => url.endsWith("assets/thumb/back.webp")));
  assert.ok(urls.some((url) => url.endsWith("assets/thumb/frame.webp")));
  assert.equal(urls.some((url) => url.endsWith("assets/back.webp")), false);
  assert.equal(urls.some((url) => url.endsWith("assets/frame.webp")), false);
  assert.ok(urls.some((url) => url.endsWith("assets/card-2.webp")));
  assert.ok(urls.some((url) => url.endsWith("assets/card-6.webp")));
  assert.equal(urls.some((url) => url.endsWith("assets/card-7.webp")), false);
});

test("falls back to HD collection assets when carousel thumbnails are unavailable", () => {
  const urls = getInitialPreloadUrls({
    collection: { assetStatus: { shellReady: true, cardsReady: true }, cardBack: "assets/back.webp", cardFrame: "assets/frame.webp" },
    cards: [],
    activeIndex: 4,
    radius: 2
  });

  assert.equal(urls.length, 2);
  assert.ok(urls.some((url) => url.endsWith("assets/back.webp")));
  assert.ok(urls.some((url) => url.endsWith("assets/frame.webp")));
});

test("skips card image preloads for incomplete collections", () => {
  const urls = getInitialPreloadUrls({ collection: { ...collection, assetStatus: { shellReady: true, cardsReady: false } }, cards, activeIndex: 4, radius: 2 });
  assert.equal(urls.length, 2);
  assert.ok(urls.every((url) => !url.includes("card-")));
});

test("clamps the preferred initial carousel index to available cards", () => {
  assert.equal(getInitialCarouselIndex(10), 4);
  assert.equal(getInitialCarouselIndex(3), 2);
  assert.equal(getInitialCarouselIndex(0), 0);
});
