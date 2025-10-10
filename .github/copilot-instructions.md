## Quick context

This is a small React + Vite site (Tailwind + Radix + Framer Motion). The app lives under `src/` with pages in `src/pages/` and shared UI in `src/components/` and `src/components/ui/`.

Key files to read first:
- `package.json` — dev/build/preview scripts
- `vite.config.js` — dev-only plugins, index.html scripts injected at build time, `@` alias -> `src`
- `tools/generate-llms.js` — extracts `<Helmet>` title/description from `src/pages` and writes `public/llms.txt` (run before build)
- `plugins/visual-editor/*` — dev-only inline-edit tooling wired into Vite

## Big picture architecture

- SPA routed with `react-router-dom`. Routes are declared in `src/App.jsx` (tools/generate-llms.js parses these Route tags to map components → paths).
- Page components live in `src/pages/`. Naming matters: the build tool maps component basenames to URLs (see `tools/generate-llms.js`).
- UI primitives live in `src/components/ui/` (lowercase filenames, small, composable Radix wrappers).
- Visual-edit/inline-edit features are implemented as Vite plugins in `plugins/visual-editor/` and are only enabled in dev (NODE_ENV !== 'production').

## Developer workflows (commands)

Use the npm scripts in `package.json` from repo root:

```bash
npm install
npm run dev      # dev server (vite) on port 3000, host exposed
npm run build    # runs tools/generate-llms.js (generates public/llms.txt) then vite build
npm run preview  # serve built output for quick verification
```

Notes:
- `build` runs `node tools/generate-llms.js || true && vite build`. The `generate-llms` step may fail; failures are ignored so the build proceeds.
- Dev server enables additional Vite plugins (inline-edit, edit-mode) that inject editing/runtime helpers into the page. Check `vite.config.js` and `plugins/visual-editor/` when editing dev-only behavior.

## Project-specific conventions and patterns

- Metadata extraction: pages use `react-helmet` to declare `<title>` and `<meta name="description" .../>`. `tools/generate-llms.js` expects that pattern.
  - Example expected snippet: `<Helmet><title>Page Title</title><meta name="description" content="..."/></Helmet>`
- Routes parsing: `tools/generate-llms.js` finds `<Route ... element={<Component/>}>` patterns in `src/App.jsx`. Avoid unusual runtime route construction if you want it discovered automatically.
- Component files: UI primitives under `src/components/ui/` use lowercase filenames and are small wrappers (e.g. `button.jsx`, `input.jsx`). Higher-level components are PascalCase under `src/components/`.
- Alias: import `@/...` resolves to project `src/` (configured in `vite.config.js`). Prefer `@/` imports for consistency.

## Integration points & runtime behaviors to watch

- Vite injects small runtime scripts into `index.html` (see `vite.config.js` — error handlers, fetch monkey patch, console override). These change runtime error reporting and may postMessages to parent frames.
- `plugins/vite-plugin-iframe-route-restoration.js` saves/restores routes when app runs inside an iframe (sessionStorage key `horizons-iframe-saved-route`). If changing routing or history behavior, update this plugin.
- `console.warn` is suppressed in `vite.config.js` (set to noop) — warnings may not appear in dev console.

## When editing or adding pages/components

- Add pages under `src/pages/` and include a `<Helmet>` block if you want them picked up by `generate-llms.js`.
- If you add a route in `src/App.jsx`, follow the existing `<Route path="/x" element={<X/>} />` pattern so the route extractor finds it.

## Common gotchas for automated edits

- Avoid relying on dynamic route generation or highly dynamic Helmet content — the extractor is regex-based and expects static JSX patterns.
- Dev-only plugins alter the DOM and runtime. When changing dev plugins, test both `npm run dev` and `npm run build` (build omits dev plugins).

## Useful files to inspect when making changes

- `src/App.jsx` — route definitions
- `src/pages/*` — page implementations and Helmet usage
- `src/components/*` and `src/components/ui/*` — component conventions
- `tools/generate-llms.js` — how pages are discovered and llms.txt is generated
- `vite.config.js` — dev plugin wiring, index.html injections, alias, server headers

If anything above is unclear or you'd like more granular rules (for example: preferred lints, commit message patterns, tests to run), tell me which area to expand and I'll iterate.
