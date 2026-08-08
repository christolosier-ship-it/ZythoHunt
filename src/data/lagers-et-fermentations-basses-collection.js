import collectionJson from "./brassopedie/collection-01-lagers-et-fermentations-basses.json" with { type: "json" };
import { applyEncyclopedicEnrichment } from "./brassopedie/apply-encyclopedic-enrichment.js";
import { lagersEncyclopedicEnrichment } from "./brassopedie/enrichment/collection-01-lagers-enrichment.js";
import { createCollectionBundle } from "./create-collection-bundle.js";
import {
  lagersEtFermentationsBassesAssets,
  lagersEtFermentationsBassesCardImages
} from "./card-assets/lagers-et-fermentations-basses-assets.js";

const enrichedCollectionJson = applyEncyclopedicEnrichment(collectionJson, lagersEncyclopedicEnrichment);

const bundle = createCollectionBundle({
  collectionJson: enrichedCollectionJson,
  collectionId: "lagers-et-fermentations-basses",
  slug: "lagers-et-fermentations-basses",
  subtitle: "45 cartes Brassopédie à illustrer",
  order: 10,
  expectedCardCount: 45,
  discoveryKey: "zythohunt.discovery.lagers-et-fermentations-basses.v1",
  assets: {
    collection: lagersEtFermentationsBassesAssets,
    cards: lagersEtFermentationsBassesCardImages
  },
  backgroundPreset: {
    beerT: 88,
    bubbleDensity: 68,
    foamIntensity: 40
  },
  assetsReady: true
});

export const lagersEtFermentationsBassesBundle = bundle;
export const lagersEtFermentationsBassesCollection = bundle.collection;
export const lagersEtFermentationsBassesCards = bundle.cards;
export const lagersEtFermentationsBassesCardsById = bundle.cardsById;
export const revealableLagersEtFermentationsBassesCards = bundle.revealableCards;
export const validateLagersEtFermentationsBassesCollection = bundle.validate;
