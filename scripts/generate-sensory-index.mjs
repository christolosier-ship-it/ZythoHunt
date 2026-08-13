import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { collectionCatalog } from "../src/data/collection-catalog.js";
import { sensoryProfiles } from "../src/data/sensory/sensory-profiles.js";
import {
  FINISH_IDS,
  SENSORY_DESCRIPTOR_IDS,
  STRUCTURE_AXIS_IDS
} from "../src/tasting/tasting-vocabulary.js";
import { computeDescriptorRarity } from "../src/tasting/sensory-score.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(root, "src/data/sensory/generated-sensory-index.js");
const allowedRoles = new Set(["primary", "fallback", "overlay", "excluded"]);
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

const generated = sensoryProfiles.map((profile) => ({
  ...cards.get(`${profile.collectionId}:${profile.cardId}`),
  profile
}));
const rarity = computeDescriptorRarity(sensoryProfiles);
const content = `// Fichier généré par scripts/generate-sensory-index.mjs. Ne pas modifier à la main.\n`
  + `export const GENERATED_SENSORY_INDEX_VERSION = 1;\n`
  + `export const generatedSensoryIndex = Object.freeze(${JSON.stringify(generated, null, 2)});\n`
  + `export const generatedDescriptorRarity = Object.freeze(${JSON.stringify(rarity, null, 2)});\n`;

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, content, "utf8");
console.log(`[sensory-index] ${generated.length} profils validés et générés.`);
