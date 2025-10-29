#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import GhostContentAPI from '@tryghost/content-api';

const CLEAN_CONTENT_REGEX = {
  comments: /\/\*[\s\S]*?\*\/|\/\/.*$/gm,
  templateLiterals: /`[\s\S]*?`/g,
  strings: /'[^']*'|"[^"]*"/g,
  jsxExpressions: /\{.*?\}/g,
  htmlEntities: {
    quot: /&quot;/g,
    amp: /&amp;/g,
    lt: /&lt;/g,
    gt: /&gt;/g,
    apos: /&apos;/g
  }
};

const EXTRACTION_REGEX = {
  route: /<Route\s+[^>]*>/g,
  path: /path=["']([^"']+)["']/,
  element: /element=\{<(\w+)[^}]*\/?\s*>\}/,
  helmet: /<Helmet[^>]*?>([\s\S]*?)<\/Helmet>/i,
  helmetTest: /<Helmet[\s\S]*?<\/Helmet>/i,
  seo: /<SEO\s+([^>]*?)(?:\/?>|>[\s\S]*?<\/SEO>)/i,
  seoTest: /<SEO[\s\S]*?(?:\/?>|<\/SEO>)/i,
  seoProp: /(\w+)=\{([^}]*)\}|(\w+)="([^"]*)"/g,
  title: /<title[^>]*?>\s*(.*?)\s*<\/title>/i,
  description: /<meta\s+name=["']description["']\s+content=["'](.*?)["']/i
};

function cleanContent(content) {
  return content
    .replace(CLEAN_CONTENT_REGEX.comments, '')
    .replace(CLEAN_CONTENT_REGEX.templateLiterals, '""')
    .replace(CLEAN_CONTENT_REGEX.strings, '""');
}

function cleanText(text) {
  if (!text) return text;
  
  return text
    .replace(CLEAN_CONTENT_REGEX.jsxExpressions, '')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.quot, '"')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.amp, '&')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.lt, '<')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.gt, '>')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.apos, "'")
    .trim();
}

function extractRoutes(appJsxPath) {
  if (!fs.existsSync(appJsxPath)) return new Map();

  try {
    const content = fs.readFileSync(appJsxPath, 'utf8');
    const routes = new Map();
    const routeMatches = [...content.matchAll(EXTRACTION_REGEX.route)];
    
    for (const match of routeMatches) {
      const routeTag = match[0];
      const pathMatch = routeTag.match(EXTRACTION_REGEX.path);
      const elementMatch = routeTag.match(EXTRACTION_REGEX.element);
      const isIndex = routeTag.includes('index');
      
      if (elementMatch) {
        const componentName = elementMatch[1];
        let routePath;
        
        if (isIndex) {
          routePath = '/';
        } else if (pathMatch) {
          routePath = pathMatch[1].startsWith('/') ? pathMatch[1] : `/${pathMatch[1]}`;
        }
        
        routes.set(componentName, routePath);
      }
    }

    return routes;
  } catch (error) {
    return new Map();
  }
}

function findReactFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively search subdirectories
      files = files.concat(findReactFiles(fullPath));
    } else if (stat.isFile() && (fullPath.endsWith('.jsx') || fullPath.endsWith('.js'))) {
      files.push(fullPath);
    }
  }

  return files;
}

