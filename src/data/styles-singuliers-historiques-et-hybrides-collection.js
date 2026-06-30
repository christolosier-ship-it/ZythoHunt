import collectionJson from "./brassopedie/collection-08-styles-singuliers-historiques-et-hybrides.json" with { type: "json" };
import { createCollectionBundle } from "./create-collection-bundle.js";
import { stylesSinguliersHistoriquesEtHybridesAssets, stylesSinguliersHistoriquesEtHybridesAssetPath, stylesSinguliersHistoriquesEtHybridesCardImages, stylesSinguliersHistoriquesEtHybridesThumbPath } from "./card-assets/styles-singuliers-historiques-et-hybrides-assets.js";

const bundle = createCollectionBundle({
  collectionJson,
  collectionId: "styles-singuliers-historiques-et-hybrides",
  slug: "styles-singuliers-historiques-et-hybrides",
  subtitle: "40 cartes Brassopédie à illustrer",
  order: 80,
  discoveryKey: "zythohunt.discovery.styles-singuliers-historiques-et-hybrides.v1",
  assets: {
    cardImages: stylesSinguliersHistoriquesEtHybridesCardImages,
    collectionAssets: stylesSinguliersHistoriquesEtHybridesAssets,
    assetPath: stylesSinguliersHistoriquesEtHybridesAssetPath,
    thumbPath: stylesSinguliersHistoriquesEtHybridesThumbPath
  },
  backgroundPreset: {
    beerT: 50,
    bubbleDensity: 50,
    foamIntensity: 50
  },
  assetStatus: { shellReady: true, cardsReady: false },
  expectedCardCount: 40
});

export const stylesSinguliersHistoriquesEtHybridesBundle = bundle;
export const stylesSinguliersHistoriquesEtHybridesCollection = bundle.collection;
export const stylesSinguliersHistoriquesEtHybridesCards = bundle.cards;
export const stylesSinguliersHistoriquesEtHybridesCardsById = bundle.cardsById;
export const revealableStylesSinguliersHistoriquesEtHybridesCards = bundle.revealableCards;
export const validateStylesSinguliersHistoriquesEtHybridesCollection = bundle.validate;

const validation = bundle.validate();
if (!validation.valid && import.meta.env?.DEV) {
  console.error("Invalid Styles singuliers, historiques et hybrides collection", validation.errors);
}
