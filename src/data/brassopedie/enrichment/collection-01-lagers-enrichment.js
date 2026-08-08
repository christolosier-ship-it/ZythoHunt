import { lagersEnrichmentPart1 } from "./collection-01-lagers-part-1.js";
import { lagersEnrichmentPart2 } from "./collection-01-lagers-part-2.js";
import { lagersEnrichmentPart3 } from "./collection-01-lagers-part-3.js";
import { lagersEnrichmentPart4 } from "./collection-01-lagers-part-4.js";
import { bjcp2021 } from "./lagers-sources.js";

const cards = {
  ...lagersEnrichmentPart1,
  ...lagersEnrichmentPart2,
  ...lagersEnrichmentPart3,
  ...lagersEnrichmentPart4
};

cards["rice-lager"] = {
  ...cards["rice-lager"],
  recette: {
    ...cards["rice-lager"].recette,
    maltsEtCereales: [
      "Malt Pilsner ou lager pâle comme source principale d’enzymes et de structure.",
      "Riz blanc neutre, riz floconné/prégélatinisé ou variété aromatique selon l’effet recherché. Dans le cadre de compétition Brewers Association 2026, la catégorie Rice Lager demande au moins 15 % de riz ; les pratiques brassicoles réelles peuvent naturellement employer des proportions différentes hors de cette définition."
    ]
  }
};

cards["american-pilsner"] = {
  ...cards["american-pilsner"],
  sources: [
    ...cards["american-pilsner"].sources,
    bjcp2021("Pre-Prohibition Lager / Classic American Pilsner", "27/27f-pre-prohibition-lager")
  ]
};

export const lagersEncyclopedicEnrichment = Object.freeze({
  version: "2026-08-pilot-v1",
  updatedAt: "2026-08-08",
  cards: Object.freeze(cards)
});
