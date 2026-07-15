import { cpSync, readdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const dist = new URL('../dist/', import.meta.url);
const root = new URL('../', import.meta.url);

if (!existsSync(dist)) {
  console.error('Build output not found. Run `npm run build` first.');
  process.exit(1);
}

// Stamp the service worker with a fresh cache version on every deploy.
const buildVersion = new Date().toISOString().replace(/[-:T.Z]/g, '').slice(0, 14);
const swDist = new URL('sw.js', dist);

if (existsSync(swDist)) {
  const swContent = readFileSync(swDist, 'utf-8');
  const versioned = swContent.replace(/__BUILD_VERSION__/g, buildVersion);
  writeFileSync(swDist, versioned, 'utf-8');
}

for (const entry of readdirSync(dist)) {
  if (entry === 'graphify-out') continue;
  cpSync(new URL(entry, dist), new URL(entry, root), { recursive: true, force: true });
}

console.log(`Deployed build output to repository root (cache ${buildVersion}).`);
