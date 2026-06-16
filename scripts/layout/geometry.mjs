export const TAU = Math.PI * 2;
export const GEOMETRY_EPSILON = 1e-6;
export const polar = (c,a,r)=>({x:c.x+Math.cos(a)*r,y:c.y+Math.sin(a)*r});
export const round = (n,d=2)=>Number(n.toFixed(d));
export const boxIntersects = (a,b)=>a.minX <= b.maxX + GEOMETRY_EPSILON && a.maxX + GEOMETRY_EPSILON >= b.minX && a.minY <= b.maxY + GEOMETRY_EPSILON && a.maxY + GEOMETRY_EPSILON >= b.minY;
export const unionBox = (boxes)=>({minX:Math.min(...boxes.map(b=>b.minX)),minY:Math.min(...boxes.map(b=>b.minY)),maxX:Math.max(...boxes.map(b=>b.maxX)),maxY:Math.max(...boxes.map(b=>b.maxY))});
export const pointBox = p=>({minX:p.x,minY:p.y,maxX:p.x,maxY:p.y});
export function expandBox(b,p){return {minX:b.minX-p,minY:b.minY-p,maxX:b.maxX+p,maxY:b.maxY+p,width:b.maxX-b.minX+p*2,height:b.maxY-b.minY+p*2};}
export function cubic(p0,p1,p2,p3,t){const u=1-t;return {x:u*u*u*p0.x+3*u*u*t*p1.x+3*u*t*t*p2.x+t*t*t*p3.x,y:u*u*u*p0.y+3*u*u*t*p1.y+3*u*t*t*p2.y+t*t*t*p3.y};}
export function sampleBezier(r,steps=24){ if(Array.isArray(r.segments)){ const pts=[r.start]; let cur=r.start; for(const seg of r.segments){ for(let i=1;i<=steps;i++) pts.push(cubic(cur,seg.control1,seg.control2,seg.end,i/steps)); cur=seg.end; } return pts; } const pts=[];for(let i=0;i<=steps;i++)pts.push(cubic(r.start,r.control1,r.control2,r.end,i/steps));return pts;}
export function polyBox(pts){return {minX:Math.min(...pts.map(p=>p.x)),minY:Math.min(...pts.map(p=>p.y)),maxX:Math.max(...pts.map(p=>p.x)),maxY:Math.max(...pts.map(p=>p.y))};}
export const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
export function orientation(a,b,c){ const v=(b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x); return Math.abs(v)<=GEOMETRY_EPSILON?0:(v>0?1:-1); }
export function pointOnSegment(p,a,b){ return orientation(a,b,p)===0 && p.x>=Math.min(a.x,b.x)-GEOMETRY_EPSILON && p.x<=Math.max(a.x,b.x)+GEOMETRY_EPSILON && p.y>=Math.min(a.y,b.y)-GEOMETRY_EPSILON && p.y<=Math.max(a.y,b.y)+GEOMETRY_EPSILON; }
export function segmentsCollinear(a,b,c,d){ return orientation(a,b,c)===0 && orientation(a,b,d)===0; }
export function collinearOverlap(a,b,c,d){ if(!segmentsCollinear(a,b,c,d)) return false; const ax=Math.abs(a.x-b.x)>=Math.abs(a.y-b.y); const p=ax?[a.x,b.x].sort((x,y)=>x-y):[a.y,b.y].sort((x,y)=>x-y); const q=ax?[c.x,d.x].sort((x,y)=>x-y):[c.y,d.y].sort((x,y)=>x-y); return Math.max(p[0],q[0]) <= Math.min(p[1],q[1]) + GEOMETRY_EPSILON; }
export function properSegmentIntersection(a,b,c,d){ const o1=orientation(a,b,c),o2=orientation(a,b,d),o3=orientation(c,d,a),o4=orientation(c,d,b); return o1!==0&&o2!==0&&o3!==0&&o4!==0&&o1!==o2&&o3!==o4; }
export function segmentIntersectionDetail(a,b,c,d){ const overlap=collinearOverlap(a,b,c,d); const proper=properSegmentIntersection(a,b,c,d); const touches=[a,b].some(p=>pointOnSegment(p,c,d))||[c,d].some(p=>pointOnSegment(p,a,b)); return {intersects:proper||touches||overlap,proper,touches:touches&&!proper,overlap:overlap && !(distance(a,c)<=GEOMETRY_EPSILON||distance(a,d)<=GEOMETRY_EPSILON||distance(b,c)<=GEOMETRY_EPSILON||distance(b,d)<=GEOMETRY_EPSILON)}; }
export function segmentIntersection(a,b,c,d){ return segmentIntersectionDetail(a,b,c,d).intersects; }
export function distancePointToSegment(p,a,b){ const dx=b.x-a.x,dy=b.y-a.y,len2=dx*dx+dy*dy; if(len2<=GEOMETRY_EPSILON) return distance(p,a); const t=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/len2)); return distance(p,{x:a.x+dx*t,y:a.y+dy*t}); }
export function segmentCircleIntersection(a,b,circle){ return distancePointToSegment(circle,a,b) <= circle.radius + GEOMETRY_EPSILON; }
export function circleCircleDistance(a,b){ return distance(a,b)-a.radius-b.radius; }
export function segmentBox(a,b){ return {minX:Math.min(a.x,b.x),minY:Math.min(a.y,b.y),maxX:Math.max(a.x,b.x),maxY:Math.max(a.y,b.y)}; }
export function circlesAndSegmentsBox(circles=[],segments=[]){ const boxes=[...circles.map(c=>({minX:c.x-c.radius,minY:c.y-c.radius,maxX:c.x+c.radius,maxY:c.y+c.radius})),...segments.map(s=>segmentBox(s.start,s.end))]; return unionBox(boxes); }
export function segmentBoxHit(a,b,box){ if((a.x>=box.minX&&a.x<=box.maxX&&a.y>=box.minY&&a.y<=box.maxY)||(b.x>=box.minX&&b.x<=box.maxX&&b.y>=box.minY&&b.y<=box.maxY)) return true; const cs=[[{x:box.minX,y:box.minY},{x:box.maxX,y:box.minY}],[{x:box.maxX,y:box.minY},{x:box.maxX,y:box.maxY}],[{x:box.maxX,y:box.maxY},{x:box.minX,y:box.maxY}],[{x:box.minX,y:box.maxY},{x:box.minX,y:box.minY}]]; return cs.some(([c,d])=>segmentIntersection(a,b,c,d));}
