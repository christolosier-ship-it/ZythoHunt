import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const resolveRepo = (...segments) => path.join(repoRoot, ...segments);

const legacyJsonPath = resolveRepo("src/data/brassopedie/collection-01-lagers-et-fermentations-basses.json");
const canonicalJsPath = resolveRepo("src/data/brassopedie/collection-01-lagers-et-fermentations-basses.js");
const collectionWrapperPath = resolveRepo("src/data/lagers-et-fermentations-basses-collection.js");
const bundleFactoryPath = resolveRepo("src/data/create-collection-bundle.js");
const encyclopediaDir = resolveRepo("src/data/brassopedie/encyclopedia");
const legacyEnrichmentDir = resolveRepo("src/data/brassopedie/enrichment");
const validationTestPath = resolveRepo("src/data/brassopedie/validate-brassopedie.test.js");
const readmePath = resolveRepo("src/data/brassopedie/README.md");

const collectionJson = JSON.parse(fs.readFileSync(legacyJsonPath, "utf8"));
const { lagersEncyclopedicEnrichment } = await import("../src/data/brassopedie/encyclopedia/collections/lagers/index.js");
const { applyEncyclopedicEnrichment } = await import("../src/data/brassopedie/encyclopedia/apply-encyclopedic-enrichment.js");

const canonical = applyEncyclopedicEnrichment(collectionJson, lagersEncyclopedicEnrichment);
delete canonical.collection.encyclopedicEnrichmentVersion;
delete canonical.collection.encyclopedicEnrichmentUpdatedAt;

function serialize(value, depth = 0) {
  const indent = "  ".repeat(depth);
  const childIndent = "  ".repeat(depth + 1);

  if (value === null) return "null";
  if (typeof value === "boolean" || typeof value === "number") return String(value);
  if (typeof value === "string") {
    if (value.includes("\n")) {
      const safe = value
        .replace(/\\/g, "\\\\")
        .replace(/`/g, "\\`")
        .replace(/\$\{/g, "\\${");
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
  throw new TypeError(`Unsupported canonical data type: ${typeof value}`);
}

fs.writeFileSync(
  canonicalJsPath,
  `// Source canonique de la collection : taxonomie + contenu encyclopédique.\n// Une fiche n'existe qu'ici ; aucune couche de patch ou d'enrichment parallèle.\n\nconst collection = ${serialize(canonical)};\n\nexport default collection;\n`,
  "utf8"
);

let wrapper = fs.readFileSync(collectionWrapperPath, "utf8");
wrapper = wrapper
  .replace(
    'import collectionJson from "./brassopedie/collection-01-lagers-et-fermentations-basses.json" with { type: "json" };',
    'import collectionJson from "./brassopedie/collection-01-lagers-et-fermentations-basses.js";'
  )
  .replace(/import \{ lagersEncyclopedicEnrichment \} from "\.\/brassopedie\/encyclopedia\/collections\/lagers\/index\.js";\n/, "")
  .replace(/\n  encyclopedia: lagersEncyclopedicEnrichment,/, "");
fs.writeFileSync(collectionWrapperPath, wrapper, "utf8");

let bundleFactory = fs.readFileSync(bundleFactoryPath, "utf8");
bundleFactory = bundleFactory
  .replace(/import \{ applyEncyclopedicEnrichment \} from "\.\/brassopedie\/encyclopedia\/apply-encyclopedic-enrichment\.js";\n/, "")
  .replace(/\n  encyclopedia = null,/, "")
  .replace(
    /  const sourceJson = encyclopedia\n    \? applyEncyclopedicEnrichment\(collectionJson, encyclopedia\)\n    : collectionJson;\n/,
    "  const sourceJson = collectionJson;\n"
  );
fs.writeFileSync(bundleFactoryPath, bundleFactory, "utf8");

const validationTest = `import test from "node:test";
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
const isIsoDate = (value) => /^\\d{4}-\\d{2}-\\d{2}$/.test(String(value || ""));

test("all collection bundles pass their structural validator", () => {
  collectionBundles.forEach((bundle) => {
    const validation = bundle.validate();
    assert.equal(validation.valid, true, \`${'${bundle.collection.id}'}: ${'${validation.errors.join(" | ")}'}\`);
  });
});

test("canonical lager collection contains exactly one complete definition per style", () => {
  assert.equal(lagers.cartes.length, 45);
  const ids = lagers.cartes.map((card) => card.id);
  const idSet = new Set(ids);
  assert.equal(idSet.size, ids.length, "duplicate lager ids");

  lagers.cartes.forEach((card) => {
    if (card.parentPrincipalId) {
      assert.ok(idSet.has(card.parentPrincipalId), \`${'${card.id}'}: unknown parent ${'${card.parentPrincipalId}'}\`);
    }

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
`;
fs.writeFileSync(validationTestPath, validationTest, "utf8");

const readme = `# Données Brassopédie\n\n## Règle de simplicité\n\nUne collection enrichie possède **un seul fichier canonique** contenant la taxonomie et le contenu encyclopédique de ses fiches. Une fiche ne doit jamais être répartie entre une taxonomie, un patch, un index et plusieurs fragments.\n\nPour la collection Lager, la source est \`collection-01-lagers-et-fermentations-basses.js\`. Les futures collections pourront être migrées vers le même modèle lorsqu'elles seront enrichies.\n\n\`createCollectionBundle()\` ne connaît aucune mécanique d'enrichment : il reçoit une collection déjà complète. Les validations communes vivent dans un test Brassopédie unique plutôt que dans un test par sous-module éditorial.\n\nLes fichiers temporaires de migration, les couches legacy et les données dupliquées doivent être supprimés du dépôt une fois une collection migrée.\n`;
fs.writeFileSync(readmePath, readme, "utf8");

fs.rmSync(legacyJsonPath, { force: true });
fs.rmSync(encyclopediaDir, { recursive: true, force: true });
fs.rmSync(legacyEnrichmentDir, { recursive: true, force: true });

console.log(`Canonical Lager collection written with ${canonical.cartes.length} cards.`);
console.log("Legacy JSON and encyclopedia/enrichment layers removed.");
