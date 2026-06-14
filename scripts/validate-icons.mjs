import { readFile } from 'node:fs/promises';
const nodes = JSON.parse(await readFile(new URL('../data/taxonomy-nodes.json', import.meta.url), 'utf8'));
const recipes = JSON.parse(await readFile(new URL('../data/style-icon-recipes.json', import.meta.url), 'utf8'));
const styleIds = new Set(nodes.filter(node => node.functionalType === 'capturable').map(node => node.id));
const errors = [];
for (const id of styleIds) if (!recipes[id]) errors.push(`recette iconographique manquante: ${id}`);
for (const id of Object.keys(recipes)) if (!styleIds.has(id)) errors.push(`recette iconographique orpheline: ${id}`);
if (errors.length) { for (const error of errors) console.error(`✘ ${error}`); process.exit(1); }
console.log(`Iconographie valide — ${Object.keys(recipes).length} recettes.`);
