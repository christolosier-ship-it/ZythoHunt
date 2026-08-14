import { computeDescriptorRarity, countSensoryEvidence, scoreSensoryProfile } from "./sensory-score.js";

const STRUCTURE_AXES = Object.freeze(["amertume", "sucrosite", "acidite", "corps", "carbonatation", "alcool"]);

function sortByScore(a, b) {
  if (b.score !== a.score) return b.score - a.score;
  if (b._observedSpecificity !== a._observedSpecificity) return b._observedSpecificity - a._observedSpecificity;
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

function observedStructureSpecificity(userProfile, candidate) {
  let comparable = 0;
  let specificity = 0;

  STRUCTURE_AXES.forEach((axis) => {
    const value = userProfile.structure?.[axis];
    const range = candidate.structure?.[axis];
    if (!Number.isFinite(value) || !Array.isArray(range) || range.length !== 2) return;
    const [min, max] = range;
    if (!Number.isFinite(min) || !Number.isFinite(max) || min > max) return;

    comparable += 1;
    if (value >= min && value <= max) specificity += 1 / (max - min + 1);
  });

  return comparable > 0 ? specificity / comparable : 0;
}

function stripRankingMetadata(entry) {
  if (!entry) return entry;
  const { _observedSpecificity, ...publicEntry } = entry;
  return publicEntry;
}

function scoreCandidate(userProfile, candidate, rarity) {
  return {
    collectionId: candidate.collectionId,
    collectionName: candidate.collectionName,
    cardId: candidate.cardId,
    name: candidate.name,
    aliases: candidate.aliases || [],
    role: candidate.role,
    verification: candidate.verification,
    keyMarkers: candidate.keyMarkers || [],
    ...scoreSensoryProfile(userProfile, candidate, { rarity }),
    _observedSpecificity: observedStructureSpecificity(userProfile, candidate)
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

/**
 * @param {{
 *   profiles?: readonly any[],
 *   rarity?: Record<string, number> | null
 * }} [options]
 */
export function createSensoryMatcher({ profiles, rarity = null } = {}) {
  if (!Array.isArray(profiles) || profiles.length !== 251) {
    throw new Error(`Le matcher exige le catalogue sensoriel complet de 251 profils, reçu ${profiles?.length || 0}.`);
  }

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
    const results = ranked.slice(0, Math.max(1, limit)).map(stripRankingMetadata);
    const topScore = results[0]?.score || 0;
    const gap = Math.max(0, topScore - (results[1]?.score || 0));

    const overlays = safeProfiles
      .filter(({ role }) => role === "overlay")
      .filter((candidate) => hasKeyMarkerEvidence(userProfile, candidate))
      .map((candidate) => scoreCandidate(userProfile, candidate, rarityMap))
      .filter(({ score }) => score >= 48)
      .sort(sortByScore)
      .map(stripRankingMetadata);

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

export { normalizeUserProfile, qualitativeConfidence };