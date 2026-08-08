import { lagersEnrichmentPart1 } from "./collection-01-lagers-part-1.js";
import { lagersEnrichmentPart2 } from "./collection-01-lagers-part-2.js";
import { lagersEnrichmentPart3 } from "./collection-01-lagers-part-3.js";
import { lagersEnrichmentPart4 } from "./collection-01-lagers-part-4.js";

export const lagersEncyclopedicEnrichment = Object.freeze({
  version: "2026-08-pilot-v1",
  updatedAt: "2026-08-08",
  cards: Object.freeze({
    ...lagersEnrichmentPart1,
    ...lagersEnrichmentPart2,
    ...lagersEnrichmentPart3,
    ...lagersEnrichmentPart4
  })
});
