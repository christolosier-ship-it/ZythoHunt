import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { collectionBundles } from "./collections.js";

const publicRoot = resolve(process.cwd(), "public");
const toPublicPath = (assetPath) => resolve(publicRoot, String(assetPath || "").replace(/^\/+/, ""));

function assertExistingAssets(bundle) {
  const { collection, cards } = bundle;
  const missing = [];
  const status = collection.assetStatus || { shellReady: collection.assetsReady, cardsReady: collection.assetsReady };

  if (status.shellReady) {
    [
      ["cardBack", collection.cardBack],
      ["collectionFace", collection.collectionFace],
      ["cardFrame", collection.cardFrame],
      ["cardBackThumb", collection.cardBackThumb],
      ["collectionFaceThumb", collection.collectionFaceThumb]
    ].forEach(([label, path]) => {
      if (!path || !existsSync(toPublicPath(path))) missing.push(`${label}: ${path || "<missing declaration>"}`);
    });
  }

  if (status.cardsReady) {
    cards.forEach((card) => {
      [["full", card.fullImage], ["thumb", card.thumbImage]].forEach(([label, path]) => {
        if (!path || !existsSync(toPublicPath(path))) missing.push(`${card.id} ${label}: ${path || "<missing declaration>"}`);
      });
    });
  }

  assert.deepEqual(missing, [], `Missing declared assets for ${collection.id}:\n${missing.join("\n")}`);
}

test("declared collection assets exist according to assetStatus", () => {
  collectionBundles.forEach(assertExistingAssets);
});
