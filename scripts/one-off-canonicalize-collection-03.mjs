import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { porterPatches } from "./tmp-collection03/porters.mjs";
import { stoutPatches } from "./tmp-collection03/stouts.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = (...parts) => path.join(root, ...parts);
const legacyPath = p("src/data/brassopedie/collection-03-porters-et-stouts.json");
const canonicalPath = p("src/data/brassopedie/collection-03-porters-et-stouts.js");
const wrapperPath = p("src/data/porters-stouts-collection.js");
const validatorPath = p("src/data/brassopedie/validate-brassopedie.test.js");
const readmePath = p("src/data/brassopedie/README.md");

const legacy = JSON.parse(fs.readFileSync(legacyPath, "utf8"));
const patches = { ...porterPatches, ...stoutPatches };
const ids = legacy.cartes.map((card) => card.id);
const patchIds = Object.keys(patches);

if (legacy.cartes.length !== 22) throw new Error(`Expected 22 legacy cards, got ${legacy.cartes.length}`);
if (patchIds.length !== 22) throw new Error(`Expected 22 encyclopedia patches, got ${patchIds.length}`);
const missing = ids.filter((id) => !patches[id]);
const unknown = patchIds.filter((id) => !ids.includes(id));
if (missing.length || unknown.length) {
  throw new Error(`Collection 03 coverage mismatch. Missing: ${missing.join(", ") || "none"}. Unknown: ${unknown.join(", ") || "none"}.`);
}

const canonical = {
  ...legacy,
  cartes: legacy.cartes.map((card) => ({
    ...card,
    histoireEtOrigines: patches[card.id].histoireEtOrigines,
    recette: patches[card.id].recette,
    sources: patches[card.id].sources
  }))
};

function serialize(value, depth = 0) {
  const indent = "  ".repeat(depth);
  const child = "  ".repeat(depth + 1);
  if (value === null) return "null";
  if (["number", "boolean"].includes(typeof value)) return String(value);
  if (typeof value === "string") {
    if (value.includes("\n")) {
      return `\`${value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}\``;
    }
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    if (!value.length) return "[]";
    return `[\n${value.map((item) => `${child}${serialize(item, depth + 1)}`).join(",\n")}\n${indent}]`;
  }
  if (typeof value === "object") {
    const entries = Object.entries(value);
    if (!entries.length) return "{}";
    return `{\n${entries.map(([key, item]) => `${child}${JSON.stringify(key)}: ${serialize(item, depth + 1)}`).join(",\n")}\n${indent}}`;
  }
  throw new TypeError(`Unsupported value: ${typeof value}`);
}

fs.writeFileSync(
  canonicalPath,
  `// Source canonique de la collection : taxonomie + contenu encyclopédique.\n// Une fiche n'existe qu'ici ; aucune couche de patch ou d'enrichment parallèle.\n\nconst collection = ${serialize(canonical)};\n\nexport default collection;\n`,
  "utf8"
);

let wrapper = fs.readFileSync(wrapperPath, "utf8");
wrapper = wrapper.replace(
  'import collectionJson from "./brassopedie/collection-03-porters-et-stouts.json" with { type: "json" };',
  'import collectionJson from "./brassopedie/collection-03-porters-et-stouts.js";'
);
fs.writeFileSync(wrapperPath, wrapper, "utf8");

let validator = fs.readFileSync(validatorPath, "utf8");
if (!validator.includes('import portersStouts from "./collection-03-porters-et-stouts.js";')) {
  validator = validator.replace(
    'import paleAles from "./collection-02-pale-ales-bitters-et-ipa.js";\n',
    'import paleAles from "./collection-02-pale-ales-bitters-et-ipa.js";\nimport portersStouts from "./collection-03-porters-et-stouts.js";\n'
  );
}
validator = validator.replace(
  '{ label: "pale-ales-bitters-et-ipa", data: paleAles, expected: 36 }\n];',
  '{ label: "pale-ales-bitters-et-ipa", data: paleAles, expected: 36 },\n  { label: "porters-et-stouts", data: portersStouts, expected: 22 }\n];'
);
fs.writeFileSync(validatorPath, validator, "utf8");

let readme = fs.readFileSync(readmePath, "utf8");
readme = readme.replace(
  /Pour les collections enrichies[^\n]*/,
  "Pour les collections enrichies, les sources canoniques sont actuellement `collection-01-lagers-et-fermentations-basses.js`, `collection-02-pale-ales-bitters-et-ipa.js` et `collection-03-porters-et-stouts.js`. Les futures collections seront migrées vers le même modèle lors de leur enrichissement."
);
fs.writeFileSync(readmePath, readme, "utf8");

fs.rmSync(legacyPath, { force: true });
fs.rmSync(p("scripts/tmp-collection03"), { recursive: true, force: true });

console.log(`Collection 03 canonicalized: ${canonical.cartes.length} complete cards.`);
