import {
  APPEARANCE_COLORS,
  CLARITY_LEVELS,
  FINISH_IDS,
  SENSORY_DESCRIPTOR_IDS,
  STRUCTURE_AXIS_IDS
} from "./tasting-vocabulary.js";

export const COLORS = APPEARANCE_COLORS.map(({ id }) => id);
export const CLARITIES = CLARITY_LEVELS.map(({ id }) => id);
export const CONFIDENCES = ["ambiguous", "fragile", "plausible", "strong"];
export const profileKey = (p) => `${p.collectionId}:${p.cardId}`;
export const resultKey = (r) => r ? `${r.collectionId}:${r.cardId}` : null;

function hash32(value) {
  let h = 2166136261;
  for (const c of String(value)) {
    h ^= c.codePointAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const BASE_SEED = 0x5a17c0de;
const rngFor = (label, i) => mulberry32((BASE_SEED ^ hash32(label) ^ Math.imul(i + 1, 0x9e3779b1)) >>> 0);
const pick = (r, a) => a.length ? a[Math.floor(r() * a.length)] : null;
const int = (r, a, b) => a + Math.floor(r() * (b - a + 1));

function take(r, values, count) {
  const copy = [...values];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(r() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

function category(r, expected, order, missing, neighbor) {
  if (!expected?.length || r() < missing) return null;
  const value = pick(r, expected);
  if (r() >= neighbor) return value;
  const i = order.indexOf(value);
  const choices = [i - 1, i + 1].filter((n) => n >= 0 && n < order.length);
  return choices.length ? order[pick(r, choices)] : value;
}

function descriptors(r, expected = {}, contradictions = []) {
  const out = {};
  const forbidden = new Set(contradictions);
  for (const [id, value] of Object.entries(expected)) {
    const keep = value === 3 ? 0.90 : value === 2 ? 0.78 : 0.58;
    if (r() > keep) continue;
    const roll = r();
    const delta = roll < 0.18 ? -1 : roll > 0.88 ? 1 : 0;
    out[id] = Math.max(1, Math.min(3, value + delta));
  }
  const roll = r();
  const extraCount = roll < 0.08 ? 2 : roll < 0.34 ? 1 : 0;
  const extras = SENSORY_DESCRIPTOR_IDS.filter((id) => !(id in expected) && !forbidden.has(id));
  take(r, extras, extraCount).forEach((id) => { out[id] = r() < 0.88 ? 1 : 2; });
  if (contradictions.length && r() < 0.045) out[pick(r, contradictions)] = r() < 0.8 ? 1 : 2;
  return out;
}

function axis(r, range) {
  if (!Array.isArray(range) || range.length !== 2 || r() < 0.07) return null;
  const [min, max] = range;
  if (r() < 0.80) return int(r, min, max);
  return Math.max(0, Math.min(4, r() < 0.5 ? min - 1 : max + 1));
}

export function targetedObservation(profile, iteration) {
  const r = rngFor(`target:${profileKey(profile)}`, iteration);
  const structure = {};
  STRUCTURE_AXIS_IDS.forEach((id) => {
    const value = axis(r, profile.structure?.[id]);
    if (Number.isFinite(value)) structure[id] = value;
  });
  const input = {
    appearance: {
      color: category(r, profile.appearance?.colors, COLORS, 0.04, 0.10),
      clarity: category(r, profile.appearance?.clarity, CLARITIES, 0.07, 0.13)
    },
    nose: descriptors(r, profile.nose, profile.contradictions),
    palate: descriptors(r, profile.palate, profile.contradictions),
    structure,
    finish: (profile.finish || []).filter(() => r() < 0.80)
  };
  if (r() < 0.18) {
    const extra = pick(r, FINISH_IDS.filter((id) => !input.finish.includes(id)));
    if (extra) input.finish.push(extra);
  }
  if (profile.role === "overlay" && profile.keyMarkers?.length && r() < 0.90) {
    const found = profile.keyMarkers.some((id) => input.nose[id] || input.palate[id]);
    if (!found) {
      const id = pick(r, profile.keyMarkers);
      input.nose[id] = Math.max(2, profile.nose?.[id] || profile.palate?.[id] || 2);
    }
  }
  return input;
}

export function randomObservation(iteration) {
  const r = rngFor("random", iteration);
  const randomMap = () => Object.fromEntries(take(r, SENSORY_DESCRIPTOR_IDS, int(r, 0, 7)).map((id) => [id, int(r, 1, 3)]));
  const structure = {};
  STRUCTURE_AXIS_IDS.forEach((id) => { if (r() < 0.72) structure[id] = int(r, 0, 4); });
  return {
    appearance: { color: r() < 0.88 ? pick(r, COLORS) : null, clarity: r() < 0.75 ? pick(r, CLARITIES) : null },
    nose: randomMap(),
    palate: randomMap(),
    structure,
    finish: take(r, FINISH_IDS, r() < 0.2 ? 0 : int(r, 1, 3))
  };
}

export function emptyConfidence() {
  return Object.fromEntries(CONFIDENCES.map((id) => [id, 0]));
}

export function increment(map, key, amount = 1) {
  if (key) map[key] = (map[key] || 0) + amount;
}
