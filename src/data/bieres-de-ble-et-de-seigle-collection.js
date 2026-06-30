import collectionJson from "./brassopedie/collection-05-bieres-de-ble-et-de-seigle.json" with { type: "json" };
import { createCollectionBundle } from "./create-collection-bundle.js";
import { bieresDeBleEtDeSeigleAssets, bieresDeBleEtDeSeigleAssetPath, bieresDeBleEtDeSeigleCardImages, bieresDeBleEtDeSeigleThumbPath } from "./card-assets/bieres-de-ble-et-de-seigle-assets.js";

const bieresDeBleEtDeSeigleBundleSource = createCollectionBundle({
  collectionJson,
  collectionId: "bieres-de-ble-et-de-seigle",
  slug: "bieres-de-ble-et-de-seigle",
  subtitle: "13 cartes Brassopédie à illustrer",
  order: 50,
  discoveryKey: "zythohunt.discovery.bieres-de-ble-et-de-seigle.v1",
  assets: {
    cardImages: bieresDeBleEtDeSeigleCardImages,
    collectionAssets: bieresDeBleEtDeSeigleAssets,
    assetPath: bieresDeBleEtDeSeigleAssetPath,
    thumbPath: bieresDeBleEtDeSeigleThumbPath
  },
  backgroundPreset: {
    beerT: 92,
    bubbleDensity: 66,
    foamIntensity: 72
  },
  assetStatus: { shellReady: true, cardsReady: true },
  expectedCardCount: 13
});

function validateBieresDeBleEtDeSeigleBundle() {
  const validation = bieresDeBleEtDeSeigleBundleSource.validate();
  const errors = [...validation.errors];
  if (bieresDeBleEtDeSeigleBundleSource.cards.length !== 13) {
    errors.push(`Expected 13 cards, got ${bieresDeBleEtDeSeigleBundleSource.cards.length}.`);
  }
  return { valid: errors.length === 0, errors };
}

export const bieresDeBleEtDeSeigleCollection = bieresDeBleEtDeSeigleBundleSource.collection;
export const bieresDeBleEtDeSeigleCards = bieresDeBleEtDeSeigleBundleSource.cards;
export const bieresDeBleEtDeSeigleCardsById = bieresDeBleEtDeSeigleBundleSource.cardsById;
export const revealableBieresDeBleEtDeSeigleCards = bieresDeBleEtDeSeigleBundleSource.revealableCards;
export const validateBieresDeBleEtDeSeigleCollection = validateBieresDeBleEtDeSeigleBundle;
export const bieresDeBleEtDeSeigleBundle = {
  ...bieresDeBleEtDeSeigleBundleSource,
  validate: validateBieresDeBleEtDeSeigleCollection
};
