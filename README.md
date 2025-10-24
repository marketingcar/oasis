# Oasis Health Services Website

A modern, performant, SEO-optimized website for Oasis Health Services built with React, Vite, and Ghost CMS. Features comprehensive SEO automation, image optimization, and static generation for maximum performance and discoverability.

## 🏗️ Tech Stack

### Frontend
- **Framework**: React 18.2
- **Build Tool**: Vite 4.4 with custom optimization
- **Styling**: TailwindCSS 3.3 with custom design tokens
- **Animations**: Framer Motion 10.16
- **Routing**: React Router DOM 6.16 with static HTML generation
- **Icons**: Lucide React 0.285
- **UI Components**: Radix UI primitives
- **SEO**: Enhanced SEO component with Schema.org support
- **Analytics**: Google Tag Manager (GTM-MTTSNH5Z)

### Content Management
- **CMS**: Ghost CMS (headless)
- **API**: Ghost Content API (@tryghost/content-api 1.12)
- **Content Delivery**: Static generation at build time with automatic rebuilds
- **Images**: Sharp-based optimization to WebP/JPEG

### Build & Deployment
- **CI/CD**: GitHub Actions
- **Trigger**: Cloudflare Worker webhook from Ghost
- **Hosting**: [Your hosting platform]
- **Domain**: oasishealthservices.com

## 🚀 Features

### 🎯 SEO & Analytics (Comprehensive Implementation)
- **Google Tag Manager**: GTM-MTTSNH5Z integrated in head & body
- **Schema.org Markup**: Organization, Service, Article, and Breadcrumb schemas
- **Meta Tags**: Title (60 chars), Description (155 chars), Open Graph, Twitter Cards
- **XML Sitemap**: Auto-generated with all pages + blog posts, updates daily
- **Robots.txt**: SEO-friendly search engine directives
- **LLMs.txt**: AI-readable site index for LLM discovery
- **Static HTML**: Every route has its own index.html for crawlability
- **Canonical URLs**: Proper canonicalization on all pages
- **Favicon & Icons**: Multiple sizes (16x16, 32x32, 180x180)

### 🖼️ Image Optimization (Automatic)
- **WebP + JPEG**: Dual format support with automatic fallback
- **AVIF Support**: Next-gen format ready (optional)
- **Sharp Processing**: High-quality compression and resizing
- **Responsive Images**: Multiple sizes with srcset
- **Lazy Loading**: Below-the-fold images lazy-loaded
- **Blog Images**: Downloaded and optimized at build time
- **Picture Element**: Modern browser support with graceful degradation

### ⚡ Performance Optimizations
- **Code Splitting**: React, UI vendors, and route-based chunks
- **Terser Minification**: Console logs removed, aggressive optimization
- **CSS Code Splitting**: Optimized CSS loading per route
- **Static Generation**: All content pre-rendered at build time
- **Tree Shaking**: Unused code automatically removed
- **Asset Hashing**: Long-term caching with content hashes

### 📝 Blog Integration
- **Ghost CMS**: Headless CMS with Content API
- **Static Generation**: Posts fetched at build, not runtime
- **Daily Rebuilds**: Automatic updates at 12:00 UTC
- **Image Optimization**: Featured images optimized to WebP/JPEG
- **Dynamic Routes**: Static HTML generated for each post
- **Sitemap Integration**: Blog posts automatically in sitemap

## 📁 Project Structure

