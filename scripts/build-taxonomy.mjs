import { writeFile } from 'node:fs/promises';
const nodes = JSON.parse(await (await import('node:fs/promises')).readFile(new URL('../data/taxonomy-nodes.json', import.meta.url),'utf8'));
const aliases = Object.fromEntries(nodes.filter(n => n.aliases?.length).map(n => [n.id, n.aliases]));
const links = nodes.filter(n => n.parentId).map(n => ({ id: `primary-${n.parentId}-${n.id}`, sourceId: n.parentId, targetId: n.id, linkType: 'primary', visibleWhenHidden: true }));
await writeFile(new URL('../data/aliases.json', import.meta.url), `${JSON.stringify(aliases,null,2)}\n`);
await writeFile(new URL('../data/taxonomy-links.json', import.meta.url), `${JSON.stringify(links,null,2)}\n`);
console.log(`Taxonomie préparée — ${nodes.length} nœuds, ${nodes.filter(n=>n.capturable).length} styles.`);
