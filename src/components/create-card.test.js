import test from "node:test";
import assert from "node:assert/strict";
import {
  fitCardNameOnce,
  resolveCardBackPath,
  resolveCardFramePath,
  resolveRevealBackSource,
  resolveRevealFrontSource
} from "./create-card.js";

const collection = {
  cardBack: "assets/back-hd.webp",
  cardBackThumb: "assets/thumb/back.webp",
  cardFrame: "assets/frame-hd.webp",
  collectionFaceThumb: "assets/thumb/frame.webp"
};
const cardData = { frame: "assets/card-frame-hd.webp" };

test("carousel cards prefer collection thumbnail assets for back and frame", () => {
  assert.equal(resolveCardBackPath({ collection, as: "carousel" }), collection.cardBackThumb);
  assert.equal(resolveCardFramePath({ cardData, collection, as: "carousel" }), collection.collectionFaceThumb);
});

test("non-carousel cards keep HD assets for back and frame", () => {
  assert.equal(resolveCardBackPath({ collection, as: "slot" }), collection.cardBack);
  assert.equal(resolveCardFramePath({ cardData, collection, as: "slot" }), cardData.frame);
  assert.equal(resolveCardFramePath({ cardData: {}, collection, as: "slot" }), collection.cardFrame);
});

test("carousel cards fall back to existing HD assets when thumbnails are absent", () => {
  const hdOnlyCollection = {
    cardBack: collection.cardBack,
    cardFrame: collection.cardFrame
  };

  assert.equal(resolveCardBackPath({ collection: hdOnlyCollection, as: "carousel" }), collection.cardBack);
  assert.equal(resolveCardFramePath({ cardData, collection: hdOnlyCollection, as: "carousel" }), collection.cardFrame);
});

test("resolveRevealBackSource prefers the loaded card back", () => {
  const cardEl = {
    querySelector(selector) {
      assert.equal(selector, ".card-back img");
      return {
        currentSrc: "https://example.test/dos-charge.webp",
        src: "https://example.test/dos-declare.webp",
        classList: { contains: () => false }
      };
    }
  };

  assert.equal(resolveRevealBackSource(cardEl), "https://example.test/dos-charge.webp");
});

test("resolveRevealBackSource falls back to src", () => {
  const cardEl = {
    querySelector() {
      return {
        currentSrc: "",
        src: "/assets/collections/test/thumb/dos-test.webp",
        classList: { contains: () => false }
      };
    }
  };

  assert.equal(resolveRevealBackSource(cardEl), "/assets/collections/test/thumb/dos-test.webp");
});

test("resolveRevealBackSource rejects question-mark fallback assets", () => {
  const cardEl = {
    querySelector() {
      return {
        currentSrc: "data:image/svg+xml,%3Csvg%3E%3F%3C/svg%3E",
        src: "data:image/svg+xml,%3Csvg%3E%3F%3C/svg%3E",
        classList: { contains: (name) => name === "is-missing-asset" }
      };
    }
  };

  assert.equal(resolveRevealBackSource(cardEl), null);
  assert.equal(resolveRevealBackSource(null), null);
});

test("resolveRevealFrontSource reuses the illustration already displayed by the carousel", () => {
  const cardEl = {
    querySelector(selector) {
      assert.equal(selector, ".card-illustration");
      return {
        currentSrc: "https://example.test/thumb/stout.webp",
        src: "https://example.test/thumb-declared/stout.webp",
        hidden: false,
        classList: { contains: () => false }
      };
    }
  };

  assert.equal(resolveRevealFrontSource(cardEl), "https://example.test/thumb/stout.webp");
});

test("resolveRevealFrontSource rejects missing illustrations", () => {
  const cardEl = {
    querySelector() {
      return {
        currentSrc: "data:image/svg+xml,%3Csvg%3E%3F%3C/svg%3E",
        src: "data:image/svg+xml,%3Csvg%3E%3F%3C/svg%3E",
        hidden: false,
        classList: { contains: (name) => name === "is-missing-asset" }
      };
    }
  };

  assert.equal(resolveRevealFrontSource(cardEl), null);
  assert.equal(resolveRevealFrontSource(null), null);
});

test("fitCardNameOnce skips repeated fitting while dimensions are unchanged", () => {
  let measurements = 0;
  const nameEl = {
    textContent: "Imperial Stout",
    dataset: {},
    style: {},
    classList: { toggle() {} },
    get scrollWidth() { measurements += 1; return 20; },
    get scrollHeight() { return 10; }
  };
  const containerEl = { clientWidth: 100, clientHeight: 40 };

  assert.equal(fitCardNameOnce(nameEl, containerEl), true);
  assert.equal(nameEl.dataset.nameFitted, "true");
  assert.equal(fitCardNameOnce(nameEl, containerEl), false);
  assert.equal(measurements, 1);

  containerEl.clientWidth = 120;
  assert.equal(fitCardNameOnce(nameEl, containerEl), true);
  assert.equal(measurements, 2);
});
