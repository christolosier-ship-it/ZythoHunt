import { buildSearchIndex, findDebugStyleMatches } from '../domain/search.js';
export function createRevealBar(container, nodes, aliases, handlers) {
  const index = buildSearchIndex(nodes, aliases);
  const form = document.createElement('form');
  form.className = 'reveal-bar';
  form.innerHTML = '<div class="reveal-signature" aria-hidden="true">ZythoHunt</div><label class="sr-only" for="style-reveal-input">Style de bière goûté</label><div class="reveal-row"><input id="style-reveal-input" name="style" autocomplete="off" autocapitalize="words" enterkeyhint="go" spellcheck="false" placeholder="Saisir un style goûté…"><button class="reveal-clear" type="button" aria-label="Effacer la saisie" hidden>×</button><button class="reveal-submit" type="submit">Révéler</button></div><p class="reveal-message" role="status" aria-live="polite"></p>';
  const input = form.querySelector('input'); const msg = form.querySelector('.reveal-message'); const submit = form.querySelector('.reveal-submit'); const clear = form.querySelector('.reveal-clear'); let timer = null;
  const setMessage = (t, temporary = false) => { clearTimeout(timer); msg.textContent = t; msg.classList.toggle('is-empty', !t); if (temporary && t) timer = setTimeout(() => setMessage(''), 4500); };
  const updateClear = () => { clear.hidden = input.value.length === 0; };
  input.addEventListener('input', updateClear);
  clear.addEventListener('click', () => { input.value = ''; updateClear(); setMessage(''); input.focus(); });
  setMessage('');
  form.addEventListener('submit', async e => {
    e.preventDefault(); const r = findDebugStyleMatches(input.value, index);
    if (r.status === 'empty') { setMessage('Saisissez un style indiqué sur l’étiquette.'); input.focus(); return; }
    if (r.status === 'none') { setMessage('Aucun style ne correspond à cette saisie.'); input.focus(); input.select(); return; }
    if (r.status === 'ambiguous') { setMessage('Plusieurs styles peuvent correspondre. Précisez le nom indiqué sur l’étiquette.'); input.focus(); input.select(); return; }
    const node = r.matches[0];
    if (handlers.isDiscovered(node.id)) { handlers.onAlready(node.id); setMessage(`Style déjà révélé : ${node.name}.`, true); return; }
    submit.disabled = true; setMessage('Révélation en cours…');
    try { await handlers.onReveal(node.id); input.value = ''; updateClear(); setMessage(`Style révélé : ${node.name}.`, true); }
    finally { submit.disabled = false; }
  });
  container.append(form); return { form, input, setMessage };
}
