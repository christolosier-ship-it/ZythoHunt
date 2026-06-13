export const SOURCE_SPRITE_DIAMETERS = [48, 96, 144];
export const CANONICAL_SPRITE_SIZES = SOURCE_SPRITE_DIAMETERS;
export const MAX_SPRITE_CACHE_ENTRIES = 64;
export const MAX_PHYSICAL_SPRITE_PX = 288;

export function canonicalSpriteSize(targetDiameterPx = 48) {
  const diameter = Math.max(1, Number(targetDiameterPx) || 1);
  return SOURCE_SPRITE_DIAMETERS.find(size => diameter <= size) ?? SOURCE_SPRITE_DIAMETERS.at(-1);
}

export function makeSpriteKey({ type, nodeType, family, visualFamily, state, lod, dpr, themeVersion = 1, sourceDiameterPx, size }) {
  const sourceDiameter = sourceDiameterPx ?? canonicalSpriteSize(size || 48);
  return [nodeType || type, visualFamily || family, state, lod, Math.round(dpr * 100) / 100, themeVersion, sourceDiameter].join('|');
}

export function createSpriteCache(factory = () => null, options = {}) {
  const cache = new Map();
  const stats = { hits: 0, misses: 0, evictions: 0 };
  const maxEntries = options.maxEntries ?? MAX_SPRITE_CACHE_ENTRIES;
  return {
    get(options) {
      const sourceDiameterPx = options.sourceDiameterPx ?? canonicalSpriteSize(options.targetDiameterPx ?? options.size ?? 48);
      const key = makeSpriteKey({ ...options, sourceDiameterPx });
      if (cache.has(key)) {
        const sprite = cache.get(key);
        cache.delete(key); cache.set(key, sprite); stats.hits++;
        return sprite;
      }
      stats.misses++;
      const safeDpr = Math.max(1, Math.min(Number(options.dpr) || 1, MAX_PHYSICAL_SPRITE_PX / sourceDiameterPx));
      const sprite = factory({ ...options, sourceDiameterPx, dpr: safeDpr });
      cache.set(key, sprite);
      while (cache.size > maxEntries) { cache.delete(cache.keys().next().value); stats.evictions++; }
      return sprite;
    },
    clear() { cache.clear(); stats.hits = 0; stats.misses = 0; stats.evictions = 0; },
    invalidateForDpr() { this.clear(); },
    invalidateForTheme() { this.clear(); },
    get size() { return cache.size; },
    stats() {
      const total = stats.hits + stats.misses;
      let maxWidth = 0; let maxHeight = 0; let estimatedBytes = 0;
      for (const sprite of cache.values()) { maxWidth = Math.max(maxWidth, sprite?.width || 0); maxHeight = Math.max(maxHeight, sprite?.height || 0); estimatedBytes += (sprite?.width || 0) * (sprite?.height || 0) * 4; }
      return { ...stats, size: cache.size, maxEntries, hitRate: total ? stats.hits / total : 0, maxWidth, maxHeight, estimatedBytes };
    }
  };
}
