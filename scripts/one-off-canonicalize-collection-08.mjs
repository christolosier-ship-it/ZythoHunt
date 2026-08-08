import fs from "node:fs";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = (...parts) => path.join(root, ...parts);
const branchWorkflow = p(".github/workflows/one-off-canonicalize-collection-08.yml");
const oldPath = p("src/data/brassopedie/collection-08-styles-singuliers-historiques-et-hybrides.json");
const newPath = p("src/data/brassopedie/collection-08-styles-singuliers-historiques-et-hybrides.js");
const wrapperPath = p("src/data/styles-singuliers-historiques-et-hybrides-collection.js");
const testPath = p("src/data/brassopedie/validate-brassopedie.test.js");

const tempFiles = [
  p("scripts/collection-08-common.mjs"),
  p("scripts/collection-08-part-1.mjs"),
  p("scripts/collection-08-part-2.mjs"),
  p("scripts/collection-08-part-3.mjs"),
  p("scripts/collection-08-part-4.mjs")
];

// Corrige les coquilles de ponctuation du fichier temporaire avant import.
const part4Path = tempFiles[4];
let part4Text = fs.readFileSync(part4Path, "utf8");
for (const [from, to] of [
  ['boil: "Houblonnage discret ; fumée issue du malt."],', 'boil: "Houblonnage discret ; fumée issue du malt.",'],
  ['mash: "Décoction ou empâtage multi-palier possible pour renforcer profondeur maltée."],', 'mash: "Décoction ou empâtage multi-palier possible pour renforcer profondeur maltée.",'],
  ['boil: "Ébullition complète, houblonnage discret à modéré."],', 'boil: "Ébullition complète, houblonnage discret à modéré.",'],
  ['fermentation: "Fermentation basse propre."],', 'fermentation: "Fermentation basse propre.",'],
  ['maturation: "Lagering de plusieurs semaines pour fondre malt et fumée."],', 'maturation: "Lagering de plusieurs semaines pour fondre malt et fumée.",'],
  ['mash: "Empâtage riche, décoction possible ; maintenir assez de fermentescibilité pour éviter lourdeur."],', 'mash: "Empâtage riche, décoction possible ; maintenir assez de fermentescibilité pour éviter lourdeur.",'],
  ['boil: "Ébullition soutenue, houblonnage discret."],', 'boil: "Ébullition soutenue, houblonnage discret.",'],
  ['fermentation: "Fermentation basse avec pitch important et température maîtrisée."],', 'fermentation: "Fermentation basse avec pitch important et température maîtrisée.",']
]) {
  part4Text = part4Text.replace(from, to);
}
const fixedPart4Path = p("scripts/collection-08-part-4-fixed.mjs");
fs.writeFileSync(fixedPart4Path, part4Text, "utf8");

const modules = [];
for (const file of [...tempFiles.slice(1, 4), fixedPart4Path]) {
  modules.push((await import(`${pathToFileURL(file).href}?v=${Date.now()}`)).default);
}

const enrichment = {};
for (const mod of modules) {
  for (const [id, value] of Object.entries(mod)) {
    if (enrichment[id]) throw new Error(`Duplicate enrichment id: ${id}`);
    enrichment[id] = value;
  }
}

const base = JSON.parse(fs.readFileSync(oldPath, "utf8"));
const taxonomyIds = base.cartes.map((card) => card.id);
const enrichmentIds = Object.keys(enrichment);
const missing = taxonomyIds.filter((id) => !enrichment[id]);
const unknown = enrichmentIds.filter((id) => !taxonomyIds.includes(id));
if (taxonomyIds.length !== 40 || enrichmentIds.length !== 40 || missing.length || unknown.length) {
  throw new Error(`Coverage mismatch taxonomy=${taxonomyIds.length} enrichment=${enrichmentIds.length} missing=${missing.join(",")} unknown=${unknown.join(",")}`);
}

const canonical = {
  ...base,
  cartes: base.cartes.map((card) => ({ ...card, ...enrichment[card.id] }))
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
  'import collectionJson from "./brassopedie/collection-08-styles-singuliers-historiques-et-hybrides.json" with { type: "json" };',
  'import collectionJson from "./brassopedie/collection-08-styles-singuliers-historiques-et-hybrides.js";'
);
fs.writeFileSync(wrapperPath, wrapper, "utf8");

let test = fs.readFileSync(testPath, "utf8");
test = test.replace(
  'import amberBrownStrong from "./collection-07-ales-ambrees-brunes-maltees-et-fortes.js";\n',
  'import amberBrownStrong from "./collection-07-ales-ambrees-brunes-maltees-et-fortes.js";\nimport singularHistoricalHybrid from "./collection-08-styles-singuliers-historiques-et-hybrides.js";\n'
);
test = test.replace(
  '  { label: "ales-ambrees-brunes-maltees-et-fortes", data: amberBrownStrong, expected: 27 }\n',
  '  { label: "ales-ambrees-brunes-maltees-et-fortes", data: amberBrownStrong, expected: 27 },\n  { label: "styles-singuliers-historiques-et-hybrides", data: singularHistoricalHybrid, expected: 40 }\n'
);
fs.writeFileSync(testPath, test, "utf8");

fs.rmSync(oldPath, { force: true });
for (const file of [...tempFiles, fixedPart4Path, branchWorkflow, fileURLToPath(import.meta.url)]) fs.rmSync(file, { force: true });

console.log(`Canonical collection 08 written with ${canonical.cartes.length} cards.`);
console.log("Legacy JSON and all one-off files removed.");
