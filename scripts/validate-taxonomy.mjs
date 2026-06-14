import { readFile } from 'node:fs/promises';
import { validateTaxonomy } from '../src/domain/taxonomy-validator.js';

const readJson = async path => JSON.parse(await readFile(new URL(`../${path}`, import.meta.url), 'utf8'));
const [nodes, links, aliases, version, pkg, presentation] = await Promise.all([
  readJson('data/taxonomy-nodes.json'),
  readJson('data/taxonomy-links.json'),
  readJson('data/aliases.json'),
  readJson('data/taxonomy-version.json'),
  readJson('package.json'),
  readJson('data/map-presentation.json')
]);
const result = validateTaxonomy(nodes, links, aliases, version, undefined, { packageVersion: pkg.version }, presentation);
for (const warning of result.warnings) console.warn(`⚠ ${warning}`);
if (!result.valid) {
  for (const error of result.errors) console.error(`✘ ${error}`);
  process.exit(1);
}
console.log(`Taxonomie valide — ${result.stats.nodeCount} nœuds, ${result.stats.primaryLinkCount + result.stats.secondaryLinkCount} liens.`);
