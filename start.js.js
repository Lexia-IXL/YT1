// start.js
import { spawn } from 'child_process';

console.log('Starting Proxy Server...');
const proxy = spawn('node', ['src/server/proxy.mjs'], { stdio: 'inherit' });

console.log('Starting Astro Dev Server...');
const astro = spawn('npm', ['run', 'dev'], { stdio: 'inherit' });

process.on('SIGINT', () => {
    proxy.kill();
    astro.kill();
    process.exit(0);
});