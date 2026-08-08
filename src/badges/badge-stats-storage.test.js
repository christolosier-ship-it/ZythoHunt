import test from "node:test";
import assert from "node:assert/strict";
import { createRevealStatsStore, REVEAL_STATS_KEY } from "./badge-stats-storage.js";

function memoryStorage(initial = {}) {
  const data = new Map(Object.entries(initial));
  return {
    data,
    getItem: (key) => data.get(key) ?? null,
    setItem: (key, value) => data.set(key, value),
    removeItem: (key) => data.delete(key)
  };
}

test("une bascule inter-collection incrémente externalCollectionMatches", () => {
  const store = createRevealStatsStore({ storage: memoryStorage() });
  store.recordExternalCollectionMatch({ collectionId: "porters-stouts" });
  assert.equal(store.getState().externalCollectionMatches, 1);
});

test("sessionCollectionIds n'est jamais restauré dans une nouvelle session", () => {
  const storage = memoryStorage();
  const firstSession = createRevealStatsStore({ storage });
  firstSession.recordNewDiscovery({ collectionId: "lagers-et-fermentations-basses" });
  firstSession.recordNewDiscovery({ collectionId: "porters-stouts" });
  assert.deepEqual(firstSession.getState().sessionCollectionIds, ["lagers-et-fermentations-basses", "porters-stouts"]);

  const persisted = JSON.parse(storage.data.get(REVEAL_STATS_KEY));
  assert.equal(Object.hasOwn(persisted, "sessionCollectionIds"), false);

  const secondSession = createRevealStatsStore({ storage });
  assert.deepEqual(secondSession.getState().sessionCollectionIds, []);
  assert.equal(secondSession.getState().validAttempts, 2, "les statistiques de vie restent persistées");
});

test("un ancien sessionCollectionIds persisté est ignoré", () => {
  const storage = memoryStorage({
    [REVEAL_STATS_KEY]: JSON.stringify({
      schemaVersion: 1,
      validAttempts: 12,
      sessionCollectionIds: ["porters-stouts", "appellations-commerciales"]
    })
  });
  const store = createRevealStatsStore({ storage });
  assert.equal(store.getState().validAttempts, 12);
  assert.deepEqual(store.getState().sessionCollectionIds, []);
});

test("une écriture refusée ne modifie pas les statistiques durables ni de session", () => {
  const storage = {
    getItem: () => null,
    setItem: () => { throw new Error("storage disabled"); }
  };
  const store = createRevealStatsStore({ storage });
  const result = store.recordNewDiscovery({ collectionId: "porters-stouts" });
  assert.equal(result.ok, false);
  assert.equal(store.getState().validAttempts, 0);
  assert.deepEqual(store.getState().sessionCollectionIds, []);
});
