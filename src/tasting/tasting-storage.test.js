import assert from "node:assert/strict";
import test from "node:test";
import { createAppDataManager, summarizeBackupEntries, validateBackup } from "../storage/app-data-manager.js";
import { BACKUP_FORMAT, BACKUP_VERSION } from "../storage/app-data-manager.js";
import { TASTING_STORAGE_KEY, createTastingStore } from "./tasting-storage.js";

function createMemoryStorage(seed = {}) {
  const data = new Map(Object.entries(seed));
  return {
    get length() { return data.size; },
    key(index) { return [...data.keys()][index] ?? null; },
    getItem(key) { return data.has(key) ? data.get(key) : null; },
    setItem(key, value) { data.set(key, String(value)); },
    removeItem(key) { data.delete(key); },
    dump() { return Object.fromEntries(data); }
  };
}

function draft(overrides = {}) {
  return {
    beer: { name: "Test IPA", brewery: "Brasserie Test" },
    tastedAt: "2026-08-13T10:00:00.000Z",
    appearance: { color: "dore", clarity: "claire", foam: "moyenne" },
    nose: { agrumes: 3 },
    palate: { agrumes: 2 },
    structure: { amertume: 3, corps: 2 },
    finish: ["seche"],
    verdict: { choice: "again", rating: 4, note: "À retenir" },
    ...overrides
  };
}

test("le carnet crée, relit, modifie et supprime une dégustation", () => {
  const storage = createMemoryStorage();
  const store = createTastingStore({ storage });
  const created = store.create(draft(), { id: "t-1", now: "2026-08-13T10:05:00.000Z" });
  assert.equal(created.ok, true);
  assert.equal(store.list().items.length, 1);
  assert.equal(store.get("t-1").item.beer.name, "Test IPA");

  const updated = store.update("t-1", draft({ beer: { name: "Test IPA 2", brewery: "Brasserie Test" } }), { now: "2026-08-13T11:00:00.000Z" });
  assert.equal(updated.ok, true);
  assert.equal(updated.item.beer.name, "Test IPA 2");
  assert.equal(updated.item.createdAt, "2026-08-13T10:05:00.000Z");
  assert.equal(updated.item.updatedAt, "2026-08-13T11:00:00.000Z");

  const removed = store.remove("t-1");
  assert.equal(removed.ok, true);
  assert.equal(store.list().items.length, 0);
});

test("un échec d'écriture ne prétend jamais avoir enregistré la dégustation", () => {
  const storage = createMemoryStorage();
  storage.setItem = () => { throw new Error("blocked"); };
  const store = createTastingStore({ storage });
  const result = store.create(draft(), { id: "t-1", now: "2026-08-13T10:05:00.000Z" });
  assert.equal(result.ok, false);
  assert.equal(result.persisted, false);
  assert.equal(result.item, null);
});

test("Réinitialiser la progression conserve le carnet, resetAll le supprime", () => {
  const storage = createMemoryStorage({
    "zythohunt.discovery.test.v1": "{}",
    [TASTING_STORAGE_KEY]: JSON.stringify({ schemaVersion: 1, items: {}, order: [] }),
    "foreign.key": "safe"
  });
  const manager = createAppDataManager({
    storage,
    collectionCatalog: [{ collection: { discoveryKey: "zythohunt.discovery.test.v1" } }]
  });
  assert.equal(manager.resetProgress().ok, true);
  assert.notEqual(storage.getItem(TASTING_STORAGE_KEY), null);
  assert.equal(storage.getItem("zythohunt.discovery.test.v1"), null);
  assert.equal(manager.resetAll().ok, true);
  assert.equal(storage.getItem(TASTING_STORAGE_KEY), null);
  assert.equal(storage.getItem("foreign.key"), "safe");
});

test("les sauvegardes comptent et valident le carnet versionné", () => {
  const tastingRaw = JSON.stringify({ schemaVersion: 1, items: {}, order: [] });
  const entries = { [TASTING_STORAGE_KEY]: tastingRaw };
  assert.equal(summarizeBackupEntries(entries).tastings, 0);
  assert.equal(validateBackup({ format: BACKUP_FORMAT, version: BACKUP_VERSION, entries }).valid, true);

  const invalid = validateBackup({
    format: BACKUP_FORMAT,
    version: BACKUP_VERSION,
    entries: { [TASTING_STORAGE_KEY]: JSON.stringify({ schemaVersion: 1, items: { broken: {} }, order: ["broken"] }) }
  });
  assert.equal(invalid.valid, false);
});

test("l'export inclut les dégustations mais jamais les clés étrangères", () => {
  const storage = createMemoryStorage({
    [TASTING_STORAGE_KEY]: JSON.stringify({ schemaVersion: 1, items: {}, order: [] }),
    "foreign.key": "safe"
  });
  const manager = createAppDataManager({ storage, appVersion: "test" });
  const exported = manager.exportBackup();
  assert.equal(exported.ok, true);
  assert.ok(exported.backup.entries[TASTING_STORAGE_KEY]);
  assert.equal(exported.backup.entries["foreign.key"], undefined);
});
