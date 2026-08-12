import test from "node:test";
import assert from "node:assert/strict";
import { createExperiencePolicy, resolveReducedMotion } from "./settings-policy.js";

function createSettingsStore(state) {
  const listeners = new Set();
  return {
    getState: () => ({ ...state }),
    set(next) { state = { ...state, ...next }; listeners.forEach((listener) => listener({ ...state })); },
    subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); }
  };
}

test("Auto suit le système tandis que Complètes et Réduites l'emportent explicitement", () => {
  assert.equal(resolveReducedMotion("auto", true), true);
  assert.equal(resolveReducedMotion("auto", false), false);
  assert.equal(resolveReducedMotion("full", true), false);
  assert.equal(resolveReducedMotion("reduced", false), true);
});

test("la politique d'expérience réagit aux préférences et au système", () => {
  const settingsStore = createSettingsStore({ motionMode: "auto", ambienceMode: "full" });
  const mediaListeners = new Set();
  const media = {
    matches: false,
    addEventListener(_type, listener) { mediaListeners.add(listener); },
    removeEventListener(_type, listener) { mediaListeners.delete(listener); }
  };
  const policy = createExperiencePolicy({ settingsStore, matchMediaFn: () => media });
  assert.equal(policy.isReducedMotion(), false);
  assert.equal(policy.getAmbienceMode(), "full");

  settingsStore.set({ motionMode: "reduced", ambienceMode: "light" });
  assert.equal(policy.isReducedMotion(), true);
  assert.equal(policy.getAmbienceMode(), "light");

  settingsStore.set({ motionMode: "auto" });
  media.matches = true;
  mediaListeners.forEach((listener) => listener());
  assert.equal(policy.isReducedMotion(), true);
  policy.destroy();
});
