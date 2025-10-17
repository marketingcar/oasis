# Oasis Health Services Website

A modern, performant website for Oasis Health Services built with React, Vite, and Ghost CMS.

## 🏗️ Tech Stack

### Frontend
- **Framework**: React 18.2
- **Build Tool**: Vite 4.4
- **Styling**: TailwindCSS 3.3 with custom design tokens
- **Animations**: Framer Motion 10.16
- **Routing**: React Router DOM 6.16
- **Icons**: Lucide React 0.285
- **UI Components**: Radix UI primitives
- **SEO**: React Helmet 6.1

### Content Management
- **CMS**: Ghost CMS (headless)
- **API**: Ghost Content API (@tryghost/content-api 1.12)
- **Content Delivery**: Static generation at build time

### Build & Deployment
- **CI/CD**: GitHub Actions
- **Trigger**: Cloudflare Worker webhook from Ghost
- **Hosting**: [Your hosting platform]
- **Domain**: oasishealthservices.com

## 🚀 Features

### Performance Optimizations
- **Code Splitting**: Separate bundles for each page and vendor library
- **Image Optimization**: WebP with PNG/JPG fallbacks via OptimizedImage component
- **Static Generation**: Blog posts fetched at build time, not runtime
- **Lazy Loading**: Images and routes loaded on demand
- **Tree Shaking**: Unused code automatically removed

### SEO & Discoverability
- **Meta Tags**: Comprehensive Open Graph and Twitter Card meta tags
- **Sitemap**: Auto-generated XML sitemap including all pages and blog posts
- **LLMs.txt**: AI-readable site structure for LLM discovery
- **Canonical URLs**: Proper canonical tags on all pages
- **Robots.txt**: Search engine directives

### Blog Integration
- **Ghost CMS**: Headless CMS for blog content
- **Static Blog**: Posts fetched during build, not at runtime
- **Auto-Rebuild**: Cloudflare Worker triggers GitHub Actions on new posts
- **Featured Images**: Optimized images with WebP support
- **No Author Display**: Content-focused presentation

## 📁 Project Structure

```
oasis/
├── .github/
│   └── workflows/
│       └── main.yml           # GitHub Actions CI/CD
├── public/
│   ├── sitemap.xml           # Auto-generated sitemap
│   └── llms.txt              # Auto-generated LLM index
├── src/
│   ├── components/
│   │   ├── Layout.jsx        # Main layout wrapper
│   │   ├── SEO.jsx           # Reusable SEO component
│   │   └── OptimizedImage.jsx # WebP image component
│   ├── data/
│   │   ├── blog-posts.json   # Static blog post list
│   │   └── posts/            # Individual post data
│   │       └── [slug].json   # Post content by slug
│   ├── lib/
│   │   ├── ghost.js          # Ghost API client config
│   │   └── utils.js          # Utility functions
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Blog.jsx          # Blog listing page
│   │   ├── BlogPost.jsx      # Individual blog post
│   │   ├── Patients.jsx
│   │   ├── Providers.jsx
│   │   ├── Contact.jsx
│   │   ├── Services.jsx
│   │   ├── Conditions.jsx
│   │   ├── services/         # Service detail pages
│   │   └── conditions/       # Condition detail pages
│   ├── App.jsx               # Main app component
│   ├── index.css             # Global styles
│   └── main.jsx              # App entry point
├── tools/
│   ├── generate-blog-data.js # Fetch blog posts at build time
│   ├── generate-sitemap.js   # Generate sitemap.xml
│   └── generate-llms.js      # Generate llms.txt
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
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

- `yarn dev` - Start development server with HMR
- `yarn build` - Build for production
- `yarn preview` - Preview production build locally

## 🏗️ Build Process

The build process runs in sequence:

1. **generate-blog-data.js** - Fetches all blog posts from Ghost and saves as static JSON
2. **generate-llms.js** - Generates `llms.txt` with all pages and blog posts
3. **generate-sitemap.js** - Generates `sitemap.xml` with all routes and blog posts
4. **vite build** - Builds the React application with code splitting

### Build Output

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].css           # Main styles
│   ├── index-[hash].js            # Main bundle
│   ├── vendor-react-[hash].js     # React vendor bundle
│   ├── vendor-framer-[hash].js    # Framer Motion bundle
│   ├── vendor-radix-[hash].js     # Radix UI bundle
│   ├── vendor-[hash].js           # Other vendors
│   ├── page-Home-[hash].js        # Home page chunk
│   ├── page-Blog-[hash].js        # Blog page chunk
│   ├── page-BlogPost-[hash].js    # Blog post page chunk
│   └── ...                        # Other page chunks
├── sitemap.xml
└── llms.txt
```

## 🔄 Automated Rebuild on New Blog Posts

### Workflow Overview

```
Ghost CMS → Cloudflare Worker → GitHub Actions → Deploy
```

### Setup Steps

1. **Ghost Webhook**
   - In Ghost Admin: Settings → Integrations → Webhooks
   - Create webhook for "Post published" event
   - Target URL: Your Cloudflare Worker endpoint

2. **Cloudflare Worker**
   - Receives webhook from Ghost
   - Validates the request
   - Triggers GitHub Actions workflow via GitHub API

3. **GitHub Actions**
   - Workflow file: `.github/workflows/main.yml`
   - Runs build process
   - Fetches latest blog posts from Ghost
   - Regenerates sitemap and llms.txt
   - Deploys updated site

### Manual Rebuild

To manually trigger a rebuild:
```bash
# Using GitHub CLI
gh workflow run main.yml

# Or push a commit
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
const siteUrl = 'https://oasishealthservices.org';
const siteName = 'Oasis Health Services';
```

### Ghost API Configuration

Update Ghost connection in `src/lib/ghost.js` and all tool files:
- `tools/generate-blog-data.js`
- `tools/generate-sitemap.js`
- `tools/generate-llms.js`

## 📊 Performance

### Bundle Sizes

- Main CSS: ~48 KB (gzipped: 8.5 KB)
- Main JS: ~22 KB (gzipped: 6 KB)
- React vendor: ~254 KB (gzipped: 82 KB)
- Framer Motion vendor: ~102 KB (gzipped: 34 KB)
- Page chunks: 3-50 KB each

### Loading Strategy

- Critical CSS: Inlined in `<head>`
- Above-the-fold images: `loading="eager"`
- Below-the-fold images: `loading="lazy"`
- Route-based code splitting
- Vendor bundle caching

## 🔒 Security

- No API keys exposed in frontend
- Ghost Content API is read-only
- CORS configured for API requests
- Content Security Policy headers recommended
- Regular dependency updates via Dependabot

## 🐛 Troubleshooting

### Blog posts not showing

1. Check Ghost API connection:
   ```bash
   node tools/generate-blog-data.js
   ```

2. Verify API credentials in `src/lib/ghost.js`

3. Check that `src/data/blog-posts.json` exists after build

### Build failures

1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules
   yarn install
   ```

2. Check Ghost API is accessible:
   ```bash
   curl https://your-ghost-instance.com/ghost/api/content/posts/?key=your-key
   ```

3. Review build logs for specific errors

### Images not loading

1. Verify Ghost CDN is accessible
2. Check browser console for CORS errors
3. Ensure feature_image field is populated in Ghost

## 🤝 Support

For issues or questions:
- Create an issue in this repository
- Contact: mechanic@marketingcar.com

---

Built with ❤️ by Marketing Car
