import { collectionCatalog } from "../src/data/collection-catalog.js";
import { sensoryProfiles as curatedSensoryProfiles } from "../src/data/sensory/sensory-profiles.js";
import { deriveSensoryProfiles } from "../src/data/sensory/sensory-profile-derivation.js";
import {
  SENSORY_ROLE_COUNTS,
  SENSORY_ROLES,
  getSensoryRole,
  sensoryRoleEntries
} from "../src/data/sensory/sensory-role-map.js";
import {
  FINISH_IDS,
  SENSORY_DESCRIPTOR_IDS,
  STRUCTURE_AXIS_IDS
} from "../src/tasting/tasting-vocabulary.js";
import { computeDescriptorRarity } from "../src/tasting/sensory-score.js";

const allowedRoles = new Set(SENSORY_ROLES);
const descriptorIds = new Set(SENSORY_DESCRIPTOR_IDS);
const finishIds = new Set(FINISH_IDS);
const structureIds = new Set(STRUCTURE_AXIS_IDS);

function assert(condition, message) {
  if (!condition) throw new Error(`[sensory-index] ${message}`);
}

function validateDescriptorMap(map, key) {
  assert(map && typeof map === "object" && !Array.isArray(map), `${key} doit être un objet.`);
  Object.entries(map).forEach(([descriptorId, intensity]) => {
    assert(descriptorIds.has(descriptorId), `${key} contient un descripteur inconnu : ${descriptorId}.`);
    assert(Number.isInteger(intensity) && intensity >= 1 && intensity <= 3, `${key}.${descriptorId} doit être compris entre 1 et 3.`);
  });
}

function validateProfile(profile, knownCards) {
  assert(profile.schemaVersion === 1, `${profile.cardId} utilise une version de schéma non prise en charge.`);
  assert(profile.collectionId !== "bizarre-et-insolite", `La Collection 10 est interdite dans l'index sensoriel (${profile.cardId}).`);
  assert(allowedRoles.has(profile.role), `${profile.cardId} utilise un rôle inconnu : ${profile.role}.`);
  assert(knownCards.has(`${profile.collectionId}:${profile.cardId}`), `Carte introuvable : ${profile.collectionId}:${profile.cardId}.`);
  assert(getSensoryRole(profile.collectionId, profile.cardId) === profile.role, `Le rôle de ${profile.cardId} diverge de la cartographie 251.`);
  validateDescriptorMap(profile.nose || {}, `${profile.cardId}.nose`);
  validateDescriptorMap(profile.palate || {}, `${profile.cardId}.palate`);
  Object.entries(profile.structure || {}).forEach(([axis, range]) => {
    assert(structureIds.has(axis), `${profile.cardId} contient un axe inconnu : ${axis}.`);
    assert(Array.isArray(range) && range.length === 2, `${profile.cardId}.${axis} doit être une plage [min,max].`);
    assert(range.every((value) => Number.isInteger(value) && value >= 0 && value <= 4), `${profile.cardId}.${axis} doit rester entre 0 et 4.`);
    assert(range[0] <= range[1], `${profile.cardId}.${axis} possède une plage inversée.`);
  });
  (profile.finish || []).forEach((id) => assert(finishIds.has(id), `${profile.cardId} contient une finale inconnue : ${id}.`));
  (profile.contradictions || []).forEach((id) => assert(descriptorIds.has(id), `${profile.cardId} contient une contradiction inconnue : ${id}.`));
  (profile.keyMarkers || []).forEach((id) => assert(descriptorIds.has(id), `${profile.cardId} contient un marqueur clé inconnu : ${id}.`));
  if (profile.role === "overlay") assert((profile.keyMarkers || []).length > 0, `${profile.cardId} est un overlay sans marqueur clé.`);
  if (profile.role !== "excluded") {
    const dimensions = Object.keys(profile.nose || {}).length
      + Object.keys(profile.palate || {}).length
      + Object.keys(profile.structure || {}).length
      + (profile.appearance?.colors?.length || 0)
      + (profile.appearance?.clarity?.length || 0)
      + (profile.finish?.length || 0);
    assert(dimensions >= 4, `${profile.cardId} ne contient pas assez de dimensions sensorielles (${dimensions}).`);
  }
}

