export function computeVisibleMapState(nodes, links, discoveredStyleIds = new Set()) {
  const discovered = discoveredStyleIds instanceof Set ? discoveredStyleIds : new Set(discoveredStyleIds);
  const byId = new Map(nodes.map(n => [n.id, n]));
  const visibleNodeIds = new Set(nodes.filter(n => n.functionalType === 'structure' || discovered.has(n.id)).map(n => n.id));
  const interactiveNodeIds = new Set(nodes.filter(n => n.functionalType === 'capturable' && discovered.has(n.id)).map(n => n.id));
  const visibleLinkIds = new Set();
  const primaryByChild = new Map(links.filter(l => l.linkType === 'primary').map(l => [l.targetId, l]));
  const primaryByParent = new Map();
  for (const l of links.filter(l => l.linkType === 'primary')) { if(!primaryByParent.has(l.sourceId)) primaryByParent.set(l.sourceId, []); primaryByParent.get(l.sourceId).push(l); if (byId.get(l.sourceId)?.functionalType==='structure' && byId.get(l.targetId)?.functionalType==='structure') visibleLinkIds.add(l.id); }
  for (const id of discovered) { let cur = byId.get(id); while(cur?.parentId){ const l=primaryByChild.get(cur.id); if(l) visibleLinkIds.add(l.id); cur=byId.get(cur.parentId); } for (const l of primaryByParent.get(id)||[]) visibleLinkIds.add(l.id); }
  for (const l of links.filter(l => l.linkType !== 'primary' && l.visibleWhenHidden)) if(discovered.has(l.sourceId)||discovered.has(l.targetId)) visibleLinkIds.add(l.id);
  return { visibleNodes: nodes.filter(n=>visibleNodeIds.has(n.id)), visibleLinks: links.filter(l=>visibleLinkIds.has(l.id)), interactiveNodeIds, visibleNodeIds, visibleLinkIds };
}
