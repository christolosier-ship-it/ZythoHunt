import assert from "node:assert/strict";
import test from "node:test";
import { createGlobalBeerResolver } from "./global-beer-resolver.js";

const bundles = [
  {
    collection: { id: "porters-stouts", name: "Porters & Stouts" },
    revealableCards: [
      { id: "stout", name: "Stout", aliases: ["dark ale"] },
      { id: "porter", name: "Porter", aliases: [] }
    ]
  },
  {
    collection: { id: "lagers", name: "Lagers" },
    revealableCards: [
      { id: "pilsner", name: "Pilsner", aliases: ["pils"] },
      { id: "stout-lager", name: "Stout", aliases: ["black lager"] }
    ]
  }
];

test("finds a local card", () => {
  const result = createGlobalBeerResolver(bundles, "porters-stouts").resolve("porter");
  assert.equal(result.status, "matched");
  assert.equal(result.collectionId, "porters-stouts");
  assert.equal(result.cardId, "porter");
});

test("finds a card in another collection", () => {
  const result = createGlobalBeerResolver(bundles, "porters-stouts").resolve("pilsner");
  assert.equal(result.status, "matched");
  assert.equal(result.collectionId, "lagers");
  assert.equal(result.cardId, "pilsner");
});

test("prefers the active collection on duplicates", () => {
  const result = createGlobalBeerResolver(bundles, "lagers").resolve("stout");
  assert.equal(result.status, "matched");
  assert.equal(result.collectionId, "lagers");
  assert.equal(result.cardId, "stout-lager");
});

test("returns unknown when nothing matches", () => {
  assert.deepEqual(createGlobalBeerResolver(bundles, "lagers").resolve("gose"), { status: "unknown" });
});

test("handles aliases", () => {
  const result = createGlobalBeerResolver(bundles, "porters-stouts").resolve("pils");
  assert.equal(result.status, "matched");
  assert.equal(result.collectionId, "lagers");
  assert.equal(result.cardId, "pilsner");
});

test("runtime search resolves another collection from the lightweight index", async () => {
  let indexLoads = 0;
  let bundleLoads = 0;
  const resolver = createGlobalBeerResolver({
    preferredBundle: bundles[0],
    preferredCollectionId: "porters-stouts",
    collectionCatalog: bundles.map(({ collection }) => ({ collection })),
    loadSearchIndex: async () => {
      indexLoads += 1;
      return {
        schemaVersion: 1,
        aliases: {
          pilsner: [{ collectionId: "lagers", collectionName: "Lagers", cardId: "pilsner", cardName: "Pilsner" }]
        }
      };
    },
    loadCollectionBundle: async () => {
      bundleLoads += 1;
      throw new Error("Aucun bundle lourd ne doit être chargé par le resolver");
    }
  });

  const result = await resolver.resolve("pilsner");
  assert.equal(result.status, "matched");
  assert.equal(result.collectionId, "lagers");
  assert.equal(result.cardId, "pilsner");
  assert.equal(indexLoads, 1);
  assert.equal(bundleLoads, 0);
});

test("runtime unknown search does not load collection bundles and reuses the index", async () => {
  let indexLoads = 0;
  let bundleLoads = 0;
  const resolver = createGlobalBeerResolver({
    preferredBundle: bundles[0],
    preferredCollectionId: "porters-stouts",
    collectionCatalog: bundles.map(({ collection }) => ({ collection })),
    loadSearchIndex: async () => {
      indexLoads += 1;
      return { schemaVersion: 1, aliases: {} };
    },
    loadCollectionBundle: async () => {
      bundleLoads += 1;
      throw new Error("Aucun bundle lourd ne doit être chargé par le resolver");
    }
  });

  assert.deepEqual(await resolver.resolve("gose"), { status: "unknown" });
  assert.deepEqual(await resolver.resolve("still unknown"), { status: "unknown" });
  assert.equal(indexLoads, 1);
  assert.equal(bundleLoads, 0);
});

test("runtime local match does not even request the global index", async () => {
  let indexLoads = 0;
  const resolver = createGlobalBeerResolver({
    preferredBundle: bundles[0],
    preferredCollectionId: "porters-stouts",
    collectionCatalog: bundles.map(({ collection }) => ({ collection })),
    loadSearchIndex: async () => {
      indexLoads += 1;
      return { schemaVersion: 1, aliases: {} };
    }
  });

  const result = await resolver.resolve("dark ale");
  assert.equal(result.status, "matched");
  assert.equal(result.collectionId, "porters-stouts");
  assert.equal(result.cardId, "stout");
  assert.equal(indexLoads, 0);
});
