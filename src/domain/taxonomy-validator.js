import { WORLD } from '../config.js';
const NODE_TYPES = new Set(['root','fermentation','family','branch','style','substyle','variant']);
const FUNCTIONAL_TYPES = new Set(['structure','capturable']);
const LINK_TYPES = new Set(['primary','related-style']);
const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const norm = (s) => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ').trim();
export function validateTaxonomy(nodes, links, aliases, version, world = WORLD) {
  const errors=[], warnings=[]; const ids=new Set(), nodeById=new Map();
  const add=e=>errors.push(e);
  for (const n of nodes||[]) { if(!n.id) add('node id empty'); if(n.id&&!ID_RE.test(n.id)) add(`invalid node id: ${n.id}`); if(ids.has(n.id)) add(`duplicate node id: ${n.id}`); ids.add(n.id); nodeById.set(n.id,n);
    if(!NODE_TYPES.has(n.nodeType)) add(`invalid nodeType: ${n.id}`); if(!FUNCTIONAL_TYPES.has(n.functionalType)) add(`invalid functionalType: ${n.id}`);
    if((n.functionalType==='structure')===!!n.capturable) add(`functionalType/capturable mismatch: ${n.id}`);
    if(n.id!=='beer'&&!n.parentId) add(`missing parent: ${n.id}`); if(n.parentId&&!nodeById.has(n.parentId)&&!(nodes||[]).some(x=>x.id===n.parentId)) add(`unknown parent: ${n.id}`);
    if(!n.position || typeof n.position.x!=='number' || typeof n.position.y!=='number' || Number.isNaN(n.position.x) || Number.isNaN(n.position.y)) add(`invalid position: ${n.id}`);
    else if(n.position.x<0||n.position.y<0||n.position.x>world.width||n.position.y>world.height) add(`position out of bounds: ${n.id}`);
    if(n.familyId && !(nodes||[]).some(x=>x.id===n.familyId)) add(`unknown familyId: ${n.id}`);
  }
  if((nodes||[]).filter(n=>!n.parentId).length!==1) add('multiple or missing root nodes');
  for(const n of nodes||[]) { const seen=new Set(); let cur=n; while(cur?.parentId){ if(seen.has(cur.id)){ add(`cycle in primary hierarchy: ${n.id}`); break;} seen.add(cur.id); cur=nodeById.get(cur.parentId);} }
  const linkIds=new Set(), logical=new Set(), primaryIncoming=new Map();
  for(const l of links||[]) { if(!l.id) add('link id empty'); if(linkIds.has(l.id)) add(`duplicate link id: ${l.id}`); linkIds.add(l.id);
    if(!nodeById.has(l.sourceId)) add(`unknown link source: ${l.id}`); if(!nodeById.has(l.targetId)) add(`unknown link target: ${l.id}`); if(l.sourceId===l.targetId) add(`reflexive link: ${l.id}`); if(!LINK_TYPES.has(l.linkType)) add(`invalid linkType: ${l.id}`);
    const key = l.linkType==='primary' ? `${l.linkType}:${l.sourceId}>${l.targetId}` : `${l.linkType}:${[l.sourceId,l.targetId].sort().join('<>')}`; if(logical.has(key)) add(`duplicate logical link: ${l.id}`); logical.add(key);
    if(l.linkType==='primary') { if(primaryIncoming.has(l.targetId)) add(`multiple primary incoming links: ${l.targetId}`); primaryIncoming.set(l.targetId,l.sourceId); const t=nodeById.get(l.targetId); if(t && t.parentId!==l.sourceId) add(`primary link contradicts parentId: ${l.id}`); }
  }
  for(const n of nodes||[]) if(n.parentId && primaryIncoming.get(n.id)!==n.parentId) add(`missing primary link for parentId: ${n.id}`);
  for(const [id, arr] of Object.entries(aliases||{})) { const n=nodeById.get(id); if(!n) add(`alias for unknown style: ${id}`); if(!Array.isArray(arr)) { add(`invalid alias array: ${id}`); continue; } const local=new Set(); for(const a of arr){ if(!String(a).trim()) add(`empty alias: ${id}`); const na=norm(a); if(local.has(na)) add(`duplicate alias for style: ${id}`); local.add(na); if(n && na===norm(n.name)) add(`alias equals primary name: ${id}`); } }
  const aliasOwner=new Map(); for(const [id, arr] of Object.entries(aliases||{})) if(Array.isArray(arr)) for(const a of arr){ const na=norm(a); if(aliasOwner.has(na)&&aliasOwner.get(na)!==id) add(`ambiguous alias: ${a}`); aliasOwner.set(na,id); }
  const stats={nodeCount:nodes.length,structureNodeCount:nodes.filter(n=>n.functionalType==='structure').length,capturableNodeCount:nodes.filter(n=>n.functionalType==='capturable').length,primaryLinkCount:links.filter(l=>l.linkType==='primary').length,secondaryLinkCount:links.filter(l=>l.linkType!=='primary').length};
  for(const k of Object.keys(stats)) if(version?.[k]!==undefined && version[k]!==stats[k]) add(`version counter mismatch: ${k}`);
  return {valid: errors.length===0, errors, warnings, stats};
}
