import { normalizeBeerName } from "../discovery/normalize-text.js";
import { sensoryProfiles } from "../data/sensory/sensory-profiles.js";
import { createSensoryMatcher } from "./sensory-matcher.js";
import { compareTastingToProfile } from "./tasting-comparison.js";

function styleSearchTerms(profile) {
  return [
    normalizeBeerName(profile.name),
    ...(profile.aliases || []).map(normalizeBeerName)
  ].filter(Boolean);
}

/**
 * Runtime Dégustation branché directement sur le catalogue sensoriel statique des 251 cartes.
 * Aucune reconstruction heuristique, aucun index parallèle et aucun fallback vers les bundles
 * Brassopédie ne participent au matching.
 */
export function createSensoryRuntime() {
  const profiles = sensoryProfiles;
  const matcher = createSensoryMatcher({ profiles });

  async function ensureProfiles() {
    return profiles;
  }

  async function ensureMatcher() {
    return matcher;
  }

  async function match(input, options) {
    return matcher.match(input, options);
  }

  function findProfile(collectionId, cardId) {
    return profiles.find((profile) => profile.collectionId === collectionId && profile.cardId === cardId) || null;
  }

  async function searchStyles(query = "", { limit = 12 } = {}) {
    const normalized = normalizeBeerName(query);
    const matches = normalized
      ? profiles.filter((profile) => styleSearchTerms(profile).some((term) => term.includes(normalized)))
      : profiles;

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
      loaded: true,
      totalProfiles: profiles.length,
      scorableProfiles: profiles.filter(({ role }) => role !== "excluded").length,
      verifiedProfiles: profiles.filter(({ verification }) => verification?.status === "verified").length,
      source: "static-catalog"
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
