import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { part1 } from "./tmp-collection02/part-1-british.mjs";
import { part2 } from "./tmp-collection02/part-2-commonwealth-american-pale.mjs";
import { part3 } from "./tmp-collection02/part-3-core-ipa.mjs";
import { part4 } from "./tmp-collection02/part-4-specialty-ipa.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const resolveRepo = (...segments) => path.join(repoRoot, ...segments);

const legacyJsonPath = resolveRepo("src/data/brassopedie/collection-02-pale-ales-bitters-et-ipa.json");
const canonicalJsPath = resolveRepo("src/data/brassopedie/collection-02-pale-ales-bitters-et-ipa.js");
const wrapperPath = resolveRepo("src/data/pale-ales-bitters-et-ipa-collection.js");
const testPath = resolveRepo("src/data/brassopedie/validate-brassopedie.test.js");
const readmePath = resolveRepo("src/data/brassopedie/README.md");

const legacy = JSON.parse(fs.readFileSync(legacyJsonPath, "utf8"));
const modules = [part1, part2, part3, part4];
const editorial = {};

modules.forEach((module, moduleIndex) => {
  Object.entries(module).forEach(([id, value]) => {
    if (Object.prototype.hasOwnProperty.call(editorial, id)) {
      throw new Error(`Duplicate collection-02 enrichment id ${id} in module ${moduleIndex + 1}`);
    }
    editorial[id] = value;
  });
});

const taxonomyIds = legacy.cartes.map((card) => card.id);
const editorialIds = Object.keys(editorial);
const missing = taxonomyIds.filter((id) => !editorial[id]);
const unknown = editorialIds.filter((id) => !taxonomyIds.includes(id));
if (missing.length || unknown.length) {
  throw new Error(`Collection 02 coverage mismatch. Missing: ${missing.join(", ") || "none"}; unknown: ${unknown.join(", ") || "none"}`);
}
if (taxonomyIds.length !== 36 || editorialIds.length !== 36) {
  throw new Error(`Expected 36 taxonomy and editorial entries, got ${taxonomyIds.length}/${editorialIds.length}`);
}

const canonical = {
  ...legacy,
  cartes: legacy.cartes.map((card) => ({
    ...card,
    histoireEtOrigines: editorial[card.id].histoireEtOrigines,
    recette: editorial[card.id].recette,
    sources: editorial[card.id].sources
  }))
};

function serialize(value, depth = 0) {
  const indent = "  ".repeat(depth);
  const childIndent = "  ".repeat(depth + 1);
  if (value === null) return "null";
  if (typeof value === "boolean" || typeof value === "number") return String(value);
  if (typeof value === "string") {
    if (value.includes("\n")) {
      const safe = value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
      return `\`${safe}\``;
    }
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    if (!value.length) return "[]";
    return `[\n${value.map((item) => `${childIndent}${serialize(item, depth + 1)}`).join(",\n")}\n${indent}]`;
  }
  if (typeof value === "object") {
    const entries = Object.entries(value);
    if (!entries.length) return "{}";
    return `{\n${entries.map(([key, item]) => `${childIndent}${JSON.stringify(key)}: ${serialize(item, depth + 1)}`).join(",\n")}\n${indent}}`;
  }
  throw new TypeError(`Unsupported data type: ${typeof value}`);
}

fs.writeFileSync(
  canonicalJsPath,
  `// Source canonique de la collection : taxonomie + contenu encyclopédique.\n// Une fiche n'existe qu'ici ; aucune couche de patch ou d'enrichment parallèle.\n\nconst collection = ${serialize(canonical)};\n\nexport default collection;\n`,
  "utf8"
);

let wrapper = fs.readFileSync(wrapperPath, "utf8");
wrapper = wrapper.replace(
  'import collectionJson from "./brassopedie/collection-02-pale-ales-bitters-et-ipa.json" with { type: "json" };',
  'import collectionJson from "./brassopedie/collection-02-pale-ales-bitters-et-ipa.js";'
);
fs.writeFileSync(wrapperPath, wrapper, "utf8");

const test = `import test from "node:test";
import assert from "node:assert/strict";
import lagers from "./collection-01-lagers-et-fermentations-basses.js";
import paleAles from "./collection-02-pale-ales-bitters-et-ipa.js";
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
const isIsoDate = (value) => /^\\d{4}-\\d{2}-\\d{2}$/.test(String(value || ""));
const canonicalCollections = [
  { label: "lagers", data: lagers, expected: 45 },
  { label: "pale-ales-bitters-et-ipa", data: paleAles, expected: 36 }
];

test("all collection bundles pass their structural validator", () => {
  collectionBundles.forEach((bundle) => {
    const validation = bundle.validate();
    assert.equal(validation.valid, true, \`${'${bundle.collection.id}'}: ${'${validation.errors.join(" | ")}'}\`);
  });
});

test("canonical Brassopedie collections contain one complete definition per style", () => {
  canonicalCollections.forEach(({ label, data, expected }) => {
    assert.equal(data.cartes.length, expected, \`${'${label}'}: expected ${'${expected}'} cards\`);
    const ids = data.cartes.map((card) => card.id);
    assert.equal(new Set(ids).size, ids.length, \`${'${label}'}: duplicate ids\`);

    data.cartes.forEach((card) => {
      assert.ok(String(card.histoireEtOrigines || "").trim(), \`${'${card.id}'}: missing history\`);
      assert.ok(card.recette, \`${'${card.id}'}: missing recipe\`);
      recipeKeys.forEach((key) => {
        const value = card.recette[key];
        const present = Array.isArray(value) ? value.length > 0 : String(value ?? "").trim().length > 0;
        assert.ok(present, \`${'${card.id}'}: missing recipe.${'${key}'}\`);
      });

      assert.ok(Array.isArray(card.sources) && card.sources.length > 0, \`${'${card.id}'}: missing sources\`);
      card.sources.forEach((source) => {
        assert.ok(String(source.organisme || "").trim(), \`${'${card.id}'}: source without organisation\`);
        assert.ok(String(source.reference || "").trim(), \`${'${card.id}'}: source without reference\`);
        if (source.url != null) assert.match(String(source.url), /^https:\\/\\//, \`${'${card.id}'}: invalid source URL\`);
        if (source.consultation != null) assert.ok(isIsoDate(source.consultation), \`${'${card.id}'}: invalid consultation date\`);
      });
    });
  });
});
`;
fs.writeFileSync(testPath, test, "utf8");

let readme = fs.readFileSync(readmePath, "utf8");
readme = readme.replace(
  "Pour la collection Lager, la source est `collection-01-lagers-et-fermentations-basses.js`. Les futures collections pourront être migrées vers le même modèle lorsqu'elles seront enrichies.",
  "Les collections enrichies 1 et 2 sont respectivement portées par `collection-01-lagers-et-fermentations-basses.js` et `collection-02-pale-ales-bitters-et-ipa.js`. Les futures collections seront migrées vers le même modèle au moment de leur enrichissement."
);
fs.writeFileSync(readmePath, readme, "utf8");

fs.rmSync(legacyJsonPath, { force: true });
console.log(`Collection 02 canonicalized with ${canonical.cartes.length} complete cards.`);
