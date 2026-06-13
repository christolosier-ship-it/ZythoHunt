const MIN_SCALE = 0.25;
const MAX_SCALE = 3;
const DEFAULT_PADDING = 160;

export function clientPointToSvg(svg, clientX, clientY) {
  if (typeof svg.createSVGPoint === 'function' && typeof svg.getScreenCTM === 'function') {
    const matrix = svg.getScreenCTM();
    if (matrix) {
      const point = svg.createSVGPoint();
      point.x = clientX;
      point.y = clientY;
      return point.matrixTransform(matrix.inverse());
    }
  }
  const rect = svg.getBoundingClientRect();
  const viewBox = svg.viewBox.baseVal;
  return {
    x: viewBox.x + ((clientX - rect.left) / rect.width) * viewBox.width,
    y: viewBox.y + ((clientY - rect.top) / rect.height) * viewBox.height
  };
}

export function computeVisibleBounds(visibleNodes, visibleLinks, nodeIndex, options = {}) {
  const nodeRadius = options.nodeRadius ?? 64;
  const labelPadding = options.labelPadding ?? 110;
  const margin = options.margin ?? DEFAULT_PADDING;
  const points = [];

  for (const node of visibleNodes) {
    points.push(node.position);
  }

  for (const link of visibleLinks) {
    const source = nodeIndex.get(link.sourceId);
    const target = nodeIndex.get(link.targetId);
    if (source) points.push(source.position);
    if (target) points.push(target.position);
    for (const point of link.points ?? []) points.push(point);
  }

  if (!points.length) return null;

  const pad = nodeRadius + labelPadding + margin;
  const xs = points.map(point => point.x);
  const ys = points.map(point => point.y);
  const minX = Math.min(...xs) - pad;
  const minY = Math.min(...ys) - pad;
  const maxX = Math.max(...xs) + pad;
  const maxY = Math.max(...ys) + pad;

  return { minX, minY, maxX, maxY, width: maxX - minX, height: maxY - minY };
}

export function createViewport(svg, viewport, options = {}) {
  const state = { x: 0, y: 0, scale: 1 };
  const pointers = new Map();
  let lastPinchDistance = 0;
  let interactionTimer = null;
  const markInteraction = () => { options.onInteractionChange?.(true); clearTimeout(interactionTimer); interactionTimer = setTimeout(() => options.onInteractionChange?.(false), 180); };

  const clampScale = value => Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));
  const apply = () => viewport.setAttribute('transform', `translate(${state.x} ${state.y}) scale(${state.scale})`);

  function zoomAt(factor, svgPoint) {
    const previousScale = state.scale;
    state.scale = clampScale(state.scale * factor);
    const ratio = state.scale / previousScale;
    state.x = svgPoint.x - (svgPoint.x - state.x) * ratio;
    state.y = svgPoint.y - (svgPoint.y - state.y) * ratio;
    apply();
    markInteraction();
  }

  function fitBounds(bounds) {
    if (!bounds) return;
    const viewBox = svg.viewBox.baseVal;
    state.scale = clampScale(Math.min(viewBox.width / bounds.width, viewBox.height / bounds.height));
    state.x = (viewBox.width - (bounds.minX + bounds.maxX) * state.scale) / 2;
    state.y = (viewBox.height - (bounds.minY + bounds.maxY) * state.scale) / 2;
    apply();
  }

  function releasePointer(pointerId) {
    pointers.delete(pointerId);
    lastPinchDistance = 0;
    if (svg.hasPointerCapture?.(pointerId)) svg.releasePointerCapture(pointerId);
  }

  svg.addEventListener('wheel', event => {
    event.preventDefault();
    const point = clientPointToSvg(svg, event.clientX, event.clientY);
    zoomAt(event.deltaY < 0 ? 1.12 : 0.88, point);
  }, { passive: false });

  svg.addEventListener('pointerdown', event => {
    svg.setPointerCapture?.(event.pointerId);
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  });

  svg.addEventListener('pointermove', event => {
    if (!pointers.has(event.pointerId)) return;
    const previous = pointers.get(event.pointerId);
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.size === 1) {
      const viewBox = svg.viewBox.baseVal;
      const rect = svg.getBoundingClientRect();
      state.x += ((event.clientX - previous.x) / rect.width) * viewBox.width;
      state.y += ((event.clientY - previous.y) / rect.height) * viewBox.height;
      apply();
      markInteraction();
      return;
    }

    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      const center = clientPointToSvg(svg, (a.x + b.x) / 2, (a.y + b.y) / 2);
      if (lastPinchDistance) zoomAt(distance / lastPinchDistance, center);
      markInteraction();
      lastPinchDistance = distance;
    }
  });

  svg.addEventListener('pointerup', event => releasePointer(event.pointerId));
  svg.addEventListener('pointercancel', event => releasePointer(event.pointerId));
  svg.addEventListener('lostpointercapture', event => releasePointer(event.pointerId));

  apply();

  return {
    state,
    apply,
    zoomAt,
    fitBounds,
    zoomIn: () => zoomAt(1.2, { x: svg.viewBox.baseVal.width / 2, y: svg.viewBox.baseVal.height / 2 }),
    zoomOut: () => zoomAt(0.8, { x: svg.viewBox.baseVal.width / 2, y: svg.viewBox.baseVal.height / 2 }),
    recenter: () => {
      state.x = 0;
      state.y = 0;
      state.scale = 1;
      apply();
    }
  };
}
