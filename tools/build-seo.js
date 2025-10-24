#!/usr/bin/env node

/**
 * Master SEO Build Script
 * Runs all SEO-related generation tasks in the correct order
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execAsync = promisify(exec);

const tools = [
  { name: 'Blog Data', script: 'node tools/generate-blog-data.js' },
  { name: 'Robots.txt', script: 'node tools/generate-robots.js' },
  { name: 'Sitemap', script: 'node tools/generate-sitemap.js' },
  { name: 'LLMs.txt', script: 'node tools/generate-llms.js' },
];

async function runScript(name, script) {
  console.log(`\n🔧 Running: ${name}...`);
  try {
    const { stdout, stderr } = await execAsync(script);
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
    console.log(`✅ ${name} completed`);
    return true;
  } catch (error) {
    console.error(`❌ ${name} failed:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting SEO Build Process...\n');
  console.log('=' .repeat(50));

  let allSuccess = true;

  // Run pre-build tools
  for (const tool of tools) {
    const success = await runScript(tool.name, tool.script);
    if (!success) allSuccess = false;
  }

  console.log('\n' + '='.repeat(50));

  if (allSuccess) {
    console.log('✅ All pre-build SEO tasks completed successfully!');
    console.log('\n📦 Now running Vite build...\n');
  } else {
    console.log('⚠️  Some tasks failed, but continuing with build...');
  }
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  main().catch(error => {
    console.error('Fatal error in SEO build:', error);
    process.exit(1);
  });
}

export default main;
