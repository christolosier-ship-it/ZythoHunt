import assert from "node:assert/strict";
import test from "node:test";
import { availableParallelism } from "node:os";
import { Worker } from "node:worker_threads";
import { buildSensoryPayload } from "../../scripts/build-sensory-payload.mjs";
import { CONFIDENCES, profileKey } from "./sensory-megastress-tools.js";
import { avg, decorate, mergeRandom, pct, percentile, sortRows, targetedSummary, top } from "./sensory-megastress-aggregate.js";

const PER_PROFILE = 5_000;
const RANDOM_COUNT = 2_510_000;
const WORKERS = Math.max(1, Math.min(4, availableParallelism()));

function worker(data) {
  return new Promise((resolve, reject) => {
    const instance = new Worker(new URL("./sensory-megastress-worker.js", import.meta.url), { workerData: data });
    instance.once("message", resolve);
    instance.once("error", reject);
    instance.once("exit", (code) => { if (code !== 0) reject(new Error(`worker=${code}`)); });
  });
}

function targetedJobs(payload) {
  const partitions = Array.from({ length: WORKERS }, () => []);
  payload.profiles.forEach((_, index) => partitions[index % WORKERS].push(index));
  return partitions.map((indexes) => worker({ mode: "targeted", profiles: payload.profiles, rarity: payload.rarity, indexes, samples: PER_PROFILE }));
}

function randomJobs(payload) {
  const jobs = [];
  let start = 0;
  for (let index = 0; index < WORKERS; index += 1) {
    const samples = Math.ceil((RANDOM_COUNT - start) / (WORKERS - index));
    jobs.push(worker({ mode: "random", profiles: payload.profiles, rarity: payload.rarity, start, samples }));
    start += samples;
  }
  return jobs;
}

test("mégastress 251 — 1 255 000 ciblés + 2 510 000 aléatoires", { timeout: 7_200_000 }, async () => {
  const payload = await buildSensoryPayload();
  assert.equal(payload.totalCards, 251);
  assert.deepEqual(payload.roleCounts, { primary: 165, fallback: 29, overlay: 29, excluded: 28 });
  const catalog = new Map(payload.profiles.map((profile) => [profileKey(profile), profile]));
  const expertCount = payload.profiles.filter(({ expert }) => expert === true).length;
  console.log("MEGASTRESS_START", JSON.stringify({ profiles: 251, perProfile: PER_PROFILE, targeted: 1_255_000, random: RANDOM_COUNT, total: 3_765_000, workers: WORKERS, expertCount }));

  const rows = sortRows((await Promise.all(targetedJobs(payload))).flatMap((part) => part.rows));
  assert.equal(rows.length, 251);
  assert.ok(rows.every(({ attempts }) => attempts === PER_PROFILE));
  const targeted = targetedSummary(rows);
  assert.equal(targeted.samples, 1_255_000);
  assert.equal(targeted.excludedSuppressionPct, 100);
  console.log("MEGASTRESS_TARGETED", JSON.stringify(targeted));
  const decorated = rows.map((row) => decorate(row, catalog));
  decorated.forEach((row) => console.log("MEGASTRESS_PROFILE", JSON.stringify(row)));

  const random = mergeRandom(await Promise.all(randomJobs(payload)));
  assert.equal(random.attempts, RANDOM_COUNT);
  const randomSummary = {
    samples: random.attempts,
    averageTopScore: avg(random.topScore, random.attempts),
    confidence: Object.fromEntries(CONFIDENCES.map((id) => [id, pct(random.confidence[id], random.attempts)])),
    fallbackTopPct: pct(random.fallback, random.attempts),
    anyOverlayPct: pct(random.anyOverlay, random.attempts),
    noResultPct: pct(random.noResult, random.attempts),
    scorePercentiles: { p50: percentile(random.histogram, 0.50), p90: percentile(random.histogram, 0.90), p95: percentile(random.histogram, 0.95), p99: percentile(random.histogram, 0.99) },
    topStyleMagnets: top(random.observed, 30).map(([key, count]) => ({ key, name: catalog.get(key)?.name || key, role: catalog.get(key)?.role || null, pct: pct(count, random.attempts) })),
    topOverlayMagnets: top(random.overlays, 20).map(([key, count]) => ({ key, name: catalog.get(key)?.name || key, pct: pct(count, random.attempts) }))
  };
  console.log("MEGASTRESS_RANDOM", JSON.stringify(randomSummary));

  const ranked = decorated.filter(({ role }) => role === "primary" || role === "fallback");
  console.log("MEGASTRESS_WORST_TOP1", JSON.stringify([...ranked].sort((a, b) => a.top1Pct - b.top1Pct).slice(0, 40)));
  console.log("MEGASTRESS_WORST_TOP3", JSON.stringify([...ranked].sort((a, b) => a.top3Pct - b.top3Pct).slice(0, 40)));
  console.log("MEGASTRESS_WORST_OVERLAY", JSON.stringify(decorated.filter(({ role }) => role === "overlay").sort((a, b) => a.overlayPct - b.overlayPct).slice(0, 20)));
});
