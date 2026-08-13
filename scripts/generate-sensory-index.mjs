import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { collectionCatalog } from "../src/data/collection-catalog.js";
import { sensoryProfiles } from "../src/data/sensory/sensory-profiles.js";
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

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(root, "src/data/sensory/generated-sensory-index.js");
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
  assert(getSensoryRole(profile.collectionId, profile.cardId) === profile.role, `Le rôle pilote de ${profile.cardId} (${profile.role}) diverge de la cartographie 251 (${getSensoryRole(profile.collectionId, profile.cardId)}).`);
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
}

const classicEntries = collectionCatalog.filter(({ collection }) => collection.id !== "bizarre-et-insolite");
const bundles = await Promise.all(classicEntries.map(async (entry) => ({ catalog: entry.collection, bundle: await entry.load() })));

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
assert(sensoryRoleEntries.length === 251, `La cartographie sensorielle doit contenir 251 rôles, reçu ${sensoryRoleEntries.length}.`);
const mappedKeys = new Set();
sensoryRoleEntries.forEach((entry) => {
  const key = `${entry.collectionId}:${entry.cardId}`;
  assert(entry.collectionId !== "bizarre-et-insolite", `La Collection 10 est interdite dans la cartographie (${entry.cardId}).`);
  assert(allowedRoles.has(entry.role), `Rôle inconnu dans la cartographie : ${entry.role}.`);
  assert(!mappedKeys.has(key), `Carte cartographiée plusieurs fois : ${key}.`);
  assert(cards.has(key), `Carte cartographiée introuvable dans les collections classiques : ${key}.`);
  mappedKeys.add(key);
});
cards.forEach((card, key) => assert(mappedKeys.has(key), `Carte classique sans rôle sensoriel explicite : ${key}.`));
assert(SENSORY_ROLE_COUNTS.primary === 165, `165 primary attendus, reçu ${SENSORY_ROLE_COUNTS.primary}.`);
assert(SENSORY_ROLE_COUNTS.fallback === 29, `29 fallback attendus, reçu ${SENSORY_ROLE_COUNTS.fallback}.`);
assert(SENSORY_ROLE_COUNTS.overlay === 29, `29 overlay attendus, reçu ${SENSORY_ROLE_COUNTS.overlay}.`);
assert(SENSORY_ROLE_COUNTS.excluded === 28, `28 excluded attendus, reçu ${SENSORY_ROLE_COUNTS.excluded}.`);

assert(sensoryProfiles.length === 40, `Le pilote doit contenir exactement 40 profils, reçu ${sensoryProfiles.length}.`);
const seen = new Set();
sensoryProfiles.forEach((profile) => {
  const key = `${profile.collectionId}:${profile.cardId}`;
  assert(!seen.has(key), `Profil dupliqué : ${key}.`);
  seen.add(key);
  validateProfile(profile, cards);
});

const roleCounts = sensoryProfiles.reduce((counts, profile) => {
  counts[profile.role] = (counts[profile.role] || 0) + 1;
  return counts;
}, {});
assert(roleCounts.primary === 37, `Le pilote doit contenir 37 profils primary, reçu ${roleCounts.primary || 0}.`);
assert(roleCounts.fallback === 1, `Le pilote doit contenir 1 fallback, reçu ${roleCounts.fallback || 0}.`);
assert(roleCounts.overlay === 2, `Le pilote doit contenir 2 overlays, reçu ${roleCounts.overlay || 0}.`);

const generated = sensoryProfiles.map((profile) => ({ ...cards.get(`${profile.collectionId}:${profile.cardId}`), profile }));
const rarity = computeDescriptorRarity(sensoryProfiles);
const content = `// Fichier généré par scripts/generate-sensory-index.mjs. Ne pas modifier à la main.\n`
  + `export const GENERATED_SENSORY_INDEX_VERSION = 1;\n`
  + `export const generatedSensoryIndex = Object.freeze(${JSON.stringify(generated, null, 2)});\n`
  + `export const generatedDescriptorRarity = Object.freeze(${JSON.stringify(rarity, null, 2)});\n`;

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, content, "utf8");
console.log(`[sensory-index] cartographie 251 validée (${SENSORY_ROLE_COUNTS.primary} primary, ${SENSORY_ROLE_COUNTS.fallback} fallback, ${SENSORY_ROLE_COUNTS.overlay} overlay, ${SENSORY_ROLE_COUNTS.excluded} excluded).`);
console.log(`[sensory-index] ${generated.length} profils pilotes validés et générés.`);
