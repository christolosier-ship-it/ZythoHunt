import { assetUrl } from "./asset-url.js";
import { getPreloadWindowUrls } from "./asset-preload-queue.js";
import { getCollectionAssetStatus } from "./asset-status.js";

export const PREFERRED_INITIAL_CAROUSEL_INDEX = 4;
export function getInitialCarouselIndex(cardCount, preferredIndex = PREFERRED_INITIAL_CAROUSEL_INDEX) {
  const count = Number(cardCount) || 0;
  if (count <= 0) return 0;
  return Math.min(Math.max(0, preferredIndex), count - 1);
}
export const INITIAL_PRELOAD_RADIUS = 3;

function collectionAssetUrls(collection) {
  if (!getCollectionAssetStatus(collection).shellReady) return [];
  return [
    collection.cardBackThumb || collection.cardBack,
    collection.collectionFaceThumb || collection.cardFrame
  ].filter(Boolean).map((path) => assetUrl(path));
}

/** @param {{ collection?: any, cards?: any[], activeIndex?: number, radius?: number }} [options] */
export function getInitialPreloadUrls({ collection, cards = [], activeIndex = getInitialCarouselIndex(cards.length), radius = INITIAL_PRELOAD_RADIUS } = {}) {
  const status = getCollectionAssetStatus(collection);
  const cardUrls = status.cardsReady ? getPreloadWindowUrls(cards, activeIndex, radius, "thumb") : [];
  return [...new Set([...collectionAssetUrls(collection), ...cardUrls])];
}

export async function preloadAssets(onProgress, options = {}) {
  const urls = getInitialPreloadUrls(options);
  let loaded = 0;
  const total = urls.length || 1;
  if (!urls.length) onProgress?.(1);

  const load = (url) =>
    new Promise((resolve) => {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => { loaded++; onProgress?.(loaded / total); resolve(); };
      img.onerror = () => { loaded++; onProgress?.(loaded / total); resolve(); };
      img.src = url;
    });

  await Promise.all(urls.map(load));
}
