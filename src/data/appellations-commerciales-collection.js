import collectionJson from "./brassopedie/collection-09-appellations-commerciales.json" with { type: "json" };
import { createCollectionBundle } from "./create-collection-bundle.js";
import {
  appellationsCommercialesAssets,
  appellationsCommercialesCardImages
} from "./card-assets/appellations-commerciales-assets.js";

const bundle = createCollectionBundle({
  collectionJson,
  collectionId: "appellations-commerciales",
  slug: "appellations-commerciales",
  subtitle: "30 cartes Brassopédie à illustrer",
  order: 90,
  expectedCardCount: 30,
  discoveryKey: "zythohunt.discovery.appellations-commerciales.v1",
  assets: {
    collection: appellationsCommercialesAssets,
    cards: appellationsCommercialesCardImages
  },
  backgroundPreset: {
    beerT: 75,
    bubbleDensity: 66,
    foamIntensity: 62
  },
  assetsReady: true
});

export const appellationsCommercialesBundle = bundle;
export const appellationsCommercialesCollection = bundle.collection;
export const appellationsCommercialesCards = bundle.cards;
export const appellationsCommercialesCardsById = bundle.cardsById;
export const revealableAppellationsCommercialesCards = bundle.revealableCards;
export const validateAppellationsCommercialesCollection = bundle.validate;
