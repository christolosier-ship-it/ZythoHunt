import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const distDir = resolve("dist");
const indexPath = resolve(distDir, "index.html");
const swPath = resolve(distDir, "sw.js");
const precachePath = resolve(distDir, "sw-precache.js");
const versionPath = resolve(distDir, "sw-version.js");
const html = await readFile(indexPath, "utf8");
const sw = await readFile(swPath, "utf8");

const urls = new Set([
  "./",
  "./offline.html",
  "./manifest.webmanifest",
  "./beer-search-index.json",
  "./beer-sensory-index.json"
]);

for (const match of html.matchAll(/(?:src|href)=["']([^"']+)["']/g)) {
  const value = match[1];
  if (!value || value.startsWith("http:") || value.startsWith("https:") || value.startsWith("data:") || value.startsWith("#")) continue;
  if (value.endsWith("manifest.webmanifest")) continue;
  urls.add(value);
}

const sortedUrls = [...urls].sort();
const precacheContent = `// Généré par scripts/prepare-service-worker.mjs. Ne pas éditer dans dist.\nself.__ZYTHOHUNT_PRECACHE = ${JSON.stringify(sortedUrls, null, 2)};\n`;
await writeFile(precachePath, precacheContent, "utf8");

const buildId = createHash("sha256")
  .update(html)
  .update(sw)
  .update(JSON.stringify(sortedUrls))
  .digest("hex")
  .slice(0, 12);
const versionContent = `// Généré par scripts/prepare-service-worker.mjs.\nself.__ZYTHOHUNT_BUILD_ID = ${JSON.stringify(buildId)};\n`;
await writeFile(versionPath, versionContent, "utf8");

console.log(`Service worker precache: ${sortedUrls.length} ressource(s). Build cache: ${buildId}.`);
