export const SECRET_COLLECTION_ID = "bizarre-et-insolite";
export const SECRET_LOCKED_LABEL = "????";
export const SECRET_UNLOCK_RATIO = 0.5;

const collectionOf = (entry) => entry?.collection || entry || {};

export function isSecretCollection(collectionOrEntry) {
  const collection = collectionOf(collectionOrEntry);
  return Boolean(collection.secret?.enabled || collection.id === SECRET_COLLECTION_ID);
}

export function getClassicCollectionEntries(collectionCatalog = []) {
  return collectionCatalog.filter((entry) => !isSecretCollection(entry));
}

/**
 * @param {{
 *   collectionCatalog?: any[],
 *   registry?: {
 *     getCollectionProgress?: (collectionId: string) => { discovered?: number, total?: number, ratio?: number } | null
 *   } | null
 * }} [options]
 */
export function getClassicCollectionsProgress({ collectionCatalog = [], registry } = {}) {
  const entries = getClassicCollectionEntries(collectionCatalog);
  const progress = entries.reduce((acc, entry) => {
    const collection = collectionOf(entry);
    const item = registry?.getCollectionProgress?.(collection.id) || { discovered: 0, total: Number(collection.expectedCardCount || 0) };
    acc.discovered += Number(item.discovered || 0);
    acc.total += Number(item.total || collection.expectedCardCount || 0);
    return acc;
  }, { discovered: 0, total: 0, ratio: 0 });

  progress.ratio = progress.total ? progress.discovered / progress.total : 0;
  return progress;
}

/**
 * @param {{
 *   collectionCatalog?: any[],
 *   registry?: {
 *     getCollectionProgress?: (collectionId: string) => { discovered?: number, total?: number, ratio?: number } | null
 *   } | null
 * }} [options]
 */
export function getSecretCollectionState({ collectionCatalog = [], registry } = {}) {
  const secretEntry = collectionCatalog.find((entry) => isSecretCollection(entry));
  const secretCollection = collectionOf(secretEntry);
  const threshold = Number(secretCollection.secret?.unlockRatio ?? SECRET_UNLOCK_RATIO);
  const progress = getClassicCollectionsProgress({ collectionCatalog, registry });
  return {
    collectionId: secretCollection.id || SECRET_COLLECTION_ID,
    lockedLabel: secretCollection.secret?.lockedLabel || SECRET_LOCKED_LABEL,
    threshold,
    progress,
    unlocked: progress.ratio >= threshold
  };
}

export function resolveCollectionDisplayName(collectionOrEntry, secretState = null) {
  const collection = collectionOf(collectionOrEntry);
  if (isSecretCollection(collection) && !secretState?.unlocked) {
    return secretState?.lockedLabel || collection.secret?.lockedLabel || SECRET_LOCKED_LABEL;
  }
  return collection.name || collection.nom || collection.id;
}

export function canRevealSecretCollectionByClick(collectionOrEntry, secretState = null) {
  const collection = collectionOf(collectionOrEntry);
  if (!isSecretCollection(collection)) return false;
  return Boolean(secretState?.unlocked && collection.secret?.revealMode === "click-after-unlock");
}

export function isCollectionSearchable(collectionOrEntry) {
  const collection = collectionOf(collectionOrEntry);
  return collection.searchable !== false;
}
