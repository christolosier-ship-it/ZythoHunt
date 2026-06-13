import { loadTaxonomy } from './domain/taxonomy-loader.js';
import { SCENARIOS, APP_VERSION, TAXONOMY_VERSION } from './config.js';
import { createMap } from './map/map-renderer.js';
import { createDebugPanel } from './ui/debug-panel.js';
const $=s=>document.querySelector(s); const params=new URLSearchParams(location.search); const discovered=new Set(SCENARIOS[params.get('scenario')||'empty']||[]);
$('#app-version').textContent=`App ${APP_VERSION}`; $('#taxonomy-version').textContent=`Taxonomie ${TAXONOMY_VERSION}`;
try { $('#status').textContent='Chargement de la taxonomie…'; const data=await loadTaxonomy(); const map=createMap($('.map-shell'),data,discovered); let debug; const redraw=()=>{ const state=map.render(discovered); $('#status').textContent=`${state.visibleNodes.length} nœuds visibles`; debug?.sync(state); return state;}; if(params.get('debug')==='1') debug=createDebugPanel($('#debug-root'),data.nodes,discovered,redraw); $('#zoom-in').onclick=map.controls.zoomIn; $('#zoom-out').onclick=map.controls.zoomOut; $('#recenter').onclick=map.controls.recenter; $('#fit').onclick=()=>map.controls.fit(redraw().visibleNodes); redraw(); } catch(e){ console.error(e); $('#status').textContent=e.message; $('#status').classList.add('is-error'); }
