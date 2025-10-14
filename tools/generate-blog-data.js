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

async function fetchBlogPosts() {
  try {
    console.log('📝 Fetching blog posts from Ghost...');

    const posts = await ghostAPI.posts.browse({
      limit: 'all',
      include: 'tags',
      formats: ['html']
    });

    console.log(`✓ Fetched ${posts.length} blog posts`);
    return posts;
  } catch (error) {
    console.error('❌ Error fetching blog posts:', error);
    return [];
  }
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function main() {
  console.log('🚀 Generating static blog data...');

  // Fetch all blog posts
  const posts = await fetchBlogPosts();

  // Create data directory
  const dataDir = path.join(process.cwd(), 'src', 'data');
  ensureDirectoryExists(dataDir);

  // Write posts list (without full HTML to reduce bundle size for the listing page)
  const postsListData = posts.map(post => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    custom_excerpt: post.custom_excerpt,
    feature_image: post.feature_image,
    published_at: post.published_at,
    updated_at: post.updated_at,
    tags: post.tags
  }));

  const postsListPath = path.join(dataDir, 'blog-posts.json');
  fs.writeFileSync(postsListPath, JSON.stringify(postsListData, null, 2), 'utf8');
  console.log(`✓ Generated blog posts list: ${postsListPath}`);

  // Write individual post data files with full HTML
  const postsDataDir = path.join(dataDir, 'posts');
  ensureDirectoryExists(postsDataDir);

  for (const post of posts) {
    const postDataPath = path.join(postsDataDir, `${post.slug}.json`);
    fs.writeFileSync(postDataPath, JSON.stringify(post, null, 2), 'utf8');
  }
  console.log(`✓ Generated ${posts.length} individual post data files`);

  console.log('✅ Static blog data generation complete!');
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  main().catch(error => {
    console.error('Error generating blog data:', error);
    process.exit(1);
  });
}
