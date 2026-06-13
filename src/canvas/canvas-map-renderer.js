import { computeVisibleMapState } from '../domain/map-visibility.js';
import { resolveNodeVisualState } from '../domain/node-visual-state.js';
import { getNodesInViewport, getLinksInViewport, segmentIntersectsRect } from './culling.js';
import { fitBounds, pan, visibleWorldRect, worldToScreen, zoomAt } from './coordinate-transform.js';
import { getLod } from './lod.js';
import { createBubbleSprite } from './sprite-factory.js';
import { createSpriteCache } from './sprite-cache.js';
import { drawCenteredLabel } from './text-renderer.js';
import { createCanvasResizeManager } from './canvas-resize-manager.js';
import { readCanvasTheme } from './canvas-theme.js';
import { computeVisibleBounds } from '../map/viewport.js';
import { getApparentNodeRadius, getNodeVisualKind, getStructureLabelText, getStructureShape } from '../map/bubble-presentation.js';

const HOME_STRUCTURE_IDS = ['beer', 'fermentation-high', 'fermentation-low', 'fermentation-spontaneous', 'fermentation-mixed-wild', 'family-pale-ale-ipa', 'family-wheat-beer', 'family-pale-lager'];
const FAMILY_IDS = ['family-pale-ale-ipa', 'family-wheat-beer', 'family-pale-lager'];
const STRUCTURE_FOCUS_MAX_SCALE = 1.25;
const REVEAL_FOCUS_MAX_SCALE = 1.7;
const FIT_MIN_SCALE = 0.08;

function descendantsOf(id, nodes) {
  const byParent = new Map();
  for (const node of nodes) {
    if (!node.parentId) continue;
    if (!byParent.has(node.parentId)) byParent.set(node.parentId, []);
    byParent.get(node.parentId).push(node);
  }
  const out = [];
  const stack = [...(byParent.get(id) || [])];
  while (stack.length) {
    const node = stack.shift();
    out.push(node);
    stack.push(...(byParent.get(node.id) || []));
  }
  return out;
}

export function getDescendantBounds(structureId, nodes, options = {}) {
  const node = nodes.find(n => n.id === structureId);
  if (!node) return null;
  const includeSelf = options.includeSelf ?? true;
  const scale = options.scale ?? 1;
  const padding = options.padding ?? 180;
  const items = includeSelf ? [node, ...descendantsOf(structureId, nodes)] : descendantsOf(structureId, nodes);
  if (!items.length) return null;
  let minX = Infinity; let minY = Infinity; let maxX = -Infinity; let maxY = -Infinity;
  for (const item of items) {
    let halfW; let halfH;
    if (item.functionalType === 'structure') {
      const shape = getStructureShape(item);
      halfW = shape.width / 2 + 34;
      halfH = shape.height / 2 + 32;
    } else {
      const r = getApparentNodeRadius(item, 'discovered', 2, scale) / Math.max(scale, 0.001);
      halfW = r + 54;
      halfH = r + 40;
    }
    minX = Math.min(minX, item.position.x - halfW);
    maxX = Math.max(maxX, item.position.x + halfW);
    minY = Math.min(minY, item.position.y - halfH);
    maxY = Math.max(maxY, item.position.y + halfH);
  }
  return { minX: minX - padding, minY: minY - padding, maxX: maxX + padding, maxY: maxY + padding, width: maxX - minX + padding * 2, height: maxY - minY + padding * 2 };
}

function familyBounds(familyId, nodes) {
  return getDescendantBounds(familyId, nodes, { padding: 160, includeSelf: true, scale: 1 });
}

function drawRoundedRectPath(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

export function detectLayoutCollisions(nodes, { scale = 1 } = {}) {
  const structures = nodes.filter(n => n.functionalType === 'structure');
  const styles = nodes.filter(n => n.functionalType === 'capturable');
  const structureCollisions = [];
  const styleCollisions = [];
  const labelCollisions = [];
  const checkPairs = (items, sink, radiusOf) => {
    for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) {
      const a = items[i]; const b = items[j];
      const ra = radiusOf(a); const rb = radiusOf(b);
      const d = Math.hypot(a.position.x - b.position.x, a.position.y - b.position.y);
      if (d < ra + rb) sink.push({ a: a.id, b: b.id, overlap: Math.round((ra + rb - d) * 10) / 10 });
    }
  };
  checkPairs(structures, structureCollisions, n => getStructureShape(n).collisionRadius);
  for (const familyId of FAMILY_IDS) {
    const ids = new Set(descendantsOf(familyId, nodes).map(n => n.id));
    checkPairs(styles.filter(n => ids.has(n.id)), styleCollisions, n => getApparentNodeRadius(n, 'discovered', 2, scale) / scale + 22);
  }
  checkPairs(structures, labelCollisions, n => {
    const shape = getStructureShape(n);
    return Math.max(shape.width / 2, shape.height / 2) + 16;
  });
  return { structureCollisions, styleCollisions, labelCollisions, warnings: [] };
}

