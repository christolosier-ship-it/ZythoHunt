export function getPrimaryPathToRoot(nodeId, nodes, links) {
  const byId = new Map(nodes.map(node => [node.id, node]));
  const primaryByChild = new Map(links.filter(link => link.linkType === 'primary').map(link => [link.targetId, link]));
  const ids = [];
  let current = byId.get(nodeId);
  while (current?.parentId) {
    const link = primaryByChild.get(current.id);
    if (!link) break;
    ids.push(link.id);
    current = byId.get(current.parentId);
  }
  return ids;
}

export function getActiveSecondaryLinkIds(nodeId, links) {
  if (!nodeId) return [];
  return links.filter(link => link.linkType !== 'primary' && (link.sourceId === nodeId || link.targetId === nodeId)).map(link => link.id);
}
