import fs from "node:fs";

const oldPath = "src/data/brassopedie/collection-07-ales-ambrees-brunes-maltees-et-fortes.json";
const newPath = "src/data/brassopedie/collection-07-ales-ambrees-brunes-maltees-et-fortes.js";
const wrapperPath = "src/data/ales-ambrees-brunes-maltees-et-fortes-collection.js";
const validationPath = "src/data/brassopedie/validate-brassopedie.test.js";
const tempA = "src/data/brassopedie/collection-07-enrichment-a.tmp.js";
const tempB = "src/data/brassopedie/collection-07-enrichment-b.tmp.js";
const workflowPath = ".github/workflows/one-off-canonicalize-collection-07.yml";
const selfPath = "scripts/one-off-canonicalize-collection-07.mjs";

const source = JSON.parse(fs.readFileSync(oldPath, "utf8"));
const { enrichmentA } = await import("../src/data/brassopedie/collection-07-enrichment-a.tmp.js");
const { enrichmentB } = await import("../src/data/brassopedie/collection-07-enrichment-b.tmp.js");
const enrichment = { ...enrichmentA, ...enrichmentB };

const sourceIds = source.cartes.map((card) => card.id);
const enrichmentIds = Object.keys(enrichment);
const missing = sourceIds.filter((id) => !enrichment[id]);
const unknown = enrichmentIds.filter((id) => !sourceIds.includes(id));
if (sourceIds.length !== 27 || enrichmentIds.length !== 27 || missing.length || unknown.length) {
  throw new Error(`Collection 07 coverage mismatch: source=${sourceIds.length} enrichment=${enrichmentIds.length} missing=${missing.join(",")} unknown=${unknown.join(",")}`);
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

fs.writeFileSync(newPath, `// Source canonique de la collection : taxonomie + contenu encyclopédique.\n// Une fiche n'existe qu'ici ; aucune couche de patch ou d'enrichment parallèle.\n\nconst collection = ${serialize(canonical)};\n\nexport default collection;\n`);

let wrapper = fs.readFileSync(wrapperPath, "utf8");
wrapper = wrapper.replace(
  'import collectionJson from "./brassopedie/collection-07-ales-ambrees-brunes-maltees-et-fortes.json" with { type: "json" };',
  'import collectionJson from "./brassopedie/collection-07-ales-ambrees-brunes-maltees-et-fortes.js";'
);
fs.writeFileSync(wrapperPath, wrapper);

let validation = fs.readFileSync(validationPath, "utf8");
validation = validation.replace(
  'import sourWild from "./collection-06-bieres-acides-sauvages-et-spontanees.js";\n',
  'import sourWild from "./collection-06-bieres-acides-sauvages-et-spontanees.js";\nimport amberBrownStrong from "./collection-07-ales-ambrees-brunes-maltees-et-fortes.js";\n'
);
validation = validation.replace(
  '  { label: "bieres-acides-sauvages-et-spontanees", data: sourWild, expected: 21 }\n];',
  '  { label: "bieres-acides-sauvages-et-spontanees", data: sourWild, expected: 21 },\n  { label: "ales-ambrees-brunes-maltees-et-fortes", data: amberBrownStrong, expected: 27 }\n];'
);
fs.writeFileSync(validationPath, validation);

for (const path of [oldPath, tempA, tempB, selfPath, workflowPath]) {
  fs.rmSync(path, { force: true });
}

console.log(`Canonicalized collection 07 with ${canonical.cartes.length} complete cards.`);
