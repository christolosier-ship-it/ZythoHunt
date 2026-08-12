import { BADGE_DEFINITIONS } from "./badge-definitions.js";
import { getClassicCollectionEntries } from "../data/secret-collection-rules.js";
import { BADGE_EVENT_TYPES, isBadgeEventEligible } from "./badge-events.js";

function collectionEntries(ctx) { return ctx.collectionCatalog || ctx.collectionBundles || []; }
function classicEntries(ctx) { return getClassicCollectionEntries(collectionEntries(ctx)); }
function collectionIds(ctx) { return classicEntries(ctx).map((entry) => entry?.collection?.id || entry?.id).filter(Boolean); }
function progress(ctx, id) { return ctx.discoveryRegistry?.getCollectionProgress(id) || { discovered: 0, total: 0, ratio: 0 }; }
function total(ctx) {
  return collectionIds(ctx).reduce((acc, id) => {
    const item = progress(ctx, id);
    acc.discovered += Number(item.discovered || 0);
    acc.total += Number(item.total || 0);
    acc.ratio = acc.total ? acc.discovered / acc.total : 0;
    return acc;
  }, { discovered: 0, total: 0, ratio: 0 });
}
function stats(ctx) { return ctx.revealStatsStore?.getState?.() || ctx.revealStats || {}; }
function daysBetween(a, b) { return (new Date(b).getTime() - new Date(a).getTime()) / 86400000; }
function eventDate(ctx) { return ctx.event?.at ? new Date(ctx.event.at) : (ctx.now ? ctx.now() : new Date()); }
function hasClassicEvent(ctx, type) { return Boolean(ctx.event?.type === type && isBadgeEventEligible(ctx.event, collectionIds(ctx))); }

export function isBadgeConditionMet(badge, ctx) {
  const c = badge.condition || {};
  const s = stats(ctx);
  const ids = collectionIds(ctx);
  switch (c.type) {
    case "totalDiscoveredAtLeast": return total(ctx).discovered >= c.count;
    case "totalDiscoveredEquals": return total(ctx).discovered === c.count;
    case "collectionDiscoveredAtLeast": return progress(ctx, c.collectionId || badge.collectionId).discovered >= c.count;
    case "collectionComplete": { const p = progress(ctx, c.collectionId || badge.collectionId); return p.total > 0 && p.discovered >= p.total; }
    case "allCollectionsDiscoveredAtLeast": return ids.length > 0 && ids.every((id) => progress(ctx, id).discovered >= c.count);
    case "allCollectionsRatioAtLeast": return ids.length > 0 && ids.every((id) => { const p = progress(ctx, id); return p.total > 0 && p.discovered >= Math.ceil(p.total * c.ratio); });
    case "unknownAttemptsAtLeast": return (s.unknownAttempts || 0) >= c.count;
    case "unknownStreakAtLeast": return (s.bestUnknownStreak || 0) >= c.count;
    case "alreadyDiscoveredAttemptsAtLeast": return (s.alreadyDiscoveredAttempts || 0) >= c.count;
    case "externalCollectionMatchesAtLeast": return (s.externalCollectionMatches || 0) >= c.count;
    case "unknownStreakThenValid": return hasClassicEvent(ctx, BADGE_EVENT_TYPES.NEW_DISCOVERY) && (ctx.previousRevealStats?.currentUnknownStreak || 0) >= c.count;
    case "alreadyDiscoveredAfterNewDiscovery": return hasClassicEvent(ctx, BADGE_EVENT_TYPES.ALREADY_DISCOVERED) && ctx.previousRevealStats?.lastDiscoveryWasNew === true;
    case "lastCardInCollection": { if (!hasClassicEvent(ctx, BADGE_EVENT_TYPES.NEW_DISCOVERY)) return false; const p = progress(ctx, ctx.event.collectionId); return p.total > 0 && p.discovered === p.total; }
    case "revealedAfterMidnight": { if (!hasClassicEvent(ctx, BADGE_EVENT_TYPES.NEW_DISCOVERY)) return false; const hour = eventDate(ctx).getHours(); return hour >= 0 && hour < 5; }
    case "revealedBeforeHour": return hasClassicEvent(ctx, BADGE_EVENT_TYPES.NEW_DISCOVERY) && eventDate(ctx).getHours() < c.hour;
    case "backAfterDaysWithoutDiscovery": return hasClassicEvent(ctx, BADGE_EVENT_TYPES.NEW_DISCOVERY) && Boolean(ctx.previousRevealStats?.lastDiscoveryAt) && daysBetween(ctx.previousRevealStats.lastDiscoveryAt, ctx.event.at) >= c.days;
    case "collectionsInSessionAtLeast": return (s.sessionCollectionIds || []).filter((id) => ids.includes(id)).length >= c.count;
    case "allCollectionsInSession": return ids.length > 0 && ids.every((id) => (s.sessionCollectionIds || []).includes(id));
    case "finalCardDiscovered": { const p = total(ctx); return hasClassicEvent(ctx, BADGE_EVENT_TYPES.NEW_DISCOVERY) && p.total > 0 && p.discovered >= p.total; }
    default: return false;
  }
}

