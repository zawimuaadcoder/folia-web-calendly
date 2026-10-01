import {readFile,writeFile} from 'node:fs/promises';
import {Script} from 'node:vm';
const html=await readFile(new URL('../public/index.html',import.meta.url),'utf8');
const css=await readFile(new URL('../public/styles.css',import.meta.url),'utf8');
const model=(await readFile(new URL('../public/model.js',import.meta.url),'utf8')).replaceAll('export ','');
const app=(await readFile(new URL('../public/app.js',import.meta.url),'utf8')).replace(/^import .*;\n/,'').replace("let configReady=fetch('/api/config')", "let configReady=Promise.resolve(new Response(JSON.stringify({demo:true,calendarUrl:'https://calendly.com/josemartinez31k/30min'})))").replace("async function submitData(eventType,website=''){", "async function submitData(eventType,website=''){return {ok:true,simulated:true,result:directContact?null:calculate(answers)}; /* Offline preview: no network or contact capture. */");
const bundled=html.replace('<link rel="stylesheet" href="styles.css">',()=>`<style>${css.replaceAll("url('assets/","url('public/assets/")}</style>`).replace('<script src="app.js" type="module"></script>',()=>`<script defer>document.addEventListener('DOMContentLoaded',()=>{${model}\n${app}\n});</script>`).replaceAll('src="assets/','src="public/assets/').replaceAll('href="assets/','href="public/assets/');
// Validate the emitted script, including all HTML replacement steps.
new Script(bundled.match(/<script defer>([\s\S]*?)<\/script>/)[1],{filename:'preview.html'});
await writeFile(new URL('../preview.html',import.meta.url),bundled);
console.log('preview.html: demostración local, sin envío de datos.');
