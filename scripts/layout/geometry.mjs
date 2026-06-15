export const TAU = Math.PI * 2;
export const polar = (c,a,r)=>({x:c.x+Math.cos(a)*r,y:c.y+Math.sin(a)*r});
export const round = (n,d=2)=>Number(n.toFixed(d));
export const boxIntersects = (a,b)=>a.minX < b.maxX && a.maxX > b.minX && a.minY < b.maxY && a.maxY > b.minY;
export const unionBox = (boxes)=>({minX:Math.min(...boxes.map(b=>b.minX)),minY:Math.min(...boxes.map(b=>b.minY)),maxX:Math.max(...boxes.map(b=>b.maxX)),maxY:Math.max(...boxes.map(b=>b.maxY))});
export const pointBox = p=>({minX:p.x,minY:p.y,maxX:p.x,maxY:p.y});
export function expandBox(b,p){return {minX:b.minX-p,minY:b.minY-p,maxX:b.maxX+p,maxY:b.maxY+p,width:b.maxX-b.minX+p*2,height:b.maxY-b.minY+p*2};}
export function cubic(p0,p1,p2,p3,t){const u=1-t;return {x:u*u*u*p0.x+3*u*u*t*p1.x+3*u*t*t*p2.x+t*t*t*p3.x,y:u*u*u*p0.y+3*u*u*t*p1.y+3*u*t*t*p2.y+t*t*t*p3.y};}
export function sampleBezier(r,steps=24){ if(Array.isArray(r.segments)){ const pts=[r.start]; let cur=r.start; for(const seg of r.segments){ for(let i=1;i<=steps;i++) pts.push(cubic(cur,seg.control1,seg.control2,seg.end,i/steps)); cur=seg.end; } return pts; } const pts=[];for(let i=0;i<=steps;i++)pts.push(cubic(r.start,r.control1,r.control2,r.end,i/steps));return pts;}
export function polyBox(pts){return {minX:Math.min(...pts.map(p=>p.x)),minY:Math.min(...pts.map(p=>p.y)),maxX:Math.max(...pts.map(p=>p.x)),maxY:Math.max(...pts.map(p=>p.y))};}
export function segmentIntersection(a,b,c,d){ return false; }
export function segmentBoxHit(a,b,box){ if((a.x>=box.minX&&a.x<=box.maxX&&a.y>=box.minY&&a.y<=box.maxY)||(b.x>=box.minX&&b.x<=box.maxX&&b.y>=box.minY&&b.y<=box.maxY)) return true; const cs=[[{x:box.minX,y:box.minY},{x:box.maxX,y:box.minY}],[{x:box.maxX,y:box.minY},{x:box.maxX,y:box.maxY}],[{x:box.maxX,y:box.maxY},{x:box.minX,y:box.maxY}],[{x:box.minX,y:box.maxY},{x:box.minX,y:box.minY}]]; return cs.some(([c,d])=>segmentIntersection(a,b,c,d));}
