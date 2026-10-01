import {cp,mkdir,rm,readFile,writeFile,readdir} from 'node:fs/promises';
import {resolve} from 'node:path';
const root=resolve(import.meta.dirname,'..');
const files=await readdir(resolve(root,'public/assets'));
for(const required of ['dashboard.png','logo.png','logo-white.png','avatar.png','inter.woff2']){if(!files.includes(required))throw new Error('Falta recurso: '+required);const b=await readFile(resolve(root,'public/assets',required));if(b.length<100)throw new Error('Recurso vacío: '+required);if(required.endsWith('.png')&&!b.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])))throw new Error('PNG no válido: '+required);if(required.endsWith('.woff2')&&b.subarray(0,4).toString()!=='wOF2')throw new Error('Fuente no válida');}
await rm(resolve(root,'dist'),{recursive:true,force:true});await mkdir(resolve(root,'dist'),{recursive:true});await cp(resolve(root,'public'),resolve(root,'dist'),{recursive:true});
console.log('Folia lista: dist/ + funciones de Netlify.');
