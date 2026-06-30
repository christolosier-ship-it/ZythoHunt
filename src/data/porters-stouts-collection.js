import collectionJson from "./brassopedie/collection-03-porters-et-stouts.json" with { type: "json" };
import { createCollectionBundle } from "./create-collection-bundle.js";
import { porterStoutAssetPath, porterStoutCardImages, porterStoutCollectionAssets } from "./card-assets/porters-stouts-assets.js";

const porterStoutThumbPath = (fileName) =>
  `${porterStoutCollectionAssets.basePath}/thumb/${fileName}`;

export const porterStoutBundle = createCollectionBundle({
  collectionJson,
  collectionId: "porters-stouts",
  slug: "porters-et-stouts",
  subtitle: "Noirs, torréfiés et profonds",
  order: 30,
  discoveryKey: "zythohunt.discovery.porters-et-stouts.v1",
  assets: {
    cardImages: porterStoutCardImages,
    collectionAssets: porterStoutCollectionAssets,
    assetPath: porterStoutAssetPath,
    thumbPath: porterStoutThumbPath
  },
  backgroundPreset: {
    beerT: 0,
    bubbleDensity: 50,
    foamIntensity: 55
  },
  assetStatus: { shellReady: true, cardsReady: true },
  expectedCardCount: 22
});

export const porterStoutCollection = porterStoutBundle.collection;
export const porterStoutCards = porterStoutBundle.cards;
export const porterStoutCardsById = porterStoutBundle.cardsById;
export const revealablePorterStoutCards = porterStoutBundle.revealableCards;
export const validatePorterStoutCollection = porterStoutBundle.validate;

const validation = validatePorterStoutCollection();
if (!validation.valid && import.meta.env?.DEV) {
  console.error("Invalid Porters & Stouts collection", validation.errors);
}
