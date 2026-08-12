export const ZYTHOHUNT_CACHE_PREFIX = "zythohunt-";

export async function clearZythoHuntCaches({ cacheStorage = globalThis.caches } = {}) {
  if (!cacheStorage?.keys || !cacheStorage?.delete) {
    return { ok: false, deleted: 0, error: new Error("Cache Storage indisponible.") };
  }
  try {
    const keys = await cacheStorage.keys();
    const targets = keys.filter((key) => key.startsWith(ZYTHOHUNT_CACHE_PREFIX));
    const results = await Promise.all(targets.map((key) => cacheStorage.delete(key)));
    const deleted = results.filter(Boolean).length;
    return { ok: true, deleted, error: null };
  } catch (error) {
    return { ok: false, deleted: 0, error };
  }
}

export async function getStorageEstimate({ storageManager = globalThis.navigator?.storage } = {}) {
  if (!storageManager?.estimate) return { supported: false, usage: null, quota: null };
  try {
    const estimate = await storageManager.estimate();
    return {
      supported: true,
      usage: Number.isFinite(estimate.usage) ? Number(estimate.usage) : null,
      quota: Number.isFinite(estimate.quota) ? Number(estimate.quota) : null
    };
  } catch {
    return { supported: false, usage: null, quota: null };
  }
}

export function getPwaDisplayMode() {
  const standalone = Boolean(
    globalThis.matchMedia?.("(display-mode: standalone)")?.matches
    || globalThis.navigator?.standalone === true
  );
  return standalone ? "installée" : "navigateur";
}

export async function checkForPwaUpdate({ serviceWorker = globalThis.navigator?.serviceWorker } = {}) {
  if (!serviceWorker?.getRegistration) return { ok: false, status: "unsupported", registration: null, error: null };
  try {
    const registration = await serviceWorker.getRegistration();
    if (!registration) return { ok: false, status: "unregistered", registration: null, error: null };
    await registration.update();
    return {
      ok: true,
      status: registration.waiting ? "ready" : "checked",
      registration,
      error: null
    };
  } catch (error) {
    return { ok: false, status: "failed", registration: null, error };
  }
}
