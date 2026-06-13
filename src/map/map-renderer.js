import { createCanvasMap } from '../canvas/canvas-map-renderer.js';
import { createMap as createSvgMap } from '../legacy-svg/svg-map-renderer.js';
export function createMap(root, data, options = {}) { return options.renderer === 'svg' ? createSvgMap(root, data) : createCanvasMap(root, data); }
