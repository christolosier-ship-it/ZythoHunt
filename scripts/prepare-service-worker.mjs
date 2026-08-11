import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const distDir = resolve("dist");
const indexPath = resolve(distDir, "index.html");
const outputPath = resolve(distDir, "sw-precache.js");
const html = await readFile(indexPath, "utf8");

const urls = new Set([
  "./",
  "./offline.html",
  "./manifest.webmanifest",
  "./beer-search-index.json"
]);

for (const match of html.matchAll(/(?:src|href)=["']([^"']+)["']/g)) {
  const value = match[1];
  if (!value || value.startsWith("http:") || value.startsWith("https:") || value.startsWith("data:") || value.startsWith("#")) continue;
  if (value.endsWith("manifest.webmanifest") || value.endsWith("logo.png")) continue;
  urls.add(value);
}

const content = `// Généré par scripts/prepare-service-worker.mjs. Ne pas éditer dans dist.\nself.__ZYTHOHUNT_PRECACHE = ${JSON.stringify([...urls], null, 2)};\n`;
await writeFile(outputPath, content, "utf8");
console.log(`Service worker precache: ${urls.size} ressource(s).`);