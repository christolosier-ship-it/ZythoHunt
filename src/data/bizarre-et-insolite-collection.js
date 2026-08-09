import collectionJson from "./brassopedie/collection-10-bizarre-et-insolite.js";
import { createCollectionBundle } from "./create-collection-bundle.js";
import {
  bizarreEtInsoliteAssets,
  bizarreEtInsoliteCardImages
} from "./card-assets/bizarre-et-insolite-assets.js";

// Les IDs c10-xxx restent ceux de la collection déjà publiée afin de préserver
// la progression locale ; seuls les noms provisoires sont remplacés par les vrais dossiers.
const bundle = createCollectionBundle({
  collectionJson,
  collectionId: "bizarre-et-insolite",
  slug: "bizarre-et-insolite",
  subtitle: "Collection secrète",
  order: 100,
  expectedCardCount: 42,
  discoveryKey: "zythohunt.discovery.bizarre-et-insolite.v1",
  assets: {
    collection: bizarreEtInsoliteAssets,
    cards: bizarreEtInsoliteCardImages
  },
  backgroundPreset: { beerT: 18, bubbleDensity: 42, foamIntensity: 38 },
  assetsReady: true
});

export const bizarreEtInsoliteBundle = bundle;
export const bizarreEtInsoliteCollection = bundle.collection;
export const bizarreEtInsoliteCards = bundle.cards;
export const bizarreEtInsoliteCardsById = bundle.cardsById;
export const revealableBizarreEtInsoliteCards = bundle.revealableCards;
export const validateBizarreEtInsoliteCollection = bundle.validate;
