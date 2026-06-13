import { validateTaxonomy } from './taxonomy-validator.js';
const loadJson = async (path) => { const url = new URL(path, import.meta.url); const r = await fetch(url); if(!r.ok) throw new Error(`${path}: HTTP ${r.status}`); return r.json(); };
export async function loadTaxonomy() {
  if (location.protocol === 'file:') throw new Error('Un serveur HTTP local est nécessaire. Lancez par exemple : python3 -m http.server 8080');
  const [nodes, links, aliases, version] = await Promise.all([loadJson('../../data/taxonomy-nodes.json'), loadJson('../../data/taxonomy-links.json'), loadJson('../../data/aliases.json'), loadJson('../../data/taxonomy-version.json')]);
  const joined = nodes.map(n => ({...n, aliases: aliases[n.id] || []}));
  const validation = validateTaxonomy(nodes, links, aliases, version);
  if(!validation.valid) { console.error('Validation taxonomique échouée', validation); throw new Error(`Taxonomie invalide (${validation.errors.length} erreur(s))`); }
  return { nodes: joined, links, aliases, version, validation };
}
