import { readFile } from 'node:fs/promises';
const layout=JSON.parse(await readFile(new URL('../data/generated/zythosphere-layout.json',import.meta.url),'utf8'));
const report=JSON.parse(await readFile(new URL('../data/generated/zythosphere-layout-report.json',import.meta.url),'utf8'));
const errors=[]; const num=v=>Number.isFinite(v);
if(layout.schemaVersion!==3) errors.push('schemaVersion doit valoir 3');
if(layout.layoutEngine!=='compact-bubble-cloud') errors.push('layoutEngine invalide');
for(const [id,n] of Object.entries(layout.nodes||{})){ for(const k of ['x','y','layoutRadius','collisionRadius','routingRadius','cullingRadius']) if(!num(n[k])) errors.push(`${id}.${k} invalide`); }
for(const [id,l] of Object.entries(layout.links||{})){ for(const key of ['start','end']) if(!num(l[key]?.x)||!num(l[key]?.y)) errors.push(`${id}.${key} invalide`); if('control1'in l||'control2'in l||'segments'in l) errors.push(`${id} contient une route Bézier obsolète`); }
const required=['nodeCollisionsAfterResolution','linkNodeIntersectionsAfterResolution','linkCrossingsAfterResolution','linkOverlapsAfterResolution','invalidSourceEdgeAttachments','invalidTargetEdgeAttachments'];
for(const k of required) if(report[k]!==0) errors.push(`${k}=${report[k]}`);
console.log(JSON.stringify(report,null,2));
if(errors.length){ console.error(errors.join('\n')); process.exit(1); }
console.log('Layout compact valide.');
