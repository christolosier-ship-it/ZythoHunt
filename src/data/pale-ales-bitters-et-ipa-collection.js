import collectionJson from "./brassopedie/collection-02-pale-ales-bitters-et-ipa.json" with { type: "json" };
import { createCollectionBundle } from "./create-collection-bundle.js";
import { paleAlesBittersEtIpaAssets, paleAlesBittersEtIpaAssetPath, paleAlesBittersEtIpaCardImages, paleAlesBittersEtIpaThumbPath } from "./card-assets/pale-ales-bitters-et-ipa-assets.js";

const bundle = createCollectionBundle({
  collectionJson,
  collectionId: "pale-ales-bitters-et-ipa",
  slug: "pale-ales-bitters-et-ipa",
  subtitle: "36 cartes Brassopédie à illustrer",
  order: 20,
  discoveryKey: "zythohunt.discovery.pale-ales-bitters-et-ipa.v1",
  assets: {
    cardImages: paleAlesBittersEtIpaCardImages,
    collectionAssets: paleAlesBittersEtIpaAssets,
    assetPath: paleAlesBittersEtIpaAssetPath,
    thumbPath: paleAlesBittersEtIpaThumbPath
  },
  backgroundPreset: {
    beerT: 72,
    bubbleDensity: 58,
    foamIntensity: 48
  },
  assetStatus: { shellReady: true, cardsReady: true },
  expectedCardCount: 36
});

export const paleAlesBittersEtIpaBundle = bundle;
export const paleAlesBittersEtIpaCollection = bundle.collection;
export const paleAlesBittersEtIpaCards = bundle.cards;
export const paleAlesBittersEtIpaCardsById = bundle.cardsById;
export const revealablePaleAlesBittersEtIpaCards = bundle.revealableCards;
export const validatePaleAlesBittersEtIpaCollection = bundle.validate;

const validation = bundle.validate();
if (!validation.valid && import.meta.env?.DEV) {
  console.error("Invalid Pale Ales, Bitters et IPA collection", validation.errors);
}
