import { readJson, toPersistenceStatus, writeJson } from "../storage/safe-storage.js";

export const DEFAULT_DISCOVERY_KEY = "zythohunt.discovery.porters-et-stouts.v1";
export const LEGACY_DISCOVERY_KEY = "zythohunt_revealed";
const LEGACY_MAP = { 0: "stout", 4: "imperial-stout", 8: "baltic-porter" };

/**
 * @param {{
 *   key?: string,
 *   storage?: Storage | any,
 *   onPersistenceError?: ((detail: { scope: string, key: string, error: unknown }) => void) | null
 * }} [options]
 */
export function createDiscoveryStore({
  key = DEFAULT_DISCOVERY_KEY,
  storage = globalThis.localStorage,
  onPersistenceError = null
} = {}) {
  let discovered = read();

  function reportPersistenceError(error) {
    onPersistenceError?.({ scope: "discovery", key, error });
  }

  /** @param {Record<string, { discoveredAt: string }>} value */
  function persist(value) {
    const result = writeJson(storage, key, { schemaVersion: 2, discovered: value });
    if (!result.ok) reportPersistenceError(result.error);
    return toPersistenceStatus(result);
  }

  /** @returns {Record<string, { discoveredAt: string }>} */
  function read() {
    const current = readJson(storage, key, () => null);
    const data = /** @type {{ schemaVersion?: number, discovered?: Record<string, { discoveredAt: string }> } | null} */ (current.value);
    if (data?.schemaVersion === 2 && data.discovered && typeof data.discovered === "object") {
      return data.discovered;
    }

    // L'ancien tableau zythohunt_revealed ne concernait que la collection
    // historique Porters & Stouts. Il ne doit jamais contaminer les autres stores.
    if (key !== DEFAULT_DISCOVERY_KEY) return {};

    const legacyResult = readJson(storage, LEGACY_DISCOVERY_KEY, () => null);
    const legacy = /** @type {unknown} */ (legacyResult.value);
    /** @type {Record<string, { discoveredAt: string }>} */
    const next = {};
    if (Array.isArray(legacy)) {
      legacy.forEach((index) => {
        const id = LEGACY_MAP[index];
        if (id) next[id] = { discoveredAt: new Date().toISOString() };
      });
    }

    if (Object.keys(next).length) persist(next);
    return next;
  }

  return {
    isDiscovered: (id) => Boolean(discovered[id]),
    markDiscovered(id) {
      const next = {
        ...discovered,
        [id]: { discoveredAt: new Date().toISOString() }
      };
      const persistence = persist(next);
      // La session reste cohérente visuellement même si le navigateur refuse
      // l'écriture. Le statut retourné permet d'éviter d'annoncer un succès durable.
      discovered = next;
      return { ...persistence, id };
    },
    markAllDiscovered(ids = []) {
      const discoveredAt = new Date().toISOString();
      const next = { ...discovered };
      const cleanIds = ids.filter(Boolean);

      cleanIds.forEach((id) => {
        next[id] = next[id] || { discoveredAt };
      });

      const persistence = persist(next);
      discovered = next;
      return { ...persistence, ids: cleanIds };
    },
    reset() {
      /** @type {Record<string, { discoveredAt: string }>} */
      const next = {};
      const persistence = persist(next);
      discovered = next;
      return persistence;
    },
    getDiscoveredIds: () => Object.keys(discovered)
  };
}
