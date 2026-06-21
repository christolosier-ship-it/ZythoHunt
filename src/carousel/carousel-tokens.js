const STORAGE_KEY = "zythohunt_carousel_tokens";

const defaults = {
  spacing:       128,
  depthStep:     170,
  rotationStep:   28,
  scaleStep:    0.06,
  minScale:     0.62,
  opacityStep:  0.15,
  minOpacity:   0.55,
  snapDuration: 0.55,
  renderWindow: 8
};

function load() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return { ...defaults, ...JSON.parse(stored) };
  } catch (_) {}
  return { ...defaults };
}

function save(tokens) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(tokens)); } catch (_) {}
}

export const carouselTokens = load();

export function updateCarouselToken(key, value) {
  carouselTokens[key] = value;
  save(carouselTokens);
}

export function resetCarouselTokens() {
  Object.assign(carouselTokens, defaults);
  localStorage.removeItem(STORAGE_KEY);
}

export function getCarouselDefaults() {
  return { ...defaults };
}
