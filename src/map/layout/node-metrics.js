export const NODE_METRICS_VERSION = '0.4.4';
export const NODE_METRICS = {
  root: { medallionRadius: 190, medallionHeight: 380, textMaxWidth: 260, textMaxHeight: 56, margin: 18, stroke: 8, safety: 18 },
  universe: { medallionRadius: 125, medallionHeight: 250, textMaxWidth: 300, textMaxHeight: 82, margin: 18, stroke: 7, safety: 18 },
  family: { medallionRadius: 92, medallionHeight: 184, textMaxWidth: 280, textMaxHeight: 76, margin: 16, stroke: 6, safety: 16 },
  subfamily: { medallionRadius: 92, medallionHeight: 184, textMaxWidth: 250, textMaxHeight: 72, margin: 15, stroke: 5, safety: 15 },
  'style-group': { medallionRadius: 92, medallionHeight: 184, textMaxWidth: 230, textMaxHeight: 68, margin: 14, stroke: 5, safety: 14 },
  style: { medallionRadius: 68, medallionHeight: 136, textMaxWidth: 210, textMaxHeight: 64, margin: 12, stroke: 5, safety: 12 },
  'style-unknown': { medallionRadius: 48, medallionHeight: 96, textMaxWidth: 60, textMaxHeight: 54, margin: 12, stroke: 5, safety: 12 },
  'style-discovered': { medallionRadius: 62, medallionHeight: 124, textMaxWidth: 230, textMaxHeight: 72, margin: 14, stroke: 5, safety: 14 },
  'style-selected': { medallionRadius: 68, medallionHeight: 136, textMaxWidth: 250, textMaxHeight: 80, margin: 16, stroke: 7, safety: 16 }
};
export function getNodeMedallionRadius(node, state = 'unknown') {
  if (node?.visualLevel === 'root' || node?.id === 'beer' || node?.nodeType === 'root') return NODE_METRICS.root.medallionRadius;
  if (node?.visualLevel === 'fermentation' || node?.nodeType === 'universe' || node?.nodeType === 'fermentation') return NODE_METRICS.universe.medallionRadius;
  if (node?.functionalType !== 'capturable') return NODE_METRICS.family.medallionRadius;
  if (state === 'selected' || state === 'reveal-pending') return NODE_METRICS['style-selected'].medallionRadius;
  if (state === 'discovered' || state === 'explored') return NODE_METRICS['style-discovered'].medallionRadius;
  return NODE_METRICS['style-unknown'].medallionRadius;
}
export function getMaximumNodeMedallionRadius(node) { return node?.functionalType === 'capturable' ? NODE_METRICS['style-selected'].medallionRadius : getNodeMedallionRadius(node, 'structure'); }
export function metricForNode(node) { return node?.functionalType === 'capturable' ? NODE_METRICS['style-selected'] : (NODE_METRICS[node?.nodeType] || NODE_METRICS.family); }
function baseBox(node, x, y, extra = 0) { const m = metricForNode(node); const w = Math.max(m.medallionRadius * 2 + m.stroke * 2, m.textMaxWidth) + m.margin * 2 + m.safety * 2 + extra * 2; const h = m.medallionHeight + m.textMaxHeight + m.margin * 2 + m.safety * 2 + extra * 2; return { minX: x - w / 2, minY: y - h / 2, maxX: x + w / 2, maxY: y + h / 2, width: w, height: h }; }
export function visualBoxFor(node, x, y) { return baseBox(node, x, y, 0); }
export function collisionBoxFor(node, x, y) { const extra = node?.nodeType === 'root' ? 34 : node?.nodeType === 'universe' ? 28 : node?.functionalType === 'capturable' ? 20 : 24; return baseBox(node, x, y, extra); }
export function routingObstacleBoxFor(node, x, y) { const r = 1; return { minX:x-r, minY:y-r, maxX:x+r, maxY:y+r, width:r*2, height:r*2 }; }
export function cullingBoxFor(node, x, y) { return baseBox(node, x, y, 36); }
