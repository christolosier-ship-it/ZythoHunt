import { CONFIDENCES, increment, profileKey } from "./sensory-megastress-tools.js";

export const pct = (n, d) => d ? Math.round(n / d * 10_000) / 100 : 0;
export const avg = (n, d) => d ? Math.round(n / d * 100) / 100 : 0;
export const top = (map, limit = 5) => Object.entries(map || {})
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "fr")).slice(0, limit);

export function mergeRandom(parts) {
  const out = { attempts: 0, topScore: 0, fallback: 0, anyOverlay: 0, noResult: 0, confidence: Object.fromEntries(CONFIDENCES.map((id) => [id, 0])), observed: {}, overlays: {}, histogram: Array.from({ length: 1001 }, () => 0) };
  parts.forEach((part) => {
    out.attempts += part.attempts;
    out.topScore += part.topScore;
    out.fallback += part.fallback;
    out.anyOverlay += part.anyOverlay;
    out.noResult += part.noResult;
    CONFIDENCES.forEach((id) => { out.confidence[id] += part.confidence[id] || 0; });
    Object.entries(part.observed).forEach(([key, value]) => increment(out.observed, key, value));
    Object.entries(part.overlays).forEach(([key, value]) => increment(out.overlays, key, value));
    part.histogram.forEach((value, index) => { out.histogram[index] += value; });
  });
  return out;
}

export function percentile(histogram, fraction) {
  const total = histogram.reduce((sum, count) => sum + count, 0);
  const target = Math.max(1, Math.ceil(total * fraction));
  let count = 0;
  for (let index = 0; index < histogram.length; index += 1) {
    count += histogram[index];
    if (count >= target) return index / 10;
  }
  return 100;
}

export function decorate(row, catalog) {
  const classifiable = row.role === "primary" || row.role === "fallback";
  return {
    collectionId: row.collectionId,
    collectionName: row.collectionName,
    cardId: row.cardId,
    name: row.name,
    role: row.role,
    source: row.source,
    expert: row.expert,
    samples: row.attempts,
    top1Pct: classifiable ? pct(row.top1, row.attempts) : null,
    top3Pct: classifiable ? pct(row.top3, row.attempts) : null,
    overlayPct: row.role === "overlay" ? pct(row.overlay, row.attempts) : null,
    excludedSuppressionPct: row.role === "excluded" ? pct(row.attempts - row.leaks, row.attempts) : null,
    averageTopScore: avg(row.topScore, row.attempts),
    confidence: Object.fromEntries(CONFIDENCES.map((id) => [id, pct(row.confidence[id], row.attempts)])),
    frequentTop: top(row.observed).map(([key, count]) => ({ key, name: catalog.get(key)?.name || key, pct: pct(count, row.attempts) }))
  };
}

export function targetedSummary(rows) {
  const classes = rows.filter(({ role }) => role === "primary" || role === "fallback");
  const overlays = rows.filter(({ role }) => role === "overlay");
  const excluded = rows.filter(({ role }) => role === "excluded");
  const classN = classes.reduce((s, r) => s + r.attempts, 0);
  const overlayN = overlays.reduce((s, r) => s + r.attempts, 0);
  const excludedN = excluded.reduce((s, r) => s + r.attempts, 0);
  const byRole = {};
  for (const role of ["primary", "fallback", "overlay", "excluded"]) {
    const set = rows.filter((row) => row.role === role);
    const n = set.reduce((s, r) => s + r.attempts, 0);
    byRole[role] = {
      profiles: set.length,
      samples: n,
      top1Pct: ["primary", "fallback"].includes(role) ? pct(set.reduce((s, r) => s + r.top1, 0), n) : null,
      top3Pct: ["primary", "fallback"].includes(role) ? pct(set.reduce((s, r) => s + r.top3, 0), n) : null,
      overlayPct: role === "overlay" ? pct(set.reduce((s, r) => s + r.overlay, 0), n) : null
    };
  }
  return {
    profiles: rows.length,
    samples: rows.reduce((s, r) => s + r.attempts, 0),
    classificationProfiles: classes.length,
    classificationSamples: classN,
    top1Pct: pct(classes.reduce((s, r) => s + r.top1, 0), classN),
    top3Pct: pct(classes.reduce((s, r) => s + r.top3, 0), classN),
    overlayPct: pct(overlays.reduce((s, r) => s + r.overlay, 0), overlayN),
    excludedSuppressionPct: pct(excludedN - excluded.reduce((s, r) => s + r.leaks, 0), excludedN),
    byRole
  };
}

export function sortRows(rows) {
  return [...rows].sort((a, b) => profileKey(a).localeCompare(profileKey(b), "fr"));
}
