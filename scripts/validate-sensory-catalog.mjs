import { collectionCatalog } from "../src/data/collection-catalog.js";
import { sensoryProfiles } from "../src/data/sensory-profiles.js";
import { createSensoryTaxonomy, ALLOWED_TYPES } from "../src/tasting/sensory-taxonomy.js";
import {
  FINISH_IDS,
  SENSORY_DESCRIPTOR_IDS,
  STRUCTURE_AXIS_IDS
} from "../src/tasting/tasting-vocabulary.js";

const SENSORY_PROFILE_SCHEMA_VERSION = 3;
const SENSORY_VERIFICATION_STATUSES = Object.freeze(["pending", "verified"]);

const allowedVerificationStatuses = new Set(SENSORY_VERIFICATION_STATUSES);
const descriptorIds = new Set(SENSORY_DESCRIPTOR_IDS);
const finishIds = new Set(FINISH_IDS);
const structureIds = new Set(STRUCTURE_AXIS_IDS);

function assert(condition, message) {
  if (!condition) throw new Error(`[sensory-catalog] ${message}`);
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

function collectIdentityErrors(profiles, cards) {
  const errors = [];
  const seen = new Set();

  profiles.forEach((profile) => {
    const key = `${profile.collectionId}:${profile.cardId}`;
    if (seen.has(key)) errors.push(`${key} possède plusieurs profils sensoriels.`);
    seen.add(key);

    const card = cards.get(key);
    if (!card) {
      errors.push(`${key} ne correspond à aucune carte canonique.`);
      return;
    }

    if (profile.name !== card.name) errors.push(`${key} possède un nom désynchronisé avec la Brassopédie.`);
    if (profile.collectionName !== card.collectionName) errors.push(`${key} possède un nom de collection désynchronisé.`);
    if (profile.type !== card.type) errors.push(`${key} possède un type désynchronisé (${profile.type} au lieu de ${card.type}).`);
    if ((profile.parentPrincipalId || null) !== (card.parentPrincipalId || null)) {
      errors.push(`${key} possède un parentPrincipalId désynchronisé (${profile.parentPrincipalId || "∅"} au lieu de ${card.parentPrincipalId || "∅"}).`);
    }
    if (JSON.stringify(profile.aliases || []) !== JSON.stringify(card.aliases || [])) {
      errors.push(`${key} possède des alias désynchronisés.`);
    }
  });

  cards.forEach((card, key) => {
    if (!seen.has(key)) errors.push(`${key} ne possède aucun profil sensoriel explicite.`);
  });

  return errors;
}

function validateProfile(profile) {
  assert(profile.schemaVersion === SENSORY_PROFILE_SCHEMA_VERSION, `${profile.cardId} utilise une version de schéma non prise en charge.`);
  assert(profile.collectionId !== "bizarre-et-insolite", `La Collection 10 est interdite dans le référentiel sensoriel (${profile.cardId}).`);
  assert(ALLOWED_TYPES.has(profile.type), `${profile.cardId} utilise un type taxonomique inconnu : ${profile.type}.`);
  assert(profile.parentPrincipalId === null || typeof profile.parentPrincipalId === "string", `${profile.cardId}.parentPrincipalId doit être une chaîne ou null.`);

  const key = `${profile.collectionId}:${profile.cardId}`;
  ["role", "source", "expert", "parentCardId"].forEach((legacyKey) => {
    assert(!Object.hasOwn(profile, legacyKey), `${key} contient encore le champ historique ${legacyKey}.`);
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

  if (profile.type === "T") {
    assert((profile.keyMarkers || []).length > 0, `${profile.cardId} est une catégorie transversale sans marqueur clé.`);
  }
}

export async function validateSensoryCatalog() {
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
        aliases: card.aliases || [],
        type: card.type,
        parentPrincipalId: card.brassopedie?.parentPrincipalId || null
      });
    });
  });

  assert(cards.size === 251, `La Brassopédie classique doit contenir 251 cartes, reçu ${cards.size}.`);
  assert(sensoryProfiles.length === 251, `Le référentiel sensoriel doit contenir 251 profils statiques, reçu ${sensoryProfiles.length}.`);

  const identityErrors = collectIdentityErrors(sensoryProfiles, cards);
  assert(
    identityErrors.length === 0,
    `Identités sensorielles désynchronisées (${identityErrors.length}) :\n- ${identityErrors.join("\n- ")}`
  );

  sensoryProfiles.forEach(validateProfile);
  const taxonomy = createSensoryTaxonomy(sensoryProfiles);

  assert(taxonomy.commercialProfiles.length === 30, `La Collection 9 doit fournir 30 appellations A/R hors matching automatique, reçu ${taxonomy.commercialProfiles.length}.`);
  assert(taxonomy.automaticProfiles.length === 221, `221 profils F/S/SS/T automatiques attendus, reçu ${taxonomy.automaticProfiles.length}.`);

  const verificationCounts = sensoryProfiles.reduce((counts, profile) => {
    counts[profile.verification.status] = (counts[profile.verification.status] || 0) + 1;
    return counts;
  }, { pending: 0, verified: 0 });

  const typeCounts = sensoryProfiles.reduce((counts, profile) => {
    counts[profile.type] = (counts[profile.type] || 0) + 1;
    return counts;
  }, {});

  return {
    totalCards: sensoryProfiles.length,
    automaticCards: taxonomy.automaticProfiles.length,
    commercialCards: taxonomy.commercialProfiles.length,
    families: taxonomy.familyProfiles.length,
    signatures: taxonomy.signatureProfiles.length,
    autonomousStyles: taxonomy.autonomousStyles.length,
    typeCounts,
    verificationCounts
  };
}

const report = await validateSensoryCatalog();

console.log(`[sensory-catalog] ${report.totalCards} profils statiques validés : ${report.automaticCards} automatiques, ${report.commercialCards} appellations A/R hors matching.`);
console.log(`[sensory-catalog] taxonomie : ${report.families} familles, ${report.signatures} signatures transversales, ${report.autonomousStyles} styles autonomes.`);
console.log(`[sensory-catalog] vérification documentaire : ${report.verificationCounts.verified} verified, ${report.verificationCounts.pending} pending.`);
