#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import GhostContentAPI from '@tryghost/content-api';

// Initialize Ghost API
const ghostAPI = new GhostContentAPI({
  url: 'https://oasis.marketingcarcontent.com',
  key: 'dac5098ae92e739703c202ce3e',
  version: 'v5'
});

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function generateBlogPages() {
  console.log('📝 Generating static HTML pages for blog posts...');

  const distPath = path.join(process.cwd(), 'dist');
  const indexPath = path.join(distPath, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.error('❌ index.html not found in dist/. Run build first.');
    process.exit(1);
  }

  const indexContent = fs.readFileSync(indexPath, 'utf8');

  try {
    // Fetch all blog posts
    const posts = await ghostAPI.posts.browse({
      limit: 'all',
      fields: 'slug'
    });

    console.log(`✓ Found ${posts.length} blog posts`);

    let createdCount = 0;

    posts.forEach(post => {
      const routePath = `blog/${post.slug}`;
      const targetDir = path.join(distPath, routePath);
      const targetFile = path.join(targetDir, 'index.html');

      // Create directory structure
      ensureDirectoryExists(targetDir);

      // Write index.html to the blog post directory
      fs.writeFileSync(targetFile, indexContent, 'utf8');
      createdCount++;
    });

    console.log(`✓ Created ${createdCount} blog post HTML pages`);

    return createdCount;
  } catch (error) {
    console.error('Error generating blog pages:', error);
    return 0;
  }
}

async function main() {
  try {
    await generateBlogPages();
    console.log('✓ Blog page generation complete');
  } catch (error) {
    console.error('Error in blog page generation:', error);
    process.exit(1);
  }
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  main();
}

export default main;
