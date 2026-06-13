const FAMILY_CLASS = new Map([
  ['core', 'family-core'], ['high', 'family-core'], ['low', 'family-lager'],
  ['pale-ale-ipa', 'family-pale'], ['wheat', 'family-wheat'], ['lager', 'family-lager'],
  ['spontaneous', 'family-spontaneous'], ['mixed-wild', 'family-wild']
]);

export function getFamilyClass(node) { return FAMILY_CLASS.get(node.visualFamily) ?? 'family-core'; }

export function getNodeRadius(node, lineCount = 1) {
  if (node.id === 'beer') return 62;
  if (node.functionalType === 'structure' && node.nodeType === 'fermentation') return 60;
  if (node.functionalType === 'structure') return 56;
  if ((node.shortName || node.name).length > 22 || lineCount > 2) return 52;
  return 48;
}

export const STRUCTURE_SHAPES = {
  root: { kind: 'root-medallion', sizes: [{ width: 72, height: 54 }, { width: 88, height: 64 }, { width: 102, height: 74 }], collisionRadius: 58 },
  fermentation: { kind: 'fermentation-cartouche', sizes: [{ width: 94, height: 42 }, { width: 118, height: 52 }, { width: 136, height: 60 }], collisionRadius: 76 },
  family: { kind: 'family-capsule', sizes: [{ width: 104, height: 42 }, { width: 128, height: 50 }, { width: 146, height: 58 }], collisionRadius: 82 }
};

export const STYLE_APPARENT_RADII = {
  unknown: [7, 15, 27],
  discovered: [11, 25, 39],
  revealPending: [11.8, 27, 42],
  selected: [11.8, 27, 42],
  explored: [11, 25, 39]
};

export function getStructureShape(node) {
  if (node.id === 'beer') return STRUCTURE_SHAPES.root;
  if (node.nodeType === 'fermentation') return STRUCTURE_SHAPES.fermentation;
  if (node.nodeType === 'family') return STRUCTURE_SHAPES.family;
  return STRUCTURE_SHAPES.family;
}

export function getApparentStructureSize(node, lod = 1) {
  const shape = getStructureShape(node);
  const size = shape.sizes[Math.max(0, Math.min(2, lod))] ?? shape.sizes[1];
  return {
    width: Math.min(160, size.width),
    height: Math.min(80, size.height)
  };
}

export function getNodeVisualKind(node) {
  if (node.functionalType !== 'structure') return 'style-bubble';
  return getStructureShape(node).kind;
}

export function getApparentNodeRadius(node, state = 'unknown', lod = 1, scale = 1) {
  if (node.functionalType === 'structure') return Math.max(getApparentStructureSize(node, lod).width, getApparentStructureSize(node, lod).height) / 2;
  const key = state === 'unknown' ? 'unknown' : state === 'reveal-pending' ? 'revealPending' : state === 'selected' ? 'selected' : state === 'explored' ? 'explored' : 'discovered';
  return STYLE_APPARENT_RADII[key][lod] ?? STYLE_APPARENT_RADII.unknown[1];
}

export function getWorldCollisionRadius(node, { lod = 2, state = 'unknown', scale = 1 } = {}) {
  if (node.functionalType === 'structure') return getStructureShape(node).collisionRadius;
  return getApparentNodeRadius(node, state, lod, scale) / Math.max(scale, 0.001);
}

export function getStructureLabelText(node) {
  if (node.id === 'fermentation-high') return ['ALE', 'Fermentation haute'];
  if (node.id === 'fermentation-low') return ['LAGER', 'Fermentation basse'];
  if (node.id === 'fermentation-spontaneous') return ['Fermentation', 'spontanée'];
  if (node.id === 'fermentation-mixed-wild') return ['Mixte /', 'sauvage'];
  if (node.id === 'family-pale-ale-ipa') return ['Pale Ale', '& IPA'];
  if (node.id === 'family-wheat-beer') return ['Bières', 'de blé'];
  if (node.id === 'family-pale-lager') return ['Lagers', 'blondes'];
  return wrapNodeLabel(node.name, 3);
}

export function wrapNodeLabel(text, maxLines = 3) {
  const normalized = String(text ?? '').replace(/\s+/g, ' ').trim();
  const words = normalized.split(' ').filter(Boolean);
  const max = normalized.length > 24 ? 13 : 15;
  const lines = [];
  let current = '';
  for (const word of words) {
    if (`${current} ${word}`.trim().length > max && current) { lines.push(current); current = word; }
    else current = `${current} ${word}`.trim();
  }
  if (current) lines.push(current);
  if (lines.length <= maxLines) return lines;
  return [lines[0], lines.slice(1, -1).join(' '), lines.at(-1)].filter(Boolean).slice(0, maxLines);
}

export function textSizeForLines(lines) {
  const longest = Math.max(...lines.map(line => line.length), 1);
  if (lines.length >= 3 || longest > 18) return 15;
  if (longest > 13) return 17;
  return 20;
}

function hashId(id) { return [...id].reduce((sum, char, index) => sum + char.charCodeAt(0) * (index + 3), 0); }

export function createMicroBubbles(node, count = 3) {
  const base = hashId(node.id);
  return Array.from({ length: Math.min(3, count) }, (_, index) => {
    const angle = ((base + index * 97) % 360) * Math.PI / 180;
    const distance = 12 + ((base + index * 17) % 25);
    return {
      x: Math.round(Math.cos(angle) * distance),
      y: Math.round(Math.sin(angle) * distance + 8),
      r: 3 + ((base + index * 5) % 4),
      delay: -((base + index * 113) % 7000) / 1000
    };
  });
}
