import { sensoryProfiles as curatedSensoryProfiles } from "../data/sensory/sensory-profiles.js";
import { deriveSensoryProfiles } from "../data/sensory/sensory-profile-derivation.js";
import { ensureOverlayKeyMarker } from "../data/sensory/sensory-overlay-fallbacks.js";
import { getSensoryRole } from "../data/sensory/sensory-role-map.js";
import { createSensoryMatcher } from "./sensory-matcher.js";
import { compareTastingToProfile } from "./tasting-comparison.js";

function validatePayload(payload) {
  if (!payload || payload.schemaVersion !== 2) throw new Error("Version d'index sensoriel non prise en charge.");
  if (payload.totalCards !== 251 || !Array.isArray(payload.profiles) || payload.profiles.length !== 251) {
    throw new Error(`Index sensoriel incomplet : ${payload?.profiles?.length || 0}/251 profils.`);
  }
  if (payload.profiles.some((profile) => profile.collectionId === "bizarre-et-insolite")) {
    throw new Error("La Collection 10 ne doit pas entrer dans l'index sensoriel classique.");
  }
  return payload;
}

async function deriveFromBundles(collectionCatalog, loadCollectionBundle) {
  if (!loadCollectionBundle) throw new Error("Aucun fallback de collections n'est disponible.");
  const entries = collectionCatalog.filter(({ collection }) => collection?.id !== "bizarre-et-insolite");
  const bundles = await Promise.all(entries.map(async ({ collection }) => ({
    collection,
    bundle: await loadCollectionBundle(collection.id)
  })));
  const cards = bundles.flatMap(({ collection, bundle }) => (bundle.cards || []).map((card) => ({
    collectionId: collection.id,
    collectionName: collection.name || collection.nom || collection.id,
    cardId: card.id,
    id: card.id,
    name: card.name,
    aliases: card.aliases || [],
    brassopedie: card.brassopedie
  })));
  if (cards.length !== 251) throw new Error(`Fallback sensoriel incomplet : ${cards.length}/251 cartes.`);
  return deriveSensoryProfiles({ cards, curatedProfiles: [...curatedSensoryProfiles], getRole: getSensoryRole })
    .map(ensureOverlayKeyMarker)
    .map((profile) => {
      const card = cards.find((entry) => entry.collectionId === profile.collectionId && entry.cardId === profile.cardId);
      return { ...profile, name: card?.name || profile.cardId, collectionName: card?.collectionName || profile.collectionId, aliases: card?.aliases || [] };
    });
}

/**
 * @param {{
 *   indexUrl: string,
 *   fetchImpl?: typeof fetch,
 *   collectionCatalog?: any[],
 *   loadCollectionBundle?: ((collectionId: string) => Promise<any>) | null
 * }} options
 */
export function createSensoryRuntime({
  indexUrl,
  fetchImpl = globalThis.fetch?.bind(globalThis),
  collectionCatalog = [],
  loadCollectionBundle = null
}) {
  let profiles = null;
  let matcher = null;
  let loadPromise = null;
  let source = null;

  async function ensureProfiles() {
    if (profiles) return profiles;
    if (!loadPromise) {
      loadPromise = (async () => {
        try {
          if (!fetchImpl) throw new Error("fetch indisponible");
          const response = await fetchImpl(indexUrl, { cache: "force-cache" });
          if (!response.ok) throw new Error(`Index sensoriel indisponible (${response.status}).`);
          const payload = validatePayload(await response.json());
          profiles = payload.profiles;
          source = "index";
        } catch (error) {
          console.warn("Sensory runtime index fallback", error);
          profiles = await deriveFromBundles(collectionCatalog, loadCollectionBundle);
          source = "bundles";
        }
        if (profiles.length !== 251) throw new Error(`Le moteur exige 251 profils, reçu ${profiles.length}.`);
        matcher = createSensoryMatcher({ profiles });
        return profiles;
      })().catch((error) => {
        loadPromise = null;
        throw error;
      });
    }
    return loadPromise;
  }

  async function ensureMatcher() {
    await ensureProfiles();
    return matcher;
  }

  async function match(input, options) {
    const current = await ensureMatcher();
    return current.match(input, options);
  }

  function findProfile(collectionId, cardId) {
    return profiles?.find((profile) => profile.collectionId === collectionId && profile.cardId === cardId) || null;
  }

  function compareToStyle(tasting, style) {
    if (!style?.collectionId || !style?.cardId) {
      return { available: false, summary: "Aucun style Brassopédie n’est lié à cette dégustation." };
    }
    return compareTastingToProfile(tasting, findProfile(style.collectionId, style.cardId));
  }

  function getStatus() {
    return {
      loaded: Boolean(profiles),
      totalProfiles: profiles?.length || 0,
      scorableProfiles: profiles?.filter(({ role }) => role !== "excluded").length || 0,
      source
    };
  }

  return { ensureProfiles, ensureMatcher, match, findProfile, compareToStyle, getStatus };
}
