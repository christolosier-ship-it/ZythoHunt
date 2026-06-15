import { getNodeMedallionRadius, getMaximumNodeMedallionRadius } from './layout/node-metrics.js';
export function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
export function semanticLevel(scale) { if (scale < 0.18) return 'overview'; if (scale < 0.36) return 'structure'; if (scale < 0.72) return 'branch'; return 'detail'; }
export function getWorldRadius(node, state = 'unknown') { return getNodeMedallionRadius(node, state); }
export { getMaximumNodeMedallionRadius };
export function getApparentNodeRadius(node, state = 'unknown') { return getWorldRadius(node, state); }
export function getApparentStructureSize(node) { const r = getWorldRadius(node, 'structure'); return { width: r*2, height: r*2 }; }
export function getStructureShape(node) { return { kind: 'medallion', collisionRadius: getWorldRadius(node) }; }
export function getStructureLabelText(node) { return node.presentation?.labelLines || [node.shortName || node.name]; }
export function wrapNodeLabel(text, maxLines = 3) { const words=String(text??'').split(/\s+/).filter(Boolean); const lines=[]; let line=''; for(const w of words){ if((line+' '+w).trim().length>14&&line){lines.push(line); line=w;} else line=(line+' '+w).trim(); } if(line) lines.push(line); return lines.slice(0,maxLines); }
export function textSizeForLines(lines) { return lines.length > 1 ? 28 : 34; }
export function getFamilyClass() { return 'family-cyan'; }
export function getNodeVisualKind(node) { return node.functionalType === 'structure' ? 'glass-medallion' : 'style-bubble'; }
export function getWorldCollisionRadius(node, opts = {}) { return getWorldRadius(node, opts.state); }
