import { circleEdgePoint } from '../../src/map/layout/link-geometry.js';
import { getMaximumNodeMedallionRadius } from '../../src/map/layout/node-metrics.js';
export function createWaypoints(parent, child, parentPos, childPos, siblingIndex=0, siblingCount=1) {
  const dx=childPos.x-parentPos.x, dy=childPos.y-parentPos.y, dist=Math.hypot(dx,dy)||1, nx=-dy/dist, ny=dx/dist;
  const wave=(siblingIndex-(siblingCount-1)/2)*32 + (siblingIndex%2?70:-70);
  const start=circleEdgePoint(parentPos,getMaximumNodeMedallionRadius(parent),{x:parentPos.x+dx,y:parentPos.y+dy});
  const end=circleEdgePoint(childPos,getMaximumNodeMedallionRadius(child),{x:parentPos.x,y:parentPos.y});
  const count=dist>1600?7:dist>900?6:5; const pts=[start];
  for(let i=1;i<count-1;i++){ const t=i/(count-1); const s=Math.sin(t*Math.PI)*wave*(i%2?1:.55); pts.push({x:start.x+(end.x-start.x)*t+nx*s,y:start.y+(end.y-start.y)*t+ny*s}); }
  pts.push(end); return pts;
}
