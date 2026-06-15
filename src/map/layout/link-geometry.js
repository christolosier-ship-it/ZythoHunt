export function circleEdgePoint(center, radius, toward) {
  const safeRadius = Number.isFinite(radius) ? Math.max(0, radius) : 0;
  const cx = Number.isFinite(center?.x) ? center.x : 0;
  const cy = Number.isFinite(center?.y) ? center.y : 0;
  const tx = Number.isFinite(toward?.x) ? toward.x : cx + safeRadius;
  const ty = Number.isFinite(toward?.y) ? toward.y : cy;
  const dx = tx - cx;
  const dy = ty - cy;
  const distance = Math.hypot(dx, dy);
  if (distance < 1e-6) return { x: cx + safeRadius, y: cy };
  return { x: cx + (dx / distance) * safeRadius, y: cy + (dy / distance) * safeRadius };
}
