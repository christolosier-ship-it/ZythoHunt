import { sensoryProfiles } from "../data/sensory-profiles.js";
import { computeDescriptorRarity, scoreSensoryProfile } from "./sensory-score.js";
import { createSensoryTaxonomy } from "./sensory-taxonomy.js";
import { getDescriptorLabel, getFinishLabel } from "./tasting-vocabulary.js";

const taxonomy = createSensoryTaxonomy(sensoryProfiles);
const rarity = computeDescriptorRarity(taxonomy.baseProfiles);

export function findSensoryProfile(collectionId, cardId) {
  return sensoryProfiles.find((profile) => profile.collectionId === collectionId && profile.cardId === cardId) || null;
}

function observedDescriptorIds(tasting) {
  return new Set([
    ...Object.keys(tasting?.nose || {}),
    ...Object.keys(tasting?.palate || {})
  ]);
}

function strongestExpectedDescriptors(profile) {
  const weights = new Map();
  [profile?.nose || {}, profile?.palate || {}].forEach((map) => {
    Object.entries(map).forEach(([id, intensity]) => {
      weights.set(id, Math.max(weights.get(id) || 0, intensity));
    });
  });
  return [...weights.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "fr"))
    .map(([id]) => id);
}

function summaryForScore(score) {
  if (score >= 72) return "Beaucoup de marqueurs du style sont présents dans ton verre.";
  if (score >= 48) return "Plusieurs repères du style apparaissent dans ton ressenti, avec quelques écarts intéressants.";
  return "Ton ressenti s’écarte du portrait classique. C’est peut-être la recette… ou simplement cette bouteille.";
}

export function compareTastingToProfile(tasting, profile) {
  if (!profile || taxonomy.isCommercial(profile)) {
    return { available: false, summary: "Cette appellation n’est pas définie comme une identité sensorielle automatique." };
  }

  const score = scoreSensoryProfile(tasting, profile, { rarity });
  const observed = observedDescriptorIds(tasting);
  const expected = strongestExpectedDescriptors(profile).slice(0, 6);
  const shared = expected.filter((id) => observed.has(id));
  const notObserved = expected.filter((id) => !observed.has(id)).slice(0, 4);
  const unexpected = [...observed]
    .filter((id) => !Object.hasOwn(profile.nose || {}, id) && !Object.hasOwn(profile.palate || {}, id))
    .slice(0, 4);
  const sharedFinish = (tasting?.finish || []).filter((id) => (profile.finish || []).includes(id));

  return {
    available: true,
    summary: summaryForScore(score.score),
    shared: shared.map((id) => ({ id, label: getDescriptorLabel(id) })),
    notObserved: notObserved.map((id) => ({ id, label: getDescriptorLabel(id) })),
    unexpected: unexpected.map((id) => ({ id, label: getDescriptorLabel(id) })),
    sharedFinish: sharedFinish.map((id) => ({ id, label: getFinishLabel(id) })),
    contradictions: score.contradictions.map((id) => ({ id, label: getDescriptorLabel(id) }))
  };
}

export function compareTastingToStyle(tasting, style) {
  if (!style?.collectionId || !style?.cardId) {
    return { available: false, summary: "Aucun style Brassopédie n’est lié à cette dégustation." };
  }
  return compareTastingToProfile(tasting, findSensoryProfile(style.collectionId, style.cardId));
}
