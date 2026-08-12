const AMBIENCE_MODES = new Set(["full", "light", "static"]);

export function normalizeAmbienceMode(mode) {
  return AMBIENCE_MODES.has(mode) ? mode : "full";
}

export function applyAmbienceProfile(settings, mode = "full") {
  const normalizedMode = normalizeAmbienceMode(mode);
  if (normalizedMode === "light") {
    return {
      ...settings,
      bubbleDensity: Math.round(Number(settings.bubbleDensity || 0) * 0.45),
      foamIntensity: Math.round(Number(settings.foamIntensity || 0) * 0.72)
    };
  }
  if (normalizedMode === "static") {
    return {
      ...settings,
      bubbleDensity: 0,
      foamIntensity: Math.round(Number(settings.foamIntensity || 0) * 0.62)
    };
  }
  return { ...settings };
}
