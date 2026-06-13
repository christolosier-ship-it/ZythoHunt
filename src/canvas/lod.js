export function getLod(scale, previous) { if (previous === 0 && scale < 0.6) return 0; if (previous === 1 && scale >= 0.5 && scale < 1.3) return 1; if (previous === 2 && scale >= 1.1) return 2; if (scale < 0.55) return 0; if (scale < 1.2) return 1; return 2; }
export function shouldReduceDetail({ reducedMotion = false, isInteracting = false, hidden = false } = {}) { return reducedMotion || isInteracting || hidden; }
export const MAX_IDLE_ANIMATED_BUBBLES = 32;
