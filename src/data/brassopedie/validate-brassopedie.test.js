import test from "node:test";
import assert from "node:assert/strict";
import lagers from "./collection-01-lagers-et-fermentations-basses.js";
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

test("all collection bundles pass their structural validator", () => {
  collectionBundles.forEach((bundle) => {
    const validation = bundle.validate();
    assert.equal(validation.valid, true, `${bundle.collection.id}: ${validation.errors.join(" | ")}`);
  });
});

test("canonical lager collection contains exactly one complete definition per style", () => {
  assert.equal(lagers.cartes.length, 45);
  const ids = lagers.cartes.map((card) => card.id);
  const idSet = new Set(ids);
  assert.equal(idSet.size, ids.length, "duplicate lager ids");

  lagers.cartes.forEach((card) => {
    if (card.parentPrincipalId) {
      assert.ok(idSet.has(card.parentPrincipalId), `${card.id}: unknown parent ${card.parentPrincipalId}`);
    }

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
