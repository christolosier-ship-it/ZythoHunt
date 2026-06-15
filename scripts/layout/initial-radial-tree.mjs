import { tree } from 'd3-hierarchy';
export function initialRadialTree(root){ return tree().size([Math.PI*2, 1]).separation((a,b)=>a.parent===b.parent?1:1.8)(root); }
