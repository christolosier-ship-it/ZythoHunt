export const VISUAL_STATE_PRIORITY = ['reveal-pending', 'selected', 'explored', 'discovered'];

export function createPresentationState(overrides = {}) {
  return {
    revealPendingId: null,
    selectedId: null,
    exploredIds: new Set(),
    reducedMotion: false,
    isInteracting: false,
    ...overrides,
    exploredIds: overrides.exploredIds instanceof Set ? overrides.exploredIds : new Set(overrides.exploredIds ?? [])
  };
}

export function resolveNodeVisualState(node, presentationState = {}) {
  if (node.functionalType === 'structure') return 'structure';
  if (presentationState.revealPendingId === node.id) return 'reveal-pending';
  if (presentationState.selectedId === node.id) return 'selected';
  if (presentationState.exploredIds?.has?.(node.id)) return 'explored';
  return 'discovered';
}

export function canSelectNode(node, discoveredIds) {
  return node?.functionalType === 'capturable' && discoveredIds?.has?.(node.id);
}
