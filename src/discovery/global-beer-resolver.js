import { normalizeBeerName } from "./normalize-text.js";

let sharedSearchIndexPromise = null;

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

function getSearchIndexUrl() {
  if (typeof document !== "undefined" && document.baseURI) {
    return new URL("beer-search-index.json", document.baseURI).href;
  }
  return "beer-search-index.json";
}

async function loadDefaultSearchIndex() {
  if (!sharedSearchIndexPromise) {
    sharedSearchIndexPromise = fetch(getSearchIndexUrl(), { cache: "force-cache" })
      .then((response) => {
        if (!response.ok) throw new Error(`Index de recherche indisponible (${response.status})`);
        return response.json();
      })
      .then((payload) => {
        if (!payload || payload.schemaVersion !== 1 || typeof payload.aliases !== "object") {
          throw new Error("Index de recherche invalide");
        }
        return payload;
      })
      .catch((error) => {
        sharedSearchIndexPromise = null;
        throw error;
      });
  }
  return sharedSearchIndexPromise;
}

/**
 * Compatibilité tests/outils : avec un tableau de bundles complets, le résolveur
 * reste synchrone. Au runtime, il consulte l'index léger généré au build et ne
 * charge plus les bundles complets pour chercher une correspondance.
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
    loadSearchIndex = loadDefaultSearchIndex
  } = source || {};
  const preferredId = source?.preferredCollectionId || preferredCollectionId || preferredBundle?.collection?.id;
  const preferredAliases = new Map();
  const allowedCollectionIds = new Set(
    collectionCatalog
      .map((entry) => entry?.collection?.id || entry?.id)
      .filter(Boolean)
  );

  indexBundle(preferredAliases, preferredBundle);

  return {
    async resolve(input) {
      const key = normalizeBeerName(input);
      if (!key) return { status: "unknown" };

      const preferredMatches = preferredAliases.get(key) || [];
      if (preferredMatches.length) return pickMatch(preferredMatches, preferredId);

      const searchIndex = await loadSearchIndex();
      const indexedMatches = Array.isArray(searchIndex?.aliases?.[key])
        ? searchIndex.aliases[key].filter((candidate) => allowedCollectionIds.has(candidate.collectionId))
        : [];

      return pickMatch(indexedMatches, preferredId);
    }
  };
}
