import { loadTaxonomy } from './domain/taxonomy-loader.js';
import { APP_VERSION, SCENARIOS, TAXONOMY_VERSION } from './config.js';
import { createMap } from './map/map-renderer.js';
import { createDebugPanel, getScenarioFromUrl } from './ui/debug-panel.js';

const $ = selector => document.querySelector(selector);
const params = new URLSearchParams(location.search);
const appState = {
  scenario: getScenarioFromUrl(location.search),
  discovered: new Set()
};
let map;
let debug;

function setScenario(scenario) {
  appState.scenario = Object.hasOwn(SCENARIOS, scenario) ? scenario : 'empty';
  appState.discovered.clear();
  for (const id of SCENARIOS[appState.scenario]) appState.discovered.add(id);
}

function renderAndSync({ fit = false, focusId = null } = {}) {
  const mapState = map.render(appState.discovered);
  $('#status').textContent = `${mapState.visibleNodes.length} nœuds visibles`;
  debug?.sync(mapState);
  if (focusId) map.focusNode(focusId);
  else if (fit) map.fitState(mapState);
  return mapState;
}

$('#app-version').textContent = `App ${APP_VERSION}`;
$('#taxonomy-version').textContent = `Taxonomie ${TAXONOMY_VERSION}`;
setScenario(appState.scenario);

try {
  $('#status').textContent = 'Chargement de la taxonomie…';
  const data = await loadTaxonomy();
  map = createMap($('.map-shell'), data);

  if (params.get('debug') === '1') {
    debug = createDebugPanel($('#debug-root'), data, {
      nodes: data.nodes,
      aliases: data.aliases,
      get scenario() { return appState.scenario; },
      discovered: appState.discovered,
      onScenario: scenario => {
        setScenario(scenario);
        renderAndSync({ fit: true });
      },
      onReveal: id => {
        appState.discovered.add(id);
        renderAndSync({ focusId: id });
      },
      onHide: id => {
        appState.discovered.delete(id);
        renderAndSync({ fit: true });
      },
      onReset: () => {
        appState.discovered.clear();
        appState.scenario = 'empty';
        renderAndSync({ fit: true });
      }
    });
  }

  $('#zoom-in').onclick = map.controls.zoomIn;
  $('#zoom-out').onclick = map.controls.zoomOut;
  $('#recenter').onclick = map.controls.recenter;
  $('#fit').onclick = () => map.fitState(renderAndSync());
  renderAndSync({ fit: true });
} catch (error) {
  console.error(error);
  $('#status').textContent = error.message;
  $('#status').classList.add('is-error');
}
