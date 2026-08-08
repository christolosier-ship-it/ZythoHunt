import { lagersEnrichmentPart1 as foundationsLightAndClassicPils } from "./foundations-light-and-classic-pils.js";
import { pilsnersAndPaleSpecialties } from "./pilsners-and-pale-specialties.js";
import { lagersEnrichmentPart3 as amberAndClassicDarkLagers } from "./amber-and-classic-dark-lagers.js";
import { lagersEnrichmentPart4 as regionalDarkBocksAndNewWorldLagers } from "./regional-dark-bocks-and-new-world-lagers.js";

const cards = Object.freeze({
  ...foundationsLightAndClassicPils,
  ...pilsnersAndPaleSpecialties,
  ...amberAndClassicDarkLagers,
  ...regionalDarkBocksAndNewWorldLagers
});

export const lagersEncyclopedicEnrichment = Object.freeze({
  version: "2026-08-architecture-v2",
  updatedAt: "2026-08-08",
  cards
});
