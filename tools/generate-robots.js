#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://oasishealthservices.com';

function generateRobotsTxt() {
  const content = `# robots.txt for ${SITE_URL}
# Generated at build time

User-agent: *
Allow: /

# Disallow admin or private areas if any
Disallow: /admin/
Disallow: /private/

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl delay (optional, usually not needed)
# Crawl-delay: 1
`;

  return content;
}

function main() {
  console.log('🤖 Generating robots.txt...');

  const robotsTxt = generateRobotsTxt();
  const outputPath = path.join(process.cwd(), 'public', 'robots.txt');

  // Ensure public directory exists
  const publicDir = path.dirname(outputPath);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, robotsTxt, 'utf8');
  console.log(`✓ robots.txt generated: ${outputPath}`);
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  main();
}

export default main;
