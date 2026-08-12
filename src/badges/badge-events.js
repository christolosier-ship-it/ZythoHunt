export const BADGE_EVENT_TYPES = Object.freeze({
  UNKNOWN: "unknown",
  ALREADY_DISCOVERED: "already-discovered",
  NEW_DISCOVERY: "new-discovery"
});

const VALID_TYPES = new Set(Object.values(BADGE_EVENT_TYPES));

export function createBadgeEvent({
  type,
  collectionId = null,
  sourceCollectionId = collectionId,
  cardId = null,
  externalMatch = false,
  at = new Date().toISOString()
} = {}) {
  if (!VALID_TYPES.has(type)) throw new Error(`Unknown badge event type: ${type}`);
  return Object.freeze({
    type,
    collectionId,
    sourceCollectionId,
    cardId,
    externalMatch: Boolean(externalMatch),
    at
  });
}

export function isBadgeEventEligible(event, collectionIds = []) {
  if (!event) return true;
  const ids = collectionIds instanceof Set ? collectionIds : new Set(collectionIds);
  return Boolean(
    event.collectionId
    && ids.has(event.collectionId)
    && (!event.sourceCollectionId || ids.has(event.sourceCollectionId))
  );
}
