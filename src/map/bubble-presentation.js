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

export function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }

export const STRUCTURE_SHAPES = {
  root: { kind: 'root-medallion', collisionRadius: 82 },
  fermentation: { kind: 'fermentation-cartouche', collisionRadius: 92 },
  family: { kind: 'family-capsule', collisionRadius: 88 }
};

export function getStyleRadius(state = 'unknown', scale = 1) {
  if (state === 'unknown') return clamp(30 * scale, 10, 24);
  if (state === 'selected' || state === 'reveal-pending') return clamp(46 * scale, 17, 40);
  return clamp(42 * scale, 15, 36);
}

export function getQuestionSize(radius) { return clamp(radius * 0.9, 8, 20); }

export const STYLE_APPARENT_RADII = {
  unknown: [10, 15, 24],
  discovered: [15, 25.2, 36],
  revealPending: [17, 27.6, 40],
  selected: [17, 27.6, 40],
  explored: [15, 25.2, 36]
};

export function getStructureShape(node) {
  if (node.id === 'beer') return STRUCTURE_SHAPES.root;
  if (node.nodeType === 'fermentation') return STRUCTURE_SHAPES.fermentation;
  if (node.nodeType === 'family') return STRUCTURE_SHAPES.family;
  return STRUCTURE_SHAPES.family;
}

export function getApparentStructureSize(node, lod = 1, scale = 1) {
  if (node.id === 'beer') return { width: clamp(220 * scale, 92, 150), height: clamp(135 * scale, 62, 94) };
  if (node.nodeType === 'fermentation') return { width: clamp(245 * scale, 112, 170), height: clamp(96 * scale, 50, 70) };
  return { width: clamp(225 * scale, 108, 160), height: clamp(88 * scale, 48, 66) };
}

export function getNodeVisualKind(node) {
  if (node.functionalType !== 'structure') return 'style-bubble';
  return getStructureShape(node).kind;
}

export function getApparentNodeRadius(node, state = 'unknown', lod = 1, scale = 1) {
  if (node.functionalType === 'structure') return Math.max(getApparentStructureSize(node, lod, scale).width, getApparentStructureSize(node, lod, scale).height) / 2;
  return getStyleRadius(state, scale);
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
