import { readStoredValue, removeStoredValue, toPersistenceStatus, writeStoredValue } from "../storage/safe-storage.js";

export const ACTIVE_COLLECTION_STORAGE_KEY = "zythohunt.activeCollectionId.v1";

export function readStoredActiveCollectionId({ storage = globalThis.localStorage } = {}) {
  const result = readStoredValue(storage, ACTIVE_COLLECTION_STORAGE_KEY);
  return {
    ...toPersistenceStatus(result),
    collectionId: result.ok && result.value ? result.value : undefined
  };
}

export function getStoredActiveCollectionId(options = {}) {
  return readStoredActiveCollectionId(options).collectionId;
}

export function setStoredActiveCollectionId(collectionId, { storage = globalThis.localStorage } = {}) {
  return toPersistenceStatus(writeStoredValue(storage, ACTIVE_COLLECTION_STORAGE_KEY, collectionId));
}

export function clearStoredActiveCollectionId({ storage = globalThis.localStorage } = {}) {
  return toPersistenceStatus(removeStoredValue(storage, ACTIVE_COLLECTION_STORAGE_KEY));
}
