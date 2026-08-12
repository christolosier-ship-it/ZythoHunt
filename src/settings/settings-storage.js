import { readJson, toPersistenceStatus, writeJson } from "../storage/safe-storage.js";

export const SETTINGS_STORAGE_KEY = "zythohunt.settings.v1";

export const DEFAULT_SETTINGS = Object.freeze({
  schemaVersion: 1,
  notificationsEnabled: true,
  motionMode: "auto",
  ambienceMode: "full",
  startupMode: "resume"
});

const MOTION_MODES = new Set(["auto", "full", "reduced"]);
const AMBIENCE_MODES = new Set(["full", "light", "static"]);
const STARTUP_MODES = new Set(["resume", "first"]);

export function normalizeSettings(value = {}) {
  return {
    schemaVersion: 1,
    notificationsEnabled: value?.notificationsEnabled !== false,
    motionMode: MOTION_MODES.has(value?.motionMode) ? value.motionMode : DEFAULT_SETTINGS.motionMode,
    ambienceMode: AMBIENCE_MODES.has(value?.ambienceMode) ? value.ambienceMode : DEFAULT_SETTINGS.ambienceMode,
    startupMode: STARTUP_MODES.has(value?.startupMode) ? value.startupMode : DEFAULT_SETTINGS.startupMode
  };
}

/**
 * @param {{ storage?: Storage | any, onPersistenceError?: ((detail: { scope: string, key: string, error: unknown }) => void) | null }} [options]
 */
export function createSettingsStore({ storage = globalThis.localStorage, onPersistenceError = null } = {}) {
  let state = normalizeSettings(readJson(storage, SETTINGS_STORAGE_KEY, () => DEFAULT_SETTINGS).value);
  const listeners = new Set();

  function persist(next) {
    const result = writeJson(storage, SETTINGS_STORAGE_KEY, next);
    if (!result.ok) onPersistenceError?.({ scope: "settings", key: SETTINGS_STORAGE_KEY, error: result.error });
    return toPersistenceStatus(result);
  }

  function commit(next) {
    const persistence = persist(next);
    if (!persistence.ok) return { ...persistence, state: { ...state } };
    state = next;
    listeners.forEach((listener) => listener({ ...state }));
    return { ...persistence, state: { ...state } };
  }

  return {
    getState: () => ({ ...state }),
    setPreference(name, value) {
      if (!(name in DEFAULT_SETTINGS) || name === "schemaVersion") {
        return { ok: false, persisted: false, error: new Error(`Unknown setting: ${name}`), state: { ...state } };
      }
      const next = normalizeSettings({ ...state, [name]: value });
      return commit(next);
    },
    setSettings(patch = {}) {
      return commit(normalizeSettings({ ...state, ...patch }));
    },
    reset() {
      return commit({ ...DEFAULT_SETTINGS });
    },
    subscribe(listener) {
      if (typeof listener !== "function") return () => {};
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
  };
}
