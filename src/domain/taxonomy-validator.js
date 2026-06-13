import { APP_VERSION, EXPECTED_COUNTS, TAXONOMY_SCHEMA_VERSION, TAXONOMY_VERSION, WORLD } from '../config.js';
import { normalizeSearchText } from './search.js';

const NODE_TYPES = new Set(['root', 'fermentation', 'family', 'branch', 'style', 'substyle', 'variant']);
const FUNCTIONAL_TYPES = new Set(['structure', 'capturable']);
const LINK_TYPES = new Set(['primary', 'related-style']);
const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const REQUIRED_NODE_FIELDS = ['id', 'nodeType', 'functionalType', 'name', 'shortName', 'originalName', 'rank', 'secondaryParentIds', 'position', 'visualFamily', 'capturable', 'status', 'sourceRefs'];

export function validateTaxonomy(nodes, links, aliases, version, world = WORLD, appMeta = {}) {
  const errors = [];
  const warnings = [];
  const add = message => errors.push(message);
  const warn = message => warnings.push(message);

  if (!Array.isArray(nodes)) add('taxonomy-nodes.json must contain an array');
  if (!Array.isArray(links)) add('taxonomy-links.json must contain an array');
  if (!aliases || Array.isArray(aliases) || typeof aliases !== 'object') add('aliases.json must contain an object');
  if (!version || Array.isArray(version) || typeof version !== 'object') add('taxonomy-version.json must contain an object');
  if (errors.length) return { valid: false, errors, warnings, stats: {} };

  const ids = new Set();
  const nodeById = new Map();
  for (const node of nodes) {
    for (const field of REQUIRED_NODE_FIELDS) if (!(field in node)) add(`missing node field ${field}: ${node.id ?? '<unknown>'}`);
    if (!node.id) add('node id empty');
    if (node.id && !ID_RE.test(node.id)) add(`invalid node id: ${node.id}`);
    if (ids.has(node.id)) add(`duplicate node id: ${node.id}`);
    ids.add(node.id);
    nodeById.set(node.id, node);
  }

  for (const node of nodes) {
    if (!NODE_TYPES.has(node.nodeType)) add(`invalid nodeType: ${node.id}`);
    if (!FUNCTIONAL_TYPES.has(node.functionalType)) add(`invalid functionalType: ${node.id}`);
    if ((node.functionalType === 'structure') === Boolean(node.capturable)) add(`functionalType/capturable mismatch: ${node.id}`);
    if (node.id !== 'beer' && !node.parentId) add(`missing parent: ${node.id}`);
    if (node.parentId && !nodeById.has(node.parentId)) add(`unknown parent: ${node.id}`);
    if (!Array.isArray(node.secondaryParentIds)) add(`invalid secondaryParentIds: ${node.id}`);
    else {
      const seen = new Set();
      for (const secondaryId of node.secondaryParentIds) {
        if (!nodeById.has(secondaryId)) add(`unknown secondaryParentId: ${node.id}`);
        if (secondaryId === node.id) add(`self secondaryParentId: ${node.id}`);
        if (secondaryId === node.parentId) add(`secondaryParentId duplicates parentId: ${node.id}`);
        if (seen.has(secondaryId)) add(`duplicate secondaryParentId: ${node.id}`);
        seen.add(secondaryId);
      }
    }
    if (!node.position || typeof node.position.x !== 'number' || typeof node.position.y !== 'number' || Number.isNaN(node.position.x) || Number.isNaN(node.position.y)) add(`invalid position: ${node.id}`);
    else if (node.position.x < 0 || node.position.y < 0 || node.position.x > world.width || node.position.y > world.height) add(`position out of bounds: ${node.id}`);
    if (node.familyId && !nodeById.has(node.familyId)) add(`unknown familyId: ${node.id}`);
  }

  const roots = nodes.filter(node => !node.parentId);
  if (roots.length !== 1) add('multiple or missing root nodes');
  const root = roots[0];
  if (root) {
    if (root.id !== 'beer') add('unexpected root id');
    if (root.functionalType !== 'structure') add('root must be structural');
    if (root.capturable !== false) add('root must not be capturable');
  }

  for (const node of nodes) {
    const seen = new Set();
    let current = node;
    while (current?.parentId) {
      if (seen.has(current.id)) { add(`cycle in primary hierarchy: ${node.id}`); break; }
      seen.add(current.id);
      current = nodeById.get(current.parentId);
    }
    if (root && current?.id !== root.id) add(`node not reachable from root: ${node.id}`);
  }

  const linkIds = new Set();
  const logical = new Set();
  const primaryIncoming = new Map();
  const secondaryPairs = new Set();
  for (const link of links) {
    if (!link.id) add('link id empty');
    if (linkIds.has(link.id)) add(`duplicate link id: ${link.id}`);
    linkIds.add(link.id);
    if (!nodeById.has(link.sourceId)) add(`unknown link source: ${link.id}`);
    if (!nodeById.has(link.targetId)) add(`unknown link target: ${link.id}`);
    if (link.sourceId === link.targetId) add(`reflexive link: ${link.id}`);
    if (!LINK_TYPES.has(link.linkType)) add(`invalid linkType: ${link.id}`);
    if (typeof link.visibleWhenHidden !== 'boolean') add(`visibleWhenHidden must be boolean: ${link.id}`);
    const key = link.linkType === 'primary' ? `${link.sourceId}>${link.targetId}` : [link.sourceId, link.targetId].sort().join('<>');
    if (logical.has(`${link.linkType}:${key}`)) add(`duplicate logical link: ${link.id}`);
    logical.add(`${link.linkType}:${key}`);
    if (link.linkType === 'primary') {
      if (primaryIncoming.has(link.targetId)) add(`multiple primary incoming links: ${link.targetId}`);
      primaryIncoming.set(link.targetId, link.sourceId);
      const target = nodeById.get(link.targetId);
      if (target && target.parentId !== link.sourceId) add(`primary link contradicts parentId: ${link.id}`);
    } else {
      if (secondaryPairs.has(key)) add(`duplicate secondary link: ${link.id}`);
      secondaryPairs.add(key);
    }
  }
  if (root && primaryIncoming.has(root.id)) add('root has primary incoming link');
  for (const node of nodes) if (node.parentId && primaryIncoming.get(node.id) !== node.parentId) add(`missing primary link for parentId: ${node.id}`);

  const aliasOwner = new Map();
  const primaryNames = new Map(nodes.map(node => [normalizeSearchText(node.name), node.id]));
  for (const [id, list] of Object.entries(aliases)) {
    const node = nodeById.get(id);
    if (!node) add(`alias for unknown style: ${id}`);
    if (node && node.functionalType !== 'capturable') warn(`alias for non capturable node: ${id}`);
    if (!Array.isArray(list)) { add(`invalid alias array: ${id}`); continue; }
    const local = new Set();
    for (const alias of list) {
      if (!String(alias).trim()) add(`empty alias: ${id}`);
      const normalized = normalizeSearchText(alias);
      if (local.has(normalized)) add(`duplicate alias for style: ${id}`);
      local.add(normalized);
      if (node && normalized === normalizeSearchText(node.name)) add(`alias equals primary name: ${id}`);
      const primaryOwner = primaryNames.get(normalized);
      if (primaryOwner && primaryOwner !== id) add(`alias equals another primary name: ${alias}`);
      if (aliasOwner.has(normalized) && aliasOwner.get(normalized) !== id) add(`ambiguous alias: ${alias}`);
      aliasOwner.set(normalized, id);
    }
  }

  const stats = {
    nodeCount: nodes.length,
    structureNodeCount: nodes.filter(node => node.functionalType === 'structure').length,
    capturableNodeCount: nodes.filter(node => node.functionalType === 'capturable').length,
    primaryLinkCount: links.filter(link => link.linkType === 'primary').length,
    secondaryLinkCount: links.filter(link => link.linkType !== 'primary').length
  };
  for (const [key, value] of Object.entries(EXPECTED_COUNTS)) if (stats[key] !== value) add(`expected counter mismatch: ${key}`);
  for (const key of Object.keys(stats)) if (version?.[key] !== undefined && version[key] !== stats[key]) add(`version counter mismatch: ${key}`);
  if (version?.appVersion !== APP_VERSION) add('taxonomy appVersion mismatch');
  if (version?.taxonomyVersion !== TAXONOMY_VERSION) add('taxonomy version mismatch');
  if (version?.schemaVersion !== TAXONOMY_SCHEMA_VERSION) add('taxonomy schemaVersion mismatch');
  if (appMeta.packageVersion && appMeta.packageVersion !== APP_VERSION) add('package appVersion mismatch');

  return { valid: errors.length === 0, errors, warnings, stats };
}
