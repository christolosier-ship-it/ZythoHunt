import collectionJson from "./brassopedie/collection-08-styles-singuliers-historiques-et-hybrides.js";
import { createCollectionBundle } from "./create-collection-bundle.js";
import {
  stylesSinguliersHistoriquesEtHybridesAssets,
  stylesSinguliersHistoriquesEtHybridesCardImages
} from "./card-assets/styles-singuliers-historiques-et-hybrides-assets.js";

const bundle = createCollectionBundle({
  collectionJson,
  collectionId: "styles-singuliers-historiques-et-hybrides",
  slug: "styles-singuliers-historiques-et-hybrides",
  subtitle: "40 cartes Brassopédie à illustrer",
  order: 80,
  expectedCardCount: 40,
  discoveryKey: "zythohunt.discovery.styles-singuliers-historiques-et-hybrides.v1",
  assets: {
    collection: stylesSinguliersHistoriquesEtHybridesAssets,
    cards: stylesSinguliersHistoriquesEtHybridesCardImages
  },
  backgroundPreset: {
    beerT: 50,
    bubbleDensity: 50,
    foamIntensity: 50
  },
  assetsReady: true
});

export const stylesSinguliersHistoriquesEtHybridesBundle = bundle;
export const stylesSinguliersHistoriquesEtHybridesCollection = bundle.collection;
export const stylesSinguliersHistoriquesEtHybridesCards = bundle.cards;
export const stylesSinguliersHistoriquesEtHybridesCardsById = bundle.cardsById;
export const revealableStylesSinguliersHistoriquesEtHybridesCards = bundle.revealableCards;
export const validateStylesSinguliersHistoriquesEtHybridesCollection = bundle.validate;
