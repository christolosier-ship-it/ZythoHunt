const STORAGE_KEY = "zythohunt_beer_background";

const defaults = {
  beerT: 8,
  bubbleDensity: 60,
  foamIntensity: 42
};

function clamp(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.min(100, Math.max(0, parsed)) : fallback;
}

function load() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!stored || typeof stored !== "object") return { ...defaults };
    return {
      beerT: clamp(stored.beerT, defaults.beerT),
      bubbleDensity: clamp(stored.bubbleDensity, defaults.bubbleDensity),
      foamIntensity: clamp(stored.foamIntensity, defaults.foamIntensity)
    };
  } catch {
    return { ...defaults };
  }
}

function save(settings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // The background remains functional when storage is unavailable.
  }
}

export const backgroundSettings = load();

export function updateBackgroundSetting(key, value) {
  if (!(key in defaults)) return;
  backgroundSettings[key] = clamp(value, defaults[key]);
  save(backgroundSettings);
}

export function resetBackgroundSettings() {
  Object.assign(backgroundSettings, defaults);
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
}

export function getBackgroundDefaults() {
  return { ...defaults };
}
