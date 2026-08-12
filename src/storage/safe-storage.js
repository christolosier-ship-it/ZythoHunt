function storageUnavailableError() {
  return new Error("Le stockage local n'est pas disponible dans ce contexte.");
}

/**
 * @param {Storage | { getItem?: Function } | null | undefined} storage
 * @param {string} key
 * @param {string | null} [fallback]
 * @returns {{ ok: true, value: string | null, error: null } | { ok: false, value: string | null, error: unknown }}
 */
export function readStoredValue(storage, key, fallback = null) {
  try {
    if (!storage?.getItem) throw storageUnavailableError();
    return { ok: true, value: storage.getItem(key) ?? fallback, error: null };
  } catch (error) {
    return { ok: false, value: fallback, error };
  }
}

/**
 * @param {Storage | { setItem?: Function } | null | undefined} storage
 * @param {string} key
 * @param {string} value
 * @returns {{ ok: true, error: null } | { ok: false, error: unknown }}
 */
export function writeStoredValue(storage, key, value) {
  try {
    if (!storage?.setItem) throw storageUnavailableError();
    storage.setItem(key, String(value));
    return { ok: true, error: null };
  } catch (error) {
    return { ok: false, error };
  }
}

/**
 * @template T
 * @param {Storage | { getItem?: Function } | null | undefined} storage
 * @param {string} key
 * @param {() => T} fallback
 * @returns {{ ok: true, value: T, error: null } | { ok: false, value: T, error: unknown }}
 */
export function readJson(storage, key, fallback) {
  const result = readStoredValue(storage, key);
  if (!result.ok) return { ok: false, value: fallback(), error: result.error };
  if (!result.value) return { ok: true, value: fallback(), error: null };
  try {
    return { ok: true, value: JSON.parse(result.value), error: null };
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
    return writeStoredValue(storage, key, JSON.stringify(value));
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
