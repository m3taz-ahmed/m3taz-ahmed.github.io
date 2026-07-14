import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDir = fileURLToPath(new URL('../../dist', import.meta.url));

function getHtmlFiles(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      getHtmlFiles(full, files);
    } else if (entry.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

function relativePrefix(filePath) {
  const dir = dirname(filePath);
  const rel = relative(dir, distDir).replace(/\\/g, '/');
  return rel ? (rel + '/') : './';
}

function relativize(content, prefix) {
  let html = content;

  // Directory root routes: point to concrete index.html files
  html = html.replaceAll('href="/"', `href="${prefix}index.html"`);
  html = html.replaceAll("href='/'", `href='${prefix}index.html'`);
  html = html.replaceAll('href="/ar/"', `href="${prefix}ar/index.html"`);
  html = html.replaceAll("href='/ar/'", `href='${prefix}ar/index.html'`);

  // Remaining absolute src / href / action attributes
  html = html.replaceAll(/src="\/([^"]*)"/g, `src="${prefix}$1"`);
  html = html.replaceAll(/src='\/([^']*)'/g, `src="${prefix}$1"`);
  html = html.replaceAll(/href="\/([^"]*)"/g, `href="${prefix}$1"`);
  html = html.replaceAll(/href='\/([^']*)'/g, `href="${prefix}$1"`);

  return html;
}

for (const file of getHtmlFiles(distDir)) {
  const prefix = relativePrefix(file);
  const original = readFileSync(file, 'utf-8');
  const updated = relativize(original, prefix);
  if (updated !== original) {
    writeFileSync(file, updated, 'utf-8');
  }
}

console.log('Relative paths applied to HTML build output.');
