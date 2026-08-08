export function applyEncyclopedicEnrichment(collectionJson, enrichment = {}) {
  const patches = enrichment.cards || {};
  const cards = (collectionJson.cartes || []).map((entry) => {
    const patch = patches[entry.id];
    if (!patch) return entry;

    return {
      ...entry,
      ...patch,
      recette: patch.recette ? { ...(entry.recette || {}), ...patch.recette } : entry.recette,
      sources: patch.sources || entry.sources
    };
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
