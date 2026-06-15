import { loadTaxonomy } from './domain/taxonomy-loader.js';
import { APP_VERSION, SCENARIOS, TAXONOMY_VERSION } from './config.js';
import { createDiscoveryController } from './map/discovery-animation.js';
import { createCanvasMap as createMap } from './canvas/canvas-map-renderer.js';
import { createAppShell } from './ui/app-shell.js';
import { createBottomNavigation } from './ui/bottom-navigation.js';
import { createMapToolbar } from './ui/map-toolbar.js';
import { createRevealBar } from './ui/reveal-bar.js';
import { createToast } from './ui/toast.js';

const $ = selector => document.querySelector(selector);
const prefersReduced = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
const appState = { scenario: 'empty', discovered: new Set(), presentation: { revealPendingId: null, selectedId: null, exploredIds: new Set(), reducedMotion: prefersReduced } };
let map; let data; let toolbar; const discovery = createDiscoveryController({ duration: prefersReduced ? 120 : 850 });
const shell = createAppShell({ navigationRoot: $('#global-navigation-root'), searchSlot: $('#zythosphere-search-slot'), toolbarSlot: $('#map-toolbar-slot'), toastRoot: $('#toast-root') });
const live = $('#app-live-status');
function setLive(message) { live.textContent = message; }
function renderNow({ fit = false, focusId = null } = {}) { if (focusId) map.focusNode(focusId); if (fit) map.fitState(map.computeMapState(appState.discovered, appState.presentation)); return map.render(appState.discovered, appState.presentation, { onSelect: selectStyle }); }
function setReducedMotion(value) { appState.presentation.reducedMotion = Boolean(value); document.body.classList.toggle('reduced-motion', appState.presentation.reducedMotion); toolbar?.setReducedMotion(appState.presentation.reducedMotion); renderNow(); }
function selectStyle(id) { const node = data.nodes.find(n => n.id === id); if (!node || node.functionalType !== 'capturable' || !appState.discovered.has(id)) return; appState.presentation.selectedId = appState.presentation.selectedId === id ? null : id; renderNow(); setLive(appState.presentation.selectedId ? `Style sélectionné : ${node.name}.` : 'Sélection retirée.'); }

async function focusStyleForReveal(id) { await map.focusStyleForReveal(id, { reducedMotion: appState.presentation.reducedMotion }); }
function revealStyle(id) { const node = data.nodes.find(n => n.id === id); return new Promise(resolve => { discovery.preview(id, { onStart: revealId => { appState.presentation.revealPendingId = revealId; appState.presentation.selectedId = null; renderNow(); setLive(`Révélation en cours : ${node.name}.`); }, onName: () => renderNow(), onFinish: revealId => { appState.presentation.revealPendingId = null; appState.discovered.add(revealId); appState.presentation.selectedId = revealId; renderNow(); setLive(`Style révélé : ${node.name}.`); resolve(); } }, { reducedMotion: appState.presentation.reducedMotion }); }); }
async function previewReveal(id, phase) { const node = data.nodes.find(n => n.id === id); if (!node || node.functionalType !== 'capturable') return; phase?.('focus'); await focusStyleForReveal(id); phase?.('reveal'); await revealStyle(id); }
async function focusAlreadyRevealed(id) { const node = data.nodes.find(n => n.id === id); await focusStyleForReveal(id); appState.presentation.selectedId = id; renderNow(); setLive(`Style déjà révélé : ${node.name}.`); }
function revealAllForTest(){ const all=data.nodes.filter(n=>n.functionalType==='capturable').map(n=>n.id); const missing=all.filter(id=>!appState.discovered.has(id)); if(!missing.length) return { changed:false, total:all.length }; for(const id of missing) appState.discovered.add(id); appState.presentation.revealPendingId=null; renderNow(); setLive('Tous les styles sont révélés pour le test.'); return { changed:true, total:all.length }; }


document.addEventListener('visibilitychange', () => document.body.classList.toggle('is-tab-hidden', document.hidden));
for (const id of SCENARIOS.empty) appState.discovered.add(id);
try {
  setLive('Chargement de la taxonomie…'); data = await loadTaxonomy(); document.body.dataset.appVersion = APP_VERSION; document.body.dataset.taxonomyVersion = TAXONOMY_VERSION;
  const toast = createToast($('#toast-root'));
  createBottomNavigation($('#global-navigation-root'), { activeView: 'zythosphere', onNavigate: (view, item) => { if (view !== 'zythosphere') toast.show(`${item.label} sera disponible dans une prochaine version.`); } });
  createRevealBar($('#zythosphere-search-slot'), data.nodes, data.aliases, { isDiscovered: id => appState.discovered.has(id), onReveal: previewReveal, onAlready: focusAlreadyRevealed, onRevealAll: revealAllForTest });
  shell.updateMeasurements(); map = createMap($('.map-shell'), data, { getInsets: shell.getMapViewportInsets });
  toolbar = createMapToolbar($('#map-toolbar-slot'), { onZoomIn: () => { map.controls.zoomIn(); renderNow(); }, onZoomOut: () => { map.controls.zoomOut(); renderNow(); }, onRecenter: () => { map.controls.home(); renderNow(); setLive('Accueil de la Zythosphère.'); }, onToggleMotion: () => setReducedMotion(!appState.presentation.reducedMotion) });
  setReducedMotion(prefersReduced); map.controls.home(); renderNow();
} catch (error) { console.error(error); setLive(error.message); document.body.classList.add('is-error'); }
