import { readFile, copyFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
const path=new URL('../data/generated/zythosphere-layout.json',import.meta.url);
execFileSync(process.execPath,[new URL('./build-cloud-layout.mjs',import.meta.url).pathname],{stdio:'ignore'}); const a=await readFile(path,'utf8');
execFileSync(process.execPath,[new URL('./build-cloud-layout.mjs',import.meta.url).pathname],{stdio:'ignore'}); const b=await readFile(path,'utf8');
if(a!==b){ console.error('Layout non déterministe'); process.exit(1); }
console.log('Layout déterministe.');
