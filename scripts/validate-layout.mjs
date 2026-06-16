import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { distance, distancePointToSegment, segmentIntersectionDetail, circleCircleDistance } from './layout/geometry.mjs';
const arg=process.argv[2];
const layout=JSON.parse(await readFile(arg?pathToFileURL(arg):new URL('../data/generated/zythosphere-layout.json',import.meta.url),'utf8'));
const errors=[]; const num=v=>Number.isFinite(v);
if(layout.schemaVersion!==3) errors.push('schemaVersion doit valoir 3');
if(layout.layoutEngine!=='compact-bubble-cloud') errors.push('layoutEngine invalide');
const nodes=Object.entries(layout.nodes||{}).map(([id,n])=>({id,...n}));
const links=Object.entries(layout.links||{}).map(([id,l])=>({id,...l}));
for(const n of nodes) for(const k of ['x','y','layoutRadius','collisionRadius','routingRadius','cullingRadius']) if(!num(n[k])) errors.push(`${n.id}.${k} invalide`);
for(const l of links){ for(const key of ['start','end']) if(!num(l[key]?.x)||!num(l[key]?.y)) errors.push(`${l.id}.${key} invalide`); if('control1'in l||'control2'in l||'segments'in l) errors.push(`${l.id} contient une route Bézier obsolète`); }
const nodeById=new Map(nodes.map(n=>[n.id,n]));
let nodeCollisions=0, linkNode=0, linkCross=0, linkOverlap=0, badStart=0, badEnd=0;
let minCollisionGap=Infinity,minVisualGap=Infinity; const nearest=[], parentDists=[], linkLens=[];
for(let i=0;i<nodes.length;i++) for(let j=i+1;j<nodes.length;j++){ const a=nodes[i],b=nodes[j],d=distance(a,b); const gap=d-a.collisionRadius-b.collisionRadius; minCollisionGap=Math.min(minCollisionGap,gap); minVisualGap=Math.min(minVisualGap,d-a.layoutRadius-b.layoutRadius); if(gap < -1e-6) nodeCollisions++; }
for(const a of nodes){ let best=Infinity; for(const b of nodes) if(a!==b) best=Math.min(best,distance(a,b)-a.layoutRadius-b.layoutRadius); nearest.push(best); }
for(const l of links){ const a=nodeById.get(l.sourceId), b=nodeById.get(l.targetId); if(!a||!b){errors.push(`${l.id} référence un nœud absent`); continue;} const len=distance(l.start,l.end); linkLens.push(len); parentDists.push(distance(a,b)); if(Math.abs(distance(a,l.start)-a.layoutRadius)>0.75) badStart++; if(Math.abs(distance(b,l.end)-b.layoutRadius)>0.75) badEnd++; for(const n of nodes){ if(n.id===l.sourceId||n.id===l.targetId) continue; if(distancePointToSegment(n,l.start,l.end) < n.routingRadius - 120 - 1e-6) linkNode++; }}
for(let i=0;i<links.length;i++) for(let j=i+1;j<links.length;j++){ const a=links[i],b=links[j]; const shared=[a.sourceId,a.targetId].some(id=>id===b.sourceId||id===b.targetId); const r=segmentIntersectionDetail(a.start,a.end,b.start,b.end); if(!r.intersects) continue; if(r.overlap) linkOverlap++; else if(!shared || r.proper) linkCross++; }
const med=a=>{const s=[...a].sort((x,y)=>x-y); return s[Math.floor(s.length/2)]??0}; const avg=a=>a.reduce((s,v)=>s+v,0)/(a.length||1); const rnd=n=>Number(n.toFixed(2));
const bounds=layout.world?.bounds||{minX:0,minY:0,maxX:layout.world?.width??0,maxY:layout.world?.height??0};
const report={totalNodeCount:nodes.length,totalLinkCount:links.length,worldWidth:rnd(layout.world?.width??bounds.maxX-bounds.minX),worldHeight:rnd(layout.world?.height??bounds.maxY-bounds.minY),worldArea:rnd((layout.world?.width??0)*(layout.world?.height??0)),minimumCollisionGap:rnd(minCollisionGap),minimumVisualGap:rnd(minVisualGap),medianNearestVisualGap:rnd(med(nearest)),averageNearestVisualGap:rnd(avg(nearest)),minimumParentChildDistance:rnd(Math.min(...parentDists)),medianParentChildDistance:rnd(med(parentDists)),averageParentChildDistance:rnd(avg(parentDists)),maximumParentChildDistance:rnd(Math.max(...parentDists)),minimumLinkLength:rnd(Math.min(...linkLens)),medianLinkLength:rnd(med(linkLens)),averageLinkLength:rnd(avg(linkLens)),maximumLinkLength:rnd(Math.max(...linkLens)),nodeCollisionsAfterResolution:nodeCollisions,linkNodeIntersectionsAfterResolution:linkNode,linkCrossingsAfterResolution:linkCross,linkOverlapsAfterResolution:linkOverlap,invalidSourceEdgeAttachments:badStart,invalidTargetEdgeAttachments:badEnd};
console.log(JSON.stringify(report,null,2));
for(const [k,v] of Object.entries(report)) if(['nodeCollisionsAfterResolution','linkNodeIntersectionsAfterResolution','linkCrossingsAfterResolution','linkOverlapsAfterResolution','invalidSourceEdgeAttachments','invalidTargetEdgeAttachments'].includes(k)&&v!==0) errors.push(`${k}=${v}`);
if(errors.length){ console.error(errors.join('\n')); process.exit(1); }
console.log('Layout compact valide par recalcul indépendant.');
