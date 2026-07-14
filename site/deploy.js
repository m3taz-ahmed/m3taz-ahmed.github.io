import { cpSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const dist = new URL('../dist/', import.meta.url);
const root = new URL('../', import.meta.url);

if (!existsSync(dist)) {
  console.error('Build output not found. Run `npm run build` first.');
  process.exit(1);
}

for (const entry of readdirSync(dist)) {
  if (entry === 'graphify-out') continue;
  cpSync(new URL(entry, dist), new URL(entry, root), { recursive: true, force: true });
}

console.log('Deployed build output to repository root.');