export function getBadgeProgress(badge, ctx) {
  const c = badge.condition || {};
  let current;
  let target;
  let unit = "count";
  const ids = collectionIds(ctx);
  if (["totalDiscoveredAtLeast", "totalDiscoveredEquals"].includes(c.type)) { current = total(ctx).discovered; target = c.count; }
  else if (c.type === "collectionDiscoveredAtLeast") { current = progress(ctx, c.collectionId || badge.collectionId).discovered; target = c.count; }
  else if (c.type === "collectionComplete") { const p = progress(ctx, c.collectionId || badge.collectionId); current = p.discovered; target = p.total; }
  else if (c.type === "allCollectionsDiscoveredAtLeast") { current = ids.length ? Math.min(...ids.map((id) => progress(ctx, id).discovered)) : 0; target = c.count; }
  else if (c.type === "allCollectionsRatioAtLeast") { current = ids.length ? Math.min(...ids.map((id) => progress(ctx, id).ratio)) : 0; target = c.ratio; unit = "ratio"; }
  else if (c.type === "unknownAttemptsAtLeast") { current = stats(ctx).unknownAttempts || 0; target = c.count; unit = "attempt"; }
  else if (c.type === "unknownStreakAtLeast") { current = stats(ctx).bestUnknownStreak || 0; target = c.count; unit = "attempt"; }
  else if (c.type === "alreadyDiscoveredAttemptsAtLeast") { current = stats(ctx).alreadyDiscoveredAttempts || 0; target = c.count; unit = "repeat"; }
  else if (c.type === "externalCollectionMatchesAtLeast") { current = stats(ctx).externalCollectionMatches || 0; target = c.count; unit = "switch"; }
  else return null;
  const safeCurrent = Number(current || 0);
  const safeTarget = Number(target || 0);
  return { current: safeCurrent, target: safeTarget, ratio: safeTarget ? Math.min(safeCurrent / safeTarget, 1) : 0, unit };
}

/**
 * @param {{
 *   badgeStore?: any,
 *   discoveryRegistry?: any,
 *   revealStatsStore?: any,
 *   collectionBundles?: any[],
 *   collectionCatalog?: any[],
 *   definitions?: any[],
 *   now?: (() => Date) | null
 * }} [options]
 */
export function createBadgeEngine({ badgeStore, discoveryRegistry, revealStatsStore, collectionBundles, collectionCatalog, definitions = BADGE_DEFINITIONS, now } = {}) {
  const base = () => ({ discoveryRegistry, revealStatsStore, collectionBundles, collectionCatalog, now });
  const classicIds = () => collectionIds(base());
  return {
    evaluate({ event = null, previousRevealStats = null, archive = false, silent = false } = {}) {
      if (event && !isBadgeEventEligible(event, classicIds())) return [];
      const unlocked = [];
      const ctx = { ...base(), event, previousRevealStats };
      for (const badge of definitions) {
        if (badgeStore.isUnlocked(badge.id) || !isBadgeConditionMet(badge, ctx)) continue;
        const unlockedAt = event?.at || (now ? now() : new Date()).toISOString();
        const result = badgeStore.unlock(badge, unlockedAt, { seen: archive || silent });
        if (result?.item) unlocked.push(result.item);
      }
      return unlocked;
    },
    getProgress: (badge) => getBadgeProgress(badge, base()),
    getClassicCollectionIds: () => [...classicIds()]
  };
}
