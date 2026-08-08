import test from "node:test";
import assert from "node:assert/strict";
import collectionJson from "../../../collection-01-lagers-et-fermentations-basses.json" with { type: "json" };
import { ENCYCLOPEDIC_FIELDS, applyEncyclopedicEnrichment } from "../../apply-encyclopedic-enrichment.js";
import { lagersEncyclopedicEnrichment } from "./index.js";

const recipeKeys = [
  "maltsEtCereales",
  "houblons",
  "levuresEtMicroorganismes",
  "profilEau",
  "empatage",
  "ebullitionEtHoublonnage",
  "fermentation",
  "maturation",
  "profilRecherche"
];

const isIsoDate = (value) => /^\d{4}-\d{2}-\d{2}$/.test(String(value || ""));

test("lager encyclopedia covers exactly the taxonomy ids", () => {
  const expected = collectionJson.cartes.map((card) => card.id).sort();
  const actual = Object.keys(lagersEncyclopedicEnrichment.cards).sort();

  assert.equal(expected.length, 45);
  assert.deepEqual(actual, expected);
});

test("lager encyclopedia entries contain structured, traceable editorial data", () => {
  Object.entries(lagersEncyclopedicEnrichment.cards).forEach(([id, value]) => {
    const entry = /** @type {any} */ (value);
    const unexpected = Object.keys(entry).filter((key) => !ENCYCLOPEDIC_FIELDS.includes(key));

    assert.deepEqual(unexpected, [], `${id}: encyclopedia must not own taxonomy fields`);
    assert.ok(String(entry.histoireEtOrigines || "").trim(), `${id}: missing history`);
    assert.ok(entry.recette, `${id}: missing recipe`);
    recipeKeys.forEach((key) => {
      const recipeValue = entry.recette[key];
      const hasValue = Array.isArray(recipeValue)
        ? recipeValue.length > 0
        : String(recipeValue ?? "").trim().length > 0;
      assert.ok(hasValue, `${id}: missing recipe.${key}`);
    });

    assert.ok(Array.isArray(entry.sources) && entry.sources.length > 0, `${id}: missing sources`);
    entry.sources.forEach((source) => {
      assert.ok(String(source.organisme || "").trim(), `${id}: source without organisation`);
      assert.ok(String(source.reference || "").trim(), `${id}: source without reference`);
      assert.match(String(source.url || ""), /^https:\/\//, `${id}: source URL is not traceable`);
      if (source.consultation != null) {
        assert.ok(isIsoDate(source.consultation), `${id}: invalid source consultation date`);
      }
    });
  });
});

test("assembled lager cards take editorial content only from the encyclopedia layer", () => {
  const assembled = applyEncyclopedicEnrichment(collectionJson, lagersEncyclopedicEnrichment);

  assembled.cartes.forEach((card) => {
    const editorial = lagersEncyclopedicEnrichment.cards[card.id];
    assert.equal(card.histoireEtOrigines, editorial.histoireEtOrigines, `${card.id}: history mismatch`);
    assert.equal(card.recette, editorial.recette, `${card.id}: recipe mismatch`);
    assert.equal(card.sources, editorial.sources, `${card.id}: sources mismatch`);
  });
});
