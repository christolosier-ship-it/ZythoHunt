import test from "node:test";
import assert from "node:assert/strict";
import {
  ACTIVE_COLLECTION_STORAGE_KEY,
  readStoredActiveCollectionId,
  setStoredActiveCollectionId,
  clearStoredActiveCollectionId
} from "./active-collection-storage.js";

function createStorage() {
  const data = new Map();
  return {
    getItem(key) { return data.get(key) ?? null; },
    setItem(key, value) { data.set(key, String(value)); },
    removeItem(key) { data.delete(key); }
  };
}

test("la collection active utilise les statuts de persistance communs", () => {
  const storage = createStorage();
  const saved = setStoredActiveCollectionId("porters-stouts", { storage });
  assert.equal(saved.ok, true);
  assert.equal(storage.getItem(ACTIVE_COLLECTION_STORAGE_KEY), "porters-stouts");
  const read = readStoredActiveCollectionId({ storage });
  assert.equal(read.ok, true);
  assert.equal(read.collectionId, "porters-stouts");
  const cleared = clearStoredActiveCollectionId({ storage });
  assert.equal(cleared.ok, true);
  assert.equal(readStoredActiveCollectionId({ storage }).collectionId, undefined);
});

test("un stockage refusé remonte explicitement l'échec", () => {
  const storage = createStorage();
  storage.setItem = () => { throw new Error("blocked"); };
  const result = setStoredActiveCollectionId("porters-stouts", { storage });
  assert.equal(result.ok, false);
  assert.equal(result.persisted, false);
  assert.ok(result.error);
});
