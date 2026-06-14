import { validateTaxonomy } from './taxonomy-validator.js';
const loadJson = async (path) => { const url = new URL(path, import.meta.url); const r = await fetch(url); if(!r.ok) throw new Error(`${path}: HTTP ${r.status}`); return r.json(); };
function withPresentation(nodes, presentation) {
  return nodes.map(n => {
    const p = presentation.nodes?.[n.id];
    if (!p) return n;
    return { ...n, presentation: p, position: { x: p.x, y: p.y }, visualLevel: p.visualLevel, iconKey: p.iconKey, paletteKey: p.paletteKey };
  });
}
export async function loadTaxonomy() {
  if (location.protocol === 'file:') throw new Error('Un serveur HTTP local est nécessaire. Lancez par exemple : python3 -m http.server 8080');
  const [nodes, links, aliases, version, presentation, iconRecipes] = await Promise.all([loadJson('../../data/taxonomy-nodes.json'), loadJson('../../data/taxonomy-links.json'), loadJson('../../data/aliases.json'), loadJson('../../data/taxonomy-version.json'), loadJson('../../data/map-presentation.json'), loadJson('../../data/style-icon-recipes.json')]);
  const joined = withPresentation(nodes.map(n => ({...n, aliases: aliases[n.id] || []})), presentation);
  const validation = validateTaxonomy(nodes, links, aliases, version, undefined, { iconRecipes }, presentation);
  if(!validation.valid) { console.error('Validation taxonomique échouée', validation); throw new Error(`Taxonomie invalide (${validation.errors.length} erreur(s))`); }
  return { nodes: joined, links, aliases, version, presentation, iconRecipes, validation };
}
