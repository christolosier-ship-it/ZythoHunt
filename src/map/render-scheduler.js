export function createRenderScheduler(callback, raf = globalThis.requestAnimationFrame?.bind(globalThis) ?? (fn => setTimeout(() => fn(Date.now()), 16))) {
  const state = { frameRequested: false, pendingStaticRender: false, pendingDynamicRender: false, pendingHitLayerSync: false, reasons: new Set(), framesScheduled: 0, mergedRequests: 0 };
  function scheduleRender(reason = 'unknown', options = {}) {
    state.reasons.add(reason);
    if (options.static !== false) state.pendingStaticRender = true;
    if (options.dynamic) state.pendingDynamicRender = true;
    if (options.hitLayer) state.pendingHitLayerSync = true;
    if (state.frameRequested) { state.mergedRequests++; return; }
    state.frameRequested = true; state.framesScheduled++;
    raf(() => {
      const payload = { static: state.pendingStaticRender, dynamic: state.pendingDynamicRender, hitLayer: state.pendingHitLayerSync, reasons: [...state.reasons] };
      state.frameRequested = false; state.pendingStaticRender = false; state.pendingDynamicRender = false; state.pendingHitLayerSync = false; state.reasons.clear();
      callback?.(payload);
    });
  }
  return { state, scheduleRender };
}
