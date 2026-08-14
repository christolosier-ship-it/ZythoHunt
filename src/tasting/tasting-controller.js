import { createSensoryRuntime } from "./sensory-runtime.js";
import { createTastingStore } from "./tasting-storage.js";

function localAssetUrl(path) {
  return new URL(String(path).replace(/^\//, ""), document.baseURI).href;
}

/**
 * @param {{
 *   root?: HTMLElement | null,
 *   fetchImpl?: typeof fetch,
 *   storage?: Storage | any,
 *   onNotice?: ((detail: { message: string, tone?: "info" | "warning" | "error" | "success", duration?: number | null }) => void) | null
 * }} [options]
 */
export function createTastingController({
  root,
  fetchImpl = globalThis.fetch?.bind(globalThis),
  storage = globalThis.localStorage,
  onNotice = null
} = {}) {
  let view = null;
  let viewPromise = null;

  function notice(message, tone = "info", duration = 6000) {
    onNotice?.({ message, tone, duration });
  }

  const store = createTastingStore({
    storage,
    onPersistenceError: () => notice("Le carnet de dégustation local n'est pas accessible sur cet appareil.", "warning", 8000)
  });

  const sensoryRuntime = createSensoryRuntime({
    indexUrl: localAssetUrl("beer-sensory-index.json"),
    fetchImpl
  });

  async function matchDraft(draft) {
    return sensoryRuntime.match(draft);
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

  async function ensureView() {
    if (view) return view;
    if (!root) return null;
    await sensoryRuntime.ensureProfiles();
    if (!viewPromise) {
      viewPromise = Promise.all([import("./tasting-view.js"), import("./tasting.css")])
        .then(([{ createTastingView }]) => {
          view = createTastingView({ root, controller: api });
          view.mount();
          return view;
        })
        .catch((error) => {
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
    searchStyles: (query, options) => sensoryRuntime.searchStyles(query, options),
    matchDraft,
    compareToStyle: (draft, style) => sensoryRuntime.compareToStyle(draft, style),
    getSensoryStatus: () => sensoryRuntime.getStatus(),
    findStyle: (collectionId, cardId) => sensoryRuntime.findProfile(collectionId, cardId),
    refresh: () => view?.refresh?.()
  };

  return api;
}
