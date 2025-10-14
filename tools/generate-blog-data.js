#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import GhostContentAPI from '@tryghost/content-api';
import sharp from 'sharp';

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

async function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
}

async function processAndSaveImage(imageUrl, slug, imagesDir) {
  if (!imageUrl) return null;

  try {
    console.log(`  ↓ Downloading image for ${slug}...`);
    const imageBuffer = await downloadImage(imageUrl);

    // Get image extension from URL
    const urlPath = new URL(imageUrl).pathname;
    const ext = path.extname(urlPath) || '.jpg';
    const baseName = `${slug}`;

    // Save original (optimized PNG/JPG)
    const originalPath = path.join(imagesDir, `${baseName}${ext}`);
    await sharp(imageBuffer)
      .resize(1200, 630, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 85, progressive: true })
      .toFile(originalPath.replace(ext, '.jpg'));

    // Save WebP version
    const webpPath = path.join(imagesDir, `${baseName}.webp`);
    await sharp(imageBuffer)
      .resize(1200, 630, { fit: 'cover', position: 'center' })
      .webp({ quality: 85 })
      .toFile(webpPath);

    console.log(`  ✓ Saved ${baseName}.jpg and ${baseName}.webp`);

    // Return local path (relative to public)
    return `/images/blog/${baseName}.jpg`;
  } catch (error) {
    console.error(`  ❌ Error processing image for ${slug}:`, error.message);
    return imageUrl; // Fallback to original URL
  }
}

async function main() {
  console.log('🚀 Generating static blog data...');

  // Fetch all blog posts
  const posts = await fetchBlogPosts();

  // Create data directory
  const dataDir = path.join(process.cwd(), 'src', 'data');
  ensureDirectoryExists(dataDir);

  // Create images directory in public
  const publicImagesDir = path.join(process.cwd(), 'public', 'images', 'blog');
  ensureDirectoryExists(publicImagesDir);

  console.log('🖼️  Processing featured images...');

  // Process images for each post
  const postsWithLocalImages = await Promise.all(
    posts.map(async (post) => {
      const localImagePath = await processAndSaveImage(
        post.feature_image,
        post.slug,
        publicImagesDir
      );

      return {
        ...post,
        feature_image: localImagePath || post.feature_image
      };
    })
  );

  // Write posts list (without full HTML to reduce bundle size for the listing page)
  const postsListData = postsWithLocalImages.map(post => ({
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

  for (const post of postsWithLocalImages) {
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
