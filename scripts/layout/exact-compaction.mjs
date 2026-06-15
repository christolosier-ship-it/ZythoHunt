export function compactDeterministically(nodes){ for(const n of nodes){ if(n.id==='beer')continue; n.x*=0.66; n.y*=0.66; } return {passes:1}; }
