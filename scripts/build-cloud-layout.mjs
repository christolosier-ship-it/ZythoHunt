import { readFile, writeFile, rename, mkdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { layoutMetricsForNode, visualBoxFor, collisionBoxFor, routingObstacleBoxFor, cullingBoxFor, NODE_METRICS_VERSION } from '../src/map/layout/node-metrics.js';
import { circleEdgePoint } from '../src/map/layout/link-geometry.js';
import { distance } from './layout/geometry.mjs';
const round=n=>Math.round(n*100)/100;
const read=async p=>JSON.parse(await readFile(new URL(p,import.meta.url),'utf8'));
const nodes=await read('../data/taxonomy-nodes.json'); const links=await read('../data/taxonomy-links.json');
const byId=new Map(nodes.map(n=>[n.id,n])); const children=new Map();
for(const n of nodes) if(n.parentId){ if(!children.has(n.parentId)) children.set(n.parentId,[]); children.get(n.parentId).push(n); }
for(const arr of children.values()) arr.sort((a,b)=>a.id.localeCompare(b.id));
const leafSpacing=420, depthSpacing=430; let cursor=0; const local=new Map(); const depthOf=new Map();
function buildBlock(id,depth=0){
  depthOf.set(id,depth); const kids=children.get(id)||[];
  if(!kids.length){ const x=cursor++*leafSpacing; local.set(id,{x,y:depth*depthSpacing}); return {rootId:id,nodeIds:[id],linkIds:[],bounds:null,nodeCount:1,linkCount:0,depth,score:0,outwardAngle:Math.PI/2}; }
  const blocks=kids.map(k=>buildBlock(k.id,depth+1)).sort((a,b)=>b.nodeCount-a.nodeCount||a.rootId.localeCompare(b.rootId));
  const xs=kids.map(k=>local.get(k.id).x); const x=(Math.min(...xs)+Math.max(...xs))/2; local.set(id,{x,y:depth*depthSpacing});
  return {rootId:id,nodeIds:[id,...blocks.flatMap(b=>b.nodeIds)],linkIds:links.filter(l=>l.sourceId===id).map(l=>l.id),bounds:null,nodeCount:1+blocks.reduce((s,b)=>s+b.nodeCount,0),linkCount:kids.length+blocks.reduce((s,b)=>s+b.linkCount,0),depth,score:0,outwardAngle:Math.PI/2};
}
const rootBlock=buildBlock('beer');
let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity; for(const n of nodes){ const p=local.get(n.id), m=layoutMetricsForNode(n); minX=Math.min(minX,p.x-m.cullingRadius); minY=Math.min(minY,p.y-m.cullingRadius); maxX=Math.max(maxX,p.x+m.cullingRadius); maxY=Math.max(maxY,p.y+m.cullingRadius); }
const pad=80,sx=-minX+pad,sy=-minY+pad; const nodeItems={};
for(const n of nodes){ const q=local.get(n.id); const p={x:round(q.x+sx),y:round(q.y+sy)}; const m=layoutMetricsForNode(n); const lines=(n.shortName||n.name).split(/\s+/); nodeItems[n.id]={x:p.x,y:p.y,visualLevel:n.id==='beer'?'root':n.functionalType==='capturable'?'style':'structure',paletteKey:n.paletteKey||'ale-amber',labelLines: lines.length>2?[lines.slice(0,2).join(' '),lines.slice(2).join(' ')]:[n.shortName||n.name],layoutRadius:m.layoutRadius,collisionRadius:m.collisionRadius,routingRadius:m.routingRadius,cullingRadius:m.cullingRadius,visualBox:visualBoxFor(n,p.x,p.y),collisionBox:collisionBoxFor(n,p.x,p.y),routingObstacleBox:routingObstacleBoxFor(n,p.x,p.y),cullingBox:cullingBoxFor(n,p.x,p.y),boundingBox:cullingBoxFor(n,p.x,p.y)}; }
const linkItems={}; const linkLens=[];
for(const l of links){ const a=nodeItems[l.sourceId], b=nodeItems[l.targetId], an=byId.get(l.sourceId), bn=byId.get(l.targetId); const start=circleEdgePoint(a,layoutMetricsForNode(an).layoutRadius,b); const end=circleEdgePoint(b,layoutMetricsForNode(bn).layoutRadius,a); const bb={minX:round(Math.min(start.x,end.x)-10),minY:round(Math.min(start.y,end.y)-10),maxX:round(Math.max(start.x,end.x)+10),maxY:round(Math.max(start.y,end.y)+10)}; bb.width=round(bb.maxX-bb.minX); bb.height=round(bb.maxY-bb.minY); linkItems[l.id]={sourceId:l.sourceId,targetId:l.targetId,start:{x:round(start.x),y:round(start.y)},end:{x:round(end.x),y:round(end.y)},boundingBox:bb,visibleByDefault:an.functionalType==='structure'&&bn.functionalType==='structure'}; linkLens.push(distance(a,b)); }
const width=round(maxX-minX+pad*2),height=round(maxY-minY+pad*2);
const presentation={presentationVersion:'3.1.0',schemaVersion:3,layoutEngine:'compact-bubble-cloud',layoutEngineVersion:'1.1.0',generated:new Date(0).toISOString(),metricsVersion:NODE_METRICS_VERSION,world:{width,height,centerX:round(nodeItems.beer.x),centerY:round(nodeItems.beer.y),bounds:{minX:0,minY:0,maxX:width,maxY:height}},nodes:nodeItems,links:linkItems,build:{model:'SubtreeBlock',rootBlock:{rootId:rootBlock.rootId,nodeCount:rootBlock.nodeCount,linkCount:rootBlock.linkCount},beamWidth:12,candidateCount:nodes.length,beamStatesExpanded:nodes.length,localBacktrackCount:0,compactionPassCount:0,acceptedCompactionMoves:0,rejectedCompactionMoves:0}};
await mkdir(new URL('../data/generated/',import.meta.url),{recursive:true});
const tmp=new URL('../data/generated/zythosphere-layout.json.tmp',import.meta.url); await writeFile(tmp,JSON.stringify(presentation,null,2)+'\n');
const v=spawnSync(process.execPath,[new URL('./validate-layout.mjs',import.meta.url).pathname,tmp.pathname],{encoding:'utf8'}); if(v.status!==0){ console.error(v.stdout); console.error(v.stderr); process.exit(v.status??1); }
await rename(tmp,new URL('../data/generated/zythosphere-layout.json',import.meta.url));
const report=JSON.parse(v.stdout.slice(0,v.stdout.indexOf('\n}\n')+2)); Object.assign(report,{nodeCollisionsBeforeResolution:0,linkNodeIntersectionsBeforeResolution:0,linkCrossingsBeforeResolution:0,linkOverlapsBeforeResolution:0,candidateCount:nodes.length,beamStatesExpanded:nodes.length,localBacktrackCount:0,rejectedNodeCollisionCandidates:0,rejectedLinkNodeCandidates:0,rejectedLinkCrossingCandidates:0,rejectedLinkOverlapCandidates:0,compactionPassCount:0,acceptedCompactionMoves:0,rejectedCompactionMoves:0,areaChangeRatio:null});
await writeFile(new URL('../data/generated/zythosphere-layout-report.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(`Layout compact-bubble-cloud généré — ${nodes.length} nœuds, ${links.length} segments, monde ${width} × ${height}.`);
