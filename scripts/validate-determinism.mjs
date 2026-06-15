import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
const hash = async () => createHash('sha256').update(await readFile(new URL('../data/generated/zythosphere-layout.json', import.meta.url))).digest('hex');
const run = () => { const r=spawnSync(process.execPath,[new URL('./build-layout.mjs', import.meta.url).pathname],{stdio:'ignore'}); if(r.status) process.exit(r.status); };
run(); const a=await hash(); run(); const b=await hash();
console.log(JSON.stringify({ firstHash:a, secondHash:b, deterministic:a===b }, null, 2));
if(a!==b) process.exit(1); console.log('Layout déterministe.');
