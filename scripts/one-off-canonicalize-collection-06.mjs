import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import enrichment from "./tmp-collection06/enrichment.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = (...parts) => path.join(root, ...parts);
const oldPath = p("src/data/brassopedie/collection-06-bieres-acides-sauvages-et-spontanees.json");
const newPath = p("src/data/brassopedie/collection-06-bieres-acides-sauvages-et-spontanees.js");
const wrapperPath = p("src/data/bieres-acides-sauvages-et-spontanees-collection.js");
const testPath = p("src/data/brassopedie/validate-brassopedie.test.js");

const source = JSON.parse(fs.readFileSync(oldPath, "utf8"));
const expectedIds = source.cartes.map((card) => card.id);
const enrichmentIds = Object.keys(enrichment);
const missing = expectedIds.filter((id) => !enrichment[id]);
const unknown = enrichmentIds.filter((id) => !expectedIds.includes(id));
if (missing.length || unknown.length) {
  throw new Error(`Collection 06 enrichment mismatch. Missing: ${missing.join(", ") || "none"}; unknown: ${unknown.join(", ") || "none"}`);
}

const canonical = {
  ...source,
  cartes: source.cartes.map((card) => ({
    ...card,
    histoireEtOrigines: enrichment[card.id].histoireEtOrigines,
    recette: enrichment[card.id].recette,
    sources: enrichment[card.id].sources
  }))
};

function serialize(value, depth = 0) {
  const indent = "  ".repeat(depth);
  const child = "  ".repeat(depth + 1);
  if (value === null) return "null";
  if (["boolean", "number"].includes(typeof value)) return String(value);
  if (typeof value === "string") {
    if (value.includes("\n")) {
      return `\`${value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}\``;
    }
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    if (!value.length) return "[]";
    return `[\n${value.map((v) => `${child}${serialize(v, depth + 1)}`).join(",\n")}\n${indent}]`;
  }
  const entries = Object.entries(value);
  if (!entries.length) return "{}";
  return `{\n${entries.map(([k, v]) => `${child}${JSON.stringify(k)}: ${serialize(v, depth + 1)}`).join(",\n")}\n${indent}}`;
}

fs.writeFileSync(newPath, `// Source canonique de la collection : taxonomie + contenu encyclopédique.\n// Une fiche n'existe qu'ici ; aucune couche de patch ou d'enrichment parallèle.\n\nconst collection = ${serialize(canonical)};\n\nexport default collection;\n`);

let wrapper = fs.readFileSync(wrapperPath, "utf8");
wrapper = wrapper.replace(
  'import collectionJson from "./brassopedie/collection-06-bieres-acides-sauvages-et-spontanees.json" with { type: "json" };',
  'import collectionJson from "./brassopedie/collection-06-bieres-acides-sauvages-et-spontanees.js";'
);
fs.writeFileSync(wrapperPath, wrapper);

let test = fs.readFileSync(testPath, "utf8");
if (!test.includes("collection-06-bieres-acides-sauvages-et-spontanees.js")) {
  test = test.replace(
    'import wheatRye from "./collection-05-bieres-de-ble-et-de-seigle.js";\n',
    'import wheatRye from "./collection-05-bieres-de-ble-et-de-seigle.js";\nimport sourWild from "./collection-06-bieres-acides-sauvages-et-spontanees.js";\n'
  );
  test = test.replace(
    '  { label: "bieres-de-ble-et-de-seigle", data: wheatRye, expected: 13 }\n',
    '  { label: "bieres-de-ble-et-de-seigle", data: wheatRye, expected: 13 },\n  { label: "bieres-acides-sauvages-et-spontanees", data: sourWild, expected: 21 }\n'
  );
}
fs.writeFileSync(testPath, test);

fs.rmSync(oldPath, { force: true });
fs.rmSync(p("scripts/tmp-collection06"), { recursive: true, force: true });
fs.rmSync(p("scripts/one-off-canonicalize-collection-06.mjs"), { force: true });
fs.rmSync(p(".github/workflows/one-off-canonicalize-collection-06.yml"), { force: true });

console.log(`Canonicalized collection 06: ${canonical.cartes.length} cards.`);
