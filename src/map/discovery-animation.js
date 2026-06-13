export function createDiscoveryController({ clock = globalThis, duration = 1500 } = {}) {
  let token = 0;
  let timer = null;
  const clear = () => { if (timer !== null) clock.clearTimeout(timer); timer = null; };
  function cancel() { token += 1; clear(); return token; }
  function preview(id, handlers, options = {}) {
    const my = cancel();
    handlers.onStart?.(id);
    if (options.reducedMotion) { handlers.onName?.(id); handlers.onFinish?.(id); return { token: my, cancel }; }
    timer = clock.setTimeout(() => { if (my !== token) return; handlers.onName?.(id); timer = clock.setTimeout(() => { if (my !== token) return; handlers.onFinish?.(id); timer = null; }, Math.max(0, duration * .45)); }, Math.max(0, duration * .55));
    return { token: my, cancel };
  }
  return { preview, cancel, get activeToken() { return token; } };
}
