import { ACTIVE_COLLECTION_STORAGE_KEY } from "../app/active-collection-storage.js";
import { BADGE_QUEUE_KEY, BADGE_STORAGE_KEY } from "../badges/badge-storage.js";
import { REVEAL_STATS_KEY } from "../badges/badge-stats-storage.js";
import { LEGACY_DISCOVERY_KEY } from "../discovery/discovery-store.js";
import { readStoredValue, removeStoredValue, writeStoredValue } from "./safe-storage.js";

export const APP_STORAGE_PREFIX = "zythohunt.";
export const BACKUP_FORMAT = "zythohunt-backup";
export const BACKUP_VERSION = 1;

export function isZythoHuntStorageKey(key) {
  return typeof key === "string" && (key.startsWith(APP_STORAGE_PREFIX) || key === LEGACY_DISCOVERY_KEY);
}

function listStorageKeys(storage) {
  try {
    if (!storage || typeof storage.length !== "number" || typeof storage.key !== "function") {
      throw new Error("Le stockage local ne permet pas d'énumérer les données.");
    }
    const keys = [];
    for (let index = 0; index < storage.length; index += 1) {
      const key = storage.key(index);
      if (key) keys.push(key);
    }
    return { ok: true, keys, error: null };
  } catch (error) {
    return { ok: false, keys: [], error };
  }
}

function removeKeys(storage, keys) {
  const errors = [];
  keys.forEach((key) => {
    const result = removeStoredValue(storage, key);
    if (!result.ok) errors.push({ key, error: result.error });
  });
  return { ok: errors.length === 0, removed: keys.length - errors.length, errors };
}

function readOwnedEntries(storage) {
  const listed = listStorageKeys(storage);
  if (!listed.ok) return { ok: false, entries: {}, error: listed.error };
  const entries = {};
  for (const key of listed.keys.filter(isZythoHuntStorageKey)) {
    const result = readStoredValue(storage, key);
    if (!result.ok) return { ok: false, entries: {}, error: result.error };
    if (result.value != null) entries[key] = result.value;
  }
  return { ok: true, entries, error: null };
}

function safeParse(raw) {
  try { return JSON.parse(raw); }
  catch { return null; }
}

export function summarizeBackupEntries(entries = {}) {
  let discoveries = 0;
  let badges = 0;
  let tastings = 0;

  Object.entries(entries).forEach(([key, raw]) => {
    if (key.startsWith("zythohunt.discovery.")) {
      const value = safeParse(raw);
      discoveries += Object.keys(value?.discovered || {}).length;
    } else if (key === BADGE_STORAGE_KEY) {
      const value = safeParse(raw);
      badges = Object.keys(value?.unlocked || {}).length;
    } else if (key.includes("tasting") || key.includes("degustation")) {
      const value = safeParse(raw);
      if (Array.isArray(value)) tastings += value.length;
      else if (Array.isArray(value?.entries)) tastings += value.entries.length;
      else if (value?.items && typeof value.items === "object") tastings += Object.keys(value.items).length;
    }
  });

  return { discoveries, badges, tastings, settingsIncluded: Object.hasOwn(entries, "zythohunt.settings.v1") };
}

export function validateBackup(backup) {
  if (!backup || typeof backup !== "object") return { valid: false, error: "Sauvegarde illisible." };
  if (backup.format !== BACKUP_FORMAT || Number(backup.version) !== BACKUP_VERSION) {
    return { valid: false, error: "Format ou version de sauvegarde non pris en charge." };
  }
  if (!backup.entries || typeof backup.entries !== "object" || Array.isArray(backup.entries)) {
    return { valid: false, error: "La sauvegarde ne contient pas de données valides." };
  }
  for (const [key, value] of Object.entries(backup.entries)) {
    if (!isZythoHuntStorageKey(key)) return { valid: false, error: `Clé étrangère refusée : ${key}` };
    if (typeof value !== "string") return { valid: false, error: `Valeur invalide pour ${key}.` };
  }
  return { valid: true, error: null, summary: summarizeBackupEntries(backup.entries) };
}

/**
 * @param {{ collectionCatalog?: any[], storage?: Storage | any, appVersion?: string }} [options]
 */
export function createAppDataManager({ collectionCatalog = [], storage = globalThis.localStorage, appVersion = "unknown" } = {}) {
  const discoveryKeys = collectionCatalog
    .map((entry) => entry?.collection?.discoveryKey || entry?.discoveryKey)
    .filter(Boolean);
  const progressKeys = [...new Set([
    ...discoveryKeys,
    BADGE_STORAGE_KEY,
    BADGE_QUEUE_KEY,
    REVEAL_STATS_KEY,
    ACTIVE_COLLECTION_STORAGE_KEY,
    LEGACY_DISCOVERY_KEY
  ])];

  function getOwnedKeys() {
    const listed = listStorageKeys(storage);
    if (!listed.ok) return { ok: false, keys: [], error: listed.error };
    return { ok: true, keys: listed.keys.filter(isZythoHuntStorageKey), error: null };
  }

  function resetProgress() {
    return removeKeys(storage, progressKeys);
  }

  function resetAll() {
    const owned = getOwnedKeys();
    if (!owned.ok) return { ok: false, removed: 0, errors: [{ key: "*", error: owned.error }] };
    return removeKeys(storage, owned.keys);
  }

  function exportBackup() {
    const read = readOwnedEntries(storage);
    if (!read.ok) return { ok: false, backup: null, summary: null, error: read.error };
    const backup = {
      format: BACKUP_FORMAT,
      version: BACKUP_VERSION,
      appVersion,
      exportedAt: new Date().toISOString(),
      entries: read.entries
    };
    return { ok: true, backup, summary: summarizeBackupEntries(read.entries), error: null };
  }

  function importBackup(backup) {
    const validation = validateBackup(backup);
    if (!validation.valid) return { ok: false, imported: 0, error: new Error(validation.error), summary: null };

    const snapshot = readOwnedEntries(storage);
    if (!snapshot.ok) return { ok: false, imported: 0, error: snapshot.error, summary: null };

    const clear = resetAll();
    if (!clear.ok) return { ok: false, imported: 0, error: clear.errors[0]?.error || new Error("Nettoyage impossible."), summary: null };

    let imported = 0;
    for (const [key, raw] of Object.entries(backup.entries)) {
      const write = writeStoredValue(storage, key, raw);
      if (!write.ok) {
        resetAll();
        Object.entries(snapshot.entries).forEach(([snapshotKey, snapshotRaw]) => {
          writeStoredValue(storage, snapshotKey, snapshotRaw);
        });
        return { ok: false, imported, error: write.error, summary: null };
      }
      imported += 1;
    }

    return { ok: true, imported, error: null, summary: validation.summary };
  }

  return { getOwnedKeys, resetProgress, resetAll, exportBackup, importBackup };
}