```
oasis/
├── .github/
│   ├── workflows/
│   │   └── main.yml                 # GitHub Actions CI/CD with SEO validation
│   └── cloudflare-worker/
│       └── worker.js                # Ghost webhook handler
├── public/
│   ├── images/
│   │   └── blog/                    # Optimized blog images (WebP + JPEG)
│   ├── sitemap.xml                  # Auto-generated XML sitemap
│   ├── robots.txt                   # Auto-generated robots.txt
│   └── llms.txt                     # Auto-generated LLM index
├── src/
│   ├── components/
│   │   ├── Layout.jsx               # Main layout wrapper
│   │   ├── Header.jsx               # Site header with navigation
│   │   ├── Footer.jsx               # Site footer
│   │   ├── SEO.jsx                  # Enhanced SEO with Schema.org
│   │   ├── OptimizedImage.jsx       # WebP/AVIF with fallback
│   │   └── ui/                      # Radix UI components
│   ├── data/
│   │   ├── blog-posts.json          # Static blog post list
│   │   └── posts/                   # Individual post data
│   │       └── [slug].json          # Full post content
│   ├── lib/
│   │   ├── ghost.js                 # Ghost API config
│   │   ├── navLinks.js              # Navigation structure
│   │   └── utils.js                 # Utility functions
│   ├── pages/
│   │   ├── Home.jsx                 # Homepage with Organization schema
│   │   ├── About.jsx                # About page
│   │   ├── Blog.jsx                 # Blog listing
│   │   ├── BlogPost.jsx             # Blog post with Article schema
│   │   ├── Patients.jsx             # Patient info
│   │   ├── Providers.jsx            # Provider info (referrals)
│   │   ├── Contact.jsx              # Contact (iframed form)
│   │   ├── StartNow.jsx             # Start page (iframed form)
│   │   ├── services/                # Service pages with Service schema
│   │   │   ├── index.jsx
│   │   │   ├── MedicationManagement.jsx
│   │   │   └── ...
│   │   └── conditions/              # Condition pages
│   │       ├── index.jsx
│   │       └── ...
│   ├── App.jsx                      # Main app with routing
│   ├── index.css                    # Global styles
│   └── main.jsx                     # App entry point
├── tools/
│   ├── build-seo.js                 # Pre-build SEO orchestrator
│   ├── post-build.js                # Post-build orchestrator
│   ├── generate-blog-data.js        # Fetch & optimize blog content
│   ├── generate-sitemap.js          # XML sitemap generator
│   ├── generate-robots.js           # Robots.txt generator
│   ├── generate-llms.js             # LLMs.txt generator
│   ├── generate-static-pages.js     # Static HTML for routes
│   ├── generate-blog-pages.js       # Static HTML for blog posts
│   └── optimize-images.js           # Image optimization utility
├── index.html                       # HTML with GTM integration
├── package.json                     # NPM scripts & dependencies
├── vite.config.js                   # Vite with optimization config
├── tailwind.config.js               # Tailwind customization
├── SEO-IMPLEMENTATION.md            # Complete SEO documentation
└── README.md                        # This file
```

## 🛠️ Development

### Prerequisites
- Node.js 16+
- Yarn 1.22+
- Ghost CMS instance with Content API access

### Environment Setup

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd oasis
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Configure Ghost API**

   Update `src/lib/ghost.js` with your Ghost credentials:
   ```javascript
   const api = new GhostContentAPI({
     url: 'https://your-ghost-instance.com',
     key: 'your-content-api-key',
     version: 'v5'
   });
   ```

4. **Start development server**
   ```bash
   yarn dev
   ```

   The site will be available at `http://localhost:3000`

### Available Scripts

```bash
# Development
npm run dev              # Start dev server on localhost:3000

# Production Build (Recommended)
npm run build            # Full build: SEO → Vite → Post-processing

# Individual Build Steps
npm run build:seo        # Pre-build: Blog data, sitemap, robots, llms
npm run build:vite       # Vite build only
npm run build:post       # Post-build: Static HTML generation

# Preview
npm run preview          # Preview production build locally
```

## 🏗️ Build Process

The build runs in three phases:

### Phase 1: Pre-Build SEO (`npm run build:seo`)
Runs `tools/build-seo.js` which orchestrates:
1. **generate-blog-data.js** - Fetches Ghost posts, downloads & optimizes images to WebP/JPEG
2. **generate-robots.js** - Creates SEO-friendly robots.txt
3. **generate-sitemap.js** - Generates XML sitemap with all pages + blog posts
4. **generate-llms.js** - Creates LLMs.txt for AI discovery

### Phase 2: Vite Build (`npm run build:vite`)
- React app compilation with hot module replacement
- Code splitting (React, UI, route-based chunks)
- Terser minification (console.log removal)
- CSS extraction and optimization
- Asset hashing for cache busting

