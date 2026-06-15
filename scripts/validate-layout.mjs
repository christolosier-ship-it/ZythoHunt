import { readFile } from 'node:fs/promises';
import { sampleBezier, polyBox, boxIntersects, segmentBoxHit, segmentIntersection } from './layout/geometry.mjs';
import { getMaximumNodeMedallionRadius } from '../src/map/layout/node-metrics.js';

const layout = JSON.parse(await readFile(new URL('../data/generated/zythosphere-layout.json', import.meta.url), 'utf8'));
const taxonomyNodes = JSON.parse(await readFile(new URL('../data/taxonomy-nodes.json', import.meta.url), 'utf8'));
const taxonomyById = new Map(taxonomyNodes.map(node => [node.id, node]));
const nodes = Object.entries(layout.nodes ?? {}).map(([id, node]) => ({ id, ...node }));
const links = Object.entries(layout.links ?? {}).map(([id, link]) => ({ id, ...link }));
const errors = [];
const number = value => typeof value === 'number' && Number.isFinite(value);

for (const node of nodes) {
  if (!number(node.x) || !number(node.y)) errors.push(`coordonnées invalides: ${node.id}`);
  const b = node.collisionBox ?? node.boundingBox;
  if (!b || !number(b.minX) || !number(b.minY) || !number(b.maxX) || !number(b.maxY) || b.maxX <= b.minX || b.maxY <= b.minY) errors.push(`boîte invalide: ${node.id}`);
  if (b && (b.minX < 0 || b.minY < 0 || b.maxX > layout.world.width || b.maxY > layout.world.height)) errors.push(`nœud hors limites: ${node.id}`);
}

let nodeCollisions = 0;
let minimumNodeGap = Infinity;
for (let i = 0; i < nodes.length; i += 1) {
  for (let j = i + 1; j < nodes.length; j += 1) {
    const a = nodes[i].collisionBox ?? nodes[i].boundingBox;
    const b = nodes[j].collisionBox ?? nodes[j].boundingBox;
    const hit = boxIntersects(a, b);
    const gapX = Math.max(a.minX - b.maxX, b.minX - a.maxX, 0);
    const gapY = Math.max(a.minY - b.maxY, b.minY - a.maxY, 0);
    const gap = hit ? -Math.min(a.maxX - b.minX, b.maxX - a.minX, a.maxY - b.minY, b.maxY - a.minY) : Math.hypot(gapX, gapY);
    minimumNodeGap = Math.min(minimumNodeGap, gap);
    if (hit) nodeCollisions += 1;
  }
}

const nodeIds = new Set(nodes.map(node => node.id));
const nodeById = new Map(nodes.map(node => [node.id, node]));
const sampledLinks = [];
let maximumBezierLength = 0;
let totalBezierLength = 0;
let invalidSourceEdgeAttachments = 0;
let invalidTargetEdgeAttachments = 0;
let maximumSourceEdgeError = 0;
let maximumTargetEdgeError = 0;
const EDGE_TOLERANCE = 0.75;
for (const link of links) {
  for (const key of ['start', 'control1', 'control2', 'end']) if (!link[key] || !number(link[key].x) || !number(link[key].y)) errors.push(`Bézier incomplète: ${link.id}.${key}`);
  if (!nodeIds.has(link.sourceId) || !nodeIds.has(link.targetId)) errors.push(`lien orphelin: ${link.id}`);
  const sourceNode = nodeById.get(link.sourceId);
  const targetNode = nodeById.get(link.targetId);
  const sourceTaxonomy = taxonomyById.get(link.sourceId);
  const targetTaxonomy = taxonomyById.get(link.targetId);
  if (sourceNode && targetNode && sourceTaxonomy && targetTaxonomy && link.start && link.end) {
    const sourceRadius = getMaximumNodeMedallionRadius({ ...sourceTaxonomy, ...sourceNode });
    const targetRadius = getMaximumNodeMedallionRadius({ ...targetTaxonomy, ...targetNode });
    const sourceDistance = Math.hypot(link.start.x - sourceNode.x, link.start.y - sourceNode.y);
    const targetDistance = Math.hypot(link.end.x - targetNode.x, link.end.y - targetNode.y);
    const sourceError = Math.abs(sourceDistance - sourceRadius);
    const targetError = Math.abs(targetDistance - targetRadius);
    maximumSourceEdgeError = Math.max(maximumSourceEdgeError, sourceError);
    maximumTargetEdgeError = Math.max(maximumTargetEdgeError, targetError);
    if (!Number.isFinite(sourceDistance) || sourceDistance < 1e-6 || sourceError > EDGE_TOLERANCE) invalidSourceEdgeAttachments += 1;
    if (!Number.isFinite(targetDistance) || targetDistance < 1e-6 || targetError > EDGE_TOLERANCE) invalidTargetEdgeAttachments += 1;
  }
  const sampled = sampleBezier(link, 64);
  const length = sampled.slice(1).reduce((sum, point, index) => sum + Math.hypot(point.x - sampled[index].x, point.y - sampled[index].y), 0);
  maximumBezierLength = Math.max(maximumBezierLength, length);
  totalBezierLength += length;
  sampledLinks.push({ ...link, sampled, sampledBox: polyBox(sampled), length });
}

