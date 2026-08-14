import { normalizeBeerName } from "../discovery/normalize-text.js";
import { sensoryProfiles as bundledSensoryProfiles } from "../data/sensory/sensory-profiles.js";
import { createSensoryMatcher } from "./sensory-matcher.js";
import { compareTastingToProfile } from "./tasting-comparison.js";

function validatePayload(payload) {
  if (!payload || payload.schemaVersion !== 3) throw new Error("Version d'index sensoriel non prise en charge.");
  if (payload.totalCards !== 251 || !Array.isArray(payload.profiles) || payload.profiles.length !== 251) {
    throw new Error(`Index sensoriel incomplet : ${payload?.profiles?.length || 0}/251 profils.`);
  }
  if (payload.profiles.some((profile) => profile.collectionId === "bizarre-et-insolite")) {
    throw new Error("La Collection 10 ne doit pas entrer dans l'index sensoriel classique.");
  }
  return payload;
}

function styleSearchTerms(profile) {
  return [
    normalizeBeerName(profile.name),
    ...(profile.aliases || []).map(normalizeBeerName)
  ].filter(Boolean);
}

/**
 * Charge le catalogue sensoriel statique. L'index JSON reste le chemin privilégié pour
 * l'offline/cache ; le fallback est exactement le même catalogue embarqué dans le module,
 * jamais une reconstruction heuristique depuis les fiches Brassopédie.
 */
export function createSensoryRuntime({
  indexUrl,
  fetchImpl = globalThis.fetch?.bind(globalThis)
}) {
  let profiles = null;
  let matcher = null;
  let loadPromise = null;
  let source = null;

  async function ensureProfiles() {
    if (profiles) return profiles;
    if (!loadPromise) {
      loadPromise = (async () => {
        let rarity = null;
        try {
          if (!fetchImpl) throw new Error("fetch indisponible");
          const response = await fetchImpl(indexUrl, { cache: "force-cache" });
          if (!response.ok) throw new Error(`Index sensoriel indisponible (${response.status}).`);
          const payload = validatePayload(await response.json());
          profiles = payload.profiles;
          rarity = payload.rarity || null;
          source = "index";
        } catch (error) {
          console.warn("Sensory runtime static catalog fallback", error);
          profiles = bundledSensoryProfiles;
          source = "bundled-catalog";
        }
        if (profiles.length !== 251) throw new Error(`Le moteur exige 251 profils, reçu ${profiles.length}.`);
        matcher = createSensoryMatcher({ profiles, rarity });
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

  async function searchStyles(query = "", { limit = 12 } = {}) {
    const currentProfiles = await ensureProfiles();
    const normalized = normalizeBeerName(query);
    const matches = normalized
      ? currentProfiles.filter((profile) => styleSearchTerms(profile).some((term) => term.includes(normalized)))
      : currentProfiles;
    return matches
      .map(({ collectionId, collectionName, cardId, name, aliases, role, verification }) => ({
        collectionId,
        collectionName,
        cardId,
        name,
        aliases,
        role,
        verification
      }))
      .sort((a, b) => a.name.localeCompare(b.name, "fr"))
      .slice(0, limit);
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
      verifiedProfiles: profiles?.filter(({ verification }) => verification?.status === "verified").length || 0,
      source
    };
  }

  return {
    ensureProfiles,
    ensureMatcher,
    match,
    searchStyles,
    findProfile,
    compareToStyle,
    getStatus
  };
}
