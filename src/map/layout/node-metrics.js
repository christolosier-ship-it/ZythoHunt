export const NODE_METRICS_VERSION = '0.4.3';
export const NODE_METRICS = {
  root: { medallionRadius: 190, medallionHeight: 380, textMaxWidth: 260, textMaxHeight: 56, margin: 34, stroke: 8, safety: 42 },
  universe: { medallionRadius: 125, medallionHeight: 250, textMaxWidth: 300, textMaxHeight: 82, margin: 30, stroke: 7, safety: 38 },
  family: { medallionRadius: 92, medallionHeight: 184, textMaxWidth: 280, textMaxHeight: 76, margin: 26, stroke: 6, safety: 34 },
  subfamily: { medallionRadius: 92, medallionHeight: 184, textMaxWidth: 250, textMaxHeight: 72, margin: 24, stroke: 5, safety: 32 },
  'style-group': { medallionRadius: 92, medallionHeight: 184, textMaxWidth: 230, textMaxHeight: 68, margin: 22, stroke: 5, safety: 30 },
  style: { medallionRadius: 68, medallionHeight: 136, textMaxWidth: 210, textMaxHeight: 64, margin: 20, stroke: 5, safety: 30 },
  'style-unknown': { medallionRadius: 48, medallionHeight: 96, textMaxWidth: 60, textMaxHeight: 54, margin: 20, stroke: 5, safety: 30 },
  'style-discovered': { medallionRadius: 62, medallionHeight: 124, textMaxWidth: 230, textMaxHeight: 72, margin: 22, stroke: 5, safety: 34 },
  'style-selected': { medallionRadius: 68, medallionHeight: 136, textMaxWidth: 250, textMaxHeight: 80, margin: 26, stroke: 7, safety: 40 }
};
export function getNodeMedallionRadius(node, state = 'unknown') {
  if (node?.visualLevel === 'root' || node?.id === 'beer' || node?.nodeType === 'root') return NODE_METRICS.root.medallionRadius;
  if (node?.visualLevel === 'fermentation' || node?.nodeType === 'universe' || node?.nodeType === 'fermentation') return NODE_METRICS.universe.medallionRadius;
  if (node?.functionalType !== 'capturable') return NODE_METRICS.family.medallionRadius;
  if (state === 'selected' || state === 'reveal-pending') return NODE_METRICS['style-selected'].medallionRadius;
  if (state === 'discovered' || state === 'explored') return NODE_METRICS['style-discovered'].medallionRadius;
  return NODE_METRICS['style-unknown'].medallionRadius;
}
export function getMaximumNodeMedallionRadius(node) {
  return node?.functionalType === 'capturable' ? NODE_METRICS['style-selected'].medallionRadius : getNodeMedallionRadius(node, 'structure');
}
export function metricForNode(node) { return node?.functionalType === 'capturable' ? NODE_METRICS['style-selected'] : (NODE_METRICS[node?.nodeType] || NODE_METRICS.family); }
export function collisionBoxFor(node, x, y) { const m = metricForNode(node); const w = Math.max(m.medallionRadius * 2 + m.stroke * 2, m.textMaxWidth) + m.margin * 2 + m.safety * 2; const h = m.medallionHeight + m.textMaxHeight + m.margin * 2 + m.safety * 2; return { minX: x - w / 2, minY: y - h / 2, maxX: x + w / 2, maxY: y + h / 2, width: w, height: h }; }
