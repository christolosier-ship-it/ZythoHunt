import collectionJson from "./brassopedie/collection-06-bieres-acides-sauvages-et-spontanees.js";
import { createCollectionBundle } from "./create-collection-bundle.js";
import {
  bieresAcidesSauvagesEtSpontaneesAssets,
  bieresAcidesSauvagesEtSpontaneesCardImages
} from "./card-assets/bieres-acides-sauvages-et-spontanees-assets.js";

const bundle = createCollectionBundle({
  collectionJson,
  collectionId: "bieres-acides-sauvages-et-spontanees",
  slug: "bieres-acides-sauvages-et-spontanees",
  subtitle: "21 cartes Brassopédie à illustrer",
  order: 60,
  expectedCardCount: 21,
  discoveryKey: "zythohunt.discovery.bieres-acides-sauvages-et-spontanees.v1",
  assets: {
    collection: bieresAcidesSauvagesEtSpontaneesAssets,
    cards: bieresAcidesSauvagesEtSpontaneesCardImages
  },
  backgroundPreset: {
    beerT: 48,
    bubbleDensity: 54,
    foamIntensity: 50
  },
  assetsReady: true
});

export const bieresAcidesSauvagesEtSpontaneesBundle = bundle;
export const bieresAcidesSauvagesEtSpontaneesCollection = bundle.collection;
export const bieresAcidesSauvagesEtSpontaneesCards = bundle.cards;
export const bieresAcidesSauvagesEtSpontaneesCardsById = bundle.cardsById;
export const revealableBieresAcidesSauvagesEtSpontaneesCards = bundle.revealableCards;
export const validateBieresAcidesSauvagesEtSpontaneesCollection = bundle.validate;
