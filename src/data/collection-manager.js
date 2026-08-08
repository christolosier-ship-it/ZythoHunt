/**
 * @typedef {{
 *   id: string,
 *   name?: string,
 *   nom?: string,
 *   order?: number,
 *   discoveryKey?: string,
 *   hiddenFromNavigation?: boolean,
 *   expectedCardCount?: number
 * }} CollectionMetadata
 *
 * @typedef {{
 *   collection: CollectionMetadata,
 *   cards: any[],
 *   cardsById: Record<string, any>,
 *   revealableCards: any[],
 *   validate?: () => { valid: boolean, errors: string[] }
 * }} CollectionBundle
 *
 * @typedef {{
 *   collection: CollectionMetadata,
 *   load: () => Promise<CollectionBundle>
 * }} CollectionCatalogEntry
 */

/**
 * Gestionnaire historique pour les usages qui disposent déjà des bundles complets.
 * @param {CollectionBundle[]} collectionBundles
 * @param {{ initialCollectionId?: string }} [options]
 */
export function createCollectionManager(collectionBundles, { initialCollectionId } = {}) {
  const orderedBundles = [...collectionBundles].sort((a, b) => (a.collection.order || 0) - (b.collection.order || 0));
  const bundlesById = new Map(orderedBundles.map((bundle) => [bundle.collection.id, bundle]));
  const requestedInitialBundle = initialCollectionId ? bundlesById.get(initialCollectionId) : null;
  let activeCollectionId = requestedInitialBundle?.collection.id || orderedBundles[0]?.collection.id || null;

  function getActiveBundle() {
    const bundle = activeCollectionId ? bundlesById.get(activeCollectionId) : null;
    if (!bundle) throw new Error(`Unknown active collection: ${activeCollectionId}`);
    return bundle;
  }

  function getBundle(collectionId) {
    return bundlesById.get(collectionId) || null;
  }

  return {
    listCollections: ({ includeHidden = false } = {}) => orderedBundles
      .map((bundle) => bundle.collection)
      .filter((collection) => includeHidden || collection.hiddenFromNavigation !== true),
    getBundle,
    getActiveCollectionId: () => activeCollectionId,
    getActiveBundle,
    getActiveCollection: () => getActiveBundle().collection,
    setActiveCollection(collectionId) {
      if (!bundlesById.has(collectionId)) return { status: "missing", collectionId };
      activeCollectionId = collectionId;
      return { status: "active", collectionId, bundle: getActiveBundle() };
    }
  };
}

/**
 * Gestionnaire runtime : il conserve un catalogue léger au démarrage et ne charge
 * le bundle encyclopédique d'une collection que lorsqu'il devient nécessaire.
 * @param {CollectionCatalogEntry[]} collectionCatalog
 * @param {{ initialCollectionId?: string }} [options]
 */
export function createLazyCollectionManager(collectionCatalog, { initialCollectionId } = {}) {
  const orderedEntries = [...collectionCatalog].sort((a, b) => (a.collection.order || 0) - (b.collection.order || 0));
  const entriesById = new Map(orderedEntries.map((entry) => [entry.collection.id, entry]));
  const loadedBundles = new Map();
  const loadingBundles = new Map();
  const requested = initialCollectionId ? entriesById.get(initialCollectionId) : null;
  let activeCollectionId = requested?.collection.id || orderedEntries[0]?.collection.id || null;

  function getEntry(collectionId) {
    return entriesById.get(collectionId) || null;
  }

  function getActiveEntry() {
    const entry = activeCollectionId ? getEntry(activeCollectionId) : null;
    if (!entry) throw new Error(`Unknown active collection: ${activeCollectionId}`);
    return entry;
  }

  async function loadBundle(collectionId) {
    const existing = loadedBundles.get(collectionId);
    if (existing) return existing;

    const pending = loadingBundles.get(collectionId);
    if (pending) return pending;

    const entry = getEntry(collectionId);
    if (!entry) throw new Error(`Unknown collection: ${collectionId}`);

    const promise = Promise.resolve(entry.load()).then((bundle) => {
      const validation = validateCollectionBundle(bundle);
      if (!validation.valid) {
        throw new Error(`Collection ${collectionId} invalide : ${validation.errors.join(" ")}`);
      }
      loadedBundles.set(collectionId, bundle);
      loadingBundles.delete(collectionId);
      return bundle;
    }).catch((error) => {
      loadingBundles.delete(collectionId);
      throw error;
    });

    loadingBundles.set(collectionId, promise);
    return promise;
  }

  return {
    listCollections: ({ includeHidden = false } = {}) => orderedEntries
      .map((entry) => entry.collection)
      .filter((collection) => includeHidden || collection.hiddenFromNavigation !== true),
    listEntries: ({ includeHidden = true } = {}) => orderedEntries
      .filter((entry) => includeHidden || entry.collection.hiddenFromNavigation !== true),
    getEntry,
    getBundle: (collectionId) => loadedBundles.get(collectionId) || null,
    loadBundle,
    getActiveCollectionId: () => activeCollectionId,
    getActiveCollection: () => getActiveEntry().collection,
    getActiveBundle: () => loadBundle(getActiveEntry().collection.id),
    setActiveCollection(collectionId) {
      if (!entriesById.has(collectionId)) return { status: "missing", collectionId };
      activeCollectionId = collectionId;
      return { status: "active", collectionId, bundle: loadedBundles.get(collectionId) || null };
    }
  };
}

/** @param {CollectionBundle | null | undefined} bundle */
export function validateCollectionBundle(bundle) {
  const errors = [];
  if (!bundle?.collection?.id) errors.push("Missing collection id.");
  if (!bundle?.collection?.discoveryKey) errors.push(`Missing discovery key for ${bundle?.collection?.id || "unknown collection"}.`);
  if (!Array.isArray(bundle?.cards)) errors.push("Missing cards array.");
  if (!bundle?.cardsById || typeof bundle.cardsById !== "object") errors.push("Missing cardsById mapping.");
  if (!Array.isArray(bundle?.revealableCards)) errors.push("Missing revealable cards array.");

  const validation = bundle?.validate?.();
  if (validation && !validation.valid) errors.push(...validation.errors);

  return { valid: errors.length === 0, errors };
}
