import { lagersEnrichmentPart2 as basePilsnersAndPaleSpecialties } from "./pilsners-and-pale-specialties-base.js";
import { bjcp2021 } from "./lagers-sources.js";

const riceLager = {
  ...basePilsnersAndPaleSpecialties["rice-lager"],
  recette: {
    ...basePilsnersAndPaleSpecialties["rice-lager"].recette,
    maltsEtCereales: [
      "Malt Pilsner ou lager pâle comme source principale d’enzymes et de structure.",
      "Riz blanc neutre, riz floconné/prégélatinisé ou variété aromatique selon l’effet recherché. Dans le cadre de compétition Brewers Association 2026, la catégorie Rice Lager demande au moins 15 % de riz ; les pratiques brassicoles réelles peuvent naturellement employer des proportions différentes hors de cette définition."
    ]
  }
};

const americanPilsner = {
  ...basePilsnersAndPaleSpecialties["american-pilsner"],
  sources: [
    ...basePilsnersAndPaleSpecialties["american-pilsner"].sources,
    bjcp2021("Pre-Prohibition Lager / Classic American Pilsner", "27/27f-pre-prohibition-lager")
  ]
};

// Domain-level corrections live here, before collection aggregation. The collection
// index only combines complete thematic modules and never repatches individual cards.
export const pilsnersAndPaleSpecialties = Object.freeze({
  ...basePilsnersAndPaleSpecialties,
  "rice-lager": riceLager,
  "american-pilsner": americanPilsner
});
