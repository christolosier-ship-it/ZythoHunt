import test from "node:test";
import assert from "node:assert/strict";
import { lagersEtFermentationsBassesCardImages } from "../../card-assets/lagers-et-fermentations-basses-assets.js";
import { lagersEncyclopedicEnrichment } from "./collection-01-lagers-enrichment.js";

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

test("lager encyclopedic pilot covers every collection card", () => {
  const expected = Object.keys(lagersEtFermentationsBassesCardImages).sort();
  const actual = Object.keys(lagersEncyclopedicEnrichment.cards).sort();
  assert.equal(expected.length, 45);
  assert.deepEqual(actual, expected);
});

test("every lager pilot entry carries developed history, recipe structure and traceable sources", () => {
  Object.entries(lagersEncyclopedicEnrichment.cards).forEach(([id, patch]) => {
    assert.ok(String(patch.histoireEtOrigines || "").trim(), `${id}: missing history`);
    assert.ok(String(patch.histoireEtOrigines).includes("\n\n"), `${id}: history should be structured in paragraphs`);
    assert.ok(patch.recette, `${id}: missing recipe`);
    recipeKeys.forEach((key) => assert.ok(patch.recette[key] != null && String(patch.recette[key]).trim() !== "", `${id}: missing recipe.${key}`));
    assert.ok(Array.isArray(patch.sources) && patch.sources.length >= 2, `${id}: insufficient sources`);
    patch.sources.forEach((source) => {
      assert.ok(source.organisme, `${id}: source without organisation`);
      assert.ok(source.reference, `${id}: source without reference`);
      assert.match(source.url || "", /^https:\/\//, `${id}: source URL is not traceable`);
      assert.equal(source.consultation, "2026-08-08", `${id}: source consultation date missing`);
    });
  });
});
