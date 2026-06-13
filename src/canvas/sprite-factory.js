export function createStyleSprite({ sourceDiameterPx = 48, dpr = 1, family = 'pale-ale-ipa', state = 'unknown' } = {}) {
  const physical = Math.ceil(sourceDiameterPx * dpr);
  const c = document.createElement('canvas');
  c.width = physical; c.height = physical;
  const ctx = c.getContext('2d');
  if (!ctx) return c;
  ctx.scale(dpr, dpr);
  const cx = sourceDiameterPx / 2; const cy = sourceDiameterPx / 2;
  const radius = sourceDiameterPx * 0.42;
  const colors = { wheat: '#c9ae56', lager: '#d49a24', spontaneous: '#bf6a58', 'mixed-wild': '#8c5873', 'pale-ale-ipa': '#d88718', high: '#bd762d', low: '#c58d2a', core: '#8d7045' };
  const base = colors[family] || colors.core;
  ctx.shadowColor = state === 'selected' ? '#fff5c9' : `${base}99`;
  ctx.shadowBlur = state === 'unknown' ? sourceDiameterPx * 0.04 : sourceDiameterPx * 0.08;
  ctx.globalAlpha = state === 'unknown' ? 0.78 : 1;
  ctx.fillStyle = state === 'unknown' ? `${base}99` : base;
  ctx.beginPath(); ctx.arc(cx, cy, radius, 0, Math.PI * 2); ctx.fill();
  ctx.globalAlpha = 1;
  ctx.strokeStyle = state === 'unknown' ? '#3e2b1f66' : '#fff8';
  ctx.lineWidth = Math.max(1, sourceDiameterPx * (state === 'unknown' ? 0.026 : 0.036));
  ctx.stroke();
  if (sourceDiameterPx >= 48) {
    ctx.fillStyle = '#fff7';
    ctx.beginPath(); ctx.ellipse(cx - radius * .25, cy - radius * .35, radius * .22, radius * .1, -0.35, 0, Math.PI * 2); ctx.fill();
  }
  return c;
}

export const createBubbleSprite = createStyleSprite;
