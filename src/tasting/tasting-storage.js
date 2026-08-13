import { readJson, writeJson } from "../storage/safe-storage.js";
import { createTastingRecord, isValidTastingRecord, updateTastingRecord } from "./tasting-model.js";

export const TASTING_STORAGE_KEY = "zythohunt.tastings.v1";
export const TASTING_STORE_SCHEMA_VERSION = 1;

export function createEmptyTastingStore() {
  return { schemaVersion: TASTING_STORE_SCHEMA_VERSION, items: {}, order: [] };
}

export function isValidTastingStore(store) {
  if (!store || typeof store !== "object" || Array.isArray(store)) return false;
  if (Number(store.schemaVersion) !== TASTING_STORE_SCHEMA_VERSION) return false;
  if (!store.items || typeof store.items !== "object" || Array.isArray(store.items)) return false;
  if (!Array.isArray(store.order) || store.order.some((id) => typeof id !== "string")) return false;
  const ids = Object.keys(store.items);
  if (new Set(store.order).size !== store.order.length) return false;
  if (store.order.some((id) => !Object.hasOwn(store.items, id))) return false;
  if (ids.some((id) => !store.order.includes(id))) return false;
  return Object.entries(store.items).every(([id, tasting]) => tasting?.id === id && isValidTastingRecord(tasting));
}

export function parseAndValidateTastingStore(raw) {
  try {
    const value = typeof raw === "string" ? JSON.parse(raw) : raw;
    return isValidTastingStore(value)
      ? { valid: true, value, error: null }
      : { valid: false, value: null, error: "Données de dégustation invalides." };
  } catch {
    return { valid: false, value: null, error: "Données de dégustation illisibles." };
  }
}

export function createTastingStore({ storage = globalThis.localStorage, onPersistenceError = null } = {}) {
  function readState() {
    const read = readJson(storage, TASTING_STORAGE_KEY, createEmptyTastingStore);
    if (!read.ok) {
      onPersistenceError?.(read.error);
      return { ok: false, value: createEmptyTastingStore(), error: read.error };
    }
    if (!isValidTastingStore(read.value)) {
      const error = new Error("Le carnet de dégustation local est invalide.");
      onPersistenceError?.(error);
      return { ok: false, value: createEmptyTastingStore(), error };
    }
    return { ok: true, value: read.value, error: null };
  }

  function persist(state) {
    const write = writeJson(storage, TASTING_STORAGE_KEY, state);
    if (!write.ok) onPersistenceError?.(write.error);
    return { ok: write.ok, persisted: write.ok, error: write.ok ? null : write.error };
  }

  function list() {
    const read = readState();
    return {
      ok: read.ok,
      items: read.value.order.map((id) => read.value.items[id]).filter(Boolean),
      error: read.error
    };
  }

  function get(id) {
    const read = readState();
    return { ok: read.ok, item: read.value.items[id] || null, error: read.error };
  }

  function create(draft, options = {}) {
    const read = readState();
    if (!read.ok) return { ok: false, persisted: false, item: null, error: read.error };
    const item = createTastingRecord(draft, options);
    const next = {
      ...read.value,
      items: { ...read.value.items, [item.id]: item },
      order: [item.id, ...read.value.order.filter((id) => id !== item.id)]
    };
    const write = persist(next);
    return { ...write, item: write.ok ? item : null };
  }

  function update(id, draft, options = {}) {
    const read = readState();
    if (!read.ok) return { ok: false, persisted: false, item: null, error: read.error };
    const existing = read.value.items[id];
    if (!existing) return { ok: false, persisted: false, item: null, error: new Error("Dégustation introuvable.") };
    const item = updateTastingRecord(existing, draft, options);
    const next = { ...read.value, items: { ...read.value.items, [id]: item } };
    const write = persist(next);
    return { ...write, item: write.ok ? item : null };
  }

  function remove(id) {
    const read = readState();
    if (!read.ok) return { ok: false, persisted: false, removed: false, error: read.error };
    if (!read.value.items[id]) return { ok: true, persisted: true, removed: false, error: null };
    const items = { ...read.value.items };
    delete items[id];
    const next = { ...read.value, items, order: read.value.order.filter((entryId) => entryId !== id) };
    const write = persist(next);
    return { ...write, removed: write.ok };
  }

  return { list, get, create, update, remove, readState };
}