export async function buildSensoryPayload() {
  const classicEntries = collectionCatalog.filter(({ collection }) => collection.id !== "bizarre-et-insolite");
  const bundles = await Promise.all(classicEntries.map(async (entry) => ({ catalog: entry.collection, bundle: await entry.load() })));
  const cards = new Map();
  const cardFacts = [];

  bundles.forEach(({ catalog, bundle }) => {
    bundle.cards.forEach((card) => {
      const fact = {
        collectionId: catalog.id,
        collectionName: catalog.name,
        cardId: card.id,
        id: card.id,
        name: card.name,
        aliases: card.aliases || [],
        brassopedie: card.brassopedie
      };
      cards.set(`${catalog.id}:${card.id}`, fact);
      cardFacts.push(fact);
    });
  });

  assert(cards.size === 251, `La Brassopédie classique doit contenir 251 cartes, reçu ${cards.size}.`);
  assert(sensoryRoleEntries.length === 251, `La cartographie sensorielle doit contenir 251 rôles, reçu ${sensoryRoleEntries.length}.`);
  const mappedKeys = new Set();
  sensoryRoleEntries.forEach((entry) => {
    const key = `${entry.collectionId}:${entry.cardId}`;
    assert(entry.collectionId !== "bizarre-et-insolite", `La Collection 10 est interdite dans la cartographie (${entry.cardId}).`);
    assert(allowedRoles.has(entry.role), `Rôle inconnu dans la cartographie : ${entry.role}.`);
    assert(!mappedKeys.has(key), `Carte cartographiée plusieurs fois : ${key}.`);
    assert(cards.has(key), `Carte cartographiée introuvable : ${key}.`);
    mappedKeys.add(key);
  });
  cards.forEach((card, key) => assert(mappedKeys.has(key), `Carte classique sans rôle sensoriel explicite : ${key}.`));
  assert(SENSORY_ROLE_COUNTS.primary === 165, `165 primary attendus, reçu ${SENSORY_ROLE_COUNTS.primary}.`);
  assert(SENSORY_ROLE_COUNTS.fallback === 29, `29 fallback attendus, reçu ${SENSORY_ROLE_COUNTS.fallback}.`);
  assert(SENSORY_ROLE_COUNTS.overlay === 29, `29 overlay attendus, reçu ${SENSORY_ROLE_COUNTS.overlay}.`);
  assert(SENSORY_ROLE_COUNTS.excluded === 28, `28 excluded attendus, reçu ${SENSORY_ROLE_COUNTS.excluded}.`);

  assert(curatedSensoryProfiles.length === 40, `Le socle édité doit contenir 40 profils, reçu ${curatedSensoryProfiles.length}.`);
  const curatedKeys = new Set();
  curatedSensoryProfiles.forEach((profile) => {
    const key = `${profile.collectionId}:${profile.cardId}`;
    assert(!curatedKeys.has(key), `Profil édité dupliqué : ${key}.`);
    curatedKeys.add(key);
    validateProfile(profile, cards);
  });

  const resolvedProfiles = deriveSensoryProfiles({ cards: cardFacts, curatedProfiles: curatedSensoryProfiles, getRole: getSensoryRole });
  assert(resolvedProfiles.length === 251, `251 profils résolus attendus, reçu ${resolvedProfiles.length}.`);
  const resolvedKeys = new Set();
  resolvedProfiles.forEach((profile) => {
    const key = `${profile.collectionId}:${profile.cardId}`;
    assert(!resolvedKeys.has(key), `Profil résolu dupliqué : ${key}.`);
    resolvedKeys.add(key);
    validateProfile(profile, cards);
  });
  cards.forEach((card, key) => assert(resolvedKeys.has(key), `Carte classique sans profil sensoriel résolu : ${key}.`));

  const counts = resolvedProfiles.reduce((acc, profile) => {
    acc.roles[profile.role] = (acc.roles[profile.role] || 0) + 1;
    acc.sources[profile.source] = (acc.sources[profile.source] || 0) + 1;
    return acc;
  }, { roles: {}, sources: {} });
  assert(counts.roles.primary === 165 && counts.roles.fallback === 29 && counts.roles.overlay === 29 && counts.roles.excluded === 28, "La répartition des rôles résolus est invalide.");
  assert(counts.sources.curated === 40, `40 profils édités doivent survivre à la résolution, reçu ${counts.sources.curated || 0}.`);
  assert((counts.sources.derived || 0) + (counts.sources["derived-excluded"] || 0) === 211, "211 profils dérivés attendus.");

  const profiles = resolvedProfiles.map((profile) => {
    const card = cards.get(`${profile.collectionId}:${profile.cardId}`);
    return { ...profile, collectionName: card.collectionName, name: card.name, aliases: card.aliases };
  });
  const scorableProfiles = profiles.filter(({ role }) => role !== "excluded");
  return {
    schemaVersion: 2,
    totalCards: profiles.length,
    scorableCards: scorableProfiles.length,
    roleCounts: { ...SENSORY_ROLE_COUNTS },
    sourceCounts: {
      curated: counts.sources.curated || 0,
      derived: counts.sources.derived || 0,
      excludedDerived: counts.sources["derived-excluded"] || 0
    },
    rarity: computeDescriptorRarity(scorableProfiles),
    profiles
  };
}
