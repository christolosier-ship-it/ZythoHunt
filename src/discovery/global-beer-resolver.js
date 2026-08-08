import { normalizeBeerName } from "./normalize-text.js";

function indexBundle(aliases, bundle) {
  bundle?.revealableCards?.forEach((card) => {
    [card.name, ...(card.aliases || [])].forEach((alias) => {
      const key = normalizeBeerName(alias);
      if (!key) return;
      if (!aliases.has(key)) aliases.set(key, []);
      aliases.get(key).push({
        collectionId: bundle.collection.id,
        collectionName: bundle.collection.name || bundle.collection.nom || bundle.collection.id,
        cardId: card.id,
        cardName: card.name
      });
    });
  });
}

function pickMatch(matches, preferredCollectionId) {
  if (!matches.length) return { status: "unknown" };
  const match = matches.find((candidate) => candidate.collectionId === preferredCollectionId) || matches[0];
  return { status: "matched", ...match, matches };
}

/**
 * Compatibilité tests/outils : avec un tableau de bundles complets, le résolveur
 * reste synchrone. Au runtime, passer l'objet de configuration paresseux.
 */
export function createGlobalBeerResolver(source, preferredCollectionId) {
  if (Array.isArray(source)) {
    const aliases = new Map();
    source.forEach((bundle) => indexBundle(aliases, bundle));
    return {
      resolve(input) {
        return pickMatch(aliases.get(normalizeBeerName(input)) || [], preferredCollectionId);
      }
    };
  }

  const {
    preferredBundle,
    collectionCatalog = [],
    loadCollectionBundle
  } = source || {};
  const preferredId = source?.preferredCollectionId || preferredCollectionId || preferredBundle?.collection?.id;
  const aliases = new Map();
  const indexedCollections = new Set();

  function ensureIndexed(bundle) {
    const id = bundle?.collection?.id;
    if (!id || indexedCollections.has(id)) return;
    indexBundle(aliases, bundle);
    indexedCollections.add(id);
  }

  ensureIndexed(preferredBundle);

  return {
    async resolve(input) {
      const key = normalizeBeerName(input);
      if (!key) return { status: "unknown" };

      let matches = aliases.get(key) || [];
      if (matches.some((candidate) => candidate.collectionId === preferredId)) {
        return pickMatch(matches, preferredId);
      }

      for (const entry of collectionCatalog) {
        const collectionId = entry?.collection?.id || entry?.id;
        if (!collectionId || indexedCollections.has(collectionId)) continue;
        const bundle = await loadCollectionBundle(collectionId);
        ensureIndexed(bundle);
        matches = aliases.get(key) || [];
        if (matches.length) return pickMatch(matches, preferredId);
      }

      return pickMatch(aliases.get(key) || [], preferredId);
    }
  };
}
