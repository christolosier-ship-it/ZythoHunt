import collectionJson from "./brassopedie/collection-03-porters-et-stouts.js";
import { createCollectionBundle } from "./create-collection-bundle.js";
import {
  porterStoutCardImages,
  porterStoutCollectionAssets
} from "./card-assets/porters-stouts-assets.js";

const bundle = createCollectionBundle({
  collectionJson,
  collectionId: "porters-stouts",
  slug: "porters-et-stouts",
  subtitle: "Noirs, torréfiés et profonds",
  order: 30,
  expectedCardCount: 22,
  discoveryKey: "zythohunt.discovery.porters-et-stouts.v1",
  assets: {
    collection: porterStoutCollectionAssets,
    cards: porterStoutCardImages
  },
  backgroundPreset: {
    beerT: 0,
    bubbleDensity: 50,
    foamIntensity: 55
  },
  assetsReady: true
});

export const porterStoutBundle = bundle;
export const porterStoutCollection = bundle.collection;
export const porterStoutCards = bundle.cards;
export const porterStoutCardsById = bundle.cardsById;
export const revealablePorterStoutCards = bundle.revealableCards;
export const validatePorterStoutCollection = bundle.validate;
