#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import GhostContentAPI from '@tryghost/content-api';

const SITE_URL = 'https://oasishealthservices.org';

// Initialize Ghost API
const ghostAPI = new GhostContentAPI({
  url: 'https://oasis.marketingcarcontent.com',
  key: 'dac5098ae92e739703c202ce3e',
  version: 'v5'
});

// Static routes from App.jsx
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/patients', priority: '0.8', changefreq: 'monthly' },
  { path: '/patients/faqs', priority: '0.7', changefreq: 'monthly' },
  { path: '/providers', priority: '0.8', changefreq: 'monthly' },
  { path: '/providers/referrals', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'monthly' },
  { path: '/start', priority: '0.9', changefreq: 'monthly' },
  { path: '/policies', priority: '0.5', changefreq: 'yearly' },
  { path: '/terms-and-conditions', priority: '0.5', changefreq: 'yearly' },
  { path: '/blog', priority: '0.9', changefreq: 'weekly' },
  { path: '/conditions', priority: '0.8', changefreq: 'monthly' },
  { path: '/conditions/anxiety-disorders', priority: '0.7', changefreq: 'monthly' },
  { path: '/conditions/mood-disorders', priority: '0.7', changefreq: 'monthly' },
  { path: '/conditions/neurodevelopmental-disorders', priority: '0.7', changefreq: 'monthly' },
  { path: '/conditions/personality-disorders', priority: '0.7', changefreq: 'monthly' },
  { path: '/conditions/psychotic-disorders', priority: '0.7', changefreq: 'monthly' },
  { path: '/conditions/ocd-related-disorders', priority: '0.7', changefreq: 'monthly' },
  { path: '/conditions/substance-related-disorders', priority: '0.7', changefreq: 'monthly' },
  { path: '/conditions/trauma-stress-disorders', priority: '0.7', changefreq: 'monthly' },
  { path: '/services', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/comprehensive-psychiatric-assessment', priority: '0.7', changefreq: 'monthly' },
  { path: '/services/genetic-testing', priority: '0.7', changefreq: 'monthly' },
  { path: '/services/adhd-testing-and-management', priority: '0.7', changefreq: 'monthly' },
  { path: '/services/therapy-and-counseling', priority: '0.7', changefreq: 'monthly' },
  { path: '/services/medication-management', priority: '0.7', changefreq: 'monthly' },
  { path: '/services/substance-use-disorder-treatment', priority: '0.7', changefreq: 'monthly' },
  { path: '/services/spravato', priority: '0.7', changefreq: 'monthly' },
  { path: '/services/remote-patient-monitoring', priority: '0.7', changefreq: 'monthly' },
  { path: '/services/autism-assessment-and-management', priority: '0.7', changefreq: 'monthly' },
  { path: '/services/telehealth', priority: '0.7', changefreq: 'monthly' },
];

async function fetchBlogPosts() {
  try {
    const posts = await ghostAPI.posts.browse({
      limit: 'all',
      fields: 'slug,updated_at'
    });

    return posts.map(post => ({
      path: `/blog/${post.slug}`,
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: new Date(post.updated_at).toISOString().split('T')[0]
    }));
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
    return [];
  }
}

function generateSitemapXML(routes) {
  const now = new Date().toISOString().split('T')[0];

  const urls = routes.map(route => {
    const lastmod = route.lastmod || now;
    return `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

async function main() {
  console.log('📍 Generating sitemap...');

  // Fetch blog posts
  const blogRoutes = await fetchBlogPosts();
  console.log(`✓ Found ${blogRoutes.length} blog posts`);

  // Combine all routes
  const allRoutes = [...staticRoutes, ...blogRoutes];
  console.log(`✓ Total routes: ${allRoutes.length}`);

  // Generate sitemap XML
  const sitemapXML = generateSitemapXML(allRoutes);

  // Write to public directory
  const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemapXML, 'utf8');

  console.log(`✓ Sitemap generated: ${outputPath}`);
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  main().catch(error => {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  });
}
