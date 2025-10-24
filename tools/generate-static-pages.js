#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All routes from the application
const routes = [
  '/',
  '/about',
  '/patients',
  '/patients/faqs',
  '/providers',
  '/providers/referrals',
  '/contact',
  '/start',
  '/policies',
  '/terms-and-conditions',
  '/blog',
  '/conditions',
  '/conditions/anxiety-disorders',
  '/conditions/mood-disorders',
  '/conditions/neurodevelopmental-disorders',
  '/conditions/personality-disorders',
  '/conditions/psychotic-disorders',
  '/conditions/ocd-related-disorders',
  '/conditions/substance-related-disorders',
  '/conditions/trauma-stress-disorders',
  '/services',
  '/services/comprehensive-psychiatric-assessment',
  '/services/genetic-testing',
  '/services/adhd-testing-and-management',
  '/services/therapy-and-counseling',
  '/services/medication-management',
  '/services/substance-use-disorder-treatment',
  '/services/spravato',
  '/services/remote-patient-monitoring',
  '/services/autism-assessment-and-management',
  '/services/telehealth',
];

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function generateStaticPages() {
  console.log('📄 Generating static HTML pages for SEO...');

  const distPath = path.join(process.cwd(), 'dist');
  const indexPath = path.join(distPath, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.error('❌ index.html not found in dist/. Run build first.');
    process.exit(1);
  }

  const indexContent = fs.readFileSync(indexPath, 'utf8');

  let createdCount = 0;

  routes.forEach(route => {
    if (route === '/') return; // Skip root

    const routePath = route.substring(1); // Remove leading slash
    const targetDir = path.join(distPath, routePath);
    const targetFile = path.join(targetDir, 'index.html');

    // Create directory structure
    ensureDirectoryExists(targetDir);

    // Write index.html to the route directory
    fs.writeFileSync(targetFile, indexContent, 'utf8');
    createdCount++;
  });

  console.log(`✓ Created ${createdCount} static HTML pages`);
}

function main() {
  try {
    generateStaticPages();
    console.log('✓ Static page generation complete');
  } catch (error) {
    console.error('Error generating static pages:', error);
    process.exit(1);
  }
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  main();
}

export default main;
