const DEFAULT_KEY = "zythohunt.discovery.porters-et-stouts.v1";
const LEGACY_KEY = "zythohunt_revealed";
const LEGACY_MAP = { 0: "stout", 4: "imperial-stout", 8: "baltic-porter" };

export function createDiscoveryStore({ key = DEFAULT_KEY } = {}) {
  let discovered = read();
  function read() {
    try {
      const raw = localStorage.getItem(key);
      const data = raw && JSON.parse(raw);
      if (data?.schemaVersion === 2 && data.discovered && typeof data.discovered === "object") return data.discovered;
      const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY) || "null");
      const next = {};
      if (Array.isArray(legacy)) legacy.forEach((i) => { if (LEGACY_MAP[i]) next[LEGACY_MAP[i]] = { discoveredAt: new Date().toISOString() }; });
      write(next);
      return next;
    } catch { return {}; }
  }
  function write(value) { try { localStorage.setItem(key, JSON.stringify({ schemaVersion: 2, discovered: value })); } catch {} }
  return {
    isDiscovered: (id) => Boolean(discovered[id]),
    markDiscovered(id) { discovered[id] = { discoveredAt: new Date().toISOString() }; write(discovered); },
    reset() { discovered = {}; write(discovered); },
    getDiscoveredIds: () => Object.keys(discovered)
  };
}
