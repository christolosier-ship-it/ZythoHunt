export function getLod(scale, previous = 1) { if (previous === 0 && scale < 0.58) return 0; if (previous === 1 && scale >= 0.50 && scale < 1.32) return 1; if (previous === 2 && scale >= 1.12) return 2; if (scale < 0.50) return 0; if (scale < 1.20) return 1; return 2; }
export function getLodProfile(lod) { return lod === 0 ? { details: 'compact', microbubbles: false, maxLines: 1, links: 'simple' } : lod === 1 ? { details: 'standard', microbubbles: false, maxLines: 3, links: 'standard' } : { details: 'rich', microbubbles: true, maxLines: 3, links: 'rich' }; }
export function shouldReduceDetail({ reducedMotion = false, isInteracting = false, hidden = false } = {}) { return reducedMotion || isInteracting || hidden; }
export const MAX_IDLE_ANIMATED_BUBBLES = 32;