let linkNodeIntersections = 0;
for (const link of sampledLinks) {
  for (const node of nodes) {
    if (node.id === link.sourceId || node.id === link.targetId) continue;
    const box = node.collisionBox ?? node.boundingBox;
    if (!boxIntersects(link.sampledBox, box)) continue;
    for (let i = 1; i < link.sampled.length; i += 1) {
      if (segmentBoxHit(link.sampled[i - 1], link.sampled[i], box)) { linkNodeIntersections += 1; break; }
    }
  }
}

let linkCrossings = 0;
for (let i = 0; i < sampledLinks.length; i += 1) {
  for (let j = i + 1; j < sampledLinks.length; j += 1) {
    const a = sampledLinks[i];
    const b = sampledLinks[j];
    if (new Set([a.sourceId, a.targetId, b.sourceId, b.targetId]).size < 4) continue;
    if (!boxIntersects(a.sampledBox, b.sampledBox)) continue;
    outer: for (let ai = 1; ai < a.sampled.length; ai += 1) {
      for (let bi = 1; bi < b.sampled.length; bi += 1) {
        if (segmentIntersection(a.sampled[ai - 1], a.sampled[ai], b.sampled[bi - 1], b.sampled[bi])) { linkCrossings += 1; break outer; }
      }
    }
  }
}

const report = {
  totalNodeCount: nodes.length,
  totalLinkCount: links.length,
  worldWidth: layout.world?.width,
  worldHeight: layout.world?.height,
  nodeCollisionsAfterResolution: nodeCollisions,
  linkNodeIntersectionsAfterResolution: linkNodeIntersections,
  linkCrossingsAfterResolution: linkCrossings,
  invalidSourceEdgeAttachments,
  invalidTargetEdgeAttachments,
  maximumSourceEdgeError: Number(maximumSourceEdgeError.toFixed(3)),
  maximumTargetEdgeError: Number(maximumTargetEdgeError.toFixed(3)),
  minimumNodeGap: Number(minimumNodeGap.toFixed(2)),
  maximumBezierLength: Number(maximumBezierLength.toFixed(2)),
  averageBezierLength: Number((totalBezierLength / Math.max(1, links.length)).toFixed(2))
};
console.log(JSON.stringify(report, null, 2));
if (invalidSourceEdgeAttachments || invalidTargetEdgeAttachments) {
  errors.push(`attachements de liens invalides: ${invalidSourceEdgeAttachments} sources, ${invalidTargetEdgeAttachments} cibles`);
}
if (nodeCollisions || linkNodeIntersections || linkCrossings || minimumNodeGap < 0) {
  errors.push(`objectifs géométriques non atteints: ${nodeCollisions} collisions, ${linkNodeIntersections} intersections lien-nœud, ${linkCrossings} croisements`);
}
if (errors.length) {
  for (const error of errors) console.error(`✘ ${error}`);
  process.exit(1);
}
console.log('Layout valide.');
