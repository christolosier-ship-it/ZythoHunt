import test from "node:test";
import assert from "node:assert/strict";
import { createBadgeFeatureController } from "./badge-feature-controller.js";

function memoryStorage() {
  const data = new Map();
  return { getItem: (key) => data.get(key) ?? null, setItem: (key, value) => data.set(key, value), removeItem: (key) => data.delete(key) };
}

test("C10 ne modifie ni statistiques, ni session, ni badges sur 42 découvertes", () => {
  const previousStorage = globalThis.localStorage;
  globalThis.localStorage = memoryStorage();
  try {
    let secretDiscovered = 0;
    const collectionCatalog = [
      { collection: { id: "classic", expectedCardCount: 1 } },
      { collection: { id: "bizarre-et-insolite", expectedCardCount: 42, secret: { enabled: true } } }
    ];
    const registry = {
      refresh() {},
      getCollectionProgress(collectionId) {
        if (collectionId === "bizarre-et-insolite") return { discovered: secretDiscovered, total: 42, ratio: secretDiscovered / 42 };
        return { discovered: 0, total: 1, ratio: 0 };
      }
    };
    const feature = createBadgeFeatureController({ root: null, navigation: null, discoveryRegistry: registry, collectionCatalog });
    for (let index = 1; index <= 42; index += 1) {
      secretDiscovered = index;
      const unlocked = feature.recordNewDiscovery({ collectionId: "bizarre-et-insolite", card: { id: `C10-${String(index).padStart(3, "0")}` } });
      assert.deepEqual(unlocked, []);
    }
    const stats = feature.getStats();
    assert.equal(stats.totalAttempts, 0);
    assert.equal(stats.validAttempts, 0);
    assert.deepEqual(stats.sessionCollectionIds, []);
    assert.deepEqual(feature.getStore().getState().unlocked, {});
  } finally {
    if (previousStorage === undefined) delete globalThis.localStorage;
    else globalThis.localStorage = previousStorage;
  }
});