function extractHelmetData(content, filePath, routes) {
  const cleanedContent = cleanContent(content);

  let title, description;

  // Check for SEO component first
  if (EXTRACTION_REGEX.seoTest.test(cleanedContent)) {
    const seoMatch = content.match(EXTRACTION_REGEX.seo);
    if (seoMatch) {
      const seoProps = seoMatch[1];

      // Extract title prop
      const titlePropMatch = seoProps.match(/title=["']([^"']*)["']/) ||
                            seoProps.match(/title=\{["']([^"']*)["']\}/) ||
                            seoProps.match(/title=\{([^}]*)\}/);
      if (titlePropMatch) {
        title = cleanText(titlePropMatch[1]);
      }

      // Extract description prop
      const descPropMatch = seoProps.match(/description=["']([^"']*)["']/) ||
                           seoProps.match(/description=\{["']([^"']*)["']\}/) ||
                           seoProps.match(/description=\{([^}]*)\}/);
      if (descPropMatch) {
        description = cleanText(descPropMatch[1]);
      }
    }
  }
  // Fall back to Helmet component
  else if (EXTRACTION_REGEX.helmetTest.test(cleanedContent)) {
    const helmetMatch = content.match(EXTRACTION_REGEX.helmet);
    if (helmetMatch) {
      const helmetContent = helmetMatch[1];
      const titleMatch = helmetContent.match(EXTRACTION_REGEX.title);
      const descMatch = helmetContent.match(EXTRACTION_REGEX.description);

      title = cleanText(titleMatch?.[1]);
      description = cleanText(descMatch?.[1]);
    }
  } else {
    return null;
  }

  const fileName = path.basename(filePath, path.extname(filePath));
  const url = routes.length && routes.has(fileName)
    ? routes.get(fileName)
    : generateFallbackUrl(fileName);

  return {
    url,
    title: title || 'Untitled Page',
    description: description || 'No description available'
  };
}

function generateFallbackUrl(fileName) {
  const cleanName = fileName.replace(/Page$/, '').toLowerCase();
  return cleanName === 'app' ? '/' : `/${cleanName}`;
}

function generateLlmsTxt(pages, blogPosts) {
  const sortedPages = pages.sort((a, b) => a.title.localeCompare(b.title));
  const pageEntries = sortedPages.map(page =>
    `- [${page.title}](${page.url}): ${page.description}`
  ).join('\n');

  let content = `## Pages\n${pageEntries}`;

  if (blogPosts && blogPosts.length > 0) {
    const sortedPosts = blogPosts.sort((a, b) => a.title.localeCompare(b.title));
    const postEntries = sortedPosts.map(post =>
      `- [${post.title}](${post.url}): ${post.description}`
    ).join('\n');
    content += `\n\n## Blog Posts\n${postEntries}`;
  }

  return content;
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function processPageFile(filePath, routes) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return extractHelmetData(content, filePath, routes);
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return null;
  }
}

async function fetchBlogPosts() {
  try {
    const ghostAPI = new GhostContentAPI({
      url: 'https://oasis.marketingcarcontent.com',
      key: 'dac5098ae92e739703c202ce3e',
      version: 'v5'
    });

    const posts = await ghostAPI.posts.browse({
      limit: 'all',
      fields: 'title,slug,excerpt,custom_excerpt'
    });

    return posts.map(post => ({
      title: post.title,
      url: `/blog/${post.slug}`,
      description: post.excerpt || post.custom_excerpt || 'Blog post from Oasis Health Services'
    }));
  } catch (error) {
    console.error('⚠️  Error fetching blog posts for llms.txt:', error.message);
    return [];
  }
}

async function main() {
  const pagesDir = path.join(process.cwd(), 'src', 'pages');
  const appJsxPath = path.join(process.cwd(), 'src', 'App.jsx');

  let pages = [];

  if (!fs.existsSync(pagesDir)) {
    pages.push(processPageFile(appJsxPath, []));
  } else {
    const routes = extractRoutes(appJsxPath);
    const reactFiles = findReactFiles(pagesDir);

    pages = reactFiles
      .map(filePath => processPageFile(filePath, routes))
      .filter(Boolean);

    if (pages.length === 0) {
      console.error('❌ No pages with Helmet components found!');
      process.exit(1);
    }
  }

  // Fetch blog posts
  const blogPosts = await fetchBlogPosts();
  console.log(`✓ Found ${blogPosts.length} blog posts`);

  const llmsTxtContent = generateLlmsTxt(pages, blogPosts);
  const outputPath = path.join(process.cwd(), 'public', 'llms.txt');

  ensureDirectoryExists(path.dirname(outputPath));
  fs.writeFileSync(outputPath, llmsTxtContent, 'utf8');
  console.log(`✓ Generated llms.txt with ${pages.length} pages and ${blogPosts.length} blog posts`);
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  main().catch(error => {
    console.error('Error generating llms.txt:', error);
    process.exit(1);
  });
}
