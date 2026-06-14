import { MAX_ICON_CACHE_ENTRIES, SOURCE_RESOLUTIONS } from './icon-recipes.js';
const cache = new Map();
export function canonicalResolution(size){ return SOURCE_RESOLUTIONS.find(r=>size<=r) || SOURCE_RESOLUTIONS.at(-1); }
export function getIconCacheStats(){ return { entries: cache.size, maxEntries: MAX_ICON_CACHE_ENTRIES, resolutions: SOURCE_RESOLUTIONS.slice() }; }
export function getCachedIcon(key, factory){ if(cache.has(key)){ const v=cache.get(key); cache.delete(key); cache.set(key,v); return v; } const v=factory(); cache.set(key,v); while(cache.size>MAX_ICON_CACHE_ENTRIES) cache.delete(cache.keys().next().value); return v; }
export function clearIconCache(){ cache.clear(); }
