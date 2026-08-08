export const ENCYCLOPEDIC_FIELDS = Object.freeze([
  "histoireEtOrigines",
  "recette",
  "sources"
]);

const ENCYCLOPEDIC_FIELD_SET = new Set(ENCYCLOPEDIC_FIELDS);

function stripBaseEditorial(entry = {}) {
  const taxonomy = { ...entry };
  ENCYCLOPEDIC_FIELDS.forEach((field) => delete taxonomy[field]);
  return taxonomy;
}

function assertPatchShape(id, patch) {
  const unexpected = Object.keys(patch || {}).filter((key) => !ENCYCLOPEDIC_FIELD_SET.has(key));
  if (unexpected.length) {
    throw new Error(`Encyclopedic entry ${id} attempts to override taxonomy fields: ${unexpected.join(", ")}`);
  }
}

/**
 * Combines immutable taxonomy with its editorial encyclopedia layer.
 * Base editorial fields are deliberately discarded so the encyclopedia has a
 * single runtime source of truth. Only ENCYCLOPEDIC_FIELDS may be supplied by
 * an encyclopedia entry.
 * @param {any} collectionJson
 * @param {any} [enrichment]
 */
export function applyEncyclopedicEnrichment(collectionJson, enrichment = {}) {
  const patches = enrichment.cards || {};
  const baseCards = collectionJson.cartes || [];
  const knownIds = new Set(baseCards.map((entry) => entry.id));

  Object.keys(patches).forEach((id) => {
    if (!knownIds.has(id)) throw new Error(`Encyclopedic entry references unknown taxonomy id: ${id}`);
    assertPatchShape(id, patches[id]);
  });

  const cards = baseCards.map((entry) => {
    const taxonomy = stripBaseEditorial(entry);
    const patch = patches[entry.id];
    if (!patch) return taxonomy;

    const editorial = {};
    ENCYCLOPEDIC_FIELDS.forEach((field) => {
      if (Object.prototype.hasOwnProperty.call(patch, field)) editorial[field] = patch[field];
    });

    return { ...taxonomy, ...editorial };
  });

  return {
    ...collectionJson,
    collection: {
      ...(collectionJson.collection || {}),
      encyclopedicEnrichmentVersion: enrichment.version || null,
      encyclopedicEnrichmentUpdatedAt: enrichment.updatedAt || null
    },
    cartes: cards
  };
}
