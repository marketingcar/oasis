#!/usr/bin/env node

/**
 * Post-Build Script
 * Runs after Vite build to generate static HTML pages
 */

import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const postBuildTasks = [
  { name: 'Static Pages', script: 'node tools/generate-static-pages.js' },
  { name: 'Blog Pages', script: 'node tools/generate-blog-pages.js' },
];

async function runScript(name, script) {
  console.log(`\n🔧 Running: ${name}...`);
  try {
    const { stdout, stderr } = await execAsync(script);
    if (stdout) console.log(stdout);
    if (stderr && !stderr.includes('ExperimentalWarning')) console.error(stderr);
    console.log(`✅ ${name} completed`);
    return true;
  } catch (error) {
    console.error(`❌ ${name} failed:`, error.message);
    return false;
  }
}

async function main() {
  console.log('\n🎯 Starting Post-Build SEO Tasks...\n');
  console.log('=' .repeat(50));

  let allSuccess = true;

  // Run post-build tools
  for (const task of postBuildTasks) {
    const success = await runScript(task.name, task.script);
    if (!success) allSuccess = false;
  }

  console.log('\n' + '='.repeat(50));

  if (allSuccess) {
    console.log('✅ All post-build tasks completed successfully!');
    console.log('🎉 Build is ready for deployment!\n');
  } else {
    console.log('⚠️  Some post-build tasks failed');
    process.exit(1);
  }
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  main().catch(error => {
    console.error('Fatal error in post-build:', error);
    process.exit(1);
  });
}

export default main;
