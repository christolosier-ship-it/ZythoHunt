export const NODE_METRICS_VERSION = '0.5.0';
export const STYLE_BASE_RADIUS = 72;
export const BUBBLE_RATIOS = Object.freeze({ unknown: 0.8, discovered: 1, selected: 1.2, structure: 1.5, beer: 2 });
export const NODE_METRICS = Object.freeze({
  style: { visualRadius: STYLE_BASE_RADIUS, layoutRadius: STYLE_BASE_RADIUS * 1.2, collisionRadius: 96, routingRadius: 92, cullingRadius: STYLE_BASE_RADIUS * 1.2 + 20 },
  'style-unknown': { visualRadius: STYLE_BASE_RADIUS * 0.8, layoutRadius: STYLE_BASE_RADIUS * 1.2, collisionRadius: 96, routingRadius: 92, cullingRadius: STYLE_BASE_RADIUS * 1.2 + 20 },
  'style-discovered': { visualRadius: STYLE_BASE_RADIUS, layoutRadius: STYLE_BASE_RADIUS * 1.2, collisionRadius: 96, routingRadius: 92, cullingRadius: STYLE_BASE_RADIUS * 1.2 + 20 },
  'style-selected': { visualRadius: STYLE_BASE_RADIUS * 1.2, layoutRadius: STYLE_BASE_RADIUS * 1.2, collisionRadius: 96, routingRadius: 92, cullingRadius: STYLE_BASE_RADIUS * 1.2 + 20 },
  structure: { visualRadius: STYLE_BASE_RADIUS * 1.5, layoutRadius: STYLE_BASE_RADIUS * 1.5, collisionRadius: 120, routingRadius: 114, cullingRadius: STYLE_BASE_RADIUS * 1.5 + 20 },
  beer: { visualRadius: STYLE_BASE_RADIUS * 2, layoutRadius: STYLE_BASE_RADIUS * 2, collisionRadius: 160, routingRadius: 150, cullingRadius: STYLE_BASE_RADIUS * 2 + 20 }
});
function kind(node, state='unknown') { if (node?.id === 'beer' || node?.visualLevel === 'root' || node?.nodeType === 'root') return 'beer'; if (node?.functionalType !== 'capturable') return 'structure'; if (state === 'selected' || state === 'reveal-pending') return 'style-selected'; if (state === 'discovered' || state === 'explored') return 'style-discovered'; return 'style-unknown'; }
export function metricsForNode(node, state='unknown') { return NODE_METRICS[kind(node,state)] || NODE_METRICS.structure; }
export function layoutMetricsForNode(node) { return node?.id === 'beer' ? NODE_METRICS.beer : node?.functionalType === 'capturable' ? NODE_METRICS.style : NODE_METRICS.structure; }
export function getNodeMedallionRadius(node, state = 'unknown') { return metricsForNode(node,state).visualRadius; }
export function getMaximumNodeMedallionRadius(node) { return layoutMetricsForNode(node).layoutRadius; }
export function metricForNode(node) { return layoutMetricsForNode(node); }
function circleBox(x,y,r){ return { minX:x-r, minY:y-r, maxX:x+r, maxY:y+r, width:r*2, height:r*2 }; }
export function visualBoxFor(node,x,y,state='unknown'){ return circleBox(x,y,metricsForNode(node,state).visualRadius); }
export function collisionBoxFor(node,x,y){ return circleBox(x,y,layoutMetricsForNode(node).collisionRadius); }
export function routingObstacleBoxFor(node,x,y){ return circleBox(x,y,layoutMetricsForNode(node).routingRadius); }
export function cullingBoxFor(node,x,y){ return circleBox(x,y,layoutMetricsForNode(node).cullingRadius); }
