import { porterStoutCards, porterStoutCollection } from "./porters-stouts-collection.js";

export const collections = [
  {
    ...porterStoutCollection,
    order: 10,
    cardFrame: "/assets/collections/porters-stouts/card-front-frame.svg",
    cardIds: porterStoutCards.map((card) => card.id)
  }
];
