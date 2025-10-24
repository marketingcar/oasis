#!/usr/bin/env node

/**
 * Image Optimization Utility
 * Optimizes images to WebP, AVIF, and fallback formats
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import sharp from 'sharp';

export const IMAGE_SIZES = {
  thumbnail: 400,
  medium: 800,
  large: 1200,
  xlarge: 1920,
  hero: 2400,
};

export const IMAGE_QUALITY = {
  jpeg: 85,
  webp: 85,
  avif: 80,
  png: 90,
};

/**
 * Download image from URL
 */
export async function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
}

/**
 * Optimize a single image to multiple formats
 * @param {Buffer|string} input - Image buffer or file path
 * @param {string} outputPath - Base output path (without extension)
 * @param {object} options - Optimization options
 * @returns {Promise<object>} - Paths to generated images
 */
export async function optimizeImage(input, outputPath, options = {}) {
  const {
    width = IMAGE_SIZES.large,
    height,
    formats = ['webp', 'jpeg'],
    fit = 'cover',
    position = 'center',
    quality,
  } = options;

  const results = {
    webp: null,
    jpeg: null,
    avif: null,
    png: null,
  };

  try {
    // Load image
    let sharpInstance = typeof input === 'string'
      ? sharp(input)
      : sharp(input);

    // Get metadata
    const metadata = await sharpInstance.metadata();

    // Resize if needed
    if (width || height) {
      sharpInstance = sharpInstance.resize(width, height, {
        fit,
        position,
        withoutEnlargement: true
      });
    }

    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Generate WebP
    if (formats.includes('webp')) {
      const webpPath = `${outputPath}.webp`;
      await sharpInstance
        .clone()
        .webp({ quality: quality?.webp || IMAGE_QUALITY.webp })
        .toFile(webpPath);
      results.webp = webpPath;
    }

    // Generate JPEG
    if (formats.includes('jpeg') || formats.includes('jpg')) {
      const jpegPath = `${outputPath}.jpg`;
      await sharpInstance
        .clone()
        .jpeg({
          quality: quality?.jpeg || IMAGE_QUALITY.jpeg,
          progressive: true,
          mozjpeg: true
        })
        .toFile(jpegPath);
      results.jpeg = jpegPath;
    }

    // Generate AVIF (next-gen format)
    if (formats.includes('avif')) {
      const avifPath = `${outputPath}.avif`;
      await sharpInstance
        .clone()
        .avif({ quality: quality?.avif || IMAGE_QUALITY.avif })
        .toFile(avifPath);
      results.avif = avifPath;
    }

    // Generate PNG (for images with transparency)
    if (formats.includes('png') || metadata.hasAlpha) {
      const pngPath = `${outputPath}.png`;
      await sharpInstance
        .clone()
        .png({
          quality: quality?.png || IMAGE_QUALITY.png,
          compressionLevel: 9
        })
        .toFile(pngPath);
      results.png = pngPath;
    }

    return results;
  } catch (error) {
    throw new Error(`Image optimization failed: ${error.message}`);
  }
}

/**
 * Optimize image from URL
 */
export async function optimizeImageFromUrl(url, outputPath, options = {}) {
  const buffer = await downloadImage(url);
  return optimizeImage(buffer, outputPath, options);
}

/**
 * Generate responsive image set (multiple sizes)
 */
export async function generateResponsiveSet(input, baseOutputPath, sizes = ['medium', 'large']) {
  const results = {};

  for (const sizeName of sizes) {
    const width = IMAGE_SIZES[sizeName] || sizeName;
    const outputPath = `${baseOutputPath}-${sizeName}`;

    try {
      const optimized = await optimizeImage(input, outputPath, {
        width,
        formats: ['webp', 'jpeg']
      });
      results[sizeName] = optimized;
    } catch (error) {
      console.error(`Failed to generate ${sizeName}:`, error.message);
    }
  }

  return results;
}

/**
 * Batch optimize images in a directory
 */
export async function batchOptimizeDirectory(inputDir, outputDir, options = {}) {
  const files = fs.readdirSync(inputDir);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

  console.log(`📸 Optimizing ${imageFiles.length} images from ${inputDir}...`);

  const results = [];

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const baseName = path.basename(file, path.extname(file));
    const outputPath = path.join(outputDir, baseName);

    try {
      const optimized = await optimizeImage(inputPath, outputPath, options);
      results.push({ file, ...optimized });
      console.log(`  ✓ ${file}`);
    } catch (error) {
      console.error(`  ❌ ${file}: ${error.message}`);
    }
  }

  console.log(`✓ Optimized ${results.length}/${imageFiles.length} images`);
  return results;
}

// CLI support
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log(`
Usage: node optimize-images.js <input> <output> [options]

Examples:
  node optimize-images.js image.jpg output/image
  node optimize-images.js input-dir/ output-dir/ --batch
  node optimize-images.js https://example.com/image.jpg output/image --url
    `);
    process.exit(1);
  }

  const [input, output] = args;
  const isBatch = args.includes('--batch');
  const isUrl = args.includes('--url');

  (async () => {
    try {
      if (isBatch) {
        await batchOptimizeDirectory(input, output);
      } else if (isUrl) {
        await optimizeImageFromUrl(input, output);
      } else {
        await optimizeImage(input, output);
      }
      console.log('✅ Done!');
    } catch (error) {
      console.error('❌ Error:', error.message);
      process.exit(1);
    }
  })();
}
