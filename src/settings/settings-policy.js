export function resolveReducedMotion(mode, systemReduced = false) {
  if (mode === "full") return false;
  if (mode === "reduced") return true;
  return Boolean(systemReduced);
}

/**
 * @param {{ settingsStore?: any, matchMediaFn?: ((query: string) => MediaQueryList | any) | null }} [options]
 */
export function createExperiencePolicy({ settingsStore, matchMediaFn = globalThis.matchMedia?.bind(globalThis) } = {}) {
  const mediaQuery = matchMediaFn?.("(prefers-reduced-motion: reduce)") || null;
  const listeners = new Set();

  const getSnapshot = () => {
    const settings = settingsStore?.getState?.() || {};
    return {
      motionMode: settings.motionMode || "auto",
      ambienceMode: settings.ambienceMode || "full",
      reducedMotion: resolveReducedMotion(settings.motionMode || "auto", Boolean(mediaQuery?.matches))
    };
  };

  const emit = () => {
    const snapshot = getSnapshot();
    listeners.forEach((listener) => listener(snapshot));
  };

  const unsubscribeSettings = settingsStore?.subscribe?.(emit) || (() => {});
  const onMediaChange = () => emit();
  mediaQuery?.addEventListener?.("change", onMediaChange);

  return {
    getSnapshot,
    isReducedMotion: () => getSnapshot().reducedMotion,
    getAmbienceMode: () => getSnapshot().ambienceMode,
    subscribe(listener) {
      if (typeof listener !== "function") return () => {};
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    destroy() {
      unsubscribeSettings();
      mediaQuery?.removeEventListener?.("change", onMediaChange);
      listeners.clear();
    }
  };
}
