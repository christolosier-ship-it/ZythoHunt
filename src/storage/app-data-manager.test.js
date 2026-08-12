import test from "node:test";
import assert from "node:assert/strict";
import { createAppDataManager, validateBackup } from "./app-data-manager.js";
import { SETTINGS_STORAGE_KEY } from "../settings/settings-storage.js";

function createMemoryStorage(initial = {}) {
  const data = new Map(Object.entries(initial));
  return {
    get length() { return data.size; },
    key(index) { return [...data.keys()][index] ?? null; },
    getItem(key) { return data.has(key) ? data.get(key) : null; },
    setItem(key, value) { data.set(key, String(value)); },
    removeItem(key) { data.delete(key); },
    dump() { return Object.fromEntries(data); }
  };
}

const catalog = [
  { collection: { id: "one", discoveryKey: "zythohunt.discovery.one.v1" } },
  { collection: { id: "secret", discoveryKey: "zythohunt.discovery.secret.v1" } }
];

test("réinitialiser la progression efface uniquement progression, badges, stats et collection active", () => {
  const storage = createMemoryStorage({
    "zythohunt.discovery.one.v1": JSON.stringify({ schemaVersion: 2, discovered: { a: { discoveredAt: "x" } } }),
    "zythohunt.discovery.secret.v1": JSON.stringify({ schemaVersion: 2, discovered: { b: { discoveredAt: "x" } } }),
    "zythohunt.badges.v1": JSON.stringify({ unlocked: { badge: {} } }),
    "zythohunt.badgeQueue.v1": JSON.stringify({ pending: [{ badgeId: "badge" }] }),
    "zythohunt.revealStats.v1": JSON.stringify({ totalAttempts: 3 }),
    "zythohunt.activeCollectionId.v1": "secret",
    [SETTINGS_STORAGE_KEY]: JSON.stringify({ motionMode: "reduced" }),
    "foreign.key": "survit"
  });
  const manager = createAppDataManager({ collectionCatalog: catalog, storage });
  const result = manager.resetProgress();
  assert.equal(result.ok, true);
  assert.equal(storage.getItem("zythohunt.discovery.one.v1"), null);
  assert.equal(storage.getItem("zythohunt.discovery.secret.v1"), null);
  assert.equal(storage.getItem("zythohunt.activeCollectionId.v1"), null);
  assert.notEqual(storage.getItem(SETTINGS_STORAGE_KEY), null);
  assert.equal(storage.getItem("foreign.key"), "survit");
});

test("la remise à zéro complète ne touche jamais une clé étrangère", () => {
  const storage = createMemoryStorage({
    "zythohunt.settings.v1": "{}",
    "zythohunt.future.degustation.v1": "[]",
    "zythohunt_revealed": "[]",
    "another.application": "safe"
  });
  const manager = createAppDataManager({ collectionCatalog: catalog, storage });
  const result = manager.resetAll();
  assert.equal(result.ok, true);
  assert.deepEqual(storage.dump(), { "another.application": "safe" });
});

test("export et import sont versionnés, résumés et remplacent uniquement les données ZythoHunt", () => {
  const storage = createMemoryStorage({
    "zythohunt.discovery.one.v1": JSON.stringify({ discovered: { a: {}, b: {} } }),
    "zythohunt.badges.v1": JSON.stringify({ unlocked: { one: {}, two: {}, three: {} } }),
    "foreign.key": "safe"
  });
  const manager = createAppDataManager({ collectionCatalog: catalog, storage, appVersion: "test" });
  const exported = manager.exportBackup();
  assert.equal(exported.ok, true);
  assert.deepEqual(exported.summary, { discoveries: 2, badges: 3, tastings: 0, settingsIncluded: false });

  storage.setItem("zythohunt.settings.v1", "changed");
  const imported = manager.importBackup(exported.backup);
  assert.equal(imported.ok, true);
  assert.equal(storage.getItem("zythohunt.settings.v1"), null);
  assert.equal(storage.getItem("foreign.key"), "safe");
});

test("une sauvegarde contenant une clé étrangère est refusée avant toute écriture", () => {
  const validation = validateBackup({
    format: "zythohunt-backup",
    version: 1,
    entries: { "foreign.key": "nope" }
  });
  assert.equal(validation.valid, false);
});
