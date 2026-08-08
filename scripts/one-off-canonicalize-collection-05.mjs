import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { enrichment } from "./tmp-collection05/content.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = (...parts) => path.join(repoRoot, ...parts);
const oldPath = p("src/data/brassopedie/collection-05-bieres-de-ble-et-de-seigle.json");
const newPath = p("src/data/brassopedie/collection-05-bieres-de-ble-et-de-seigle.js");
const wrapperPath = p("src/data/bieres-de-ble-et-de-seigle-collection.js");
const validatorPath = p("src/data/brassopedie/validate-brassopedie.test.js");
const workflowPath = p(".github/workflows/one-off-canonicalize-collection-05.yml");
const selfPath = fileURLToPath(import.meta.url);
const tempDir = p("scripts/tmp-collection05");

const base = JSON.parse(fs.readFileSync(oldPath, "utf8"));
const ids = base.cartes.map((card) => card.id);
const expected = new Set(ids);
const supplied = new Set(Object.keys(enrichment));

if (ids.length !== 13) throw new Error(`Expected 13 cards, got ${ids.length}`);
for (const id of expected) if (!supplied.has(id)) throw new Error(`Missing enrichment for ${id}`);
for (const id of supplied) if (!expected.has(id)) throw new Error(`Unknown enrichment id ${id}`);

const canonical = {
  ...base,
  cartes: base.cartes.map((card) => ({
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
    return `[\n${value.map((v) => `${child}${serialize(v, depth + 1)}`).join(",\n")}\n${indent}]`;
  }
  const entries = Object.entries(value);
  if (!entries.length) return "{}";
  return `{\n${entries.map(([k, v]) => `${child}${JSON.stringify(k)}: ${serialize(v, depth + 1)}`).join(",\n")}\n${indent}}`;
}

fs.writeFileSync(newPath, `// Source canonique de la collection : taxonomie + contenu encyclopédique.\n// Une fiche n'existe qu'ici ; aucune couche de patch ou d'enrichment parallèle.\n\nconst collection = ${serialize(canonical)};\n\nexport default collection;\n`);

let wrapper = fs.readFileSync(wrapperPath, "utf8");
wrapper = wrapper.replace(
  'import collectionJson from "./brassopedie/collection-05-bieres-de-ble-et-de-seigle.json" with { type: "json" };',
  'import collectionJson from "./brassopedie/collection-05-bieres-de-ble-et-de-seigle.js";'
);
fs.writeFileSync(wrapperPath, wrapper);

let validator = fs.readFileSync(validatorPath, "utf8");
validator = validator.replace(
  'import belgianFrench from "./collection-04-traditions-belges-et-francaises.js";\n',
  'import belgianFrench from "./collection-04-traditions-belges-et-francaises.js";\nimport wheatRye from "./collection-05-bieres-de-ble-et-de-seigle.js";\n'
);
validator = validator.replace(
  '  { label: "traditions-belges-et-francaises", data: belgianFrench, expected: 17 }\n',
  '  { label: "traditions-belges-et-francaises", data: belgianFrench, expected: 17 },\n  { label: "bieres-de-ble-et-de-seigle", data: wheatRye, expected: 13 }\n'
);
fs.writeFileSync(validatorPath, validator);

fs.rmSync(oldPath, { force: true });
fs.rmSync(tempDir, { recursive: true, force: true });
fs.rmSync(workflowPath, { force: true });
fs.rmSync(selfPath, { force: true });

console.log(`Canonical collection 05 generated: ${canonical.cartes.length} cards.`);
console.log("Legacy JSON and all one-off migration files removed.");
