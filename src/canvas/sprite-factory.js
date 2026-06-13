function roundRect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

export function createBubbleSprite({ size = 60, dpr = 1, family = 'pale-ale-ipa', state = 'unknown', nodeType = 'style', kind = 'style-bubble' } = {}) {
  const isStructure = kind !== 'style-bubble' || ['root', 'fermentation', 'family'].includes(nodeType);
  const px = Math.ceil((size * 2 + 32) * dpr);
  const c = document.createElement('canvas');
  c.width = px;
  c.height = px;
  const ctx = c.getContext('2d');
  if (!ctx) return c;
  ctx.scale(dpr, dpr);
  const cx = px / dpr / 2;
  const cy = cx;
  const colors = { wheat: '#c9ae56', lager: '#d49a24', spontaneous: '#bf6a58', 'mixed-wild': '#8c5873', 'pale-ale-ipa': '#d88718', high: '#bd762d', low: '#c58d2a', core: '#8d7045' };
  const base = colors[family] || colors.core;

  if (isStructure) {
    const w = kind === 'root-medallion' ? size * 1.62 : size * 1.9;
    const h = kind === 'root-medallion' ? size * 1.2 : size * 0.92;
    ctx.shadowColor = `${base}66`;
    ctx.shadowBlur = 14;
    ctx.fillStyle = state === 'structure' ? `${base}ee` : base;
    if (kind === 'root-medallion') {
      ctx.beginPath(); ctx.ellipse(cx, cy, w / 2, h / 2, 0, 0, Math.PI * 2); ctx.fill();
      ctx.lineWidth = 5; ctx.strokeStyle = '#4b321fcc'; ctx.stroke();
      ctx.lineWidth = 2; ctx.strokeStyle = '#fff2c499'; ctx.beginPath(); ctx.ellipse(cx, cy, w / 2 - 10, h / 2 - 10, 0, 0, Math.PI * 2); ctx.stroke();
    } else {
      roundRect(ctx, cx - w / 2, cy - h / 2, w, h, h / 2);
      ctx.fill();
      ctx.lineWidth = 3; ctx.strokeStyle = '#4b321f99'; ctx.stroke();
      ctx.lineWidth = 1.5; ctx.strokeStyle = '#fff2c477'; roundRect(ctx, cx - w / 2 + 8, cy - h / 2 + 8, w - 16, h - 16, h / 2); ctx.stroke();
    }
    return c;
  }

  const r = size;
  ctx.shadowColor = state === 'selected' ? '#fff5c9' : base;
  ctx.shadowBlur = state === 'unknown' ? 5 : 16;
  ctx.globalAlpha = state === 'unknown' ? 0.78 : 1;
  ctx.fillStyle = state === 'unknown' ? `${base}99` : base;
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
  ctx.globalAlpha = 1;
  ctx.strokeStyle = state === 'unknown' ? '#3e2b1f66' : '#fff8';
  ctx.lineWidth = state === 'unknown' ? 1.5 : 3;
  ctx.stroke();
  if (r >= 16) {
    ctx.fillStyle = '#fff7';
    ctx.beginPath(); ctx.ellipse(cx - r * .25, cy - r * .35, r * .22, r * .1, -0.35, 0, Math.PI * 2); ctx.fill();
  }
  return c;
}
