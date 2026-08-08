import test from "node:test";
import assert from "node:assert/strict";
import { applyEncyclopedicEnrichment, ENCYCLOPEDIC_FIELDS } from "./apply-encyclopedic-enrichment.js";

const baseCollection = () => ({
  collection: { id: 1, nom: "Test" },
  cartes: [
    {
      id: "one",
      nom: "Taxonomy name",
      nature: "S",
      description: "Taxonomy description",
      histoireEtOrigines: "Legacy history that must never be authoritative",
      recette: { profilRecherche: "Legacy recipe" },
      sources: [{ organisme: "Legacy" }]
    },
    {
      id: "two",
      nom: "Second",
      nature: "S",
      histoireEtOrigines: "Legacy only"
    }
  ]
});

test("encyclopedic merge keeps taxonomy immutable and discards legacy editorial fields", () => {
  const enriched = applyEncyclopedicEnrichment(baseCollection(), {
    version: "v2",
    updatedAt: "2026-08-08",
    cards: {
      one: {
        histoireEtOrigines: "Canonical history",
        recette: { profilRecherche: "Canonical recipe" },
        sources: [{ organisme: "Canonical", reference: "Reference", url: "https://example.test" }]
      }
    }
  });

  assert.equal(enriched.cartes[0].nom, "Taxonomy name");
  assert.equal(enriched.cartes[0].nature, "S");
  assert.equal(enriched.cartes[0].histoireEtOrigines, "Canonical history");
  assert.equal(enriched.cartes[0].recette.profilRecherche, "Canonical recipe");
  assert.equal(enriched.cartes[0].sources[0].organisme, "Canonical");

  assert.equal(enriched.cartes[1].nom, "Second");
  assert.equal("histoireEtOrigines" in enriched.cartes[1], false);
  assert.equal("recette" in enriched.cartes[1], false);
  assert.equal("sources" in enriched.cartes[1], false);

  assert.equal(enriched.collection.encyclopedicEnrichmentVersion, "v2");
  assert.equal(enriched.collection.encyclopedicEnrichmentUpdatedAt, "2026-08-08");
});

test("encyclopedic patches cannot override taxonomy fields", () => {
  assert.throws(() => applyEncyclopedicEnrichment(baseCollection(), {
    cards: { one: { nom: "Forbidden override" } }
  }), /attempts to override taxonomy fields/);
});

test("encyclopedic patches cannot target unknown taxonomy ids", () => {
  assert.throws(() => applyEncyclopedicEnrichment(baseCollection(), {
    cards: { missing: { histoireEtOrigines: "Nope" } }
  }), /unknown taxonomy id/);
});

test("the encyclopedia field whitelist stays intentionally small", () => {
  assert.deepEqual([...ENCYCLOPEDIC_FIELDS].sort(), ["histoireEtOrigines", "recette", "sources"].sort());
});
