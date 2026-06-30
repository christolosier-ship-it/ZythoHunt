import collectionJson from "./brassopedie/collection-04-traditions-belges-et-francaises.json" with { type: "json" };
import { createCollectionBundle } from "./create-collection-bundle.js";
import { traditionsBelgesEtFrancaisesAssets, traditionsBelgesEtFrancaisesAssetPath, traditionsBelgesEtFrancaisesCardImages, traditionsBelgesEtFrancaisesThumbPath } from "./card-assets/traditions-belges-et-francaises-assets.js";

const bundle = createCollectionBundle({
  collectionJson,
  collectionId: "traditions-belges-et-francaises",
  slug: "traditions-belges-et-francaises",
  subtitle: "17 cartes Brassopédie à illustrer",
  order: 40,
  discoveryKey: "zythohunt.discovery.traditions-belges-et-francaises.v1",
  assets: {
    cardImages: traditionsBelgesEtFrancaisesCardImages,
    collectionAssets: traditionsBelgesEtFrancaisesAssets,
    assetPath: traditionsBelgesEtFrancaisesAssetPath,
    thumbPath: traditionsBelgesEtFrancaisesThumbPath
  },
  backgroundPreset: {
    beerT: 62,
    bubbleDensity: 62,
    foamIntensity: 70
  },
  assetStatus: { shellReady: true, cardsReady: true },
  expectedCardCount: 17
});

export const traditionsBelgesEtFrancaisesBundle = bundle;
export const traditionsBelgesEtFrancaisesCollection = bundle.collection;
export const traditionsBelgesEtFrancaisesCards = bundle.cards;
export const traditionsBelgesEtFrancaisesCardsById = bundle.cardsById;
export const revealableTraditionsBelgesEtFrancaisesCards = bundle.revealableCards;
export const validateTraditionsBelgesEtFrancaisesCollection = bundle.validate;

const validation = bundle.validate();
if (!validation.valid && import.meta.env?.DEV) {
  console.error("Invalid Traditions belges et françaises collection", validation.errors);
}
