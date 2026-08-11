import test from "node:test";
import assert from "node:assert/strict";
import { createLazyCollectionManager } from "./collection-manager.js";

function createBundle(id, { order = 10, hiddenFromNavigation = false } = {}) {
  return {
    collection: {
      id,
      name: id,
      order,
      discoveryKey: `zythohunt.discovery.${id}.test`,
      hiddenFromNavigation
    },
    cards: [],
    cardsById: {},
    revealableCards: [],
    validate: () => ({ valid: true, errors: [] })
  };
}

function createCatalog() {
  const loads = { alpha: 0, beta: 0, secret: 0 };
  const bundles = {
    alpha: createBundle("alpha", { order: 20 }),
    beta: createBundle("beta", { order: 10 }),
    secret: createBundle("secret", { order: 30, hiddenFromNavigation: true })
  };
  const catalog = Object.values(bundles).map((bundle) => ({
    collection: bundle.collection,
    load: async () => {
      loads[bundle.collection.id] += 1;
      return bundle;
    }
  }));
  return { catalog, bundles, loads };
}

test("lists lightweight metadata without loading collection bundles", () => {
  const { catalog, loads } = createCatalog();
  const manager = createLazyCollectionManager(catalog);

  assert.deepEqual(manager.listCollections().map((collection) => collection.id), ["beta", "alpha"]);
  assert.deepEqual(manager.listCollections({ includeHidden: true }).map((collection) => collection.id), ["beta", "alpha", "secret"]);
  assert.deepEqual(loads, { alpha: 0, beta: 0, secret: 0 });
});

test("loads a bundle only on demand and caches it", async () => {
  const { catalog, bundles, loads } = createCatalog();
  const manager = createLazyCollectionManager(catalog);

  assert.equal(manager.getBundle("alpha"), null);
  assert.equal(await manager.loadBundle("alpha"), bundles.alpha);
  assert.equal(await manager.loadBundle("alpha"), bundles.alpha);
  assert.equal(manager.getBundle("alpha"), bundles.alpha);
  assert.equal(loads.alpha, 1);
  assert.equal(loads.beta, 0);
});

test("switching the active collection does not eagerly load it", async () => {
  const { catalog, bundles, loads } = createCatalog();
  const manager = createLazyCollectionManager(catalog, { initialCollectionId: "alpha" });

  assert.equal(manager.getActiveCollectionId(), "alpha");
  assert.equal(loads.alpha, 0);

  const result = manager.setActiveCollection("secret");
  assert.equal(result.status, "active");
  assert.equal(result.bundle, null);
  assert.equal(loads.secret, 0);

  assert.equal(await manager.getActiveBundle(), bundles.secret);
  assert.equal(loads.secret, 1);
});

test("unknown collections remain explicit failures", async () => {
  const { catalog } = createCatalog();
  const manager = createLazyCollectionManager(catalog);

  assert.deepEqual(manager.setActiveCollection("missing"), { status: "missing", collectionId: "missing" });
  await assert.rejects(manager.loadBundle("missing"), /Unknown collection: missing/);
});
