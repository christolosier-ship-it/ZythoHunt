export function measureOverlayInsets(viewport, elements = [], margin = 12) {
  const vr = viewport.getBoundingClientRect(); const insets = { top: 0, right: 0, bottom: 0, left: 0 };
  for (const el of elements.filter(Boolean)) { const r = el.getBoundingClientRect(); if (r.width === 0 && r.height === 0) continue; if (r.bottom > vr.top && r.top < vr.bottom) { if (r.top <= vr.top + 4) insets.top = Math.max(insets.top, r.bottom - vr.top + margin); if (r.bottom >= vr.bottom - 4) insets.bottom = Math.max(insets.bottom, vr.bottom - r.top + margin); } if (r.right > vr.left && r.left < vr.right) { if (r.left <= vr.left + 4) insets.left = Math.max(insets.left, r.right - vr.left + margin); if (r.right >= vr.right - 4) insets.right = Math.max(insets.right, vr.right - r.left + margin); } }
  return insets;
}