export function createCanvasMapRenderer(root, data, options = {}) {
  const staticCanvas = root.querySelector('.map-static-canvas');
  const dynamicCanvas = root.querySelector('.map-dynamic-canvas');
  const hitLayer = root.querySelector('.map-accessibility-layer');
  const ctx = staticCanvas.getContext('2d');
  const dctx = dynamicCanvas.getContext('2d');
  const nodeIndex = new Map(data.nodes.map(n => [n.id, n]));
  const theme = readCanvasTheme();
  const spriteCache = createSpriteCache(createBubbleSprite);
  const viewport = { x: 0, y: 0, scale: 1 };
  let size = { width: 1, height: 1 }; let dpr = 1; let lod = 1; let lastStats = {};
  const diagnostics = { ids: false, coords: false, collisionRadii: false, labelBounds: false, ghostLinks: true, territories: true, descendantRects: false, homeBounds: false, fitBounds: false, selectedFamilyId: 'family-pale-ale-ipa' };
  const resizeManager = createCanvasResizeManager(root, [staticCanvas, dynamicCanvas], { onResizeNeeded: () => root.dispatchEvent(new CustomEvent('zytho-map-change')) });

  function resize() {
    const changed = resizeManager.applyIfNeeded();
    size = { width: resizeManager.state.cssWidth, height: resizeManager.state.cssHeight };
    dpr = resizeManager.state.dpr;
    return changed;
  }

  function linkMode(link, state, discovered) {
    const a = nodeIndex.get(link.sourceId); const b = nodeIndex.get(link.targetId);
    const structural = a?.functionalType === 'structure' && b?.functionalType === 'structure';
    if (structural) return 'structure';
    if (discovered.has(link.sourceId) || discovered.has(link.targetId) || state.revealedPrimaryLinkIds?.has(link.id) || state.revealedSecondaryLinkIds?.has(link.id)) return 'revealed';
    return 'ghost';
  }

  function drawLink(link, mode = 'ghost') {
    const a = nodeIndex.get(link.sourceId); const b = nodeIndex.get(link.targetId);
    if (!a || !b) return;
    if (mode === 'ghost' && lod === 0 && a.functionalType !== 'structure' && b.functionalType !== 'structure' && a.parentId !== b.id && b.parentId !== a.id) return;
    const as = worldToScreen(a.position, viewport); const bs = worldToScreen(b.position, viewport); const mx = (as.x + bs.x) / 2;
    ctx.save();
    ctx.strokeStyle = mode === 'revealed' ? theme.links.active : mode === 'structure' ? theme.links.primary : '#8f7040';
    ctx.globalAlpha = mode === 'ghost' ? (lod === 0 ? 0.08 : lod === 1 ? 0.12 : 0.16) : mode === 'structure' ? 0.62 : 0.9;
    ctx.lineWidth = mode === 'revealed' ? 4 : mode === 'structure' ? 2.6 : 1.2;
    ctx.setLineDash(mode === 'ghost' ? [5, 9] : []);
    ctx.beginPath(); ctx.moveTo(as.x, as.y); ctx.bezierCurveTo(mx, as.y, mx, bs.y, bs.x, bs.y); ctx.stroke();
    ctx.restore();
  }

  function drawStructureLabel(node, p) {
    const lines = getStructureLabelText(node);
    const shape = getStructureShape(node);
    ctx.save();
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillStyle = ['lager', 'wheat'].includes(node.visualFamily) ? '#2d2114' : '#fff8df';
    lines.forEach((line, i) => {
      const primary = i === 0;
      ctx.font = `${primary ? 800 : 650} ${primary ? 15 : 11}px ui-rounded, system-ui, sans-serif`;
      ctx.fillText(line, p.x, p.y + (i - (lines.length - 1) / 2) * (shape.kind === 'root-medallion' ? 20 : 17));
    });
    ctx.restore();
  }

  function drawNode(node, presentation, discovered) {
    const state = resolveNodeVisualState(node, presentation, discovered);
    const p = worldToScreen(node.position, viewport);
    const radius = getApparentNodeRadius(node, state, lod, viewport.scale);
    const family = node.visualFamily || 'core';
    const kind = getNodeVisualKind(node);
    const sprite = spriteCache.get({ type: node.functionalType, nodeType: node.nodeType, kind, family, state, size: Math.round(radius * 2), lod, dpr, themeVersion: theme.version });
    ctx.drawImage(sprite, p.x - sprite.width / dpr / 2, p.y - sprite.height / dpr / 2, sprite.width / dpr, sprite.height / dpr);
    if (node.functionalType === 'structure') {
      drawStructureLabel(node, p);
      return;
    }
    const unknown = state === 'unknown';
    const showQuestion = !unknown || radius >= 14;
    const label = unknown ? (showQuestion ? '?' : '') : (node.name || node.shortName);
    if (label) drawCenteredLabel(ctx, label, p.x, p.y, Math.max(8, radius), { lod, shortText: node.shortName || node.name, fillStyle: label === '?' ? theme.text.question : theme.text.primary });
  }

  function drawTerritories() {
    if (!diagnostics.territories) return;
    const visible = visibleWorldRect(viewport, size);
    const fills = { 'family-pale-ale-ipa': '#d88718', 'family-wheat-beer': '#c9ae56', 'family-pale-lager': '#d49a24' };
    for (const familyId of FAMILY_IDS) {
      const b = familyBounds(familyId, data.nodes);
      if (!b || !segmentIntersectsRect({ x: b.minX, y: b.minY }, { x: b.maxX, y: b.maxY }, visible)) continue;
      const a = worldToScreen({ x: b.minX, y: b.minY }, viewport);
      const c = worldToScreen({ x: b.maxX, y: b.maxY }, viewport);
      ctx.save();
      ctx.globalAlpha = lod === 0 ? 0.07 : 0.1;
      ctx.fillStyle = fills[familyId] || '#d88718';
      drawRoundedRectPath(ctx, a.x, a.y, c.x - a.x, c.y - a.y, 44);
      ctx.fill();
      ctx.globalAlpha = 0.14;
      ctx.strokeStyle = fills[familyId] || '#d88718';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
    }
  }

  function syncHitLayer(nodes, presentation, discovered, onSelect) {
    if (!hitLayer._targetsByStyleId) hitLayer._targetsByStyleId = new Map();
    const seen = new Set();
    for (const n of nodes) {
      if (n.functionalType !== 'capturable' || !discovered.has(n.id)) continue;
      const p = worldToScreen(n.position, viewport);
      const radius = getApparentNodeRadius(n, resolveNodeVisualState(n, presentation, discovered), lod, viewport.scale);
      seen.add(n.id);
      let b = hitLayer._targetsByStyleId.get(n.id);
      if (!b) { b = document.createElement('button'); b.className = 'map-hit-button'; b.onclick = () => onSelect?.(n.id); hitLayer._targetsByStyleId.set(n.id, b); hitLayer.append(b); }
      const hitSize = Math.max(radius * 2, 44);
      b.style.left = `${p.x - hitSize / 2}px`; b.style.top = `${p.y - hitSize / 2}px`; b.style.width = `${hitSize}px`; b.style.height = `${hitSize}px`;
      b.hidden = viewport.scale < 0.22;
      b.setAttribute('aria-label', `Sélectionner le style ${n.name}`);
      b.setAttribute('aria-pressed', String(presentation.selectedId === n.id));
    }
    for (const [id, button] of hitLayer._targetsByStyleId) if (!seen.has(id)) button.hidden = true;
  }

  function drawDiagnostics(mapState) {
    const collisions = detectLayoutCollisions(data.nodes, { scale: viewport.scale });
    const show = diagnostics.ids || diagnostics.coords || diagnostics.collisionRadii || diagnostics.labelBounds || diagnostics.descendantRects || diagnostics.homeBounds || diagnostics.fitBounds;
    if (!show) return collisions;
    ctx.save();
    ctx.font = '11px ui-monospace, monospace';
    for (const node of data.nodes) {
      const p = worldToScreen(node.position, viewport);
      if (diagnostics.collisionRadii) {
        const r = (node.functionalType === 'structure' ? getStructureShape(node).collisionRadius : getApparentNodeRadius(node, 'discovered', 2, viewport.scale) / viewport.scale + 22) * viewport.scale;
        ctx.strokeStyle = '#c62828aa'; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
      }
      if (diagnostics.labelBounds && node.functionalType === 'structure') {
        const shape = getStructureShape(node);
        const w = (shape.width + 28) * viewport.scale;
        const h = (shape.height + 22) * viewport.scale;
        ctx.strokeStyle = '#7b3fbd99';
        ctx.strokeRect(p.x - w / 2, p.y - h / 2, w, h);
      }
      if (diagnostics.ids || diagnostics.coords) {
        ctx.fillStyle = '#2b2118';
        ctx.fillText(`${diagnostics.ids ? node.id : ''}${diagnostics.coords ? ` (${node.position.x},${node.position.y})` : ''}`, p.x + 8, p.y - 8);
      }
    }
    const rects = [];
    if (diagnostics.descendantRects) rects.push(getDescendantBounds(diagnostics.selectedFamilyId, data.nodes));
    if (diagnostics.homeBounds) rects.push(computeHomeBounds());
    if (diagnostics.fitBounds) rects.push(computeVisibleBounds(mapState.visibleNodes, data.links, nodeIndex));
    ctx.strokeStyle = '#185abdcc'; ctx.lineWidth = 2; ctx.setLineDash([8, 6]);
    for (const b of rects.filter(Boolean)) {
      const a = worldToScreen({ x: b.minX, y: b.minY }, viewport); const c = worldToScreen({ x: b.maxX, y: b.maxY }, viewport);
      ctx.strokeRect(a.x, a.y, c.x - a.x, c.y - a.y);
    }
    ctx.restore();
    return collisions;
  }

  function render(discoveredIds, presentation = {}, handlers = {}) {
    const resized = resize(); const start = performance.now();
    lod = getLod(viewport.scale, lod);
    const pending = presentation.revealPendingId ? new Set([...discoveredIds, presentation.revealPendingId]) : discoveredIds;
    const state = computeVisibleMapState(data.nodes, data.links, pending);
    const linkSet = lod === 0 ? data.links.filter(l => nodeIndex.get(l.sourceId)?.functionalType === 'structure' || nodeIndex.get(l.targetId)?.functionalType === 'structure' || l.linkType !== 'related-style') : data.links;
    const culledNodes = getNodesInViewport(state.visibleNodes, viewport, size, 240);
    const culledLinks = getLinksInViewport(linkSet, nodeIndex, viewport, size, 260);
    ctx.clearRect(0, 0, size.width, size.height);
    drawTerritories();
    culledLinks.forEach(l => drawLink(l, linkMode(l, state, pending)));
    culledNodes.forEach(n => drawNode(n, presentation, pending));
    syncHitLayer(culledNodes, presentation, discoveredIds, handlers.onSelect);
    const collisions = drawDiagnostics(state);
    dctx.clearRect(0, 0, size.width, size.height);
    lastStats = { totalNodes: state.visibleNodes.length, viewportNodes: culledNodes.length, drawnNodes: culledNodes.length, drawnLinks: culledLinks.length, htmlButtons: hitLayer.children.length, dpr, lod, staticRenderMs: performance.now() - start, dynamicRenderCount: (lastStats.dynamicRenderCount || 0) + (presentation.revealPendingId || presentation.selectedId ? 1 : 0), canvasResizeCount: resizeManager.state.canvasResizeCount, resized, dynamicLoopActive: Boolean(presentation.revealPendingId || presentation.selectedId), sprites: spriteCache.stats(), collisions };
    return { ...state, visibleLinks: linkSet, performance: lastStats };
  }

  function computeHomeBounds() {
    return getDescendantBounds('beer', data.nodes.filter(n => HOME_STRUCTURE_IDS.includes(n.id) || n.parentId === 'family-pale-ale-ipa' || n.parentId === 'family-wheat-beer' || n.parentId === 'family-pale-lager'), { padding: 220, includeSelf: true, scale: 1 });
  }

  function fitState(state) {
    const bounds = computeVisibleBounds(state.visibleNodes, data.links, nodeIndex, { nodeRadius: 80, labelPadding: 120, margin: 140 });
    Object.assign(viewport, fitBounds(bounds, size, 54, { min: FIT_MIN_SCALE, max: 0.62 }, options.getInsets?.() || {}));
  }

  function focusNode(id) {
    const n = nodeIndex.get(id); if (!n) return;
    const isStructure = n.functionalType === 'structure';
    const bounds = isStructure ? (n.id === 'beer' ? computeHomeBounds() : getDescendantBounds(id, data.nodes, { padding: n.nodeType === 'family' ? 210 : 260, scale: 1 })) : getDescendantBounds(n.parentId, data.nodes, { padding: 180, scale: 1 });
    Object.assign(viewport, fitBounds(bounds, size, 48, { min: FIT_MIN_SCALE, max: isStructure ? STRUCTURE_FOCUS_MAX_SCALE : REVEAL_FOCUS_MAX_SCALE }, options.getInsets?.() || {}));
  }

  let dragging = null; const pointers = new Map(); let pinch = null; const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
  root.querySelector('.zythosphere-viewport')?.addEventListener('pointerdown', e => { pointers.set(e.pointerId, { x: e.clientX, y: e.clientY }); dragging = { x: e.clientX, y: e.clientY }; if (pointers.size === 2) { const [a, b] = [...pointers.values()]; const r = root.getBoundingClientRect(); pinch = { distance: distance(a, b), scale: viewport.scale, center: { x: (a.x + b.x) / 2 - r.left, y: (a.y + b.y) / 2 - r.top } }; } root.setPointerCapture?.(e.pointerId); });
  root.querySelector('.zythosphere-viewport')?.addEventListener('pointermove', e => { if (!pointers.has(e.pointerId)) return; pointers.set(e.pointerId, { x: e.clientX, y: e.clientY }); if (pointers.size === 2 && pinch) { const [a, b] = [...pointers.values()]; const r = root.getBoundingClientRect(); const center = { x: (a.x + b.x) / 2 - r.left, y: (a.y + b.y) / 2 - r.top }; Object.assign(viewport, zoomAt({ ...viewport, scale: pinch.scale }, Math.max(.08, Math.min(3, distance(a, b) / pinch.distance)), center)); root.dispatchEvent(new CustomEvent('zytho-map-change')); return; } if (!dragging) return; Object.assign(viewport, pan(viewport, e.clientX - dragging.x, e.clientY - dragging.y)); dragging = { x: e.clientX, y: e.clientY }; root.dispatchEvent(new CustomEvent('zytho-map-change')); });
  const endPointer = e => { pointers.delete(e.pointerId); dragging = null; pinch = null; };
  root.querySelector('.zythosphere-viewport')?.addEventListener('pointerup', endPointer);
  root.querySelector('.zythosphere-viewport')?.addEventListener('pointercancel', endPointer);
  root.querySelector('.zythosphere-viewport')?.addEventListener('wheel', e => { e.preventDefault(); const r = root.getBoundingClientRect(); Object.assign(viewport, zoomAt(viewport, e.deltaY < 0 ? 1.12 : .88, { x: e.clientX - r.left, y: e.clientY - r.top })); root.dispatchEvent(new CustomEvent('zytho-map-change')); }, { passive: false });

  return {
    render, fitState, focusNode,
    controls: {
      zoomIn: () => Object.assign(viewport, zoomAt(viewport, 1.2, { x: size.width / 2, y: size.height / 2 })),
      zoomOut: () => Object.assign(viewport, zoomAt(viewport, .8, { x: size.width / 2, y: size.height / 2 })),
      home: () => Object.assign(viewport, fitBounds(computeHomeBounds(), size, 42, { min: FIT_MIN_SCALE, max: 0.76 }, options.getInsets?.() || {})),
      recenter: () => Object.assign(viewport, fitBounds(computeHomeBounds(), size, 42, { min: FIT_MIN_SCALE, max: 0.76 }, options.getInsets?.() || {}))
    },
    getStats: () => lastStats,
    getDiagnostics: () => ({ ...diagnostics, collisions: lastStats.collisions }),
    setDiagnostics: values => Object.assign(diagnostics, values),
    getBounds: () => ({ home: computeHomeBounds(), all: computeVisibleBounds(data.nodes, data.links, nodeIndex), selectedDescendants: getDescendantBounds(diagnostics.selectedFamilyId, data.nodes) }),
    viewport
  };
}

export const createCanvasMap = createCanvasMapRenderer;
