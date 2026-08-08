import test from "node:test";
import assert from "node:assert/strict";
import { createDiscoveryStore, DEFAULT_DISCOVERY_KEY, LEGACY_DISCOVERY_KEY } from "./discovery-store.js";

function memoryStorage(initial = {}) {
  const data = new Map(Object.entries(initial));
  return {
    data,
    getItem: (key) => data.get(key) ?? null,
    setItem: (key, value) => data.set(key, value),
    removeItem: (key) => data.delete(key)
  };
}

test("la migration legacy reste limitée à Porters & Stouts", () => {
  const storage = memoryStorage({ [LEGACY_DISCOVERY_KEY]: JSON.stringify([0, 4, 8]) });
  const porterStore = createDiscoveryStore({ key: DEFAULT_DISCOVERY_KEY, storage });
  assert.deepEqual(porterStore.getDiscoveredIds().sort(), ["baltic-porter", "imperial-stout", "stout"]);

  const otherStore = createDiscoveryStore({
    key: "zythohunt.discovery.lagers-et-fermentations-basses.v1",
    storage
  });
  assert.deepEqual(otherStore.getDiscoveredIds(), []);
});

test("markDiscovered retourne un échec explicite si le stockage refuse l'écriture", () => {
  const errors = [];
  const storage = {
    getItem: () => null,
    setItem: () => { throw new Error("quota"); },
    removeItem: () => {}
  };
  const store = createDiscoveryStore({
    storage,
    onPersistenceError: (detail) => errors.push(detail)
  });
  const result = store.markDiscovered("stout");

  assert.equal(result.ok, false);
  assert.equal(result.persisted, false);
  assert.equal(store.isDiscovered("stout"), true, "la session courante reste cohérente visuellement");
  assert.equal(errors.length, 1);
});
