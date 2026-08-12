import test from "node:test";
import assert from "node:assert/strict";
import { createRevealStatsStore, REVEAL_STATS_KEY } from "./badge-stats-storage.js";
import { BADGE_EVENT_TYPES, createBadgeEvent } from "./badge-events.js";

function memoryStorage(initial = {}) {
  const data = new Map(Object.entries(initial));
  return {
    data,
    getItem: (key) => data.get(key) ?? null,
    setItem: (key, value) => data.set(key, value),
    removeItem: (key) => data.delete(key)
  };
}

test("une nouvelle découverte ajoute seule sa collection à la session", () => {
  const store = createRevealStatsStore({ storage: memoryStorage() });
  store.recordEvent(createBadgeEvent({ type: BADGE_EVENT_TYPES.NEW_DISCOVERY, collectionId: "a" }));
  store.recordEvent(createBadgeEvent({ type: BADGE_EVENT_TYPES.ALREADY_DISCOVERED, collectionId: "b" }));
  assert.deepEqual(store.getState().sessionCollectionIds, ["a"]);
});

test("une carte déjà découverte coupe une série d'erreurs", () => {
  const store = createRevealStatsStore({ storage: memoryStorage() });
  for (let index = 0; index < 4; index += 1) {
    store.recordEvent(createBadgeEvent({ type: BADGE_EVENT_TYPES.UNKNOWN, collectionId: "a" }));
  }
  assert.equal(store.getState().currentUnknownStreak, 4);
  store.recordEvent(createBadgeEvent({ type: BADGE_EVENT_TYPES.ALREADY_DISCOVERED, collectionId: "a" }));
  assert.equal(store.getState().currentUnknownStreak, 0);
});

test("une bascule externe est une métadonnée de la tentative réelle, pas une seconde tentative", () => {
  const store = createRevealStatsStore({ storage: memoryStorage() });
  store.recordEvent(createBadgeEvent({ type: BADGE_EVENT_TYPES.NEW_DISCOVERY, collectionId: "b", sourceCollectionId: "a", externalMatch: true }));
  const state = store.getState();
  assert.equal(state.totalAttempts, 1);
  assert.equal(state.validAttempts, 1);
  assert.equal(state.externalCollectionMatches, 1);
  assert.deepEqual(state.sessionCollectionIds, ["b"]);
});

test("les champs de session ne sont jamais restaurés ni persistés", () => {
  const storage = memoryStorage();
  const firstSession = createRevealStatsStore({ storage });
  firstSession.recordEvent(createBadgeEvent({ type: BADGE_EVENT_TYPES.UNKNOWN, collectionId: "a" }));
  firstSession.recordEvent(createBadgeEvent({ type: BADGE_EVENT_TYPES.NEW_DISCOVERY, collectionId: "a" }));
  firstSession.recordEvent(createBadgeEvent({ type: BADGE_EVENT_TYPES.NEW_DISCOVERY, collectionId: "b" }));
  assert.deepEqual(firstSession.getState().sessionCollectionIds, ["a", "b"]);

  const persisted = JSON.parse(storage.data.get(REVEAL_STATS_KEY));
  assert.equal(Object.hasOwn(persisted, "sessionCollectionIds"), false);
  assert.equal(Object.hasOwn(persisted, "currentUnknownStreak"), false);
  assert.equal(Object.hasOwn(persisted, "lastOutcome"), false);
  assert.equal(Object.hasOwn(persisted, "lastDiscoveryWasNew"), false);

  const secondSession = createRevealStatsStore({ storage });
  assert.deepEqual(secondSession.getState().sessionCollectionIds, []);
  assert.equal(secondSession.getState().currentUnknownStreak, 0);
  assert.equal(secondSession.getState().lastOutcome, null);
  assert.equal(secondSession.getState().lastDiscoveryWasNew, false);
  assert.equal(secondSession.getState().validAttempts, 2);
});

test("le record historique d'erreurs reste conservé entre les sessions", () => {
  const storage = memoryStorage();
  const first = createRevealStatsStore({ storage });
  first.recordEvent(createBadgeEvent({ type: BADGE_EVENT_TYPES.UNKNOWN, collectionId: "a" }));
  first.recordEvent(createBadgeEvent({ type: BADGE_EVENT_TYPES.UNKNOWN, collectionId: "a" }));
  assert.equal(first.getState().bestUnknownStreak, 2);
  const second = createRevealStatsStore({ storage });
  assert.equal(second.getState().bestUnknownStreak, 2);
  assert.equal(second.getState().currentUnknownStreak, 0);
});

test("une écriture refusée ne modifie ni les statistiques ni la session", () => {
  const storage = { getItem: () => null, setItem: () => { throw new Error("storage disabled"); } };
  const store = createRevealStatsStore({ storage });
  const result = store.recordEvent(createBadgeEvent({ type: BADGE_EVENT_TYPES.NEW_DISCOVERY, collectionId: "a" }));
  assert.equal(result.ok, false);
  assert.equal(store.getState().validAttempts, 0);
  assert.deepEqual(store.getState().sessionCollectionIds, []);
});
