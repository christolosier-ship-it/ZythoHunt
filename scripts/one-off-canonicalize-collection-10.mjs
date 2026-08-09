import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = (...parts) => path.join(root, ...parts);
const finalPath = p("src/data/brassopedie/collection-10-bizarre-et-insolite.js");
const wrapperPath = p("src/data/bizarre-et-insolite-collection.js");
const validationPath = p("src/data/brassopedie/validate-brassopedie.test.js");
const workflowPath = p(".github/workflows/c10-canonicalize.yml");
const commonPath = p("scripts/c10-authoring-common.mjs");
const partPaths = Array.from({ length: 6 }, (_, index) => p(`scripts/c10-authoring-part-${String(index + 1).padStart(2, "0")}.mjs`));

const cards = [];
for (const file of partPaths) {
  const module = await import(`${pathToFileURL(file).href}?v=${Date.now()}-${Math.random()}`);
  cards.push(...module.default);
}

const expectedIds = Array.from({ length: 42 }, (_, index) => `c10-${String(index + 1).padStart(3, "0")}`);
const actualIds = cards.map((card) => card.id);
if (cards.length !== 42) throw new Error(`Expected 42 C10 cards, got ${cards.length}`);
if (new Set(actualIds).size !== 42) throw new Error("Duplicate C10 card IDs detected");
if (JSON.stringify(actualIds) !== JSON.stringify(expectedIds)) {
  throw new Error(`C10 IDs/order mismatch: ${actualIds.join(", ")}`);
}

for (const card of cards) {
  if (!card.nom?.trim()) throw new Error(`${card.id}: missing name`);
  if (!card.description?.trim()) throw new Error(`${card.id}: missing description`);
  if (!card.histoireEtOrigines?.trim()) throw new Error(`${card.id}: missing history`);
  if (!Array.isArray(card.chapitres) || card.chapitres.length < 2) throw new Error(`${card.id}: needs at least two unique chapters`);
  if (!card.recette) throw new Error(`${card.id}: missing recipe`);
  for (const key of ["maltsEtCereales", "houblons", "levuresEtMicroorganismes", "profilEau", "empatage", "ebullitionEtHoublonnage", "fermentation", "maturation", "profilRecherche"]) {
    const value = card.recette[key];
    const present = Array.isArray(value) ? value.length > 0 : String(value ?? "").trim().length > 0;
    if (!present) throw new Error(`${card.id}: missing recipe.${key}`);
  }
  if (!Array.isArray(card.sources) || !card.sources.length) throw new Error(`${card.id}: missing sources`);
  for (const item of card.sources) {
    if (!item.organisme || !item.reference || !/^https:\/\//.test(item.url || "")) throw new Error(`${card.id}: malformed source`);
  }
}

const collection = {
  schemaVersion: "1.0.0",
  taxonomyVersion: "1.0.0",
  collection: {
    id: 10,
    slug: "bizarre-et-insolite",
    nom: "Bizarre et insolite",
    searchable: false,
    secret: {
      enabled: true,
      lockedLabel: "????",
      unlockRatio: 0.5,
      unlockScope: "classic-collections",
      revealMode: "click-after-unlock"
    }
  },
  cartes: cards
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

fs.writeFileSync(
  finalPath,
  `// Source canonique de la collection 10 : chaque entrée est un objet brassicole singulier.\n// Les IDs internes c10-xxx sont volontairement conservés pour préserver la progression locale existante.\n\nconst collection = ${serialize(collection)};\n\nexport default collection;\n`,
  "utf8"
);

fs.writeFileSync(wrapperPath, `import collectionJson from "./brassopedie/collection-10-bizarre-et-insolite.js";\nimport { createCollectionBundle } from "./create-collection-bundle.js";\nimport {\n  bizarreEtInsoliteAssets,\n  bizarreEtInsoliteCardImages\n} from "./card-assets/bizarre-et-insolite-assets.js";\n\nconst bundle = createCollectionBundle({\n  collectionJson,\n  collectionId: "bizarre-et-insolite",\n  slug: "bizarre-et-insolite",\n  subtitle: "Collection secrète",\n  order: 100,\n  expectedCardCount: 42,\n  discoveryKey: "zythohunt.discovery.bizarre-et-insolite.v1",\n  assets: {\n    collection: bizarreEtInsoliteAssets,\n    cards: bizarreEtInsoliteCardImages\n  },\n  backgroundPreset: { beerT: 18, bubbleDensity: 42, foamIntensity: 38 },\n  assetsReady: true\n});\n\nexport const bizarreEtInsoliteBundle = bundle;\nexport const bizarreEtInsoliteCollection = bundle.collection;\nexport const bizarreEtInsoliteCards = bundle.cards;\nexport const bizarreEtInsoliteCardsById = bundle.cardsById;\nexport const revealableBizarreEtInsoliteCards = bundle.revealableCards;\nexport const validateBizarreEtInsoliteCollection = bundle.validate;\n`, "utf8");

let validation = fs.readFileSync(validationPath, "utf8");
validation = validation.replace(
  'import commercialDesignations from "./collection-09-appellations-commerciales.js";\n',
  'import commercialDesignations from "./collection-09-appellations-commerciales.js";\nimport bizarreUnusual from "./collection-10-bizarre-et-insolite.js";\nimport { bizarreEtInsoliteBundle } from "../bizarre-et-insolite-collection.js";\n'
);
validation = validation.replace(
  '  { label: "appellations-commerciales", data: commercialDesignations, expected: 30 }\n];',
  '  { label: "appellations-commerciales", data: commercialDesignations, expected: 30 },\n  { label: "bizarre-et-insolite", data: bizarreUnusual, expected: 42 }\n];'
);
validation = validation.replace(
  '  collectionBundles.forEach((bundle) => {',
  '  [...collectionBundles, bizarreEtInsoliteBundle].forEach((bundle) => {'
);
validation = validation.replace(
  'test("canonical Brassopedie collections contain one complete definition per style", () => {',
  'test("canonical Brassopedie collections contain one complete definition per entry", () => {'
);
validation = validation.replace(
  '      assert.ok(Array.isArray(card.sources) && card.sources.length > 0, `${card.id}: missing sources`);',
  '      if (label === "bizarre-et-insolite") {\n        assert.ok(Array.isArray(card.chapitres) && card.chapitres.length >= 2, `${card.id}: missing singular chapters`);\n        assert.ok(String(card.recette.titre || "").trim(), `${card.id}: missing singular recipe title`);\n      }\n\n      assert.ok(Array.isArray(card.sources) && card.sources.length > 0, `${card.id}: missing sources`);'
);
fs.writeFileSync(validationPath, validation, "utf8");

for (const file of [commonPath, ...partPaths, workflowPath, fileURLToPath(import.meta.url)]) {
  fs.rmSync(file, { force: true });
}

console.log(`Canonical collection 10 written with ${cards.length} singular encyclopedic entries.`);
console.log("C10 wrapper and shared validator updated; temporary authoring files removed.");
