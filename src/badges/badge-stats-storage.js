import { readJson, toPersistenceStatus, writeJson } from "../storage/safe-storage.js";

export const REVEAL_STATS_KEY = "zythohunt.revealStats.v1";

export const defaultRevealStats = () => ({
  schemaVersion: 1,
  totalAttempts: 0,
  validAttempts: 0,
  unknownAttempts: 0,
  alreadyDiscoveredAttempts: 0,
  externalCollectionMatches: 0,
  currentUnknownStreak: 0,
  bestUnknownStreak: 0,
  lastOutcome: null,
  lastUnlockedCardAt: null,
  lastDiscoveryWasNew: false,
  lastDiscoveryAt: null,
  lastKnownDiscoveryAtBeforeCurrent: null,
  // Champ volontairement éphémère. Il est exposé aux badges, mais jamais persisté.
  sessionCollectionIds: []
});

function persistentDefaults() {
  const defaults = defaultRevealStats();
  delete defaults.sessionCollectionIds;
  return defaults;
}

function read(storage) {
  const stored = /** @type {Record<string, any>} */ (
    readJson(storage, REVEAL_STATS_KEY, persistentDefaults).value || {}
  );
  // Les anciennes versions ont pu persister sessionCollectionIds. On l'ignore
  // explicitement afin qu'une nouvelle ouverture reparte toujours d'une session vide.
  const { sessionCollectionIds: _legacySessionCollectionIds, ...persistent } = stored;
  return { ...persistentDefaults(), ...persistent };
}

/**
 * @param {{
 *   storage?: Storage | any,
 *   now?: () => Date,
 *   onPersistenceError?: ((detail: { scope: string, key: string, error: unknown }) => void) | null
 * }} [options]
 */
export function createRevealStatsStore({
  storage = globalThis.localStorage,
  now = () => new Date(),
  onPersistenceError = null
} = {}) {
  let state = read(storage);
  let sessionCollectionIds = [];

  const getState = () => ({ ...state, sessionCollectionIds: [...sessionCollectionIds] });

  function persist(nextState, nextSessionCollectionIds) {
    const result = writeJson(storage, REVEAL_STATS_KEY, nextState);
    if (!result.ok) {
      onPersistenceError?.({ scope: "reveal-stats", key: REVEAL_STATS_KEY, error: result.error });
      return { ...toPersistenceStatus(result), state: getState() };
    }
    state = nextState;
    sessionCollectionIds = nextSessionCollectionIds;
    return { ...toPersistenceStatus(result), state: getState() };
  }

  function commit(mutator) {
    const nextState = { ...state };
    const nextSessionCollectionIds = [...sessionCollectionIds];
    mutator(nextState, nextSessionCollectionIds);
    return persist(nextState, nextSessionCollectionIds);
  }

  const touch = (nextState, outcome) => {
    nextState.totalAttempts += 1;
    nextState.lastOutcome = outcome;
  };

  const addSessionCollection = (nextSessionCollectionIds, collectionId) => {
    if (collectionId && !nextSessionCollectionIds.includes(collectionId)) {
      nextSessionCollectionIds.push(collectionId);
    }
  };

  return {
    getState,
    recordUnknown(_input) {
      return commit((nextState) => {
        touch(nextState, "unknown");
        nextState.unknownAttempts += 1;
        nextState.currentUnknownStreak += 1;
        nextState.bestUnknownStreak = Math.max(nextState.bestUnknownStreak, nextState.currentUnknownStreak);
      });
    },
    recordAlreadyDiscovered(payload = {}) {
      const { collectionId } = payload;
      return commit((nextState, nextSessionCollectionIds) => {
        touch(nextState, "already-discovered");
        nextState.validAttempts += 1;
        nextState.alreadyDiscoveredAttempts += 1;
        nextState.lastDiscoveryWasNew = false;
        addSessionCollection(nextSessionCollectionIds, collectionId);
      });
    },
    recordNewDiscovery(payload = {}) {
      const { collectionId } = payload;
      return commit((nextState, nextSessionCollectionIds) => {
        touch(nextState, "new-discovery");
        nextState.validAttempts += 1;
        nextState.lastKnownDiscoveryAtBeforeCurrent = nextState.lastDiscoveryAt;
        nextState.lastDiscoveryAt = now().toISOString();
        nextState.lastUnlockedCardAt = nextState.lastDiscoveryAt;
        nextState.lastDiscoveryWasNew = true;
        nextState.currentUnknownStreak = 0;
        addSessionCollection(nextSessionCollectionIds, collectionId);
      });
    },
    recordExternalCollectionMatch(result = {}) {
      return commit((nextState, nextSessionCollectionIds) => {
        touch(nextState, "external-collection");
        nextState.validAttempts += 1;
        nextState.externalCollectionMatches += 1;
        nextState.currentUnknownStreak = 0;
        addSessionCollection(nextSessionCollectionIds, result.collectionId);
      });
    }
  };
}
