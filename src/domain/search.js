export function normalizeSearchText(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function buildSearchIndex(nodes, aliases = {}) {
  const capturableNodes = nodes.filter(node => node.functionalType === 'capturable');
  return capturableNodes.map(node => {
    const terms = [node.name, node.shortName, node.originalName, ...(aliases[node.id] ?? [])];
    return { node, terms: [...new Set(terms.map(normalizeSearchText).filter(Boolean))] };
  });
}

export function findDebugStyleMatches(input, index) {
  const query = normalizeSearchText(input);
  if (!query) return { status: 'empty', matches: [] };
  const matches = index.filter(entry => entry.terms.includes(query)).map(entry => entry.node);
  if (matches.length === 0) return { status: 'none', matches: [] };
  if (matches.length === 1) return { status: 'single', matches };
  return { status: 'ambiguous', matches };
}
