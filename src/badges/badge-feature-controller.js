import { BADGE_DEFINITIONS } from "./badge-definitions.js";
import { createBadgeStore } from "./badge-storage.js";
import { createRevealStatsStore } from "./badge-stats-storage.js";
import { createBadgeEngine } from "./badge-engine.js";
import { BADGE_EVENT_TYPES, createBadgeEvent, isBadgeEventEligible } from "./badge-events.js";
import { notifyBadgesUnlocked, showBadgeToast } from "./badge-notifications.js";
import { getClassicCollectionEntries } from "../data/secret-collection-rules.js";

function notificationLabel(settingsStore) {
  if (settingsStore?.getState?.().notificationsEnabled === false) return "désactivées";
  if (!globalThis.Notification) return "non disponibles";
  if (Notification.permission === "granted") return "activées";
  if (Notification.permission === "denied") return "refusées";
  return "à autoriser";
}

/**
 * @param {{ root?: HTMLElement | null, navigation?: any, discoveryRegistry?: any, collectionCatalog?: any[], settingsStore?: any, onPersistenceError?: ((detail: any) => void) | null }} [options]
 */
export function createBadgeFeatureController({ root, navigation, discoveryRegistry, collectionCatalog = [], settingsStore = null, onPersistenceError = null } = {}) {
  const badgeStore = createBadgeStore({ onPersistenceError });
  const revealStatsStore = createRevealStatsStore({ onPersistenceError });
  const badgeEngine = createBadgeEngine({ badgeStore, discoveryRegistry, revealStatsStore, collectionCatalog });
  const classicIds = new Set(getClassicCollectionEntries(collectionCatalog).map((entry) => entry?.collection?.id || entry?.id).filter(Boolean));
  let badgesView = null;
  let badgesViewPromise = null;
  let pendingExternalMatch = null;

  async function ensureView() {
    if (badgesView) return badgesView;
    if (!root) return null;
    if (!badgesViewPromise) {
      badgesViewPromise = Promise.all([import("./badges-view.js"), import("./badges.css")]).then(([{ createBadgesView }]) => {
        badgesView = createBadgesView({
          root,
          badgeStore,
          badgeEngine,
          definitions: BADGE_DEFINITIONS,
          getNotificationStatus: () => notificationLabel(settingsStore)
        });
        badgesView.mount();
        return badgesView;
      }).catch((error) => { badgesViewPromise = null; throw error; });
    }
    return badgesViewPromise;
  }

  async function openBadge(badgeId) {
    navigation?.showView?.("badges");
    const view = await ensureView();
    view?.openBadge?.(badgeId);
  }

  function notificationOptions() {
    return {
      onViewBadge: (badgeId) => { void openBadge(badgeId); },
      systemNotificationsEnabled: settingsStore?.getState?.().notificationsEnabled !== false
    };
  }

  /** @param {{ collectionId?: string | null, cardId?: string | null }} [result] @param {string | null} [sourceCollectionId] */
  function noteExternalMatch(result = {}, sourceCollectionId = null) {
    pendingExternalMatch = { sourceCollectionId, targetCollectionId: result.collectionId || null, cardId: result.cardId || null, expiresAt: Date.now() + 30000 };
  }

  function consumeExternalMatch(collectionId, cardId) {
    const pending = pendingExternalMatch;
    if (!pending) return { externalMatch: false, sourceCollectionId: collectionId };
    const expired = Date.now() > pending.expiresAt;
    const matches = !expired && pending.targetCollectionId === collectionId && pending.cardId === cardId;
    if (expired || matches) pendingExternalMatch = null;
    return matches ? { externalMatch: true, sourceCollectionId: pending.sourceCollectionId } : { externalMatch: false, sourceCollectionId: collectionId };
  }
  function clearPendingExternalMatch() { pendingExternalMatch = null; }

  /** @param {{ type: "unknown" | "already-discovered" | "new-discovery", collectionId: string, sourceCollectionId?: string | null, cardId?: string | null, externalMatch?: boolean, at?: string }} eventData */
  function recordEvent({ type, collectionId, sourceCollectionId = collectionId, cardId = null, externalMatch = false, at = new Date().toISOString() }) {
    const event = createBadgeEvent({ type, collectionId, sourceCollectionId, cardId, externalMatch, at });
    if (!isBadgeEventEligible(event, classicIds)) return [];
    const previousRevealStats = revealStatsStore.getState();
    const persisted = revealStatsStore.recordEvent(event);
    if (!persisted.ok) return [];
    discoveryRegistry?.refresh?.();
    const items = badgeEngine.evaluate({ event, previousRevealStats });
    badgesView?.refresh?.();
    if (items.length) void notifyBadgesUnlocked(items, notificationOptions());
    return items;
  }

  function reconcile({ announce = true } = {}) {
    discoveryRegistry?.refresh?.();
    const items = badgeEngine.evaluate({ archive: true });
    badgesView?.refresh?.();
    if (announce && items.length) showBadgeToast(items, `Archives mises à jour : ${items.length} badge${items.length > 1 ? "s" : ""} retrouvé${items.length > 1 ? "s" : ""}.`);
    return items;
  }

  async function handleViewChange(viewId) {
    if (viewId !== "badges") return;
    const wasMounted = Boolean(badgesView);
    const view = await ensureView();
    if (wasMounted) view?.refresh?.();
  }

  function installNotificationNavigation() {
    const serviceWorker = globalThis.navigator?.serviceWorker;
    const handler = (event) => { if (event.data?.type === "OPEN_BADGE" && event.data.badgeId) void openBadge(event.data.badgeId); };
    serviceWorker?.addEventListener?.("message", handler);
    const url = globalThis.location ? new URL(globalThis.location.href) : null;
    const badgeId = url?.searchParams.get("badge");
    if (badgeId) {
      url.searchParams.delete("badge");
      globalThis.history?.replaceState?.({}, "", `${url.pathname}${url.search}${url.hash}`);
      void openBadge(badgeId);
    }
    return () => serviceWorker?.removeEventListener?.("message", handler);
  }

  function start() {
    reconcile({ announce: true });
    const pending = badgeStore.takeQueue().map((item) => ({ ...item, badge: BADGE_DEFINITIONS.find((badge) => badge.id === item.badgeId) })).filter((item) => item.badge);
    if (pending.length) void notifyBadgesUnlocked(pending, notificationOptions());
    return installNotificationNavigation();
  }

  return {
    start,
    handleViewChange,
    openBadge,
    reconcile,
    noteExternalMatch,
    consumeExternalMatch,
    clearPendingExternalMatch,
    refreshView: () => badgesView?.refresh?.(),
    recordUnknown({ collectionId, input: _input }) { return recordEvent({ type: BADGE_EVENT_TYPES.UNKNOWN, collectionId }); },
    recordAlreadyDiscovered({ collectionId, card }) { const meta = consumeExternalMatch(collectionId, card?.id); return recordEvent({ type: BADGE_EVENT_TYPES.ALREADY_DISCOVERED, collectionId, cardId: card?.id || null, ...meta }); },
    recordNewDiscovery({ collectionId, card }) { const meta = consumeExternalMatch(collectionId, card?.id); return recordEvent({ type: BADGE_EVENT_TYPES.NEW_DISCOVERY, collectionId, cardId: card?.id || null, ...meta }); },
    getStore: () => badgeStore,
    getStats: () => revealStatsStore.getState(),
    getEngine: () => badgeEngine
  };
}
