export function getCollectionAssetStatus(collection) {
  const shellReady = Boolean(collection?.assetStatus?.shellReady ?? collection?.assetsReady);
  const cardsReady = Boolean(collection?.assetStatus?.cardsReady ?? collection?.assetsReady);
  return { shellReady, cardsReady };
}

export function getCollectionAvailabilityLabel(collection) {
  const { shellReady, cardsReady } = getCollectionAssetStatus(collection);
  if (shellReady && cardsReady) return "Disponible";
  if (shellReady && !cardsReady) return "Illustrations à compléter";
  return "Assets à compléter";
}
