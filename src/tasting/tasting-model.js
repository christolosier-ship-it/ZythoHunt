import {
  APPEARANCE_COLORS,
  CLARITY_LEVELS,
  FINISH_IDS,
  FOAM_LEVELS,
  SENSORY_DESCRIPTOR_IDS,
  STRUCTURE_AXIS_IDS
} from "./tasting-vocabulary.js";

export const TASTING_SCHEMA_VERSION = 1;
export const TASTING_VERDICTS = Object.freeze(["again", "maybe", "no"]);

const COLOR_IDS = new Set(APPEARANCE_COLORS.map(({ id }) => id));
const CLARITY_IDS = new Set(CLARITY_LEVELS.map(({ id }) => id));
const FOAM_IDS = new Set(FOAM_LEVELS.map(({ id }) => id));
const DESCRIPTOR_IDS = new Set(SENSORY_DESCRIPTOR_IDS);
const FINISH_ID_SET = new Set(FINISH_IDS);
const STRUCTURE_IDS = new Set(STRUCTURE_AXIS_IDS);

function stringOrEmpty(value, maxLength = 240) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function nullableString(value, maxLength = 240) {
  const normalized = stringOrEmpty(value, maxLength);
  return normalized || null;
}

function normalizeDescriptorMap(value) {
  const source = value && typeof value === "object" && !Array.isArray(value) ? value : {};
  return Object.fromEntries(Object.entries(source)
    .filter(([id, intensity]) => DESCRIPTOR_IDS.has(id) && Number.isFinite(intensity) && intensity > 0)
    .map(([id, intensity]) => [id, Math.min(3, Math.max(1, Math.round(intensity)))]));
}

function normalizeStructure(value) {
  const source = value && typeof value === "object" && !Array.isArray(value) ? value : {};
  return Object.fromEntries(Object.entries(source)
    .filter(([id, score]) => STRUCTURE_IDS.has(id) && Number.isFinite(score))
    .map(([id, score]) => [id, Math.min(4, Math.max(0, Math.round(score)))]));
}

function normalizeFinish(value) {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((id) => FINISH_ID_SET.has(id)))];
}

function normalizeIsoDate(value, fallback = null) {
  if (typeof value !== "string" || Number.isNaN(Date.parse(value))) return fallback;
  return new Date(value).toISOString();
}

function createId() {
  if (typeof globalThis.crypto?.randomUUID === "function") return globalThis.crypto.randomUUID();
  return `tasting-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function normalizeTastingDraft(draft = {}) {
  const rating = Number.isFinite(draft.verdict?.rating)
    ? Math.min(5, Math.max(1, Math.round(draft.verdict.rating)))
    : null;
  const choice = TASTING_VERDICTS.includes(draft.verdict?.choice) ? draft.verdict.choice : null;
  const color = COLOR_IDS.has(draft.appearance?.color) ? draft.appearance.color : null;
  const clarity = CLARITY_IDS.has(draft.appearance?.clarity) ? draft.appearance.clarity : null;
  const foam = FOAM_IDS.has(draft.appearance?.foam) ? draft.appearance.foam : null;

  return {
    beer: {
      name: stringOrEmpty(draft.beer?.name, 120),
      brewery: stringOrEmpty(draft.beer?.brewery, 120)
    },
    tastedAt: normalizeIsoDate(draft.tastedAt, new Date().toISOString()),
    blind: Boolean(draft.blind),
    style: draft.style?.cardId && draft.style?.collectionId ? {
      collectionId: stringOrEmpty(draft.style.collectionId, 120),
      cardId: stringOrEmpty(draft.style.cardId, 160),
      name: nullableString(draft.style.name, 160)
    } : null,
    appearance: { color, clarity, foam },
    nose: normalizeDescriptorMap(draft.nose),
    palate: normalizeDescriptorMap(draft.palate),
    structure: normalizeStructure(draft.structure),
    finish: normalizeFinish(draft.finish),
    verdict: {
      choice,
      rating,
      note: stringOrEmpty(draft.verdict?.note, 1200)
    }
  };
}

export function createTastingRecord(draft, { id = createId(), now = new Date().toISOString() } = {}) {
  const normalized = normalizeTastingDraft(draft);
  return {
    schemaVersion: TASTING_SCHEMA_VERSION,
    id,
    createdAt: normalizeIsoDate(now, new Date().toISOString()),
    updatedAt: normalizeIsoDate(now, new Date().toISOString()),
    ...normalized
  };
}

export function updateTastingRecord(existing, draft, { now = new Date().toISOString() } = {}) {
  if (!isValidTastingRecord(existing)) throw new Error("Dégustation existante invalide.");
  return {
    ...createTastingRecord(draft, { id: existing.id, now }),
    createdAt: existing.createdAt
  };
}

export function isValidTastingRecord(record) {
  if (!record || typeof record !== "object" || Array.isArray(record)) return false;
  if (Number(record.schemaVersion) !== TASTING_SCHEMA_VERSION) return false;
  if (typeof record.id !== "string" || !record.id) return false;
  if (!normalizeIsoDate(record.createdAt) || !normalizeIsoDate(record.updatedAt) || !normalizeIsoDate(record.tastedAt)) return false;
  if (!record.beer || typeof record.beer !== "object") return false;
  if (typeof record.beer.name !== "string" || typeof record.beer.brewery !== "string") return false;
  if (record.style != null && (
    typeof record.style !== "object"
    || typeof record.style.collectionId !== "string"
    || typeof record.style.cardId !== "string"
  )) return false;
  if (!record.appearance || typeof record.appearance !== "object") return false;
  if (record.appearance.color != null && !COLOR_IDS.has(record.appearance.color)) return false;
  if (record.appearance.clarity != null && !CLARITY_IDS.has(record.appearance.clarity)) return false;
  if (record.appearance.foam != null && !FOAM_IDS.has(record.appearance.foam)) return false;
  if (!record.nose || typeof record.nose !== "object" || Array.isArray(record.nose)) return false;
  if (!record.palate || typeof record.palate !== "object" || Array.isArray(record.palate)) return false;
  if (Object.entries(record.nose).some(([id, value]) => !DESCRIPTOR_IDS.has(id) || !Number.isInteger(value) || value < 1 || value > 3)) return false;
  if (Object.entries(record.palate).some(([id, value]) => !DESCRIPTOR_IDS.has(id) || !Number.isInteger(value) || value < 1 || value > 3)) return false;
  if (!record.structure || typeof record.structure !== "object" || Array.isArray(record.structure)) return false;
  if (Object.entries(record.structure).some(([id, value]) => !STRUCTURE_IDS.has(id) || !Number.isInteger(value) || value < 0 || value > 4)) return false;
  if (!Array.isArray(record.finish) || record.finish.some((id) => !FINISH_ID_SET.has(id))) return false;
  if (!record.verdict || typeof record.verdict !== "object") return false;
  if (record.verdict.choice != null && !TASTING_VERDICTS.includes(record.verdict.choice)) return false;
  if (record.verdict.rating != null && (!Number.isInteger(record.verdict.rating) || record.verdict.rating < 1 || record.verdict.rating > 5)) return false;
  if (typeof record.verdict.note !== "string") return false;
  return true;
}
