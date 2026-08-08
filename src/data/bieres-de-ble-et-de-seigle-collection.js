import collectionJson from "./brassopedie/collection-05-bieres-de-ble-et-de-seigle.js";
import { createCollectionBundle } from "./create-collection-bundle.js";
import {
  bieresDeBleEtDeSeigleAssets,
  bieresDeBleEtDeSeigleCardImages
} from "./card-assets/bieres-de-ble-et-de-seigle-assets.js";

const bundle = createCollectionBundle({
  collectionJson,
  collectionId: "bieres-de-ble-et-de-seigle",
  slug: "bieres-de-ble-et-de-seigle",
  subtitle: "13 cartes Brassopédie à illustrer",
  order: 50,
  expectedCardCount: 13,
  discoveryKey: "zythohunt.discovery.bieres-de-ble-et-de-seigle.v1",
  assets: {
    collection: bieresDeBleEtDeSeigleAssets,
    cards: bieresDeBleEtDeSeigleCardImages
  },
  backgroundPreset: {
    beerT: 92,
    bubbleDensity: 66,
    foamIntensity: 72
  },
  assetsReady: true
});

export const bieresDeBleEtDeSeigleBundle = bundle;
export const bieresDeBleEtDeSeigleCollection = bundle.collection;
export const bieresDeBleEtDeSeigleCards = bundle.cards;
export const bieresDeBleEtDeSeigleCardsById = bundle.cardsById;
export const revealableBieresDeBleEtDeSeigleCards = bundle.revealableCards;
export const validateBieresDeBleEtDeSeigleCollection = bundle.validate;
