import { resolveNodeVisualState } from '../domain/node-visual-state.js';
import { createMicroBubbles, getFamilyClass, getNodeRadius, textSizeForLines, wrapNodeLabel } from './bubble-presentation.js';

const NS = 'http://www.w3.org/2000/svg';
const el = name => document.createElementNS(NS, name);
const liquidGradient = node => node.visualFamily === 'wheat' ? 'zytho-liquid-wheat' : node.visualFamily === 'lager' || node.visualFamily === 'low' ? 'zytho-liquid-lager' : node.visualFamily === 'spontaneous' ? 'zytho-liquid-spontaneous' : node.visualFamily === 'mixed-wild' ? 'zytho-liquid-wild' : 'zytho-liquid-pale';

function appendLabel(group, text, radius, state) {
  const lines = wrapNodeLabel(text);
  const label = el('text');
  label.setAttribute('text-anchor', 'middle');
  label.setAttribute('class', `node-label ${state === 'reveal-pending' ? 'is-question' : ''}`);
  label.style.fontSize = `${state === 'reveal-pending' ? 42 : textSizeForLines(lines)}px`;
  const start = lines.length === 1 ? 7 : -(lines.length - 1) * 9;
  lines.forEach((part, index) => { const t = el('tspan'); t.setAttribute('x', '0'); t.setAttribute('y', String(start + index * 18)); t.textContent = part; label.append(t); });
  group.append(label);
  return { lines, radius };
}

export function renderNodes(group, nodes, options = {}) {
  group.replaceChildren();
  const { presentationState = {}, discoveredIds = new Set(), onSelect } = options;
  for (const node of nodes) {
    const visualState = resolveNodeVisualState(node, presentationState);
    const labelText = visualState === 'reveal-pending' ? '?' : (node.shortName || node.name);
    const lineCount = wrapNodeLabel(labelText).length;
    const radius = getNodeRadius(node, lineCount);
    const g = el('g');
    g.setAttribute('class', `map-node is-${node.functionalType === 'structure' ? 'structure' : 'style'} ${getFamilyClass(node)} visual-${visualState}`);
    g.setAttribute('transform', `translate(${node.position.x} ${node.position.y})`);
    g.dataset.nodeId = node.id;
    g.dataset.visualState = visualState;

    const desc = el('desc');
    desc.textContent = node.functionalType === 'capturable' ? `Style ${visualState} : ${node.name}` : `Nœud structurel : ${node.name}`;
    g.append(desc);

    if (node.functionalType === 'capturable' && discoveredIds.has(node.id) && visualState !== 'reveal-pending') {
      g.setAttribute('role', 'button'); g.setAttribute('tabindex', '0');
      g.setAttribute('aria-label', `Sélectionner le style ${node.name}`);
      g.setAttribute('aria-pressed', String(presentationState.selectedId === node.id));
      g.addEventListener('click', () => onSelect?.(node.id));
      g.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onSelect?.(node.id); } });
    }

    const motion = el('g');
    motion.setAttribute('class', 'node-motion');
    const halo = el('circle'); halo.setAttribute('class', 'node-halo'); halo.setAttribute('r', String(radius + 9)); motion.append(halo);
    const core = el('circle'); core.setAttribute('class', 'node-core'); core.setAttribute('r', String(radius)); core.setAttribute('fill', node.functionalType === 'structure' ? 'url(#zytho-structure-gradient)' : `url(#${liquidGradient(node)})`); motion.append(core);
    const lower = el('path'); lower.setAttribute('class', 'node-liquid-shadow'); lower.setAttribute('d', `M ${-radius * .78} ${radius * .18} Q 0 ${radius * .55} ${radius * .78} ${radius * .18} L ${radius * .7} ${radius * .78} L ${-radius * .7} ${radius * .78} Z`); motion.append(lower);
    const rim = el('circle'); rim.setAttribute('class', 'node-glass'); rim.setAttribute('r', String(radius)); motion.append(rim);
    const shine = el('ellipse'); shine.setAttribute('class', 'node-shine'); shine.setAttribute('cx', String(-radius * .25)); shine.setAttribute('cy', String(-radius * .34)); shine.setAttribute('rx', String(radius * .23)); shine.setAttribute('ry', String(radius * .12)); shine.setAttribute('transform', '-18'); motion.append(shine);
    if (node.functionalType === 'capturable' && visualState !== 'reveal-pending') {
      const bubbles = el('g'); bubbles.setAttribute('class', 'microbubbles');
      for (const b of createMicroBubbles(node)) { const c=el('circle'); c.setAttribute('cx', b.x); c.setAttribute('cy', b.y); c.setAttribute('r', b.r); c.style.animationDelay = `${b.delay}s`; bubbles.append(c); }
      motion.append(bubbles);
    }
    if (visualState === 'explored') { for (let i=0;i<3;i++){ const m=el('circle'); m.setAttribute('class','explored-marker'); m.setAttribute('r','4'); m.setAttribute('cx', Math.cos(i*2.1)* (radius+13)); m.setAttribute('cy', Math.sin(i*2.1)* (radius+13)); motion.append(m);} }
    appendLabel(motion, labelText, radius, visualState);
    if (node.subtitle) { const sub=el('text'); sub.setAttribute('text-anchor','middle'); sub.setAttribute('y', String(radius+24)); sub.setAttribute('class','node-subtitle'); sub.textContent=node.subtitle; motion.append(sub); }
    g.append(motion); group.append(g);
  }
}
