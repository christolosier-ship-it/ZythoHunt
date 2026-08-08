import test from "node:test";
import assert from "node:assert/strict";
import lagers from "./collection-01-lagers-et-fermentations-basses.js";
import paleAles from "./collection-02-pale-ales-bitters-et-ipa.js";
import portersStouts from "./collection-03-porters-et-stouts.js";
import belgianFrench from "./collection-04-traditions-belges-et-francaises.js";
import { collectionBundles } from "../collections.js";

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
const canonicalCollections = [
  { label: "lagers", data: lagers, expected: 45 },
  { label: "pale-ales-bitters-et-ipa", data: paleAles, expected: 36 },
  { label: "porters-et-stouts", data: portersStouts, expected: 22 },
  { label: "traditions-belges-et-francaises", data: belgianFrench, expected: 17 }
];

test("all collection bundles pass their structural validator", () => {
  collectionBundles.forEach((bundle) => {
    const validation = bundle.validate();
    assert.equal(validation.valid, true, `${bundle.collection.id}: ${validation.errors.join(" | ")}`);
  });
});

test("canonical Brassopedie collections contain one complete definition per style", () => {
  canonicalCollections.forEach(({ label, data, expected }) => {
    assert.equal(data.cartes.length, expected, `${label}: expected ${expected} cards`);
    const ids = data.cartes.map((card) => card.id);
    assert.equal(new Set(ids).size, ids.length, `${label}: duplicate ids`);

    data.cartes.forEach((card) => {
      assert.ok(String(card.histoireEtOrigines || "").trim(), `${card.id}: missing history`);
      assert.ok(card.recette, `${card.id}: missing recipe`);
      recipeKeys.forEach((key) => {
        const value = card.recette[key];
        const present = Array.isArray(value) ? value.length > 0 : String(value ?? "").trim().length > 0;
        assert.ok(present, `${card.id}: missing recipe.${key}`);
      });

      assert.ok(Array.isArray(card.sources) && card.sources.length > 0, `${card.id}: missing sources`);
      card.sources.forEach((source) => {
        assert.ok(String(source.organisme || "").trim(), `${card.id}: source without organisation`);
        assert.ok(String(source.reference || "").trim(), `${card.id}: source without reference`);
        if (source.url != null) assert.match(String(source.url), /^https:\/\//, `${card.id}: invalid source URL`);
        if (source.consultation != null) assert.ok(isIsoDate(source.consultation), `${card.id}: invalid consultation date`);
      });
    });
  });
});