### Phase 3: Post-Build (`npm run build:post`)
Runs `tools/post-build.js` which orchestrates:
1. **generate-static-pages.js** - Creates index.html for each route
2. **generate-blog-pages.js** - Creates index.html for each blog post

### Build Output

```
dist/
├── index.html
├── sitemap.xml
├── robots.txt
├── llms.txt
├── images/
│   └── blog/
│       ├── post-slug.jpg      # Optimized JPEG
│       └── post-slug.webp     # Optimized WebP
├── assets/
│   ├── js/
│   │   ├── index-[hash].js           # Main bundle
│   │   ├── react-vendor-[hash].js    # React vendor
│   │   ├── ui-vendor-[hash].js       # UI libraries
│   │   └── [page]-[hash].js          # Route chunks
│   ├── images/
│   │   └── [name]-[hash].[ext]
│   ├── fonts/
│   │   └── [name]-[hash].[ext]
│   └── [hash].css                    # Extracted CSS
├── about/
│   └── index.html                    # Static HTML for /about
├── services/
│   ├── index.html
│   └── medication-management/
│       └── index.html                # Static HTML for each service
├── blog/
│   ├── index.html
│   └── [post-slug]/
│       └── index.html                # Static HTML for each post
└── ... (all routes)

## 🖼️ Image Optimization

### Automatic Optimization
All blog images are automatically optimized during build:
- **Format Conversion**: JPEG and WebP versions created
- **Compression**: High-quality compression (85% quality)
- **Resizing**: 1200x630px for blog featured images
- **Storage**: Saved to `public/images/blog/`

### OptimizedImage Component
```jsx
import OptimizedImage from '@/components/OptimizedImage';

// Automatic WebP with JPEG fallback
<OptimizedImage
  src="/images/blog/my-post.jpg"
  alt="Description"
  loading="lazy"
/>

// With priority (no lazy load)
<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero image"
  priority={true}
/>
```

### ResponsiveImage Component
```jsx
import { ResponsiveImage } from '@/components/OptimizedImage';

// Responsive with multiple sizes
<ResponsiveImage
  src="/images/article.jpg"
  alt="Article image"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

### Manual Optimization
Use the CLI tool for optimizing custom images:
```bash
# Single image
node tools/optimize-images.js image.jpg output/image

# From URL
node tools/optimize-images.js https://example.com/image.jpg output/image --url

# Batch directory
node tools/optimize-images.js input-dir/ output-dir/ --batch
```

## 🔄 Automated Rebuild & Deployment

### Workflow Overview

```
Ghost CMS → Cloudflare Worker → GitHub Actions → FTP Deploy
```

### Trigger Points

1. **Push to main** - Automatic build and deploy
2. **Daily at 12:00 UTC** - Catches new blog posts published between builds
3. **Manual dispatch** - Via GitHub UI or CLI
4. **Repository dispatch** - Via Cloudflare Worker or API

### GitHub Actions Workflow

**File**: `.github/workflows/main.yml`

**Steps**:
1. Checkout code
2. Setup Node.js 20
3. Install dependencies (`npm ci`)
4. Install Sharp for Linux
5. **Build with SEO** (`npm run build`)
6. Verify build output (count HTML, sitemap, robots)
7. Validate SEO files
8. Deploy via FTP to `public_html/`

### Manual Rebuild

```bash
# Using GitHub CLI
gh workflow run main.yml

# Or push an empty commit
git commit --allow-empty -m "Trigger rebuild"
git push
```

## 🎨 Customization

### Brand Colors

Brand colors are defined in `tailwind.config.js`:
```javascript
colors: {
  primary: '#2D6762',      // Teal
  secondary: '#6D519D',    // Purple
  accent: '#69A08B',       // Light teal
  text: '#4A5455',         // Dark gray
}
```

### SEO Configuration

Update SEO defaults in `src/components/SEO.jsx`:
```javascript
const siteUrl = 'https://oasishealthservices.com';
const siteName = 'Oasis Health Services';
```

### Ghost API Configuration

Update Ghost connection in `src/lib/ghost.js` and all tool files:
- `tools/generate-blog-data.js`
- `tools/generate-sitemap.js`
- `tools/generate-llms.js`

