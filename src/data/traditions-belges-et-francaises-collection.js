import collectionJson from "./brassopedie/collection-04-traditions-belges-et-francaises.json" with { type: "json" };
import { createCollectionBundle } from "./create-collection-bundle.js";
import {
  traditionsBelgesEtFrancaisesAssets,
  traditionsBelgesEtFrancaisesCardImages
} from "./card-assets/traditions-belges-et-francaises-assets.js";

const bundle = createCollectionBundle({
  collectionJson,
  collectionId: "traditions-belges-et-francaises",
  slug: "traditions-belges-et-francaises",
  subtitle: "17 cartes Brassopédie à illustrer",
  order: 40,
  expectedCardCount: 17,
  discoveryKey: "zythohunt.discovery.traditions-belges-et-francaises.v1",
  assets: {
    collection: traditionsBelgesEtFrancaisesAssets,
    cards: traditionsBelgesEtFrancaisesCardImages
  },
  backgroundPreset: {
    beerT: 62,
    bubbleDensity: 62,
    foamIntensity: 70
  },
  assetsReady: true
});

export const traditionsBelgesEtFrancaisesBundle = bundle;
export const traditionsBelgesEtFrancaisesCollection = bundle.collection;
export const traditionsBelgesEtFrancaisesCards = bundle.cards;
export const traditionsBelgesEtFrancaisesCardsById = bundle.cardsById;
export const revealableTraditionsBelgesEtFrancaisesCards = bundle.revealableCards;
export const validateTraditionsBelgesEtFrancaisesCollection = bundle.validate;
