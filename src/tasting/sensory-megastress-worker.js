import { parentPort, workerData } from "node:worker_threads";
import { createSensoryMatcher } from "./sensory-matcher.js";
import { emptyConfidence, increment, profileKey, randomObservation, resultKey, targetedObservation } from "./sensory-megastress-tools.js";

function runTargeted(data) {
  const matcher = createSensoryMatcher({ profiles: data.profiles, rarity: data.rarity });
  const rows = [];
  for (const index of data.indexes) {
    const profile = data.profiles[index];
    const expected = profileKey(profile);
    const row = { collectionId: profile.collectionId, collectionName: profile.collectionName, cardId: profile.cardId, name: profile.name, role: profile.role, source: profile.source, expert: profile.expert === true, attempts: 0, top1: 0, top3: 0, overlay: 0, leaks: 0, topScore: 0, confidence: emptyConfidence(), observed: {} };
    for (let sample = 0; sample < data.samples; sample += 1) {
      const result = matcher.match(targetedObservation(profile, sample), { limit: 3 });
      const first = result.results[0];
      const top = resultKey(first);
      row.attempts += 1;
      row.topScore += Number(first?.score || 0);
      row.confidence[result.confidence?.id || "ambiguous"] += 1;
      increment(row.observed, top || "(aucun)");
      if (profile.role === "primary" || profile.role === "fallback") {
        if (top === expected) row.top1 += 1;
        if (result.results.some((entry) => resultKey(entry) === expected)) row.top3 += 1;
      } else if (profile.role === "overlay") {
        if (result.overlays.some((entry) => resultKey(entry) === expected)) row.overlay += 1;
      } else if (result.results.some((entry) => resultKey(entry) === expected) || result.overlays.some((entry) => resultKey(entry) === expected)) row.leaks += 1;
    }
    rows.push(row);
  }
  return { rows };
}

function runRandom(data) {
  const matcher = createSensoryMatcher({ profiles: data.profiles, rarity: data.rarity });
  const out = { attempts: 0, topScore: 0, fallback: 0, anyOverlay: 0, noResult: 0, confidence: emptyConfidence(), observed: {}, overlays: {}, histogram: Array.from({ length: 1001 }, () => 0) };
  for (let offset = 0; offset < data.samples; offset += 1) {
    const result = matcher.match(randomObservation(data.start + offset), { limit: 3 });
    const first = result.results[0];
    const score = Number(first?.score || 0);
    out.attempts += 1;
    out.topScore += score;
    out.confidence[result.confidence?.id || "ambiguous"] += 1;
    if (!first) out.noResult += 1;
    if (first?.role === "fallback") out.fallback += 1;
    if (result.overlays.length) out.anyOverlay += 1;
    increment(out.observed, resultKey(first) || "(aucun)");
    result.overlays.forEach((entry) => increment(out.overlays, resultKey(entry)));
    out.histogram[Math.max(0, Math.min(1000, Math.round(score * 10)))] += 1;
  }
  return out;
}

parentPort.postMessage(workerData.mode === "targeted" ? runTargeted(workerData) : runRandom(workerData));
