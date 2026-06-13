const FAMILY_CLASS = new Map([
  ['core', 'family-core'], ['high', 'family-core'], ['low', 'family-lager'],
  ['pale-ale-ipa', 'family-pale'], ['wheat', 'family-wheat'], ['lager', 'family-lager'],
  ['spontaneous', 'family-spontaneous'], ['mixed-wild', 'family-wild']
]);

export function getFamilyClass(node) { return FAMILY_CLASS.get(node.visualFamily) ?? 'family-core'; }

export function getNodeRadius(node, lineCount = 1) {
  if (node.id === 'beer') return 86;
  if (node.functionalType === 'structure' && node.nodeType === 'fermentation') return 74;
  if (node.functionalType === 'structure') return 68;
  if ((node.shortName || node.name).length > 22 || lineCount > 2) return 66;
  return 60;
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
