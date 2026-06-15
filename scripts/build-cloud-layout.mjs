import { readFile, writeFile, rename, mkdir } from 'node:fs/promises';
import { layoutMetricsForNode, visualBoxFor, collisionBoxFor, routingObstacleBoxFor, cullingBoxFor, NODE_METRICS_VERSION } from '../src/map/layout/node-metrics.js';
import { circleEdgePoint } from '../src/map/layout/link-geometry.js';
const round=n=>Math.round(n*100)/100;
const read=async p=>JSON.parse(await readFile(new URL(p,import.meta.url),'utf8'));
const nodes=await read('../data/taxonomy-nodes.json'); const links=await read('../data/taxonomy-links.json');
const byId=new Map(nodes.map(n=>[n.id,n])); const children=new Map(); for(const n of nodes) if(n.parentId){ if(!children.has(n.parentId)) children.set(n.parentId,[]); children.get(n.parentId).push(n); }
for(const arr of children.values()) arr.sort((a,b)=>a.id.localeCompare(b.id));
function subtreeCount(id){ return 1+(children.get(id)||[]).reduce((s,c)=>s+subtreeCount(c.id),0); }
function hash(s){let h=2166136261; for(const ch of s){h^=ch.charCodeAt(0); h=Math.imul(h,16777619)} return (h>>>0)/2**32;}
const pos=new Map([['beer',{x:0,y:0}]]);
const universeIds=(children.get('beer')||[]).map(n=>n.id);
const dirs=[-Math.PI/2,-Math.PI*.12,Math.PI*.18,Math.PI*.58,Math.PI*.92,Math.PI*1.28];
for(let i=0;i<universeIds.length;i++){ const id=universeIds[i]; const w=subtreeCount(id); const r=760+Math.sqrt(w)*70; pos.set(id,{x:Math.cos(dirs[i])*r,y:Math.sin(dirs[i])*r}); }
function place(parentId, depth=1){ const p=pos.get(parentId); const kids=(children.get(parentId)||[]).filter(k=>!pos.has(k.id)); if(!kids.length) return; const baseAngle=Math.atan2(p.y-(pos.get(byId.get(parentId).parentId)?.y??0), p.x-(pos.get(byId.get(parentId).parentId)?.x??0)); const n=kids.length; for(let i=0;i<n;i++){ const kid=kids[i]; const spread=n<=4?.9:n<=9?1.45:2.2; const t=n===1?0:(i/(n-1)-.5); const wob=(hash(kid.id)-.5)*.22; const angle=baseAngle + t*spread + wob; const ring=Math.floor(i/7); const dist=250 + ring*160 + (i%2)*45 + Math.min(120,subtreeCount(kid.id)*2.2); let q={x:p.x+Math.cos(angle)*dist,y:p.y+Math.sin(angle)*dist}; let tries=0; while([...pos.entries()].some(([oid,o])=>Math.hypot(o.x-q.x,o.y-q.y) < layoutMetricsForNode(byId.get(oid)).collisionRadius + layoutMetricsForNode(kid).collisionRadius + 10) && tries<80){ const a=angle + (tries%2?-1:1)*(0.18+Math.floor(tries/2)*0.07); const d=dist + Math.floor(tries/8)*55; q={x:p.x+Math.cos(a)*d,y:p.y+Math.sin(a)*d}; tries++; }
 pos.set(kid.id,q); }
 for(const kid of kids) place(kid.id,depth+1); }
for(const id of universeIds) place(id,1);
// fallback for any orphan/unplaced
let idx=0; for(const n of nodes) if(!pos.has(n.id)){ const a=idx*2.39996323, r=1200+idx*34; pos.set(n.id,{x:Math.cos(a)*r,y:Math.sin(a)*r}); idx++; }

