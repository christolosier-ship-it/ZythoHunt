import { computeDescriptorRarity, countSensoryEvidence, scoreSensoryProfile } from "./sensory-score.js";
import { createSensoryTaxonomy } from "./sensory-taxonomy.js";

const STRUCTURE_AXES = Object.freeze(["amertume", "sucrosite", "acidite", "corps", "carbonatation", "alcool"]);

function sortByScore(a, b) {
  if (b.score !== a.score) return b.score - a.score;
  if (b._observedSpecificity !== a._observedSpecificity) return b._observedSpecificity - a._observedSpecificity;
  const left = a.key || `${a.collectionId}:${a.cardId}`;
  const right = b.key || `${b.collectionId}:${b.cardId}`;
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

function confidenceResolvesFamily(confidence) {
  return confidence?.id === "strong" || confidence?.id === "plausible";
}

function confidenceResolvesStyle(confidence) {
  return confidence?.id === "strong";
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
    type: candidate.type,
    parentPrincipalId: candidate.parentPrincipalId || null,
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

function identity(profile) {
  if (!profile) return null;
  return {
    collectionId: profile.collectionId,
    collectionName: profile.collectionName,
    cardId: profile.cardId,
    name: profile.name,
    type: profile.type,
    parentPrincipalId: profile.parentPrincipalId || null
  };
}

function buildBranches(scoredCandidates, taxonomy) {
  const scoredByCardId = new Map(scoredCandidates.map((entry) => [entry.cardId, entry]));
  const branches = new Map();

  scoredCandidates.forEach((entry) => {
    const profile = taxonomy.byCardId.get(entry.cardId);
    if (!profile) return;
    const family = taxonomy.nearestFamily(profile);
    const key = family ? `family:${family.cardId}` : `style:${profile.cardId}`;

    if (!branches.has(key)) {
      branches.set(key, {
        key,
        family,
        members: []
      });
    }
    branches.get(key).members.push(entry);
  });

  return [...branches.values()]
    .map((branch) => {
      const members = [...branch.members].sort(sortByScore);
      const lead = members[0];
      const familyEntry = branch.family ? scoredByCardId.get(branch.family.cardId) || null : null;
      const styleEntries = members.filter((entry) => taxonomy.isStyle(taxonomy.byCardId.get(entry.cardId)));
      return {
        ...branch,
        members,
        lead,
        familyEntry,
        styleEntries,
        score: lead?.score || 0,
        _observedSpecificity: lead?._observedSpecificity || 0
      };
    })
    .sort(sortByScore);
}

function publicBranch(branch, taxonomy) {
  const representative = branch.familyEntry || branch.lead;
  return {
    score: branch.score,
    family: branch.family ? identity(branch.family) : null,
    representative: stripRankingMetadata(representative),
    path: representative
      ? taxonomy.pathOf(taxonomy.byCardId.get(representative.cardId)).map(identity)
      : []
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

  const taxonomy = createSensoryTaxonomy(profiles);
  const rarityMap = rarity || computeDescriptorRarity(taxonomy.baseProfiles);

  function match(input, { limit = 3 } = {}) {
    const userProfile = normalizeUserProfile(input);
    const evidence = countSensoryEvidence(userProfile);
    if (evidence === 0) {
      const ambiguous = qualitativeConfidence({ evidence: 0, topScore: 0, gap: 0 });
      return {
        profile: userProfile,
        evidence,
        confidence: ambiguous,
        family: null,
        familyConfidence: ambiguous,
        style: null,
        styleConfidence: ambiguous,
        styleCandidates: [],
        alternatives: [],
        signatures: []
      };
    }

    const scoredBase = taxonomy.baseProfiles
      .map((candidate) => scoreCandidate(userProfile, candidate, rarityMap));
    const branches = buildBranches(scoredBase, taxonomy);
    const topBranch = branches[0] || null;
    const branchGap = Math.max(0, (topBranch?.score || 0) - (branches[1]?.score || 0));
    const familyConfidence = qualitativeConfidence({
      evidence,
      topScore: topBranch?.score || 0,
      gap: branchGap
    });

    const familyEntry = topBranch?.familyEntry ? stripRankingMetadata(topBranch.familyEntry) : null;
    const family = topBranch?.family
      ? {
          ...familyEntry,
          branchScore: topBranch.score,
          resolved: confidenceResolvesFamily(familyConfidence),
          path: taxonomy.pathOf(topBranch.family).map(identity)
        }
      : null;

    const styleEntries = topBranch?.styleEntries || [];
    const topStyle = styleEntries[0] || null;
    const styleGap = Math.max(0, (topStyle?.score || 0) - (styleEntries[1]?.score || 0));
    const styleConfidence = qualitativeConfidence({
      evidence,
      topScore: topStyle?.score || 0,
      gap: styleGap
    });
    const resolvedStyle = topStyle && confidenceResolvesStyle(styleConfidence)
      ? {
          ...stripRankingMetadata(topStyle),
          resolved: true,
          family: topBranch?.family ? identity(topBranch.family) : null,
          path: taxonomy.pathOf(taxonomy.byCardId.get(topStyle.cardId)).map(identity)
        }
      : null;

    const styleCandidates = styleEntries
      .slice(0, Math.max(1, limit))
      .map((entry) => ({
        ...stripRankingMetadata(entry),
        family: topBranch?.family ? identity(topBranch.family) : null,
        path: taxonomy.pathOf(taxonomy.byCardId.get(entry.cardId)).map(identity)
      }));

    const signatures = taxonomy.signatureProfiles
      .filter((candidate) => hasKeyMarkerEvidence(userProfile, candidate))
      .map((candidate) => scoreCandidate(userProfile, candidate, rarityMap))
      .filter(({ score }) => score >= 48)
      .sort(sortByScore)
      .map((entry) => ({
        ...stripRankingMetadata(entry),
        path: taxonomy.pathOf(taxonomy.byCardId.get(entry.cardId)).map(identity)
      }));

    return {
      profile: userProfile,
      evidence,
      confidence: familyConfidence,
      family,
      familyConfidence,
      style: resolvedStyle,
      styleConfidence,
      styleCandidates,
      alternatives: branches.slice(1, Math.max(1, limit)).map((branch) => publicBranch(branch, taxonomy)),
      signatures
    };
  }

  return {
    match,
    profiles: taxonomy.automaticProfiles,
    taxonomy,
    rarity: rarityMap
  };
}

export { normalizeUserProfile, qualitativeConfidence };
