import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const readProjectFile = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const objectKeySequence = (source) =>
  [...source.matchAll(/^\s*([A-Za-z][A-Za-z0-9]*)\s*:/gm)].map((match) => match[1]);

test('Arabic translation mirrors the English translation key structure', () => {
  const en = readProjectFile('src/i18n/en.ts');
  const ar = readProjectFile('src/i18n/ar.ts');

  assert.deepEqual(objectKeySequence(ar), objectKeySequence(en));
});

test('service worker stays same-origin and does not masquerade HTML as assets', () => {
  const sw = readProjectFile('public/sw.js');

  assert.match(sw, /url\.origin !== self\.location\.origin/);
  assert.match(sw, /Response\.error\(\)/);
});

test('mobile menu contract remains present', () => {
  const app = readProjectFile('public/app.js');

  assert.match(app, /keydown[\s\S]*Escape/);
  assert.match(app, /matchMedia\('\(min-width: 1024px\)'\)/);
  assert.match(app, /document\.documentElement\.dir === 'rtl'/);
});
