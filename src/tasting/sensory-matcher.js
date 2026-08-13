import { sensoryProfiles } from "../data/sensory/sensory-profiles.js";
import { computeDescriptorRarity, countSensoryEvidence, scoreSensoryProfile } from "./sensory-score.js";

const DEFAULT_RARITY = computeDescriptorRarity(sensoryProfiles);

function sortByScore(a, b) {
  if (b.score !== a.score) return b.score - a.score;
  const left = `${a.collectionId}:${a.cardId}`;
  const right = `${b.collectionId}:${b.cardId}`;
  return left.localeCompare(right, "fr");
}

function qualitativeConfidence({ evidence, topScore, gap }) {
  if (evidence < 2 || topScore < 20) {
    return { id: "ambiguous", label: "Profil trop ambigu" };
  }
  const coverage = 1 - Math.exp(-evidence / 6);
  if (coverage >= 0.55 && topScore >= 72 && gap >= 8) {
    return { id: "strong", label: "Correspondance forte" };
  }
  if (coverage >= 0.4 && topScore >= 48) {
    return { id: "plausible", label: "Correspondance plausible" };
  }
  return { id: "fragile", label: "Correspondance fragile" };
}

function scoreCandidate(userProfile, candidate, rarity) {
  return {
    collectionId: candidate.collectionId,
    cardId: candidate.cardId,
    role: candidate.role,
    keyMarkers: candidate.keyMarkers || [],
    ...scoreSensoryProfile(userProfile, candidate, { rarity })
  };
}

function hasKeyMarkerEvidence(userProfile, candidate) {
  return (candidate.keyMarkers || []).some((id) => (
    Number(userProfile.nose?.[id]) > 0 || Number(userProfile.palate?.[id]) > 0
  ));
}

function selectRankedCandidates(scoredPrimaries, scoredFallbacks) {
  const primaries = [...scoredPrimaries].sort(sortByScore);
  const fallbacks = [...scoredFallbacks].sort(sortByScore);
  const bestPrimary = primaries[0];
  if (!bestPrimary) return fallbacks;
  const primaryGap = Math.max(0, bestPrimary.score - (primaries[1]?.score || 0));
  const primaryIsWellSeparated = bestPrimary.score >= 72 && primaryGap >= 8;
  if (primaryIsWellSeparated) return [...primaries, ...fallbacks];
  return [...primaries, ...fallbacks.map((entry) => ({ ...entry, score: Math.round(entry.score * 0.97 * 10) / 10 }))]
    .sort(sortByScore);
}

function normalizeUserProfile(userProfile = {}) {
  const cleanDescriptors = (value) => Object.fromEntries(
    Object.entries(value || {})
      .filter(([, intensity]) => Number.isFinite(intensity) && intensity > 0)
      .map(([id, intensity]) => [id, Math.min(3, Math.max(1, Math.round(intensity)))])
  );
  const cleanStructure = Object.fromEntries(
    Object.entries(userProfile.structure || {})
      .filter(([, value]) => Number.isFinite(value))
      .map(([id, value]) => [id, Math.min(4, Math.max(0, Math.round(value)))])
  );
  return {
    appearance: {
      color: userProfile.appearance?.color || null,
      clarity: userProfile.appearance?.clarity || null,
      foam: userProfile.appearance?.foam || null
    },
    nose: cleanDescriptors(userProfile.nose),
    palate: cleanDescriptors(userProfile.palate),
    structure: cleanStructure,
    finish: Array.isArray(userProfile.finish) ? [...new Set(userProfile.finish.filter(Boolean))].sort() : []
  };
}

export function createSensoryMatcher({ profiles = sensoryProfiles, rarity = null } = {}) {
  const safeProfiles = profiles.filter((profile) => profile?.collectionId !== "bizarre-et-insolite" && profile?.role !== "excluded");
  const rarityMap = rarity || computeDescriptorRarity(safeProfiles);

  function match(input, { limit = 3 } = {}) {
    const userProfile = normalizeUserProfile(input);
    const evidence = countSensoryEvidence(userProfile);
    if (evidence === 0) {
      return {
        profile: userProfile,
        evidence,
        confidence: qualitativeConfidence({ evidence: 0, topScore: 0, gap: 0 }),
        results: [],
        overlays: []
      };
    }

    const scoredPrimaries = safeProfiles
      .filter(({ role }) => role === "primary")
      .map((candidate) => scoreCandidate(userProfile, candidate, rarityMap));
    const scoredFallbacks = safeProfiles
      .filter(({ role }) => role === "fallback")
      .map((candidate) => scoreCandidate(userProfile, candidate, rarityMap));
    const ranked = selectRankedCandidates(scoredPrimaries, scoredFallbacks);
    const results = ranked.slice(0, Math.max(1, limit));
    const topScore = results[0]?.score || 0;
    const gap = Math.max(0, topScore - (results[1]?.score || 0));

    const overlays = safeProfiles
      .filter(({ role }) => role === "overlay")
      .filter((candidate) => hasKeyMarkerEvidence(userProfile, candidate))
      .map((candidate) => scoreCandidate(userProfile, candidate, rarityMap))
      .filter(({ score }) => score >= 48)
      .sort(sortByScore);

    return {
      profile: userProfile,
      evidence,
      confidence: qualitativeConfidence({ evidence, topScore, gap }),
      results,
      overlays
    };
  }

  return { match, profiles: safeProfiles, rarity: rarityMap };
}

export const sensoryMatcher = createSensoryMatcher({ rarity: DEFAULT_RARITY });
export { normalizeUserProfile, qualitativeConfidence };
