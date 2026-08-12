import test from "node:test";
import assert from "node:assert/strict";
import { createSettingsStore, DEFAULT_SETTINGS, SETTINGS_STORAGE_KEY } from "./settings-storage.js";

function createMemoryStorage(initial = {}) {
  const data = new Map(Object.entries(initial));
  return {
    get length() { return data.size; },
    key(index) { return [...data.keys()][index] ?? null; },
    getItem(key) { return data.has(key) ? data.get(key) : null; },
    setItem(key, value) { data.set(key, String(value)); },
    removeItem(key) { data.delete(key); }
  };
}

test("les réglages ont des valeurs par défaut stables et persistantes", () => {
  const storage = createMemoryStorage();
  const store = createSettingsStore({ storage });
  assert.deepEqual(store.getState(), DEFAULT_SETTINGS);

  const result = store.setPreference("motionMode", "reduced");
  assert.equal(result.ok, true);
  assert.equal(store.getState().motionMode, "reduced");
  assert.equal(JSON.parse(storage.getItem(SETTINGS_STORAGE_KEY)).motionMode, "reduced");
});

test("les valeurs inconnues sont normalisées au lieu de contaminer les préférences", () => {
  const storage = createMemoryStorage({
    [SETTINGS_STORAGE_KEY]: JSON.stringify({ motionMode: "warp", ambienceMode: "lava", startupMode: "moon" })
  });
  const store = createSettingsStore({ storage });
  assert.equal(store.getState().motionMode, "auto");
  assert.equal(store.getState().ambienceMode, "full");
  assert.equal(store.getState().startupMode, "resume");
});

test("une écriture refusée ne modifie pas les réglages en mémoire", () => {
  const storage = createMemoryStorage();
  storage.setItem = () => { throw new Error("blocked"); };
  const store = createSettingsStore({ storage });
  const result = store.setPreference("ambienceMode", "static");
  assert.equal(result.ok, false);
  assert.equal(store.getState().ambienceMode, "full");
});