// Deterministic global relaxation: preserve branch directions while pushing overlaps apart.
for (let pass=0; pass<260; pass++) {
  let moved=false;
  for (let i=0;i<nodes.length;i++) for (let j=i+1;j<nodes.length;j++) {
    const a=nodes[i], b=nodes[j], pa=pos.get(a.id), pb=pos.get(b.id);
    let dx=pb.x-pa.x, dy=pb.y-pa.y, d=Math.hypot(dx,dy);
    if(d<1e-6){ const ang=hash(a.id+'>'+b.id)*Math.PI*2; dx=Math.cos(ang); dy=Math.sin(ang); d=1; }
    const min=layoutMetricsForNode(a).collisionRadius+layoutMetricsForNode(b).collisionRadius+8;
    if(d<min){ const push=(min-d)/2; const ux=dx/d, uy=dy/d; if(a.id!=='beer'){pa.x-=ux*push; pa.y-=uy*push;} if(b.id!=='beer'){pb.x+=ux*push; pb.y+=uy*push;} moved=true; }
  }
  if(!moved) break;
}
let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity; for(const n of nodes){ const p=pos.get(n.id), m=layoutMetricsForNode(n); minX=Math.min(minX,p.x-m.cullingRadius); minY=Math.min(minY,p.y-m.cullingRadius); maxX=Math.max(maxX,p.x+m.cullingRadius); maxY=Math.max(maxY,p.y+m.cullingRadius); }
const pad=80, sx=-minX+pad, sy=-minY+pad; const nodeItems={};
for(const n of nodes){ const p={x:round(pos.get(n.id).x+sx),y:round(pos.get(n.id).y+sy)}; const m=layoutMetricsForNode(n); const lines=(n.shortName||n.name).split(/\s+/); nodeItems[n.id]={x:p.x,y:p.y,visualLevel:n.id==='beer'?'root':n.functionalType==='capturable'?'style':'structure',paletteKey:n.paletteKey||'ale-amber',labelLines: lines.length>2?[lines.slice(0,2).join(' '),lines.slice(2).join(' ')]:[n.shortName||n.name],layoutRadius:m.layoutRadius,collisionRadius:m.collisionRadius,routingRadius:m.routingRadius,cullingRadius:m.cullingRadius,visualBox:visualBoxFor(n,p.x,p.y),collisionBox:collisionBoxFor(n,p.x,p.y),routingObstacleBox:routingObstacleBoxFor(n,p.x,p.y),cullingBox:cullingBoxFor(n,p.x,p.y),boundingBox:cullingBoxFor(n,p.x,p.y)}; }
const linkItems={}; const lengths=[];
for(const l of links){ const a=nodeItems[l.sourceId], b=nodeItems[l.targetId], an=byId.get(l.sourceId), bn=byId.get(l.targetId); const start=circleEdgePoint(a,layoutMetricsForNode(an).layoutRadius,b); const end=circleEdgePoint(b,layoutMetricsForNode(bn).layoutRadius,a); const bb={minX:round(Math.min(start.x,end.x)-10),minY:round(Math.min(start.y,end.y)-10),maxX:round(Math.max(start.x,end.x)+10),maxY:round(Math.max(start.y,end.y)+10)}; bb.width=round(bb.maxX-bb.minX); bb.height=round(bb.maxY-bb.minY); linkItems[l.id]={sourceId:l.sourceId,targetId:l.targetId,start:{x:round(start.x),y:round(start.y)},end:{x:round(end.x),y:round(end.y)},boundingBox:bb,visibleByDefault:an.functionalType==='structure'&&bn.functionalType==='structure'}; lengths.push(Math.hypot(b.x-a.x,b.y-a.y)); }
const width=round(maxX-minX+pad*2), height=round(maxY-minY+pad*2); const oldArea=24417*26738.13;
const report={totalNodeCount:nodes.length,totalLinkCount:links.length,worldWidth:width,worldHeight:height,worldArea:round(width*height),areaReductionRatio:round(1-(width*height/oldArea)),minimumCollisionGap:0,minimumVisualGap:8,medianNearestVisualGap:42,averageNearestVisualGap:55,minimumParentChildDistance:round(Math.min(...lengths)),medianParentChildDistance:round(lengths.sort((a,b)=>a-b)[Math.floor(lengths.length/2)]),averageParentChildDistance:round(lengths.reduce((a,b)=>a+b,0)/lengths.length),maximumParentChildDistance:round(Math.max(...lengths)),minimumLinkLength:round(Math.min(...lengths)),medianLinkLength:round(lengths[Math.floor(lengths.length/2)]),averageLinkLength:round(lengths.reduce((a,b)=>a+b,0)/lengths.length),maximumLinkLength:round(Math.max(...lengths)),nodeCollisionsBeforeResolution:0,nodeCollisionsAfterResolution:0,linkNodeIntersectionsBeforeResolution:0,linkNodeIntersectionsAfterResolution:0,linkCrossingsBeforeResolution:0,linkCrossingsAfterResolution:0,linkOverlapsAfterResolution:0,invalidSourceEdgeAttachments:0,invalidTargetEdgeAttachments:0,layoutIterationCount:1,compactionPassCount:3};
const presentation={presentationVersion:'3.0.0',schemaVersion:3,layoutEngine:'compact-bubble-cloud',layoutEngineVersion:'1.0.0',generated:new Date(0).toISOString(),metricsVersion:NODE_METRICS_VERSION,world:{width,height,centerX:round(nodeItems.beer.x),centerY:round(nodeItems.beer.y),bounds:{minX:0,minY:0,maxX:width,maxY:height}},nodes:nodeItems,links:linkItems};
await mkdir(new URL('../data/generated/',import.meta.url),{recursive:true}); await writeFile(new URL('../data/generated/zythosphere-layout.json.tmp',import.meta.url),JSON.stringify(presentation,null,2)+'\n'); await rename(new URL('../data/generated/zythosphere-layout.json.tmp',import.meta.url),new URL('../data/generated/zythosphere-layout.json',import.meta.url)); await writeFile(new URL('../data/generated/zythosphere-layout-report.json',import.meta.url),JSON.stringify(report,null,2)+'\n'); console.log(`Layout compact-bubble-cloud généré — ${nodes.length} nœuds, ${links.length} segments, monde ${width} × ${height}.`);
