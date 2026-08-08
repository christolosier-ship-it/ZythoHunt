import gsap from "gsap";
import { createBeerBackground } from "./beer-background.js";
import { backgroundSettings } from "./background-settings.js";
import { getCollectionBackgroundSettings } from "./background-presets.js";
import { getEditorialBackgroundPreset } from "./editorial-background-presets.js";

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
    getPaletteName() { return "statique"; }
  };
}

export function mountBackground(hostEl) {
  try {
    const engine = createBeerBackground({ hostEl, settings: { ...backgroundSettings } });
    engine.mount();
    return { ...engine, isAvailable: true };
  } catch (error) {
    return createBackgroundFallback(hostEl, error);
  }
}

export function applyCollectionBackground(background, collection) {
  const nextSettings = getCollectionBackgroundSettings(backgroundSettings, getEditorialBackgroundPreset(collection));
  background.update(nextSettings);
  return nextSettings;
}

export function createBackgroundTransition(background, initialSettings) {
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

    if (!background.isAvailable || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
