import { assetUrl } from "./asset-url.js";
import { cards } from "../data/cards.js";

export const CARD_BACK_URL = assetUrl("/assets/collections/porters-stouts/card-back.webp");
export const CARD_FRAME_URL = assetUrl("/assets/collections/porters-stouts/card-front-frame.svg");

export async function preloadAssets(onProgress) {
  const urls = [
    CARD_BACK_URL,
    CARD_FRAME_URL,
    ...cards.map((c) => assetUrl(c.image))
  ];

  let loaded = 0;
  const total = urls.length;

  const load = (url) =>
    new Promise((resolve) => {
      const isSvg = url.endsWith(".svg");
      if (isSvg) {
        fetch(url)
          .then(() => { loaded++; onProgress && onProgress(loaded / total); resolve(); })
          .catch(() => { loaded++; onProgress && onProgress(loaded / total); resolve(); });
      } else {
        const img = new Image();
        img.onload = () => { loaded++; onProgress && onProgress(loaded / total); resolve(); };
        img.onerror = () => { loaded++; onProgress && onProgress(loaded / total); resolve(); };
        img.src = url;
      }
    });

  await Promise.all(urls.map(load));
}
