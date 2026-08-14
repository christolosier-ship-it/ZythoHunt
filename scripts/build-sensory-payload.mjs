import { collectionCatalog } from "../src/data/collection-catalog.js";
import { sensoryProfiles } from "../src/data/sensory/sensory-profiles.js";
import { SENSORY_PROFILE_SCHEMA_VERSION, SENSORY_VERIFICATION_STATUSES } from "../src/data/sensory/sensory-profile-schema.js";
import { SENSORY_ROLE_COUNTS, SENSORY_ROLES } from "../src/data/sensory/sensory-role-map.js";
import {
  FINISH_IDS,
  SENSORY_DESCRIPTOR_IDS,
  STRUCTURE_AXIS_IDS
} from "../src/tasting/tasting-vocabulary.js";
import { computeDescriptorRarity } from "../src/tasting/sensory-score.js";

const allowedRoles = new Set(SENSORY_ROLES);
const allowedVerificationStatuses = new Set(SENSORY_VERIFICATION_STATUSES);
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

function validateVerification(profile) {
  const verification = profile.verification;
  assert(verification && typeof verification === "object" && !Array.isArray(verification), `${profile.cardId}.verification est obligatoire.`);
  assert(allowedVerificationStatuses.has(verification.status), `${profile.cardId} utilise un statut documentaire inconnu : ${verification.status}.`);
  assert(Array.isArray(verification.sources), `${profile.cardId}.verification.sources doit être un tableau.`);
  verification.sources.forEach((source, index) => {
    assert(source && typeof source === "object" && !Array.isArray(source), `${profile.cardId}.verification.sources[${index}] doit être un objet.`);
    assert(typeof source.label === "string" && source.label.trim(), `${profile.cardId}.verification.sources[${index}].label est obligatoire.`);
    assert(typeof source.url === "string" && /^https:\/\//.test(source.url), `${profile.cardId}.verification.sources[${index}].url doit être une URL HTTPS.`);
  });
  if (verification.status === "verified") {
    assert(verification.sources.length > 0, `${profile.cardId} ne peut pas être vérifié sans source.`);
    assert(typeof verification.reviewedAt === "string" && !Number.isNaN(Date.parse(verification.reviewedAt)), `${profile.cardId} doit porter une date de revue valide.`);
  }
}

function validateProfile(profile, cards) {
  assert(profile.schemaVersion === SENSORY_PROFILE_SCHEMA_VERSION, `${profile.cardId} utilise une version de schéma non prise en charge.`);
  assert(profile.collectionId !== "bizarre-et-insolite", `La Collection 10 est interdite dans le référentiel sensoriel (${profile.cardId}).`);
  assert(allowedRoles.has(profile.role), `${profile.cardId} utilise un rôle inconnu : ${profile.role}.`);
  const key = `${profile.collectionId}:${profile.cardId}`;
  const card = cards.get(key);
  assert(card, `Carte introuvable : ${key}.`);
  assert(profile.name === card.name, `${key} possède un nom désynchronisé avec la Brassopédie.`);
  assert(profile.collectionName === card.collectionName, `${key} possède un nom de collection désynchronisé.`);
  assert(JSON.stringify(profile.aliases || []) === JSON.stringify(card.aliases || []), `${key} possède des alias désynchronisés.`);

  ["source", "expert", "parentCardId"].forEach((legacyKey) => {
    assert(!Object.hasOwn(profile, legacyKey), `${key} contient encore le champ de migration ${legacyKey}.`);
  });

  validateVerification(profile);
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
  const bundles = await Promise.all(classicEntries.map(async (entry) => ({
    catalog: entry.collection,
    bundle: await entry.load()
  })));

  const cards = new Map();
  bundles.forEach(({ catalog, bundle }) => {
    bundle.cards.forEach((card) => {
      cards.set(`${catalog.id}:${card.id}`, {
        collectionId: catalog.id,
        collectionName: catalog.name,
        cardId: card.id,
        name: card.name,
        aliases: card.aliases || []
      });
    });
  });

  assert(cards.size === 251, `La Brassopédie classique doit contenir 251 cartes, reçu ${cards.size}.`);
  assert(sensoryProfiles.length === 251, `Le référentiel sensoriel doit contenir 251 profils statiques, reçu ${sensoryProfiles.length}.`);

  const seen = new Set();
  sensoryProfiles.forEach((profile) => {
    const key = `${profile.collectionId}:${profile.cardId}`;
    assert(!seen.has(key), `Profil sensoriel dupliqué : ${key}.`);
    seen.add(key);
    validateProfile(profile, cards);
  });
  cards.forEach((card, key) => assert(seen.has(key), `Carte classique sans profil sensoriel explicite : ${key}.`));

  assert(SENSORY_ROLE_COUNTS.primary === 165, `165 primary attendus, reçu ${SENSORY_ROLE_COUNTS.primary}.`);
  assert(SENSORY_ROLE_COUNTS.fallback === 29, `29 fallback attendus, reçu ${SENSORY_ROLE_COUNTS.fallback}.`);
  assert(SENSORY_ROLE_COUNTS.overlay === 29, `29 overlay attendus, reçu ${SENSORY_ROLE_COUNTS.overlay}.`);
  assert(SENSORY_ROLE_COUNTS.excluded === 28, `28 excluded attendus, reçu ${SENSORY_ROLE_COUNTS.excluded}.`);

  const verificationCounts = sensoryProfiles.reduce((counts, profile) => {
    counts[profile.verification.status] = (counts[profile.verification.status] || 0) + 1;
    return counts;
  }, { pending: 0, verified: 0 });

  const scorableProfiles = sensoryProfiles.filter(({ role }) => role !== "excluded");
  return {
    schemaVersion: 3,
    catalogVersion: 1,
    totalCards: sensoryProfiles.length,
    scorableCards: scorableProfiles.length,
    roleCounts: { ...SENSORY_ROLE_COUNTS },
    verificationCounts,
    rarity: computeDescriptorRarity(scorableProfiles),
    profiles: sensoryProfiles
  };
}
