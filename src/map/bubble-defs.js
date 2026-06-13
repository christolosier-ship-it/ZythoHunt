export function ensureBubbleDefs(svg) {
  if (svg.querySelector('#zytho-defs')) return;
  const ns = 'http://www.w3.org/2000/svg';
  const defs = document.createElementNS(ns, 'defs');
  defs.id = 'zytho-defs';
  defs.innerHTML = `
    <radialGradient id="zytho-structure-gradient" cx="35%" cy="25%"><stop offset="0" stop-color="var(--structure-core-light)"/><stop offset="55%" stop-color="var(--structure-core-mid)"/><stop offset="100%" stop-color="var(--structure-core-dark)"/></radialGradient>
    <radialGradient id="zytho-liquid-pale" cx="35%" cy="25%"><stop offset="0" stop-color="var(--family-pale-light)"/><stop offset="60%" stop-color="var(--family-pale-mid)"/><stop offset="100%" stop-color="var(--family-pale-dark)"/></radialGradient>
    <radialGradient id="zytho-liquid-wheat" cx="35%" cy="25%"><stop offset="0" stop-color="var(--family-wheat-light)"/><stop offset="60%" stop-color="var(--family-wheat-mid)"/><stop offset="100%" stop-color="var(--family-wheat-dark)"/></radialGradient>
    <radialGradient id="zytho-liquid-lager" cx="35%" cy="25%"><stop offset="0" stop-color="var(--family-lager-light)"/><stop offset="60%" stop-color="var(--family-lager-mid)"/><stop offset="100%" stop-color="var(--family-lager-dark)"/></radialGradient>
    <radialGradient id="zytho-liquid-spontaneous" cx="35%" cy="25%"><stop offset="0" stop-color="var(--family-spontaneous-light)"/><stop offset="60%" stop-color="var(--family-spontaneous-mid)"/><stop offset="100%" stop-color="var(--family-spontaneous-dark)"/></radialGradient>
    <radialGradient id="zytho-liquid-wild" cx="35%" cy="25%"><stop offset="0" stop-color="var(--family-wild-light)"/><stop offset="60%" stop-color="var(--family-wild-mid)"/><stop offset="100%" stop-color="var(--family-wild-dark)"/></radialGradient>
    <filter id="zytho-halo" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="zytho-selected-halo" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;
  svg.prepend(defs);
}
