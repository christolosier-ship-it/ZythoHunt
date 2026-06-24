import collectionJson from "./brassopedie/collection-01-lagers-et-fermentations-basses.json" with { type: "json" };
import { createCollectionBundle } from "./create-collection-bundle.js";
import { lagersEtFermentationsBassesAssets, lagersEtFermentationsBassesAssetPath, lagersEtFermentationsBassesCardImages, lagersEtFermentationsBassesThumbPath } from "./card-assets/lagers-et-fermentations-basses-assets.js";

const lagersEtFermentationsBassesBundleSource = createCollectionBundle({
  collectionJson,
  collectionId: "lagers-et-fermentations-basses",
  slug: "lagers-et-fermentations-basses",
  subtitle: "45 cartes Brassopédie à illustrer",
  order: 10,
  discoveryKey: "zythohunt.discovery.lagers-et-fermentations-basses.v1",
  assets: {
    cardImages: lagersEtFermentationsBassesCardImages,
    collectionAssets: lagersEtFermentationsBassesAssets,
    assetPath: lagersEtFermentationsBassesAssetPath,
    thumbPath: lagersEtFermentationsBassesThumbPath
  },
  backgroundPreset: {
    beerT: 88,
    bubbleDensity: 68,
    foamIntensity: 40
  },
  assetsReady: true
});

export const lagersEtFermentationsBassesCollection = lagersEtFermentationsBassesBundleSource.collection;
export const lagersEtFermentationsBassesCards = lagersEtFermentationsBassesBundleSource.cards;
export const lagersEtFermentationsBassesCardsById = lagersEtFermentationsBassesBundleSource.cardsById;
export const revealableLagersEtFermentationsBassesCards = lagersEtFermentationsBassesBundleSource.revealableCards;
export const validateLagersEtFermentationsBassesCollection = lagersEtFermentationsBassesBundleSource.validate;
export const lagersEtFermentationsBassesBundle = lagersEtFermentationsBassesBundleSource;
