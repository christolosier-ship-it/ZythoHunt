import test from "node:test";
import assert from "node:assert/strict";
import { applyEncyclopedicEnrichment } from "./apply-encyclopedic-enrichment.js";

test("encyclopedic enrichment preserves taxonomy and merges content selectively", () => {
  const base = {
    collection: { id: 1, nom: "Test" },
    cartes: [
      { id: "one", nom: "One", recette: { profilUnique: true, maltsEtCereales: ["base"] }, sources: [{ organisme: "base" }] },
      { id: "two", nom: "Two", histoireEtOrigines: "Original" }
    ]
  };

  const enriched = applyEncyclopedicEnrichment(base, {
    version: "pilot-v1",
    updatedAt: "2026-08-08",
    cards: {
      one: {
        histoireEtOrigines: "Enriched",
        recette: { profilRecherche: "Target" },
        sources: [{ organisme: "new" }]
      }
    }
  });

  assert.equal(enriched.collection.id, 1);
  assert.equal(enriched.collection.encyclopedicEnrichmentVersion, "pilot-v1");
  assert.equal(enriched.collection.encyclopedicEnrichmentUpdatedAt, "2026-08-08");
  assert.equal(enriched.cartes[0].nom, "One");
  assert.equal(enriched.cartes[0].histoireEtOrigines, "Enriched");
  assert.deepEqual(enriched.cartes[0].recette.maltsEtCereales, ["base"]);
  assert.equal(enriched.cartes[0].recette.profilRecherche, "Target");
  assert.deepEqual(enriched.cartes[0].sources, [{ organisme: "new" }]);
  assert.equal(enriched.cartes[1], base.cartes[1]);
});
