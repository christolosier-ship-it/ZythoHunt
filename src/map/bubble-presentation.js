import { getNodeMedallionRadius, getMaximumNodeMedallionRadius, layoutMetricsForNode, STYLE_BASE_RADIUS } from './layout/node-metrics.js';
export const CAMERA_MIN_SCALE = 0.8;
export const CAMERA_DEFAULT_SCALE = 1;
export const CAMERA_MAX_SCALE = 1.2;
export const CAMERA_STEP = 0.1;
export function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
export function getWorldRadius(node, state = 'unknown') { return getNodeMedallionRadius(node, state); }
export { getMaximumNodeMedallionRadius, STYLE_BASE_RADIUS };
export function getApparentNodeRadius(node, state = 'unknown') { return getWorldRadius(node, state); }
export function getApparentStructureSize(node) { const r = getWorldRadius(node, 'structure'); return { width: r*2, height: r*2 }; }
export function getStructureShape(node) { return { kind: 'medallion', collisionRadius: layoutMetricsForNode(node).collisionRadius }; }
export function getStructureLabelText(node) { return node.presentation?.labelLines || wrapNodeLabel(node.shortName || node.name, 3); }
export function wrapNodeLabel(text, maxLines = 3) { const words=String(text??'').split(/\s+/).filter(Boolean); const lines=[]; let line=''; const max=15; for(const w of words){ const next=(line+' '+w).trim(); if(next.length>max&&line){lines.push(line); line=w;} else line=next; } if(line) lines.push(line); return lines.slice(0,maxLines); }
export function textSizeForLines(lines, radius=72) { return Math.max(10, Math.min(radius * (lines.length > 2 ? .16 : lines.length > 1 ? .18 : .22), 30)); }
export function getFamilyClass() { return 'family-cyan'; }
export function getNodeVisualKind(node) { return node.functionalType === 'structure' ? 'glass-medallion' : 'style-bubble'; }
export function getWorldCollisionRadius(node) { return layoutMetricsForNode(node).collisionRadius; }
