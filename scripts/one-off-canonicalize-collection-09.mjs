import fs from "node:fs";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = (...parts) => path.join(root, ...parts);

const oldPath = p("src/data/brassopedie/collection-09-appellations-commerciales.json");
const newPath = p("src/data/brassopedie/collection-09-appellations-commerciales.js");
const wrapperPath = p("src/data/appellations-commerciales-collection.js");
const validationPath = p("src/data/brassopedie/validate-brassopedie.test.js");
const commonPath = p("scripts/collection-09-common.mjs");
const partPaths = [1, 2, 3].map((n) => p(`scripts/collection-09-part-${n}.mjs`));
const fixedPaths = partPaths.map((file, index) => p(`scripts/collection-09-part-${index + 1}-fixed.mjs`));

function sanitizeTemporarySource(text) {
  return text.replace(
    /^(\s*(?:water|mash|boil|fermentation|maturation|target|explication):\s*"(?:[^"\\]|\\.)*")\s*\],$/gm,
    "$1,"
  );
}

for (let i = 0; i < partPaths.length; i += 1) {
  fs.writeFileSync(fixedPaths[i], sanitizeTemporarySource(fs.readFileSync(partPaths[i], "utf8")), "utf8");
}

const modules = [];
for (const file of fixedPaths) {
  modules.push((await import(`${pathToFileURL(file).href}?v=${Date.now()}-${Math.random()}`)).default);
}

const enrichment = {};
for (const module of modules) {
  for (const [id, value] of Object.entries(module)) {
    if (enrichment[id]) throw new Error(`Duplicate enrichment id: ${id}`);
    enrichment[id] = value;
  }
}

const sourceCollection = JSON.parse(fs.readFileSync(oldPath, "utf8"));
const taxonomyIds = sourceCollection.cartes.map((card) => card.id);
const enrichmentIds = Object.keys(enrichment);
const missing = taxonomyIds.filter((id) => !enrichment[id]);
const unknown = enrichmentIds.filter((id) => !taxonomyIds.includes(id));

if (taxonomyIds.length !== 30 || enrichmentIds.length !== 30 || missing.length || unknown.length) {
  throw new Error(
    `Collection 09 coverage mismatch: taxonomy=${taxonomyIds.length} enrichment=${enrichmentIds.length} missing=${missing.join(",")} unknown=${unknown.join(",")}`
  );
}

const canonical = {
  ...sourceCollection,
  cartes: sourceCollection.cartes.map((card) => ({
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
    return `[\n${value.map((item) => `${child}${serialize(item, depth + 1)}`).join(",\n")}\n${indent}]`;
  }
  const entries = Object.entries(value);
  if (!entries.length) return "{}";
  return `{\n${entries.map(([key, item]) => `${child}${JSON.stringify(key)}: ${serialize(item, depth + 1)}`).join(",\n")}\n${indent}}`;
}

fs.writeFileSync(
  newPath,
  `// Source canonique de la collection : taxonomie + contenu encyclopédique.\n// Une fiche n'existe qu'ici ; aucune couche de patch ou d'enrichment parallèle.\n\nconst collection = ${serialize(canonical)};\n\nexport default collection;\n`,
  "utf8"
);

let wrapper = fs.readFileSync(wrapperPath, "utf8");
wrapper = wrapper.replace(
  'import collectionJson from "./brassopedie/collection-09-appellations-commerciales.json" with { type: "json" };',
  'import collectionJson from "./brassopedie/collection-09-appellations-commerciales.js";'
);
fs.writeFileSync(wrapperPath, wrapper, "utf8");

let validation = fs.readFileSync(validationPath, "utf8");
validation = validation.replace(
  'import singularHistoricalHybrid from "./collection-08-styles-singuliers-historiques-et-hybrides.js";\n',
  'import singularHistoricalHybrid from "./collection-08-styles-singuliers-historiques-et-hybrides.js";\nimport commercialDesignations from "./collection-09-appellations-commerciales.js";\n'
);
validation = validation.replace(
  '  { label: "styles-singuliers-historiques-et-hybrides", data: singularHistoricalHybrid, expected: 40 }\n];',
  '  { label: "styles-singuliers-historiques-et-hybrides", data: singularHistoricalHybrid, expected: 40 },\n  { label: "appellations-commerciales", data: commercialDesignations, expected: 30 }\n];'
);
fs.writeFileSync(validationPath, validation, "utf8");

fs.rmSync(oldPath, { force: true });
for (const file of [commonPath, ...partPaths, ...fixedPaths, fileURLToPath(import.meta.url)]) {
  fs.rmSync(file, { force: true });
}

console.log(`Canonical collection 09 written with ${canonical.cartes.length} complete cards.`);
console.log("Legacy JSON and all temporary collection-09 authoring files removed.");
