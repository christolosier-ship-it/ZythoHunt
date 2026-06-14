import { STYLE_ICON_RECIPES as recipes } from './style-icon-recipes.js';
import { canonicalResolution, getCachedIcon, getIconCacheStats } from './icon-cache.js';
import { renderIconRecipe, renderUnknownIcon } from './icon-renderer.js';
import { renderStructuralIcon, STRUCTURAL_RECIPES } from './structural-icons.js';
export { getIconCacheStats };
function makeCanvas(size){ if(typeof OffscreenCanvas!=='undefined') return new OffscreenCanvas(size,size); const c=document.createElement('canvas'); c.width=size; c.height=size; return c; }
export function drawNodeIcon(ctx,node,state,x,y,size,detailLevel,theme={}){ const isUnknown=state==='unknown'; const recipe = node.functionalType==='structure' ? STRUCTURAL_RECIPES[node.id] : recipes[node.id]; const res=canonicalResolution(size); const key=[node.functionalType==='structure'?node.id:node.id,isUnknown?'unknown':'known',detailLevel,res,'v1'].join(':'); const img=getCachedIcon(key,()=>{ const c=makeCanvas(res); const cctx=c.getContext('2d'); const b={x:0,y:0,width:res,height:res}; if(isUnknown) renderUnknownIcon(cctx,b,detailLevel,node.visualFamily); else if(node.functionalType==='structure') renderStructuralIcon(cctx,node.id,b,detailLevel,theme); else renderIconRecipe(cctx,recipe,b,detailLevel,theme); return c; }); ctx.drawImage(img,x-size/2,y-size/2,size,size); }
export function drawIcon(ctx,key,x,y,size,colors={}){ drawNodeIcon(ctx,{id:key,functionalType:'structure',visualFamily:'core'},'known',x,y,size,'detail',{}); }
