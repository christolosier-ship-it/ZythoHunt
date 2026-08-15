import { sensoryProfiles, getSensoryProfile } from "../data/sensory-profiles.js";
import { normalizeBeerName } from "../discovery/normalize-text.js";
import { createSensoryMatcher } from "./sensory-matcher.js";
import { compareTastingToProfile } from "./tasting-comparison.js";
import { createTastingStore } from "./tasting-storage.js";

function styleSearchTerms(profile) {
  return [
    normalizeBeerName(profile.name),
    ...(profile.aliases || []).map(normalizeBeerName)
  ].filter(Boolean);
}

/**
 * @param {{
 *   root?: HTMLElement | null,
 *   storage?: Storage | any,
 *   onNotice?: ((detail: { message: string, tone?: "info" | "warning" | "error" | "success", duration?: number | null }) => void) | null
 * }} [options]
 */
export function createTastingController({
  root,
  storage = globalThis.localStorage,
  onNotice = null
} = {}) {
  let view = null;
  let viewPromise = null;

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
  const matcher = createSensoryMatcher({ profiles: sensoryProfiles });

  async function matchDraft(draft) {
    return matcher.match(draft);
  }

  async function searchStyles(query = "", { limit = 12 } = {}) {
    const normalized = normalizeBeerName(query);
    const matches = normalized
      ? sensoryProfiles.filter((profile) => styleSearchTerms(profile).some((term) => term.includes(normalized)))
      : sensoryProfiles;

    return matches
      .map(({ collectionId, collectionName, cardId, name, aliases, type, parentPrincipalId, verification }) => ({
        collectionId,
        collectionName,
        cardId,
        name,
        aliases,
        type,
        parentPrincipalId,
        verification
      }))
      .sort((a, b) => a.name.localeCompare(b.name, "fr"))
      .slice(0, limit);
  }

  function compareToStyle(tasting, style) {
    if (!style?.collectionId || !style?.cardId) {
      return { available: false, summary: "Aucun style Brassopédie n’est lié à cette dégustation." };
    }
    return compareTastingToProfile(tasting, getSensoryProfile(style.collectionId, style.cardId));
  }

  function getSensoryStatus() {
    return {
      loaded: true,
      totalProfiles: sensoryProfiles.length,
      automaticProfiles: matcher.taxonomy.automaticProfiles.length,
      commercialProfiles: matcher.taxonomy.commercialProfiles.length,
      familyProfiles: matcher.taxonomy.familyProfiles.length,
      signatureProfiles: matcher.taxonomy.signatureProfiles.length,
      autonomousStyles: matcher.taxonomy.autonomousStyles.length,
      verifiedProfiles: sensoryProfiles.filter(({ verification }) => verification?.status === "verified").length,
      source: "static-catalog"
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

  async function ensureView() {
    if (view) return view;
    if (!root) return null;
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
    searchStyles,
    matchDraft,
    compareToStyle,
    getSensoryStatus,
    findStyle: getSensoryProfile,
    refresh: () => view?.refresh?.()
  };

  return api;
}
