import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { collectionCatalog } from "../src/data/collection-catalog.js";
import { isCollectionSearchable } from "../src/data/secret-collection-rules.js";
import { normalizeBeerName } from "../src/discovery/normalize-text.js";

const outputPath = resolve("public/beer-search-index.json");
const aliases = Object.create(null);
const seen = new Map();
let cardCount = 0;
let aliasCount = 0;

for (const entry of collectionCatalog.filter((item) => isCollectionSearchable(item))) {
  const bundle = await entry.load();
  const collection = bundle.collection;

  for (const card of bundle.revealableCards || []) {
    cardCount += 1;
    for (const alias of [card.name, ...(card.aliases || [])]) {
      const key = normalizeBeerName(alias);
      if (!key) continue;

      const candidateKey = `${collection.id}:${card.id}`;
      if (!seen.has(key)) seen.set(key, new Set());
      if (seen.get(key).has(candidateKey)) continue;
      seen.get(key).add(candidateKey);

      if (!aliases[key]) aliases[key] = [];
      aliases[key].push({
        collectionId: collection.id,
        collectionName: collection.name || collection.nom || collection.id,
        cardId: card.id,
        cardName: card.name
      });
      aliasCount += 1;
    }
  }
}

const payload = {
  schemaVersion: 1,
  generatedFrom: "collectionCatalog",
  cards: cardCount,
  aliases
};

await writeFile(outputPath, `${JSON.stringify(payload)}\n`, "utf8");
console.log(`Beer search index: ${cardCount} cartes, ${aliasCount} alias.`);
