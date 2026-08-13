import { normalizeBeerName } from "../discovery/normalize-text.js";
import { sensoryMatcher } from "./sensory-matcher.js";
import { compareTastingToStyle } from "./tasting-comparison.js";
import { createTastingStore } from "./tasting-storage.js";

function localAssetUrl(path) {
  return new URL(String(path).replace(/^\//, ""), document.baseURI).href;
}

function buildStyleIndex(payload) {
  const byKey = new Map();
  Object.entries(payload?.aliases || {}).forEach(([alias, candidates]) => {
    (candidates || []).forEach((candidate) => {
      const key = `${candidate.collectionId}:${candidate.cardId}`;
      const existing = byKey.get(key) || {
        collectionId: candidate.collectionId,
        collectionName: candidate.collectionName,
        cardId: candidate.cardId,
        name: candidate.cardName,
        searchTerms: new Set()
      };
      existing.searchTerms.add(alias);
      existing.searchTerms.add(normalizeBeerName(candidate.cardName));
      byKey.set(key, existing);
    });
  });
  return [...byKey.values()]
    .map((entry) => ({ ...entry, searchTerms: [...entry.searchTerms] }))
    .sort((a, b) => a.name.localeCompare(b.name, "fr"));
}

/**
 * @param {{
 *   root?: HTMLElement | null,
 *   collectionCatalog?: any[],
 *   loadCollectionBundle?: ((collectionId: string) => Promise<any>) | null,
 *   fetchImpl?: typeof fetch,
 *   storage?: Storage | any,
 *   onNotice?: ((detail: { message: string, tone?: "info" | "warning" | "error" | "success", duration?: number | null }) => void) | null
 * }} [options]
 */
export function createTastingController({
  root,
  collectionCatalog = [],
  loadCollectionBundle = null,
  fetchImpl = globalThis.fetch?.bind(globalThis),
  storage = globalThis.localStorage,
  onNotice = null
} = {}) {
  let view = null;
  let viewPromise = null;
  let styleIndex = null;
  let styleIndexPromise = null;

  /**
   * @param {string} message
   * @param {"info" | "warning" | "error" | "success"} [tone]
   * @param {number | null} [duration]
   */
  function notice(message, tone = "info", duration = 6000) {
    onNotice?.({ message, tone, duration });
  }

  const store = createTastingStore({
    storage,
    onPersistenceError: () => notice("Le carnet de dégustation local n'est pas accessible sur cet appareil.", "warning", 8000)
  });

  async function loadStylesFromBundles() {
    if (!loadCollectionBundle) return [];
    const entries = collectionCatalog.filter(({ collection }) => collection?.id !== "bizarre-et-insolite" && collection?.searchable !== false);
    const bundles = await Promise.all(entries.map(async ({ collection }) => ({
      collection,
      bundle: await loadCollectionBundle(collection.id)
    })));
    return bundles.flatMap(({ collection, bundle }) => (bundle.cards || []).map((card) => ({
      collectionId: collection.id,
      collectionName: collection.name || collection.nom || collection.id,
      cardId: card.id,
      name: card.name,
      searchTerms: [normalizeBeerName(card.name), ...(card.aliases || []).map(normalizeBeerName)]
    }))).sort((a, b) => a.name.localeCompare(b.name, "fr"));
  }

  async function ensureStyleIndex() {
    if (styleIndex) return styleIndex;
    if (!styleIndexPromise) {
      styleIndexPromise = (async () => {
        try {
          if (!fetchImpl) throw new Error("fetch indisponible");
          const response = await fetchImpl(localAssetUrl("beer-search-index.json"), { cache: "force-cache" });
          if (!response.ok) throw new Error(`Index de styles indisponible (${response.status}).`);
          styleIndex = buildStyleIndex(await response.json());
        } catch (error) {
          console.warn("Tasting style index fallback", error);
          styleIndex = await loadStylesFromBundles();
        }
        return styleIndex;
      })().catch((error) => {
        styleIndexPromise = null;
        throw error;
      });
    }
    return styleIndexPromise;
  }

  function findStyle(collectionId, cardId) {
    return styleIndex?.find((style) => style.collectionId === collectionId && style.cardId === cardId) || null;
  }

  function enrichMatch(entry) {
    const style = findStyle(entry.collectionId, entry.cardId);
    return {
      ...entry,
      name: style?.name || entry.cardId,
      collectionName: style?.collectionName || entry.collectionId
    };
  }

  async function matchDraft(draft) {
    await ensureStyleIndex();
    const result = sensoryMatcher.match(draft);
    return {
      ...result,
      results: result.results.map(enrichMatch),
      overlays: result.overlays.map(enrichMatch)
    };
  }

  function getSnapshot() {
    const list = store.list();
    return { ok: list.ok, tastings: list.items, error: list.error };
  }

  function getTasting(id) {
    return store.get(id);
  }

  function saveTasting(draft, id = null) {
    const result = id ? store.update(id, draft) : store.create(draft);
    if (!result.ok) {
      notice("La dégustation n'a pas pu être enregistrée. Rien n'a été perdu dans le carnet existant.", "warning", 9000);
      return result;
    }
    notice(id ? "Dégustation mise à jour." : "Dégustation ajoutée au carnet.", "success", 4000);
    view?.refresh?.();
    return result;
  }

  function deleteTasting(id) {
    const result = store.remove(id);
    if (!result.ok) {
      notice("La dégustation n'a pas pu être supprimée.", "warning", 8000);
      return result;
    }
    if (result.removed) notice("Dégustation supprimée du carnet.", "success", 3500);
    view?.refresh?.();
    return result;
  }

  async function searchStyles(query = "", { limit = 12 } = {}) {
    const styles = await ensureStyleIndex();
    const normalized = normalizeBeerName(query);
    if (!normalized) return styles.slice(0, limit);
    return styles
      .filter((style) => style.searchTerms.some((term) => term.includes(normalized)))
      .slice(0, limit);
  }

  async function ensureView() {
    if (view) return view;
    if (!root) return null;
    await ensureStyleIndex();
    if (!viewPromise) {
      viewPromise = Promise.all([
        import("./tasting-view.js"),
        import("./tasting.css")
      ]).then(([{ createTastingView }]) => {
        view = createTastingView({ root, controller: api });
        view.mount();
        return view;
      }).catch((error) => {
        viewPromise = null;
        throw error;
      });
    }
    return viewPromise;
  }

  async function handleViewChange(viewId) {
    if (viewId !== "degustation") return;
    const current = await ensureView();
    current?.refresh?.();
  }

  const api = {
    handleViewChange,
    getSnapshot,
    getTasting,
    saveTasting,
    deleteTasting,
    searchStyles,
    matchDraft,
    compareToStyle: (draft, style) => compareTastingToStyle(draft, style),
    findStyle,
    refresh: () => view?.refresh?.()
  };

  return api;
}
