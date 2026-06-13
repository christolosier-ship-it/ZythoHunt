import { visibleWorldRect } from './coordinate-transform.js';
export function expandRect(r, margin = 160) { return { minX: r.minX - margin, minY: r.minY - margin, maxX: r.maxX + margin, maxY: r.maxY + margin }; }
export function pointInRect(p, r) { return p.x >= r.minX && p.x <= r.maxX && p.y >= r.minY && p.y <= r.maxY; }
export function segmentIntersectsRect(a, b, r) { if (pointInRect(a, r) || pointInRect(b, r)) return true; return Math.min(a.x, b.x) <= r.maxX && Math.max(a.x, b.x) >= r.minX && Math.min(a.y, b.y) <= r.maxY && Math.max(a.y, b.y) >= r.minY; }
export function getNodesInViewport(nodes, viewport, screenSize, margin = 160) { const rect = expandRect(visibleWorldRect(viewport, screenSize), margin); return nodes.filter(n => pointInRect(n.position, rect)); }
export function getLinksInViewport(links, nodeById, viewport, screenSize, margin = 160) { const rect = expandRect(visibleWorldRect(viewport, screenSize), margin); return links.filter(l => { const a = nodeById.get(l.sourceId); const b = nodeById.get(l.targetId); return a && b && segmentIntersectsRect(a.position, b.position, rect); }); }
