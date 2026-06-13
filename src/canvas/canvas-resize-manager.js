export function createCanvasResizeManager(root, canvases, options = {}) {
  const maxDpr = options.maxDpr ?? 2;
  const state = { cssWidth: 0, cssHeight: 0, pixelWidth: 0, pixelHeight: 0, dpr: 1, needsResize: true, canvasResizeCount: 0 };
  const read = () => { const r = root.getBoundingClientRect(); const dpr = Math.min(globalThis.devicePixelRatio || 1, maxDpr); const cssWidth = Math.max(1, Math.round(r.width)); const cssHeight = Math.max(1, Math.round(r.height)); return { cssWidth, cssHeight, dpr, pixelWidth: Math.round(cssWidth * dpr), pixelHeight: Math.round(cssHeight * dpr) }; };
  function markIfChanged() { const next = read(); if (next.cssWidth !== state.cssWidth || next.cssHeight !== state.cssHeight || next.dpr !== state.dpr) { Object.assign(state, next, { needsResize: true }); return true; } return false; }
  function applyIfNeeded() { markIfChanged(); if (!state.needsResize) return false; for (const c of canvases) { if (c.width !== state.pixelWidth) c.width = state.pixelWidth; if (c.height !== state.pixelHeight) c.height = state.pixelHeight; if (c.style.width !== `${state.cssWidth}px`) c.style.width = `${state.cssWidth}px`; if (c.style.height !== `${state.cssHeight}px`) c.style.height = `${state.cssHeight}px`; c.getContext('2d')?.setTransform(state.dpr, 0, 0, state.dpr, 0, 0); } state.needsResize = false; state.canvasResizeCount++; return true; }
  let observer = null; if (typeof ResizeObserver === 'function') { observer = new ResizeObserver(() => { if (markIfChanged()) options.onResizeNeeded?.(); }); observer.observe(root); }
  markIfChanged();
  return { state, markIfChanged, applyIfNeeded, disconnect: () => observer?.disconnect() };
}
