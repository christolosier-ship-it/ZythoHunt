import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { buildSensoryPayload } from "./build-sensory-payload.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(root, "public/beer-sensory-index.json");
const payload = await buildSensoryPayload();

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

console.log(`[sensory-index] cartographie 251 validée (${payload.roleCounts.primary} primary, ${payload.roleCounts.fallback} fallback, ${payload.roleCounts.overlay} overlay, ${payload.roleCounts.excluded} excluded).`);
console.log(`[sensory-index] ${payload.totalCards} profils résolus : ${payload.sourceCounts.curated} édités + ${payload.sourceCounts.derived + payload.sourceCounts.excludedDerived} dérivés ; ${payload.scorableCards} profils scorables.`);
