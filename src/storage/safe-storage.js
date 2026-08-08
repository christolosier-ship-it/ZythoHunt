function storageUnavailableError() {
  return new Error("Le stockage local n'est pas disponible dans ce contexte.");
}

/**
 * @template T
 * @param {Storage | { getItem?: Function } | null | undefined} storage
 * @param {string} key
 * @param {() => T} fallback
 * @returns {{ ok: true, value: T, error: null } | { ok: false, value: T, error: unknown }}
 */
export function readJson(storage, key, fallback) {
  try {
    if (!storage?.getItem) throw storageUnavailableError();
    const raw = storage.getItem(key);
    if (!raw) return { ok: true, value: fallback(), error: null };
    return { ok: true, value: JSON.parse(raw), error: null };
  } catch (error) {
    return { ok: false, value: fallback(), error };
  }
}

/**
 * @param {Storage | { setItem?: Function } | null | undefined} storage
 * @param {string} key
 * @param {unknown} value
 * @returns {{ ok: true, error: null } | { ok: false, error: unknown }}
 */
export function writeJson(storage, key, value) {
  try {
    if (!storage?.setItem) throw storageUnavailableError();
    storage.setItem(key, JSON.stringify(value));
    return { ok: true, error: null };
  } catch (error) {
    return { ok: false, error };
  }
}

/**
 * @param {Storage | { removeItem?: Function } | null | undefined} storage
 * @param {string} key
 * @returns {{ ok: true, error: null } | { ok: false, error: unknown }}
 */
export function removeStoredValue(storage, key) {
  try {
    if (!storage?.removeItem) throw storageUnavailableError();
    storage.removeItem(key);
    return { ok: true, error: null };
  } catch (error) {
    return { ok: false, error };
  }
}

/**
 * Normalise les retours de persistance exposés aux couches métier.
 * @param {{ ok: boolean, error?: unknown }} result
 * @returns {{ ok: boolean, persisted: boolean, error: unknown | null }}
 */
export function toPersistenceStatus(result) {
  return {
    ok: Boolean(result?.ok),
    persisted: Boolean(result?.ok),
    error: result?.ok ? null : result?.error ?? storageUnavailableError()
  };
}
