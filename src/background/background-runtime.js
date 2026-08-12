import gsap from "gsap";
import { createBeerBackground } from "./beer-background.js";
import { backgroundSettings } from "./background-settings.js";
import { getCollectionBackgroundSettings } from "./background-presets.js";
import { getEditorialBackgroundPreset } from "./editorial-background-presets.js";
import { applyAmbienceProfile, normalizeAmbienceMode } from "./ambience-profile.js";

const BACKGROUND_KEYS = ["beerT", "bubbleDensity", "foamIntensity"];

function createBackgroundFallback(hostEl, error) {
  console.error("Le fond animé n'a pas pu démarrer. L'application continue avec un fond statique.", error);
  hostEl?.replaceChildren();
  hostEl?.classList.add("is-static-fallback");
  return {
    isAvailable: false,
    update() {},
    pause() {},
    resume() {},
    destroy() {},
    setAmbienceMode() {},
    refreshMotionPreference() {},
    getAmbienceMode() { return "static"; },
    getPaletteName() { return "statique"; }
  };
}

/** @param {HTMLElement | null} hostEl @param {{ ambienceMode?: string, isReducedMotion?: (() => boolean) | null }} [options] */
export function mountBackground(hostEl, { ambienceMode = "full", isReducedMotion = null } = {}) {
  try {
    let mode = normalizeAmbienceMode(ambienceMode);
    let baseSettings = { ...backgroundSettings };
    let manuallyPaused = false;
    const engine = createBeerBackground({
      hostEl,
      settings: applyAmbienceProfile(baseSettings, mode),
      isReducedMotion
    });
    engine.mount();

    const syncPause = () => {
      if (manuallyPaused || mode === "static") engine.pause();
      else engine.resume();
    };

    syncPause();

    return {
      isAvailable: true,
      update(next = {}) {
        baseSettings = { ...baseSettings, ...next };
        engine.update(applyAmbienceProfile(baseSettings, mode));
        syncPause();
      },
      pause() {
        manuallyPaused = true;
        engine.pause();
      },
      resume() {
        manuallyPaused = false;
        syncPause();
      },
      destroy() { engine.destroy(); },
      setAmbienceMode(nextMode) {
        mode = normalizeAmbienceMode(nextMode);
        engine.update(applyAmbienceProfile(baseSettings, mode));
        syncPause();
      },
      refreshMotionPreference() {
        engine.refreshMotionPreference?.();
        syncPause();
      },
      getAmbienceMode: () => mode,
      getPaletteName: () => engine.getPaletteName()
    };
  } catch (error) {
    return createBackgroundFallback(hostEl, error);
  }
}

export function applyCollectionBackground(background, collection) {
  const nextSettings = getCollectionBackgroundSettings(backgroundSettings, getEditorialBackgroundPreset(collection));
  background.update(nextSettings);
  return nextSettings;
}

/** @param {any} background @param {Record<string, any>} initialSettings @param {{ isReducedMotion?: (() => boolean) | null }} [options] */
export function createBackgroundTransition(background, initialSettings, { isReducedMotion = null } = {}) {
  let tween = null;
  let currentSettings = Object.fromEntries(
    BACKGROUND_KEYS.map((key) => [key, Number(initialSettings[key] ?? backgroundSettings[key] ?? 0)])
  );

  function transitionTo(collection) {
    const nextSettings = getCollectionBackgroundSettings(backgroundSettings, getEditorialBackgroundPreset(collection));
    const target = Object.fromEntries(
      BACKGROUND_KEYS.map((key) => [key, Number(nextSettings[key] ?? currentSettings[key] ?? 0)])
    );
    tween?.kill();

    if (!background.isAvailable || background.getAmbienceMode?.() === "static" || isReducedMotion?.()) {
      currentSettings = target;
      background.update(nextSettings);
      return Promise.resolve(nextSettings);
    }

    const state = { ...currentSettings };
    return new Promise((resolve) => {
      tween = gsap.to(state, {
        ...target,
        duration: 0.9,
        ease: "power2.inOut",
        overwrite: true,
        onUpdate: () => {
          currentSettings = { ...state };
          background.update(state);
        },
        onComplete: () => {
          currentSettings = target;
          background.update(nextSettings);
          tween = null;
          resolve(nextSettings);
        },
        onInterrupt: () => {
          currentSettings = { ...state };
          resolve({ ...backgroundSettings, ...currentSettings });
        }
      });
    });
  }

  return { transitionTo };
}
