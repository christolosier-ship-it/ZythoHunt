import { readJson, toPersistenceStatus, writeJson } from "../storage/safe-storage.js";
import { BADGE_EVENT_TYPES, createBadgeEvent } from "./badge-events.js";

export const REVEAL_STATS_KEY = "zythohunt.revealStats.v1";

export const defaultRevealStats = () => ({
  schemaVersion: 2,
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
  sessionCollectionIds: []
});

function persistentDefaults() {
  const defaults = defaultRevealStats();
  delete defaults.sessionCollectionIds;
  return defaults;
}

function read(storage) {
  const stored = readJson(storage, REVEAL_STATS_KEY, persistentDefaults).value || {};
  const { sessionCollectionIds: _legacySessionCollectionIds, ...persistent } = stored;
  return { ...persistentDefaults(), ...persistent, schemaVersion: 2 };
}

export function createRevealStatsStore({ storage = globalThis.localStorage, now = () => new Date(), onPersistenceError = null } = {}) {
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

  const addSessionCollection = (ids, collectionId) => {
    if (collectionId && !ids.includes(collectionId)) ids.push(collectionId);
  };

  const touchAttempt = (nextState, outcome, event) => {
    nextState.totalAttempts += 1;
    nextState.lastOutcome = outcome;
    if (event.externalMatch) nextState.externalCollectionMatches += 1;
  };

  function recordEvent(event) {
    if (!event?.type) return { ok: false, persisted: false, status: "invalid-event", error: new Error("Badge event missing type"), state: getState() };

    return commit((nextState, nextSessionCollectionIds) => {
      switch (event.type) {
        case BADGE_EVENT_TYPES.UNKNOWN:
          touchAttempt(nextState, "unknown", event);
          nextState.unknownAttempts += 1;
          nextState.currentUnknownStreak += 1;
          nextState.bestUnknownStreak = Math.max(nextState.bestUnknownStreak, nextState.currentUnknownStreak);
          nextState.lastDiscoveryWasNew = false;
          break;
        case BADGE_EVENT_TYPES.ALREADY_DISCOVERED:
          touchAttempt(nextState, "already-discovered", event);
          nextState.validAttempts += 1;
          nextState.alreadyDiscoveredAttempts += 1;
          nextState.currentUnknownStreak = 0;
          nextState.lastDiscoveryWasNew = false;
          break;
        case BADGE_EVENT_TYPES.NEW_DISCOVERY:
          touchAttempt(nextState, "new-discovery", event);
          nextState.validAttempts += 1;
          nextState.lastKnownDiscoveryAtBeforeCurrent = nextState.lastDiscoveryAt;
          nextState.lastDiscoveryAt = event.at || now().toISOString();
          nextState.lastUnlockedCardAt = nextState.lastDiscoveryAt;
          nextState.lastDiscoveryWasNew = true;
          nextState.currentUnknownStreak = 0;
          addSessionCollection(nextSessionCollectionIds, event.collectionId);
          break;
        default:
          throw new Error(`Unknown badge event type: ${event.type}`);
      }
    });
  }

  return {
    getState,
    recordEvent,
    recordUnknown(input = {}) {
      return recordEvent(createBadgeEvent({ type: BADGE_EVENT_TYPES.UNKNOWN, collectionId: input.collectionId || null, sourceCollectionId: input.sourceCollectionId || input.collectionId || null, at: input.at || now().toISOString() }));
    },
    recordAlreadyDiscovered(payload = {}) {
      return recordEvent(createBadgeEvent({ type: BADGE_EVENT_TYPES.ALREADY_DISCOVERED, collectionId: payload.collectionId || null, sourceCollectionId: payload.sourceCollectionId || payload.collectionId || null, cardId: payload.card?.id || payload.cardId || null, externalMatch: payload.externalMatch, at: payload.at || now().toISOString() }));
    },
    recordNewDiscovery(payload = {}) {
      return recordEvent(createBadgeEvent({ type: BADGE_EVENT_TYPES.NEW_DISCOVERY, collectionId: payload.collectionId || null, sourceCollectionId: payload.sourceCollectionId || payload.collectionId || null, cardId: payload.card?.id || payload.cardId || null, externalMatch: payload.externalMatch, at: payload.at || now().toISOString() }));
    }
  };
}
