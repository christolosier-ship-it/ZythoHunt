import { createCollectionAssetPaths } from "./create-collection-asset-paths.js";

export function slugifyCollectionId(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " et ")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * @param {{
 *   collectionJson: { collection?: Record<string, any>, cartes: any[] },
 *   collectionId?: string,
 *   slug?: string,
 *   subtitle?: string,
 *   order?: number,
 *   expectedCardCount?: number | null,
 *   discoveryKey: string,
 *   assets: { collection: { basePath: string, cardBack: string, collectionFace: string }, cards: Record<string, string> },
 *   backgroundPreset?: Record<string, number>,
 *   assetsReady?: boolean
 * }} options
 */
export function createCollectionBundle({
  collectionJson,
  collectionId,
  slug,
  subtitle,
  order,
  expectedCardCount = null,
  discoveryKey,
  assets,
  backgroundPreset,
  assetsReady
}) {
  const sourceCollection = collectionJson.collection || {};
  const normalizedSlug = slug || sourceCollection.slug || slugifyCollectionId(sourceCollection.nom);
  const collectionAssets = assets.collection;
  const cardImages = assets.cards;
  const { assetPath, thumbPath } = createCollectionAssetPaths(collectionAssets.basePath);
  const cardBack = assetPath(collectionAssets.cardBack);
  const collectionFace = assetPath(collectionAssets.collectionFace);

  const collection = {
    ...sourceCollection,
    id: collectionId || normalizedSlug,
    slug: normalizedSlug,
    name: sourceCollection.nom || normalizedSlug,
    subtitle,
    order,
    discoveryKey,
    assetsReady: Boolean(assetsReady),
    cardBack,
    cardFrame: collectionFace,
    collectionFace,
    cardBackThumb: thumbPath(collectionAssets.cardBack),
    collectionFaceThumb: thumbPath(collectionAssets.collectionFace),
    backgroundPreset,
    cardIds: collectionJson.cartes.map((entry) => entry.id)
  };

  const cards = collectionJson.cartes.map((entry) => {
    const fileName = cardImages[entry.id];
    const image = assetPath(fileName);
    return {
      id: entry.id,
      name: entry.nom,
      type: entry.nature,
      path: entry.parentPrincipalId ? `${entry.parentPrincipalId} › ${entry.nom}` : entry.nom,
      tagline: entry.description,
      image,
      thumbImage: thumbPath(fileName),
      fullImage: image,
      frame: collection.cardFrame,
      revealable: true,
      aliases: entry.aliases || [],
      brassopedie: entry
    };
  });

  const cardsById = Object.fromEntries(cards.map((card) => [card.id, card]));
  const revealableCards = cards.filter((card) => card.revealable);

  function validate() {
    const errors = [];
    const ids = cards.map((card) => card.id);

    if (expectedCardCount !== null && cards.length !== expectedCardCount) {
      errors.push(`Expected ${expectedCardCount} cards, got ${cards.length}.`);
    }
    if (new Set(ids).size !== ids.length) {
      errors.push(`Duplicate card IDs detected in ${collection.id}.`);
    }
    if (!collectionAssets.cardBack) {
      errors.push(`Missing collection card back declaration for ${collection.id}.`);
    }
    if (!collectionAssets.collectionFace) {
      errors.push(`Missing collection face declaration for ${collection.id}.`);
    }

    cards.forEach((card) => {
      if (!cardImages[card.id]) errors.push(`Missing image mapping for ${card.id}.`);
      if (!card.image) errors.push(`Missing image for ${card.id}.`);
      if (!card.thumbImage) errors.push(`Missing thumb image for ${card.id}.`);
      if (!card.fullImage) errors.push(`Missing full image for ${card.id}.`);
    });

    Object.keys(cardImages).forEach((id) => {
      if (!cardsById[id]) errors.push(`Image mapping references unknown ID ${id}.`);
    });
    if (!collection.discoveryKey) errors.push(`Missing discovery key for ${collection.id}.`);
    if (!collection.backgroundPreset) errors.push(`Missing background preset for ${collection.id}.`);

    return { valid: errors.length === 0, errors };
  }

  return { collection, cards, cardsById, revealableCards, validate };
}
