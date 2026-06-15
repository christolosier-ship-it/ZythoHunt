import { readFile } from 'node:fs/promises';
const r=JSON.parse(await readFile(new URL('../../data/generated/zythosphere-layout-report.json', import.meta.url),'utf8'));
console.log(JSON.stringify(r,null,2));