## 📊 Performance & Monitoring

### Bundle Sizes (Approximate)
- Main CSS: ~50 KB (gzipped: ~10 KB)
- Main JS: ~25 KB (gzipped: ~7 KB)
- React vendor: ~145 KB (gzipped: ~45 KB)
- UI vendor: ~80 KB (gzipped: ~25 KB)
- Page chunks: 5-30 KB each
- Blog images: 30-80 KB (WebP), 50-120 KB (JPEG)

### Core Web Vitals Optimizations
- **LCP (Largest Contentful Paint)**: Hero images with priority loading
- **FID (First Input Delay)**: Code splitting reduces main thread work
- **CLS (Cumulative Layout Shift)**: Width/height on images, no layout shifts

### Loading Strategy
- Critical CSS: Extracted and loaded first
- Above-the-fold images: `loading="eager"`
- Below-the-fold images: `loading="lazy"`
- Route-based code splitting
- Long-term caching via content hashes

### SEO Monitoring
1. **Google Search Console** - Submit sitemap, monitor indexing
2. **Google Analytics** - Set up in GTM container
3. **Rich Results Test** - Validate schema markup
4. **PageSpeed Insights** - Monitor Core Web Vitals

## 🔒 Security

- No API keys exposed in frontend
- Ghost Content API is read-only
- CORS configured for API requests
- GTM for secure analytics tracking
- No inline scripts (except GTM)
- Content Security Policy ready
- Regular dependency updates

## 📚 Documentation

- **[SEO-IMPLEMENTATION.md](SEO-IMPLEMENTATION.md)** - Complete SEO guide with troubleshooting
- **[README.md](README.md)** - This file, project overview
- Inline code comments for complex logic
- JSDoc comments on utility functions

## 🐛 Troubleshooting

### Blog posts not showing

1. **Test Ghost API connection**:
   ```bash
   node tools/generate-blog-data.js
   ```

2. **Verify credentials** in `tools/generate-blog-data.js`, `tools/generate-sitemap.js`, `tools/generate-llms.js`

3. **Check data files**: `src/data/blog-posts.json` and `src/data/posts/*.json` should exist

### Build failures

1. **Clear and reinstall**:
   ```bash
   rm -rf node_modules dist
   npm install
   npm run build
   ```

2. **Check Sharp installation** (required for image optimization):
   ```bash
   npm install --os=linux --cpu=x64 sharp
   ```

3. **Review build logs** in GitHub Actions for specific errors

### Images not loading

1. **Check optimization**: Images should be in `public/images/blog/` as both `.jpg` and `.webp`
2. **Browser console**: Look for 404 errors or CORS issues
3. **Ghost images**: Verify feature_image is set in Ghost CMS
4. **Local dev**: Run `npm run build:seo` to fetch and optimize images

### SEO files missing

1. **Run pre-build manually**:
   ```bash
   npm run build:seo
   ```

2. **Check public directory**: Should contain `sitemap.xml`, `robots.txt`, `llms.txt`

3. **Verify Ghost API**: If sitemap is empty, check Ghost connection

### Static HTML pages missing

1. **Run post-build manually**:
   ```bash
   npm run build         # First build with Vite
   npm run build:post    # Then generate static pages
   ```

2. **Check dist directory**: Should have `index.html` in each route folder

## 🎯 Key Features Summary

✅ **Full SEO Automation** - Sitemap, robots.txt, meta tags, schema markup
✅ **Image Optimization** - WebP/JPEG with automatic conversion
✅ **Static Generation** - Every route has SEO-friendly HTML
✅ **Google Tag Manager** - Integrated analytics tracking
✅ **Performance** - Code splitting, minification, lazy loading
✅ **Daily Builds** - Auto-updates at 12:00 UTC
✅ **Ghost Integration** - Headless CMS with static output

## 🤝 Support

For issues or questions:
- Create an issue in this repository
- Review [SEO-IMPLEMENTATION.md](SEO-IMPLEMENTATION.md) for detailed SEO documentation
- Contact: mechanic@marketingcar.com

---

**Built with ❤️ by Marketing Car**
Last updated: 2025-10-24
