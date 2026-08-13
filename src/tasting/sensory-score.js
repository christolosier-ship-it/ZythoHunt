const GROUP_WEIGHTS = Object.freeze({
  appearance: 15,
  nose: 25,
  palate: 25,
  taste: 15,
  body: 10,
  finish: 10
});

const COLOR_ORDER = ["paille", "dore", "ambre", "cuivre", "brun", "noir"];
const CLARITY_ORDER = ["claire", "voilee", "trouble", "opaque"];
const TASTE_AXES = ["amertume", "sucrosite", "acidite"];
const BODY_AXES = ["corps", "carbonatation", "alcool"];

function finiteNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function categorySimilarity(value, expected = [], order = []) {
  if (!value || expected.length === 0) return null;
  if (expected.includes(value)) return 1;
  const index = order.indexOf(value);
  if (index < 0) return 0;
  const distances = expected
    .map((candidate) => order.indexOf(candidate))
    .filter((candidateIndex) => candidateIndex >= 0)
    .map((candidateIndex) => Math.abs(candidateIndex - index));
  if (distances.length === 0) return 0;
  const distance = Math.min(...distances);
  if (distance === 1) return 0.6;
  if (distance === 2) return 0.25;
  return 0;
}

function rangeSimilarity(value, range) {
  if (!finiteNumber(value) || !Array.isArray(range) || range.length !== 2) return null;
  const [min, max] = range;
  if (!finiteNumber(min) || !finiteNumber(max)) return null;
  if (value >= min && value <= max) return 1;
  const distance = value < min ? min - value : value - max;
  if (distance === 1) return 0.65;
  if (distance === 2) return 0.3;
  return 0;
}

function descriptorSimilarity(userIntensity, expectedIntensity) {
  if (!finiteNumber(userIntensity) || !finiteNumber(expectedIntensity)) return 0;
  const distance = Math.abs(userIntensity - expectedIntensity);
  if (distance === 0) return 1;
  if (distance === 1) return 0.72;
  if (distance === 2) return 0.36;
  return 0;
}

function descriptorGroupScore(userDescriptors = {}, expectedDescriptors = {}, rarity = {}, keyMarkers = []) {
  const selected = Object.entries(userDescriptors).filter(([, intensity]) => finiteNumber(intensity) && intensity > 0);
  if (selected.length === 0 || Object.keys(expectedDescriptors).length === 0) return null;

  let weightedScore = 0;
  let possible = 0;
  const matched = [];
  const unmatched = [];

  selected.forEach(([id, intensity]) => {
    const rarityWeight = finiteNumber(rarity[id]) ? rarity[id] : 1;
    const intensityWeight = 1 + (Math.min(3, intensity) - 1) * 0.25;
    const keyBoost = keyMarkers.includes(id) ? 1.18 : 1;
    const weight = rarityWeight * intensityWeight * keyBoost;
    const expected = expectedDescriptors[id];
    const similarity = finiteNumber(expected) ? descriptorSimilarity(intensity, expected) : 0;
    weightedScore += similarity * weight;
    possible += weight;
    if (similarity >= 0.65) matched.push(id);
    else unmatched.push(id);
  });

  return {
    score: possible > 0 ? weightedScore / possible : 0,
    matched,
    unmatched,
    evidence: selected.length
  };
}

function axisGroupScore(userStructure = {}, expectedStructure = {}, axes = []) {
  const answered = axes.filter((axis) => finiteNumber(userStructure[axis]));
  const comparable = answered.filter((axis) => Array.isArray(expectedStructure[axis]));
  if (comparable.length === 0) return null;
  const similarities = comparable.map((axis) => rangeSimilarity(userStructure[axis], expectedStructure[axis]) ?? 0);
  return {
    score: similarities.reduce((total, value) => total + value, 0) / similarities.length,
    evidence: comparable.length
  };
}

function finishGroupScore(userFinish = [], expectedFinish = []) {
  const selected = Array.isArray(userFinish) ? [...new Set(userFinish.filter(Boolean))] : [];
  if (selected.length === 0 || !Array.isArray(expectedFinish) || expectedFinish.length === 0) return null;
  const matches = selected.filter((id) => expectedFinish.includes(id));
  return {
    score: matches.length / selected.length,
    evidence: selected.length,
    matched: matches,
    unmatched: selected.filter((id) => !expectedFinish.includes(id))
  };
}

function appearanceGroupScore(userAppearance = {}, expectedAppearance = {}) {
  const similarities = [];
  if (userAppearance.color && Array.isArray(expectedAppearance.colors) && expectedAppearance.colors.length > 0) {
    similarities.push(categorySimilarity(userAppearance.color, expectedAppearance.colors, COLOR_ORDER) ?? 0);
  }
  if (userAppearance.clarity && Array.isArray(expectedAppearance.clarity) && expectedAppearance.clarity.length > 0) {
    similarities.push(categorySimilarity(userAppearance.clarity, expectedAppearance.clarity, CLARITY_ORDER) ?? 0);
  }
  if (similarities.length === 0) return null;
  return {
    score: similarities.reduce((total, value) => total + value, 0) / similarities.length,
    evidence: similarities.length
  };
}

