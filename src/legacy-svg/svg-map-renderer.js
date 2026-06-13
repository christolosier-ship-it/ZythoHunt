import { computeVisibleMapState } from '../domain/map-visibility.js';
import { renderLinks } from '../map/links.js';
import { ensureBubbleDefs } from '../map/bubble-defs.js';
import { getActiveSecondaryLinkIds, getPrimaryPathToRoot } from '../map/selection-path.js';
import { renderNodes } from '../map/nodes.js';
import { computeVisibleBounds, createViewport } from '../map/viewport.js';

export function createMap(root, data) {
  const svg = root.querySelector('svg');
  const viewport = root.querySelector('.map-viewport');
  const linkGroup = root.querySelector('.map-links');
  const nodeGroup = root.querySelector('.map-nodes');
  const nodeIndex = new Map(data.nodes.map(node => [node.id, node]));
  ensureBubbleDefs(svg);
  const controls = createViewport(svg, viewport, { onInteractionChange: active => root.classList.toggle('is-interacting', active) });

  function render(discoveredIds, presentationState = {}, handlers = {}) {
    const pending = presentationState.revealPendingId ? new Set([...discoveredIds, presentationState.revealPendingId]) : discoveredIds;
    const state = computeVisibleMapState(data.nodes, data.links, pending);
    const activeIds = new Set([
      ...getPrimaryPathToRoot(presentationState.selectedId, data.nodes, data.links),
      ...getActiveSecondaryLinkIds(presentationState.selectedId, data.links)
    ]);
    renderLinks(linkGroup, state.visibleLinks, nodeIndex, { activeLinkIds: activeIds });
    renderNodes(nodeGroup, state.visibleNodes, { presentationState, discoveredIds, onSelect: handlers.onSelect });
    return state;
  }

  function fitState(state) {
    controls.fitBounds(computeVisibleBounds(state.visibleNodes, state.visibleLinks, nodeIndex));
  }

  function focusNode(nodeId) {
    const node = nodeIndex.get(nodeId);
    if (!node) return;
    controls.fitBounds({
      minX: node.position.x - 260,
      minY: node.position.y - 220,
      maxX: node.position.x + 260,
      maxY: node.position.y + 220,
      width: 520,
      height: 440
    });
  }

  return { render, fitState, focusNode, controls };
}
