# SEO Implementation Guide

## Overview

This document outlines the comprehensive SEO optimizations implemented for Oasis Health Services website. All SEO tasks are automated and run during every build via GitHub Actions.

---

## ✅ Implemented Features

### 1. Google Tag Manager (GTM)
- **Container ID**: GTM-MTTSNH5Z
- **Location**: `index.html` (head and body)
- **Status**: ✅ Active

### 2. Meta Tags & Structured Data

#### SEO Component (`src/components/SEO.jsx`)
Provides comprehensive meta tag management with:
- Title tags (max 60 characters)
- Meta descriptions (max 155 characters)
- Open Graph tags (Facebook/LinkedIn)
- Twitter Card tags
- Canonical URLs
- Keywords
- Schema.org JSON-LD structured data

#### Schema Markup Helpers
- `getOrganizationSchema()` - Medical organization schema for homepage
- `getServiceSchema()` - Medical procedure schema for service pages
- `getBreadcrumbSchema()` - Breadcrumb navigation
- `getArticleSchema()` - Blog post articles

**Usage Example:**
```javascript
import SEO, { getOrganizationSchema } from '@/components/SEO';

<SEO
  title="Your Page Title"
  description="Your page description"
  keywords="keyword1, keyword2"
  url="/page-url"
  schema={getOrganizationSchema()}
/>
```

### 3. Automated Build Process

#### Pre-Build SEO Tasks (`tools/build-seo.js`)
Runs before Vite build:
1. **Blog Data Generation** - Fetches posts from Ghost CMS
2. **Robots.txt Generation** - Creates SEO-friendly robots.txt
3. **Sitemap Generation** - XML sitemap with all pages
4. **LLMs.txt Generation** - AI-friendly content index

#### Post-Build SEO Tasks (`tools/post-build.js`)
Runs after Vite build:
1. **Static Page Generation** - Creates HTML files for all routes
2. **Blog Page Generation** - Creates HTML files for all blog posts

### 4. XML Sitemap

**Location**: `/public/sitemap.xml` (copied to `/dist/sitemap.xml`)

**Features**:
- Automatically includes all static routes
- Dynamically adds blog posts from Ghost CMS
- Updates on every build
- Includes priority and change frequency
- Proper lastmod dates

**Script**: `tools/generate-sitemap.js`

### 5. Robots.txt

**Location**: `/public/robots.txt` (copied to `/dist/robots.txt`)

**Features**:
- Allows all user agents
- References sitemap
- Blocks admin/private areas

**Script**: `tools/generate-robots.js`

### 6. Static HTML Pages

**Purpose**: SEO-friendly routing for single-page application

**Implementation**:
- Creates `index.html` in each route directory
- Enables direct navigation to any page
- All pages are crawlable by search engines

**Scripts**:
- `tools/generate-static-pages.js` - Static routes
- `tools/generate-blog-pages.js` - Blog post routes

### 7. Performance Optimizations

#### Vite Build Configuration (`vite.config.js`)
- **Minification**: Terser with console.log removal
- **Code Splitting**: Separate chunks for React and UI libraries
- **Asset Organization**: Clean folder structure
- **CSS Code Splitting**: Optimized CSS loading
- **No Source Maps**: Faster production builds

#### Build Output Structure:
```
dist/
├── index.html
├── sitemap.xml
├── robots.txt
├── llms.txt
├── assets/
│   ├── js/
│   ├── images/
│   ├── fonts/
│   └── [hash].css
├── about/
│   └── index.html
├── services/
│   ├── index.html
│   ├── therapy-and-counseling/
│   │   └── index.html
│   └── ...
└── blog/
    ├── index.html
    └── [post-slug]/
        └── index.html
```

### 8. LLMs.txt

**Purpose**: AI-friendly content indexing

**Location**: `/public/llms.txt` (copied to `/dist/llms.txt`)

**Features**:
- Lists all pages with titles and descriptions
- Includes blog posts
- Updates dynamically on each build

**Script**: `tools/generate-llms.js`

### 9. Favicon & App Icons

**Implemented in**: `index.html`

**Sizes**:
- 16x16 (favicon)
- 32x32 (favicon)
- 180x180 (Apple touch icon)

---

## 🔧 Build Scripts

### NPM Scripts (package.json)

```bash
# Full production build with all SEO tasks
npm run build

# Individual build steps:
npm run build:seo    # Pre-build SEO tasks only
npm run build:vite   # Vite build only
npm run build:post   # Post-build SEO tasks only

# Development
npm run dev          # Start dev server
npm run preview      # Preview production build
```

### GitHub Actions Workflow

**File**: `.github/workflows/main.yml`

**Triggers**:
- Push to main branch
- Daily at 12:00 UTC (catches new blog posts)
- Manual dispatch
- Repository dispatch

