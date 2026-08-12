import { readStoredValue, removeStoredValue, toPersistenceStatus, writeStoredValue } from "../storage/safe-storage.js";

export const ACTIVE_COLLECTION_STORAGE_KEY = "zythohunt.activeCollectionId.v1";

export function getStoredActiveCollectionId({ storage = globalThis.localStorage } = {}) {
  const result = readStoredValue(storage, ACTIVE_COLLECTION_STORAGE_KEY);
  return result.ok && result.value ? result.value : undefined;
}

export function setStoredActiveCollectionId(collectionId, { storage = globalThis.localStorage } = {}) {
  return toPersistenceStatus(writeStoredValue(storage, ACTIVE_COLLECTION_STORAGE_KEY, collectionId));
}

export function clearStoredActiveCollectionId({ storage = globalThis.localStorage } = {}) {
  return toPersistenceStatus(removeStoredValue(storage, ACTIVE_COLLECTION_STORAGE_KEY));
}
