import { readJson, toPersistenceStatus, writeJson } from "../storage/safe-storage.js";

export const BADGE_STORAGE_KEY = "zythohunt.badges.v1";
export const BADGE_QUEUE_KEY = "zythohunt.badgeQueue.v1";

const emptyBadges = () => ({ schemaVersion: 2, unlocked: {} });
const emptyQueue = () => ({ schemaVersion: 1, pending: [] });

function normalizeBadges(value) {
  const input = value?.unlocked && typeof value.unlocked === "object" ? value.unlocked : {};
  const legacy = Number(value?.schemaVersion || 1) < 2;
  const unlocked = {};

  Object.entries(input).forEach(([id, item]) => {
    const entry = item && typeof item === "object" ? item : {};
    const unlockedAt = entry.unlockedAt || null;
    unlocked[id] = {
      unlockedAt,
      seenAt: legacy ? unlockedAt : (entry.seenAt ?? null)
    };
  });

  return { schemaVersion: 2, unlocked };
}

function normalizeQueue(value) {
  return {
    schemaVersion: 1,
    pending: Array.isArray(value?.pending) ? value.pending : []
  };
}

export function createBadgeStore({ storage = globalThis.localStorage, onPersistenceError = null } = {}) {
  let state = normalizeBadges(readJson(storage, BADGE_STORAGE_KEY, emptyBadges).value);
  let queue = normalizeQueue(readJson(storage, BADGE_QUEUE_KEY, emptyQueue).value);

  function report(key, result) {
    if (!result.ok) onPersistenceError?.({ scope: "badges", key, error: result.error });
    return toPersistenceStatus(result);
  }

  function save(nextState) {
    return report(BADGE_STORAGE_KEY, writeJson(storage, BADGE_STORAGE_KEY, nextState));
  }

  function saveQueue(nextQueue) {
    return report(BADGE_QUEUE_KEY, writeJson(storage, BADGE_QUEUE_KEY, nextQueue));
  }

  return {
    getState: () => ({
      schemaVersion: 2,
      unlocked: Object.fromEntries(Object.entries(state.unlocked).map(([id, item]) => [id, { ...item }]))
    }),
    getUnlockedEntries: () => Object.entries(state.unlocked).map(([badgeId, item]) => ({ badgeId, ...item })),
    isUnlocked: (id) => Boolean(state.unlocked[id]),
    isNew: (id) => Boolean(state.unlocked[id] && !state.unlocked[id].seenAt),
    getUnlocked: (id) => state.unlocked[id] ? { ...state.unlocked[id] } : null,
    unlock(badge, unlockedAt = new Date().toISOString(), { seen = false } = {}) {
      if (this.isUnlocked(badge.id)) {
        return { ok: true, persisted: true, status: "already-unlocked", item: null, error: null };
      }

      const nextState = {
        schemaVersion: 2,
        unlocked: { ...state.unlocked, [badge.id]: { unlockedAt, seenAt: seen ? unlockedAt : null } }
      };
      const persistence = save(nextState);
      if (!persistence.ok) return { ...persistence, status: "storage-failed", item: null };
      state = nextState;
      return { ...persistence, status: "unlocked", item: { badge, badgeId: badge.id, unlockedAt, seenAt: seen ? unlockedAt : null } };
    },
    markSeen(id, seenAt = new Date().toISOString()) {
      const current = state.unlocked[id];
      if (!current) return { ok: true, persisted: true, status: "missing", error: null };
      if (current.seenAt) return { ok: true, persisted: true, status: "already-seen", error: null };
      const nextState = { schemaVersion: 2, unlocked: { ...state.unlocked, [id]: { ...current, seenAt } } };
      const persistence = save(nextState);
      if (persistence.ok) state = nextState;
      return { ...persistence, status: persistence.ok ? "seen" : "storage-failed" };
    },
    enqueue(items) {
      if (!items?.length) return { ok: true, persisted: true, status: "unchanged", error: null };
      const nextQueue = { schemaVersion: 1, pending: [...queue.pending, ...items.map(({ badge, badgeId, unlockedAt }) => ({ badgeId: badgeId || badge?.id, unlockedAt }))] };
      const persistence = saveQueue(nextQueue);
      if (persistence.ok) queue = nextQueue;
      return { ...persistence, status: persistence.ok ? "queued" : "storage-failed" };
    },
    takeQueue() {
      const pending = queue.pending.slice();
      if (!pending.length) return [];
      const nextQueue = emptyQueue();
      const persistence = saveQueue(nextQueue);
      if (!persistence.ok) return [];
      queue = nextQueue;
      return pending;
    }
  };
}
