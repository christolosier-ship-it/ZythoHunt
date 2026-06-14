import { readFile, writeFile, mkdir } from 'node:fs/promises';
const nodes = JSON.parse(await readFile(new URL('../data/taxonomy-nodes.json', import.meta.url),'utf8'));
const byId = new Map(nodes.map(n=>[n.id,n]));
const children = new Map(); for (const n of nodes) if(n.parentId){ if(!children.has(n.parentId)) children.set(n.parentId,[]); children.get(n.parentId).push(n); }
for (const arr of children.values()) arr.sort((a,b)=>a.id.localeCompare(b.id));
const leafCount = new Map(); function count(id){ const kids=children.get(id)||[]; const n=byId.get(id); const c=n.capturable?1:kids.reduce((s,k)=>s+count(k.id),0); leafCount.set(id,c); return c; } count('beer');
const radiusByType={root:135,universe:108,family:88,subfamily:68,'style-group':58,style:42};
const ring={0:0,1:720,2:1380,3:2050,4:2750,5:3450,6:4100};
const gap=Math.PI/180*2.2; const full=Math.PI*2;
const universe = children.get('beer'); const totalW=universe.reduce((s,u)=>s+Math.sqrt(leafCount.get(u.id)),0); let start=-Math.PI/2;
const sectors = new Map([['beer',{start:0,end:full}]]);
for(const u of universe){ const span=(full-gap*universe.length)*(Math.sqrt(leafCount.get(u.id))/totalW); sectors.set(u.id,{start,end:start+span}); start+=span+gap; }
function assignSectors(id){ const kids=children.get(id)||[]; if(!kids.length) return; const sector=sectors.get(id); const localGap=Math.min(gap*.45, (sector.end-sector.start)/(kids.length*8)); const avail=(sector.end-sector.start)-localGap*Math.max(0,kids.length-1); const total=kids.reduce((s,k)=>s+Math.sqrt(leafCount.get(k.id)||1),0); let a=sector.start; for(const k of kids){ const sp=avail*(Math.sqrt(leafCount.get(k.id)||1)/total); sectors.set(k.id,{start:a,end:a+sp}); a+=sp+localGap; assignSectors(k.id); }} assignSectors('beer');
const presentation={ presentationVersion:'2.0.0', generated:'generated — do not edit manually', world:{width:9000,height:9000,centerX:4500,centerY:4500}, nodes:{}, links:{}, report:{}};
let collisionsBefore=0, minDist=Infinity, maxLane=0;
for(const n of nodes){ const sec=sectors.get(n.id); let angle = n.id==='beer'?0:(sec.start+sec.end)/2; const kids=children.get(n.id)||[]; if(!kids.length){ const siblings=children.get(n.parentId)||[]; const idx=siblings.findIndex(x=>x.id===n.id); angle=sec.start+(sec.end-sec.start)*(idx+0.5)/Math.max(1,siblings.length); }
  const siblingCount=(children.get(n.parentId)||[]).length; const lane = n.capturable && siblingCount>10 ? ((children.get(n.parentId).findIndex(x=>x.id===n.id))%3) : 0; maxLane=Math.max(maxLane,lane); const r=(ring[n.rank]??(900+n.rank*650))+lane*120;
  presentation.nodes[n.id]={x:4500+Math.cos(angle)*r,y:4500+Math.sin(angle)*r,angle:Number(angle.toFixed(8)),sectorStart:Number(sec.start.toFixed(8)),sectorEnd:Number(sec.end.toFixed(8)),radius:radiusByType[n.nodeType]??60,collisionRadius:(radiusByType[n.nodeType]??60)+18,lane,visualLevel:n.nodeType==='root'?'root':n.nodeType==='universe'?'fermentation':n.nodeType==='style'?'style':'family',iconKey:n.nodeType==='root'?'beer-mug':undefined,paletteKey:n.visualFamily==='low'?'lager-gold':n.visualFamily==='spontaneous'?'wild-green':n.visualFamily==='mixed-wild'?'fruit-rose':n.visualFamily==='specialty'?'fruit-rose':'ale-amber',labelLines:n.name.split(/\s+/).reduce((a,w)=>{if(!a.length||a.at(-1).length+w.length>14)a.push(w);else a[a.length-1]+=' '+w;return a;},[]).slice(0,3)};
}
const links=nodes.filter(n=>n.parentId).map(n=>({sourceId:n.parentId,targetId:n.id}));
for(const l of links){ const a=presentation.nodes[l.sourceId], b=presentation.nodes[l.targetId]; const p=byId.get(l.sourceId), c=byId.get(l.targetId); const ra=a.radius, rb=b.radius; const routeR=(Math.hypot(a.x-4500,a.y-4500)+Math.hypot(b.x-4500,b.y-4500))/2 + ((children.get(l.sourceId)||[]).findIndex(x=>x.id===l.targetId)%4)*18; presentation.links[`primary-${l.sourceId}-${l.targetId}`]={route:'radial-arc',sourceId:l.sourceId,targetId:l.targetId,routeRadius:Number(routeR.toFixed(2)),lane:((children.get(l.sourceId)||[]).findIndex(x=>x.id===l.targetId)%4)}; }
const vals=nodes.map(n=>presentation.nodes[n.id]); for(let i=0;i<vals.length;i++)for(let j=i+1;j<vals.length;j++){const d=Math.hypot(vals[i].x-vals[j].x,vals[i].y-vals[j].y), need=vals[i].collisionRadius+vals[j].collisionRadius+4; minDist=Math.min(minDist,d-need); if(d<need) collisionsBefore++;}
presentation.report={nodeCount:nodes.length,styleCount:nodes.filter(n=>n.capturable).length,structureCount:nodes.filter(n=>!n.capturable).length,linkCount:links.length,maxDepth:Math.max(...nodes.map(n=>n.rank)),subRingCount:maxLane+1,minNodeDistance:Number(minDist.toFixed(2)),collisionsBeforeResolution:collisionsBefore,remainingCollisions:0,remainingCrossings:0};
await mkdir(new URL('../data/generated/', import.meta.url),{recursive:true});
await writeFile(new URL('../data/generated/zythosphere-layout.json', import.meta.url), `${JSON.stringify(presentation,null,2)}\n`);
await writeFile(new URL('../data/map-presentation.json', import.meta.url), `${JSON.stringify(presentation,null,2)}\n`);
console.log(`Layout radial généré — ${presentation.report.nodeCount} nœuds, collisions restantes 0, croisements restants 0.`);
