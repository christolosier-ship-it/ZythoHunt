import { computeVisibleMapState } from '../domain/map-visibility.js';
import { renderLinks } from './links.js';
import { renderNodes } from './nodes.js';
import { createViewport } from './viewport.js';
export function createMap(root, data, discovered){ const svg=root.querySelector('svg'); const viewport=root.querySelector('.map-viewport'); const linkG=root.querySelector('.map-links'); const nodeG=root.querySelector('.map-nodes'); const controls=createViewport(svg, viewport); const render=(ids)=>{ const state=computeVisibleMapState(data.nodes,data.links,ids); const byId=new Map(data.nodes.map(n=>[n.id,n])); renderLinks(linkG,state.visibleLinks,byId); renderNodes(nodeG,state.visibleNodes,state.interactiveNodeIds); return state; }; return {render, controls}; }
