import { createCollectionAssetPaths } from "./create-collection-asset-paths.js";
import {
  bizarreEtInsoliteAssets,
  bizarreEtInsoliteCardImages
} from "./card-assets/bizarre-et-insolite-assets.js";

const { assetPath, thumbPath } = createCollectionAssetPaths(bizarreEtInsoliteAssets.basePath);

const cardBack = assetPath(bizarreEtInsoliteAssets.cardBack);
const collectionFace = assetPath(bizarreEtInsoliteAssets.collectionFace);

const cardEntries = Array.from({ length: 42 }, (_, index) => {
  const number = index + 1;
  const padded = String(number).padStart(3, "0");
  return {
    id: `c10-${padded}`,
    name: `Carte insolite ${String(number).padStart(2, "0")}`,
    fileName: bizarreEtInsoliteCardImages[`c10-${padded}`]
  };
});

const collection = {
  id: "bizarre-et-insolite",
  slug: "bizarre-et-insolite",
  name: "Bizarre et insolite",
  nom: "Bizarre et insolite",
  subtitle: "Collection secrète",
  order: 100,
  expectedCardCount: 42,
  discoveryKey: "zythohunt.discovery.bizarre-et-insolite.v1",
  assetsReady: true,
  searchable: false,
  secret: {
    enabled: true,
    lockedLabel: "????",
    unlockRatio: 0.5,
    unlockScope: "classic-collections",
    revealMode: "click-after-unlock"
  },
  cardBack,
  cardFrame: collectionFace,
  collectionFace,
  cardBackThumb: thumbPath(bizarreEtInsoliteAssets.cardBack),
  collectionFaceThumb: thumbPath(bizarreEtInsoliteAssets.collectionFace),
  backgroundPreset: { beerT: 18, bubbleDensity: 42, foamIntensity: 38 },
  cardIds: cardEntries.map((entry) => entry.id)
};

const cards = cardEntries.map((entry) => {
  const image = assetPath(entry.fileName);
  return {
    id: entry.id,
    name: entry.name,
    type: "Bizarre",
    path: entry.name,
    tagline: "Carte secrète de la collection Bizarre et insolite.",
    image,
    thumbImage: thumbPath(entry.fileName),
    fullImage: image,
    frame: collection.cardFrame,
    revealable: true,
    aliases: []
  };
});

const cardsById = Object.fromEntries(cards.map((card) => [card.id, card]));
const revealableCards = cards.filter((card) => card.revealable);

function validate() {
  const errors = [];
  const ids = cards.map((card) => card.id);

  if (cards.length !== collection.expectedCardCount) {
    errors.push(`Expected ${collection.expectedCardCount} cards, got ${cards.length}.`);
  }
  if (new Set(ids).size !== ids.length) {
    errors.push(`Duplicate card IDs detected in ${collection.id}.`);
  }
  if (!collection.cardBack) {
    errors.push(`Missing collection card back declaration for ${collection.id}.`);
  }
  if (!collection.collectionFace) {
    errors.push(`Missing collection face declaration for ${collection.id}.`);
  }

  cards.forEach((card) => {
    if (!bizarreEtInsoliteCardImages[card.id]) errors.push(`Missing image mapping for ${card.id}.`);
    if (!card.image) errors.push(`Missing image for ${card.id}.`);
    if (!card.thumbImage) errors.push(`Missing thumb image for ${card.id}.`);
    if (!card.fullImage) errors.push(`Missing full image for ${card.id}.`);
  });

  return { valid: errors.length === 0, errors };
}

export const bizarreEtInsoliteBundle = { collection, cards, cardsById, revealableCards, validate };
export const bizarreEtInsoliteCollection = collection;
export const bizarreEtInsoliteCards = cards;
export const bizarreEtInsoliteCardsById = cardsById;
export const revealableBizarreEtInsoliteCards = revealableCards;
export const validateBizarreEtInsoliteCollection = validate;
