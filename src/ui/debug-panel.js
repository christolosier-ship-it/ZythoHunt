import { SCENARIOS } from '../config.js';
import { buildSearchIndex, findDebugStyleMatches } from '../domain/search.js';

export function getScenarioFromUrl(search, fallback = 'empty') {
  const scenario = new URLSearchParams(search).get('scenario') ?? fallback;
  return Object.hasOwn(SCENARIOS, scenario) ? scenario : fallback;
}

export function createDebugPanel(container, data, stateStore) {
  const { nodes, aliases, scenario, discovered, onScenario, onReveal, onHide, onReset } = stateStore;
  const searchIndex = buildSearchIndex(nodes, aliases);
  const panel = document.createElement('aside');
  panel.className = 'debug-panel';
  panel.innerHTML = '<h2>Outils développeur V0.1.1</h2>';

  const select = document.createElement('select');
  select.setAttribute('aria-label', 'Scénario actif');
  for (const key of Object.keys(SCENARIOS)) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = key;
    select.append(option);
  }
  select.value = scenario;
  select.addEventListener('change', () => onScenario(select.value));
  panel.append(select);

  const revealSection = document.createElement('section');
  const title = document.createElement('h3');
  title.textContent = 'Révéler un style de test';
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'West Coast IPA ou WCIPA';
  input.setAttribute('aria-label', 'Nom ou alias du style à révéler');
  const reveal = document.createElement('button');
  reveal.textContent = 'Révéler';
  const hide = document.createElement('button');
  hide.textContent = 'Masquer';
  const message = document.createElement('p');
  const ambiguousList = document.createElement('div');
  revealSection.append(title, input, reveal, hide, message, ambiguousList);
  panel.append(revealSection);

  const reset = document.createElement('button');
  reset.textContent = 'Tout réinitialiser';
  reset.addEventListener('click', () => {
    onReset();
    message.textContent = 'Découvertes de test réinitialisées.';
  });
  panel.append(reset);

  const count = document.createElement('p');
  const list = document.createElement('div');
  panel.append(count, list);

  function renderAmbiguous(matches) {
    ambiguousList.replaceChildren();
    for (const node of matches) {
      const button = document.createElement('button');
      button.textContent = node.name;
      button.addEventListener('click', () => revealNode(node));
      ambiguousList.append(button);
    }
  }

  function revealNode(node) {
    ambiguousList.replaceChildren();
    if (discovered.has(node.id)) {
      message.textContent = 'Ce style est déjà visible dans le scénario courant.';
      return;
    }
    onReveal(node.id);
    message.textContent = `${node.name} révélée pour le test.`;
  }

  reveal.addEventListener('click', () => {
    const result = findDebugStyleMatches(input.value, searchIndex);
    ambiguousList.replaceChildren();
    if (result.status === 'empty') message.textContent = 'Saisie vide.';
    if (result.status === 'none') message.textContent = 'Aucun style du corpus prototype ne correspond à cette saisie.';
    if (result.status === 'single') revealNode(result.matches[0]);
    if (result.status === 'ambiguous') {
      message.textContent = 'Plusieurs styles correspondent à cette saisie.';
      renderAmbiguous(result.matches);
    }
  });

  hide.addEventListener('click', () => {
    const result = findDebugStyleMatches(input.value, searchIndex);
    ambiguousList.replaceChildren();
    if (result.status !== 'single') {
      message.textContent = result.status === 'none' ? 'Aucun style du corpus prototype ne correspond à cette saisie.' : 'Précisez un style unique à masquer.';
      if (result.status === 'ambiguous') renderAmbiguous(result.matches);
      return;
    }
    onHide(result.matches[0].id);
    message.textContent = `${result.matches[0].name} retirée de la sélection de test.`;
  });

  function sync(mapState) {
    select.value = stateStore.scenario;
    list.replaceChildren();
    for (const node of nodes.filter(item => item.functionalType === 'capturable')) {
      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = discovered.has(node.id);
      checkbox.addEventListener('change', () => checkbox.checked ? onReveal(node.id) : onHide(node.id));
      label.append(checkbox, ` ${node.name} (${node.id})`);
      list.append(label);
    }
    count.textContent = mapState ? `${mapState.visibleNodes.length} nœuds visibles, ${mapState.visibleLinks.length} liens visibles` : '';
  }

  container.append(panel);
  return { sync };
}
