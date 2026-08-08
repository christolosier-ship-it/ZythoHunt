import { createDiscoveryStore } from "./discovery-store.js";

const collectionOf = (entry) => entry?.collection || entry || {};

/**
 * @param {any[]} [collectionEntries]
 * @param {{
 *   getBundle?: (collectionId: string) => any,
 *   storage?: Storage | any,
 *   onPersistenceError?: ((detail: { scope: string, key: string, error: unknown }) => void) | null
 * }} [options]
 */
export function createDiscoveryRegistry(collectionEntries = [], {
  getBundle = (_collectionId) => null,
  storage = globalThis.localStorage,
  onPersistenceError = null
} = {}) {
  let stores = new Map();

  function buildStores() {
    stores = new Map(collectionEntries.map((entry) => {
      const collection = collectionOf(entry);
      return [
        collection.id,
        createDiscoveryStore({
          key: collection.discoveryKey,
          storage,
          onPersistenceError
        })
      ];
    }));
  }

  function findEntry(collectionId) {
    return collectionEntries.find((entry) => collectionOf(entry).id === collectionId) || null;
  }

  function findBundle(collectionId) {
    const loaded = getBundle?.(collectionId);
    if (loaded) return loaded;
    const entry = findEntry(collectionId);
    return Array.isArray(entry?.revealableCards) ? entry : null;
  }

  function getStore(collectionId) {
    return stores.get(collectionId);
  }

  function getExpectedTotal(collectionId) {
    const bundle = findBundle(collectionId);
    if (bundle?.revealableCards) return bundle.revealableCards.length;
    const collection = collectionOf(findEntry(collectionId));
    return Number(collection.expectedCardCount || 0);
  }

  buildStores();

  return {
    refresh() {
      buildStores();
      return this;
    },
    isDiscovered(collectionId, cardId) {
      return Boolean(getStore(collectionId)?.isDiscovered(cardId));
    },
    getDiscoveredIds(collectionId) {
      const ids = getStore(collectionId)?.getDiscoveredIds() || [];
      const bundle = findBundle(collectionId);
      if (!bundle?.revealableCards) return ids;
      const revealableIds = new Set(bundle.revealableCards.map((card) => card.id));
      return ids.filter((id) => revealableIds.has(id));
    },
    getCollectionProgress(collectionId) {
      const total = getExpectedTotal(collectionId);
      const discovered = this.getDiscoveredIds(collectionId).length;
      return { discovered, total, ratio: total ? discovered / total : 0 };
    },
    getTotalProgress() {
      return collectionEntries.reduce((acc, entry) => {
        const collection = collectionOf(entry);
        const progress = this.getCollectionProgress(collection.id);
        acc.discovered += progress.discovered;
        acc.total += progress.total;
        acc.ratio = acc.total ? acc.discovered / acc.total : 0;
        return acc;
      }, { discovered: 0, total: 0, ratio: 0 });
    }
  };
}
