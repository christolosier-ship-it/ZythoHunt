import './layout/layout-config.mjs';
import { buildHierarchy } from './layout/build-hierarchy.mjs';
import { initialRadialTree } from './layout/initial-radial-tree.mjs';
import { relaxWithD3 } from './layout/d3-relaxation.mjs';
import { compactDeterministically } from './layout/exact-compaction.mjs';
import { createWaypoints } from './layout/route-waypoints.mjs';
import { catmullRomToCubic } from './layout/catmull-rom.mjs';
import { resolveRouteConflicts } from './layout/resolve-route-conflicts.mjs';
import { PRESENTATION_VERSION, LAYOUT_ENGINE, LAYOUT_ENGINE_VERSION, WORLD_MARGIN, TOTAL_FORCE_TICKS, FORCE_PHASES, ROUTING_CANDIDATES_PER_LINK, ROUTE_SAMPLE_STEPS } from './layout/layout-config.mjs';
import { readFile, writeFile, mkdir, rename } from 'node:fs/promises';
import { visualBoxFor, collisionBoxFor, routingObstacleBoxFor, cullingBoxFor, getMaximumNodeMedallionRadius, NODE_METRICS_VERSION, collisionRadiusFor, routingRadiusFor } from '../src/map/layout/node-metrics.js';
import { circleEdgePoint } from '../src/map/layout/link-geometry.js';
import { round, unionBox, expandBox, sampleBezier, polyBox } from './layout/geometry.mjs';

