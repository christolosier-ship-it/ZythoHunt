export const NODE_METRICS_VERSION = '0.4.1';
export const NODE_METRICS = {
  root: { medallionRadius: 135, medallionHeight: 270, textMaxWidth: 260, textMaxHeight: 56, margin: 34, stroke: 8, safety: 42 },
  universe: { medallionRadius: 112, medallionHeight: 224, textMaxWidth: 300, textMaxHeight: 82, margin: 30, stroke: 7, safety: 38 },
  family: { medallionRadius: 92, medallionHeight: 184, textMaxWidth: 280, textMaxHeight: 76, margin: 26, stroke: 6, safety: 34 },
  subfamily: { medallionRadius: 76, medallionHeight: 152, textMaxWidth: 250, textMaxHeight: 72, margin: 24, stroke: 5, safety: 32 },
  'style-group': { medallionRadius: 66, medallionHeight: 132, textMaxWidth: 230, textMaxHeight: 68, margin: 22, stroke: 5, safety: 30 },
  style: { medallionRadius: 54, medallionHeight: 108, textMaxWidth: 210, textMaxHeight: 64, margin: 20, stroke: 5, safety: 30 },
  'style-unknown': { medallionRadius: 54, medallionHeight: 108, textMaxWidth: 60, textMaxHeight: 54, margin: 20, stroke: 5, safety: 30 },
  'style-discovered': { medallionRadius: 58, medallionHeight: 116, textMaxWidth: 230, textMaxHeight: 72, margin: 22, stroke: 5, safety: 34 },
  'style-selected': { medallionRadius: 64, medallionHeight: 128, textMaxWidth: 250, textMaxHeight: 80, margin: 26, stroke: 7, safety: 40 }
};
export function metricForNode(node) { return node?.functionalType === 'capturable' ? NODE_METRICS['style-selected'] : (NODE_METRICS[node?.nodeType] || NODE_METRICS.family); }
export function collisionBoxFor(node, x, y) { const m = metricForNode(node); const w = Math.max(m.medallionRadius * 2 + m.stroke * 2, m.textMaxWidth) + m.margin * 2 + m.safety * 2; const h = m.medallionHeight + m.textMaxHeight + m.margin * 2 + m.safety * 2; return { minX: x - w / 2, minY: y - h / 2, maxX: x + w / 2, maxY: y + h / 2, width: w, height: h }; }
