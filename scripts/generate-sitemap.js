/**
 * Generate sitemap.xml for https://www.shreekrishnaschools.com
 * Run before build so each deploy gets fresh lastmod.
 * Usage: node scripts/generate-sitemap.js
 */

import { writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE_URL = 'https://www.shreekrishnaschools.com';

// lastmod in sitemap format (YYYY-MM-DD)
const lastMod = new Date().toISOString().slice(0, 10);

const pages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.9' },
  { path: '/admissions', changefreq: 'weekly', priority: '0.95' },
  { path: '/contact', changefreq: 'monthly', priority: '0.85' },
  { path: '/facilities', changefreq: 'monthly', priority: '0.8' },
  { path: '/transport', changefreq: 'monthly', priority: '0.8' },
  { path: '/achievements', changefreq: 'monthly', priority: '0.85' },
  { path: '/campuses', changefreq: 'monthly', priority: '0.9' },
  { path: '/gallery', changefreq: 'weekly', priority: '0.7' },
  { path: '/events', changefreq: 'weekly', priority: '0.8' },
  { path: '/faculty', changefreq: 'monthly', priority: '0.8' },
  { path: '/shree-krishna-public-school-udairamsar', changefreq: 'monthly', priority: '0.95' },
  { path: '/little-krishna-public-school-bikaner', changefreq: 'monthly', priority: '0.95' },
];

const urlEntries = pages
  .map(
    ({ path, changefreq, priority }) => `
  <url>
    <loc>${BASE_URL}${path === '/' ? '/' : path}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const publicDir = join(__dirname, '..', 'public');
const outPath = join(publicDir, 'sitemap.xml');

try {
  mkdirSync(publicDir, { recursive: true });
  writeFileSync(outPath, sitemap.trimStart(), 'utf8');
  console.log(`Sitemap written to ${outPath} (lastmod: ${lastMod})`);
} catch (err) {
  console.error('Failed to write sitemap:', err);
  process.exit(1);
}