**Steps**:
1. Checkout code
2. Setup Node.js 20
3. Install dependencies
4. Install Sharp (for image optimization)
5. Run full build process
6. Validate SEO files
7. Deploy via FTP

---

## 📋 SEO Checklist

### ✅ Technical SEO
- [x] Google Tag Manager integrated
- [x] XML Sitemap generated dynamically
- [x] Robots.txt configured
- [x] Canonical URLs on all pages
- [x] Meta titles (max 60 chars)
- [x] Meta descriptions (max 155 chars)
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Schema.org JSON-LD markup
- [x] Favicon and app icons
- [x] Clean, descriptive URLs
- [x] Static HTML for all routes
- [x] Mobile-friendly design
- [x] Fast load times (minified assets)

### ✅ Content SEO
- [x] Unique title per page
- [x] Unique description per page
- [x] H1 tags on all pages
- [x] Hierarchical heading structure
- [x] Alt text on images
- [x] Internal linking
- [x] Blog content indexed

### ✅ Performance
- [x] Minified CSS/JS
- [x] Code splitting
- [x] Optimized images
- [x] Lazy loading (via React)
- [x] No console logs in production
- [x] Efficient caching headers

---

## 🚀 Adding Schema to New Pages

### Service Pages

```javascript
import SEO, { getServiceSchema } from '@/components/SEO';

const serviceName = "Medication Management";
const serviceDescription = "Comprehensive psychiatric medication management...";

<SEO
  title={serviceName}
  description={serviceDescription}
  url="/services/medication-management"
  schema={getServiceSchema(serviceName, serviceDescription)}
/>
```

### Blog Posts

```javascript
import SEO, { getArticleSchema } from '@/components/SEO';

<SEO
  title={post.title}
  description={post.excerpt}
  url={`/blog/${post.slug}`}
  image={post.feature_image}
  type="article"
  schema={getArticleSchema({
    title: post.title,
    description: post.excerpt,
    image: post.feature_image,
    publishedAt: post.published_at,
    updatedAt: post.updated_at
  })}
/>
```

---

## 📊 Monitoring & Validation

### Tools to Use:

1. **Google Search Console**
   - Submit sitemap: `https://oasishealthservices.com/sitemap.xml`
   - Monitor indexing status
   - Check mobile usability

2. **Google Rich Results Test**
   - Validate schema markup
   - URL: https://search.google.com/test/rich-results

3. **Google PageSpeed Insights**
   - Monitor Core Web Vitals
   - Check mobile/desktop performance

4. **Mobile-Friendly Test**
   - URL: https://search.google.com/test/mobile-friendly

### Key URLs to Validate:
- https://oasishealthservices.com/sitemap.xml
- https://oasishealthservices.com/robots.txt
- https://oasishealthservices.com/llms.txt

---

## 🔄 Automatic Updates

### Blog Posts
- Blog data fetched from Ghost CMS on every build
- New posts automatically added to sitemap
- Static HTML pages generated for each post
- LLMs.txt updated with new content

### Daily Builds
- GitHub Action runs daily at 12:00 UTC
- Catches new blog posts published between deployments
- Regenerates all SEO files
- Ensures sitemap stays current

---

## 🐛 Troubleshooting

### Build Failures

1. **Check blog data generation**:
   ```bash
   node tools/generate-blog-data.js
   ```

2. **Verify sitemap generation**:
   ```bash
   node tools/generate-sitemap.js
   cat public/sitemap.xml
   ```

3. **Test full build locally**:
   ```bash
   npm run build
   ls -la dist/
   ```

### Missing SEO Files

If sitemap.xml, robots.txt, or llms.txt are missing after build:

1. Check `public/` directory exists
2. Run individual generation scripts
3. Verify scripts have execute permissions
4. Check GitHub Actions logs

---

## 📝 Notes

- All SEO tasks run automatically on every build
- No manual intervention required
- Blog posts are dynamically integrated
- Schema markup validates against Google's Rich Results Test
- Site follows Google's SEO best practices
- Core Web Vitals optimizations applied

---

## 🎯 Next Steps

To further improve SEO:

1. **Add more schema types**:
   - FAQ schema for FAQ pages
   - Video schema if video content added
   - Local business schema for multi-location

2. **Performance improvements**:
   - Implement service worker for caching
   - Add image lazy loading
   - Consider CDN for assets

3. **Content enhancements**:
   - Add blog post author bios
   - Include estimated reading time
   - Add related posts sections

4. **Analytics**:
   - Set up Google Analytics 4 in GTM
   - Configure conversion tracking
   - Monitor user behavior

---

**Last Updated**: 2025-10-24
**Maintained By**: Development Team
