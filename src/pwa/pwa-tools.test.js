import test from "node:test";
import assert from "node:assert/strict";
import { clearZythoHuntCaches, getStorageEstimate } from "./pwa-tools.js";

test("vider le cache supprime uniquement les caches ZythoHunt", async () => {
  const deleted = [];
  const cacheStorage = {
    async keys() { return ["zythohunt-old-shell", "zythohunt-old-images", "foreign-cache"]; },
    async delete(key) { deleted.push(key); return true; }
  };
  const result = await clearZythoHuntCaches({ cacheStorage });
  assert.equal(result.ok, true);
  assert.equal(result.deleted, 2);
  assert.deepEqual(deleted, ["zythohunt-old-shell", "zythohunt-old-images"]);
});

test("l'estimation de stockage reste facultative", async () => {
  assert.deepEqual(await getStorageEstimate({ storageManager: null }), { supported: false, usage: null, quota: null });
  assert.deepEqual(
    await getStorageEstimate({ storageManager: { estimate: async () => ({ usage: 2048, quota: 8192 }) } }),
    { supported: true, usage: 2048, quota: 8192 }
  );
});
