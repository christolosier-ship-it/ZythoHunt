import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const indexUrl = new URL("../index.html", import.meta.url);
const manifestUrl = new URL("../public/manifest.webmanifest", import.meta.url);

const expectedShareUrl =
  "https://christolosier-ship-it.github.io/ZythoHunt/brand/generated/share-1200x630-v2.png";

const legacyIconPaths = [
  "icons/icon-32.png",
  "icons/icon-48.png",
  "icons/apple-touch-icon-180.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
];

test("social metadata uses the versioned official ZythoHunt preview", async () => {
  const html = await readFile(indexUrl, "utf8");

  assert.match(html, new RegExp(`property="og:image" content="${expectedShareUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`));
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /brand\/generated\/apple-touch-icon-180-v2\.png/);
  assert.match(html, /brand\/generated\/icon-48-v2\.png/);

  for (const legacyPath of legacyIconPaths) {
    assert.equal(html.includes(legacyPath), false, `index.html still references legacy asset ${legacyPath}`);
  }
});

test("web manifest uses only generated branding derived from public/logo.png", async () => {
  const manifest = JSON.parse(await readFile(manifestUrl, "utf8"));
  const iconSources = manifest.icons.map((icon) => icon.src);

  assert.deepEqual(iconSources, [
    "brand/generated/icon-192-v2.png",
    "brand/generated/icon-512-v2.png",
    "brand/generated/icon-maskable-512-v2.png",
  ]);

  for (const legacyPath of legacyIconPaths) {
    assert.equal(iconSources.includes(legacyPath), false, `manifest still references legacy asset ${legacyPath}`);
  }
});