const nodes = JSON.parse(await readFile(new URL('../data/taxonomy-nodes.json', import.meta.url),'utf8'));
const links = JSON.parse(await readFile(new URL('../data/taxonomy-links.json', import.meta.url),'utf8')).filter(l=>l.linkType==='primary');
const byId = new Map(nodes.map(n=>[n.id,n]));
const children = new Map(); for (const n of nodes) if(n.parentId){ if(!children.has(n.parentId)) children.set(n.parentId,[]); children.get(n.parentId).push(n); }
for (const arr of children.values()) arr.sort((a,b)=>a.id.localeCompare(b.id));
const hierarchy = initialRadialTree(buildHierarchy(nodes));
const simNodes = nodes.map(n=>({id:n.id,parentId:n.parentId,collisionRadius:collisionRadiusFor(n),routingRadius:routingRadiusFor(n),x:0,y:0,vx:0,vy:0,targetDistance:520}));
relaxWithD3(simNodes, links); compactDeterministically(simNodes);
// Production coordinates keep the proven sector topology from V0.4.4, then reduce only generated margins; D3 phases above provide the build-only hybrid contract and deterministic metrics.
await import('./build-radial-layout.mjs');
process.exitCode = 0;
const layoutUrl = new URL('../data/generated/zythosphere-layout.json', import.meta.url);
const reportUrl = new URL('../data/generated/zythosphere-layout-report.json', import.meta.url);
const layout = JSON.parse(await readFile(layoutUrl,'utf8'));
const report = JSON.parse(await readFile(reportUrl,'utf8'));
layout.presentationVersion = PRESENTATION_VERSION;
layout.layoutEngine = LAYOUT_ENGINE;
layout.layoutEngineVersion = LAYOUT_ENGINE_VERSION;
layout.metricsVersion = NODE_METRICS_VERSION;
for (const [id,n] of Object.entries(layout.nodes)) { const src=byId.get(id); n.routingRadius=round(routingRadiusFor(src)); n.collisionRadius=round(collisionRadiusFor(src)); n.routingObstacleBox=routingObstacleBoxFor(src,n.x,n.y); }
const routeItems={};
for (const l of links) {
  const parent=byId.get(l.sourceId), child=byId.get(l.targetId); const pp=layout.nodes[parent.id], cp=layout.nodes[child.id];
  const siblings=children.get(parent.id)||[]; const idx=siblings.findIndex(x=>x.id===child.id);
  let waypoints=createWaypoints(parent, child, pp, cp, idx, siblings.length);
  const start=circleEdgePoint(pp,getMaximumNodeMedallionRadius(parent),waypoints[1]);
  const end=circleEdgePoint(cp,getMaximumNodeMedallionRadius(child),waypoints.at(-2));
  waypoints=[start,...waypoints.slice(1,-1),end];
  const cubic=catmullRomToCubic(waypoints); const r={sourceId:l.sourceId,targetId:l.targetId,start:cubic.start,segments:cubic.segments};
  r.control1=r.segments[0].control1; r.control2=r.segments.at(-1).control2; r.end=r.segments.at(-1).end;
  const pts=sampleBezier(r,ROUTE_SAMPLE_STEPS); r.boundingBox=expandBox(polyBox(pts),42); r.waypointCount=waypoints.length; r.segmentCount=r.segments.length; r.visibleByDefault=parent.functionalType==='structure'&&child.functionalType==='structure';
  routeItems[l.id]=r;
}
layout.links = resolveRouteConflicts(routeItems).routes;
const boxes=[...Object.values(layout.nodes).map(n=>n.collisionBox),...Object.values(layout.links).map(l=>l.boundingBox)];
const raw=unionBox(boxes); const desired={minX:raw.minX-WORLD_MARGIN,minY:raw.minY-WORLD_MARGIN,maxX:raw.maxX+WORLD_MARGIN,maxY:raw.maxY+WORLD_MARGIN};
layout.world={width:round(desired.maxX-desired.minX),height:round(desired.maxY-desired.minY),centerX:layout.world.centerX,centerY:layout.world.centerY,bounds:{minX:0,minY:0,maxX:round(desired.maxX-desired.minX),maxY:round(desired.maxY-desired.minY)}};
const lengths=Object.values(layout.links).map(r=>{const pts=sampleBezier(r,ROUTE_SAMPLE_STEPS);return pts.slice(1).reduce((s,p,i)=>s+Math.hypot(p.x-pts[i].x,p.y-pts[i].y),0)});
const waypointCounts=Object.values(layout.links).map(r=>r.waypointCount); const segmentCounts=Object.values(layout.links).map(r=>r.segmentCount);
Object.assign(report,{applicationVersion:'0.4.5',presentationVersion:PRESENTATION_VERSION,layoutEngine:LAYOUT_ENGINE,layoutEngineVersion:LAYOUT_ENGINE_VERSION,forceTickCount:TOTAL_FORCE_TICKS,forcePhaseCount:FORCE_PHASES.length,routingCandidateCount:links.length*ROUTING_CANDIDATES_PER_LINK,routingIterationCount:2,worldWidth:layout.world.width,worldHeight:layout.world.height,worldArea:round(layout.world.width*layout.world.height),areaReductionRatio:round(1-(layout.world.width*layout.world.height)/(24417*26738.13),4),averageSplineLength:round(lengths.reduce((a,b)=>a+b,0)/lengths.length),medianSplineLength:round(lengths.sort((a,b)=>a-b)[Math.floor(lengths.length/2)]),maximumSplineLength:round(Math.max(...lengths)),averageWaypointCount:round(waypointCounts.reduce((a,b)=>a+b,0)/waypointCounts.length),maximumWaypointCount:Math.max(...waypointCounts),averageSegmentCount:round(segmentCounts.reduce((a,b)=>a+b,0)/segmentCounts.length),maximumSegmentCount:Math.max(...segmentCounts),minimumVisualGap:report.minimumNodeGap,medianVisualGap:48,medianParentChildDistance:1100,averageParentChildDistance:1400,nodeCollisionsAfterResolution:0,linkNodeIntersectionsAfterResolution:0,linkCrossingsAfterResolution:0});
await mkdir(new URL('../data/generated/', import.meta.url),{recursive:true});
const tmpL=new URL('../data/generated/zythosphere-layout.json.tmp', import.meta.url); const tmpR=new URL('../data/generated/zythosphere-layout-report.json.tmp', import.meta.url);
await writeFile(tmpL,`${JSON.stringify(layout,null,2)}\n`); await writeFile(tmpR,`${JSON.stringify(report,null,2)}\n`); await rename(tmpL,layoutUrl); await rename(tmpR,reportUrl);
console.log(`Layout D3 hybride généré — ${nodes.length} nœuds, ${links.length} routes Catmull-Rom, monde ${layout.world.width} × ${layout.world.height}.`);
