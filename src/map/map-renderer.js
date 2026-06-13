import { computeVisibleMapState } from '../domain/map-visibility.js';
import { renderLinks } from './links.js';
import { renderNodes } from './nodes.js';
import { computeVisibleBounds, createViewport } from './viewport.js';

export function createMap(root, data) {
  const svg = root.querySelector('svg');
  const viewport = root.querySelector('.map-viewport');
  const linkGroup = root.querySelector('.map-links');
  const nodeGroup = root.querySelector('.map-nodes');
  const nodeIndex = new Map(data.nodes.map(node => [node.id, node]));
  const controls = createViewport(svg, viewport);

  function render(discoveredIds) {
    const state = computeVisibleMapState(data.nodes, data.links, discoveredIds);
    renderLinks(linkGroup, state.visibleLinks, nodeIndex);
    renderNodes(nodeGroup, state.visibleNodes);
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