function collectSelectedDescriptorIds(profile = {}) {
  return new Set([
    ...Object.entries(profile.nose || {}).filter(([, value]) => finiteNumber(value) && value > 0).map(([id]) => id),
    ...Object.entries(profile.palate || {}).filter(([, value]) => finiteNumber(value) && value > 0).map(([id]) => id)
  ]);
}

function contradictionPenalty(userProfile, candidate, rarity = {}) {
  const selected = collectSelectedDescriptorIds(userProfile);
  const contradictions = (candidate.contradictions || []).filter((id) => selected.has(id));
  if (contradictions.length === 0) return { penalty: 0, contradictions: [] };

  const penalty = contradictions.reduce((total, id) => {
    const intensity = Math.max(userProfile.nose?.[id] || 0, userProfile.palate?.[id] || 0);
    const rarityWeight = finiteNumber(rarity[id]) ? rarity[id] : 1;
    return total + 0.055 * rarityWeight * (1 + Math.max(0, intensity - 1) * 0.3);
  }, 0);

  return { penalty: clamp(penalty, 0, 0.32), contradictions };
}

export function countSensoryEvidence(userProfile = {}) {
  let count = 0;
  if (userProfile.appearance?.color) count += 1;
  if (userProfile.appearance?.clarity) count += 1;
  count += Object.values(userProfile.nose || {}).filter((value) => finiteNumber(value) && value > 0).length;
  count += Object.values(userProfile.palate || {}).filter((value) => finiteNumber(value) && value > 0).length;
  count += [...TASTE_AXES, ...BODY_AXES].filter((axis) => finiteNumber(userProfile.structure?.[axis])).length;
  count += Array.isArray(userProfile.finish) ? new Set(userProfile.finish.filter(Boolean)).size : 0;
  return count;
}

/** @param {readonly any[]} profiles */
export function computeDescriptorRarity(profiles = []) {
  const eligible = profiles.filter((profile) => profile?.role === "primary" || profile?.role === "fallback");
  const total = Math.max(1, eligible.length);
  const frequency = {};

  eligible.forEach((profile) => {
    const ids = new Set([...Object.keys(profile.nose || {}), ...Object.keys(profile.palate || {})]);
    ids.forEach((id) => { frequency[id] = (frequency[id] || 0) + 1; });
  });

  return Object.freeze(Object.fromEntries(Object.entries(frequency).map(([id, count]) => [
    id,
    clamp(1 + Math.log((total + 1) / (count + 1)), 1, 2.6)
  ])));
}

export function scoreSensoryProfile(userProfile, candidate, { rarity = {} } = {}) {
  const groups = {
    appearance: appearanceGroupScore(userProfile.appearance, candidate.appearance),
    nose: descriptorGroupScore(userProfile.nose, candidate.nose, rarity, [...(candidate.keyMarkers || [])]),
    palate: descriptorGroupScore(userProfile.palate, candidate.palate, rarity, [...(candidate.keyMarkers || [])]),
    taste: axisGroupScore(userProfile.structure, candidate.structure, TASTE_AXES),
    body: axisGroupScore(userProfile.structure, candidate.structure, BODY_AXES),
    finish: finishGroupScore(userProfile.finish, [...(candidate.finish || [])])
  };

  let weightedScore = 0;
  let activeWeight = 0;
  Object.entries(groups).forEach(([groupName, result]) => {
    if (!result) return;
    const weight = GROUP_WEIGHTS[groupName];
    weightedScore += result.score * weight;
    activeWeight += weight;
  });

  const raw = activeWeight > 0 ? weightedScore / activeWeight : 0;
  const contradiction = contradictionPenalty(userProfile, candidate, rarity);
  const adjusted = clamp(raw - contradiction.penalty);
  const matchedDescriptors = [...new Set([
    ...(groups.nose?.matched || []),
    ...(groups.palate?.matched || [])
  ])];
  const unmatchedDescriptors = [...new Set([
    ...(groups.nose?.unmatched || []),
    ...(groups.palate?.unmatched || [])
  ])];

  return {
    score: Math.round(adjusted * 1000) / 10,
    rawScore: Math.round(raw * 1000) / 10,
    contradictionPenalty: Math.round(contradiction.penalty * 1000) / 10,
    contradictions: contradiction.contradictions,
    matchedDescriptors,
    unmatchedDescriptors,
    matchedFinish: groups.finish?.matched || [],
    groupScores: Object.fromEntries(Object.entries(groups).map(([name, result]) => [
      name,
      result ? Math.round(result.score * 1000) / 10 : null
    ]))
  };
}

export { GROUP_WEIGHTS };
