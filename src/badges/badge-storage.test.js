import test from "node:test";
import assert from "node:assert/strict";
import { createBadgeStore } from "./badge-storage.js";

function memoryStorage() {
  const data = new Map();
  return {
    getItem: (key) => data.get(key) ?? null,
    setItem: (key, value) => data.set(key, value)
  };
}

test("badge store unlock et queue", () => {
  const store = createBadgeStore({ storage: memoryStorage() });
  const first = store.unlock({ id: "x", name: "Test" }, "now");
  assert.equal(first.status, "unlocked");
  assert.equal(first.ok, true);
  assert.equal(first.item.badgeId, "x");

  const duplicate = store.unlock({ id: "x", name: "Test" }, "later");
  assert.equal(duplicate.status, "already-unlocked");
  assert.equal(duplicate.item, null);

  assert.equal(store.enqueue([{ badge: { id: "x" }, unlockedAt: "now" }]).ok, true);
  assert.deepEqual(store.takeQueue(), [{ badgeId: "x", unlockedAt: "now" }]);
  assert.deepEqual(store.takeQueue(), []);
});

test("un badge n'est pas déverrouillé si l'écriture échoue", () => {
  const storage = {
    getItem: () => null,
    setItem: () => { throw new Error("quota"); }
  };
  const store = createBadgeStore({ storage });
  const result = store.unlock({ id: "storage-fail", name: "Test" });

  assert.equal(result.ok, false);
  assert.equal(result.item, null);
  assert.equal(store.isUnlocked("storage-fail"), false);
});
