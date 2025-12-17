## Quick context

This is a small single-page React + TypeScript app scaffolded for Vite. It uses:

- Vite for dev server and build (`vite`, `@vitejs/plugin-react`)
- TypeScript with project references (`tsc -b` used in the `build` script)
- Tailwind/PostCSS for styling (configs are present)

Main entry: `index.html` -> `src/main.tsx`. The primary component is `src/App.tsx`.

## How to run / build (explicit)

- Install deps: `npm install`
- Dev server: `npm run dev` (uses `vite`)
- Build: `npm run build` (runs `tsc -b && vite build`) — note the explicit `tsc -b` step which type-checks and builds referenced projects
- Preview production build: `npm run preview`
- Lint: `npm run lint` (runs `eslint .`)

When proposing changes to build or CI, preserve the `tsc -b` step unless replacing with an equivalent type-checking flow.

## Project-specific conventions and patterns

- TypeScript project references: root `tsconfig.json` references `tsconfig.app.json` and `tsconfig.node.json`. App-level changes should usually go into `tsconfig.app.json`.
- Entry imports use absolute `/` paths for public assets (e.g. `vite.svg` referenced as `/vite.svg` in `App.tsx`).
- CSS is imported at the top of `src/main.tsx` (`index.css`) and per-component CSS (e.g. `App.css`) lives next to the component.
- HMR / fast-refresh is provided by `@vitejs/plugin-react` — small edits to `src/App.tsx` should hot-reload.

## Files to inspect when making changes

- `package.json` — scripts + dependencies
- `vite.config.ts` — Vite plugins and build-level hooks
- `tsconfig.app.json`, `tsconfig.node.json` — TypeScript project reference configs
- `index.html`, `src/main.tsx`, `src/App.tsx` — app entry and top-level component
- `tailwind.config.js`, `postcss.config.js`, `src/index.css` — styling pipeline

## Small examples (copyable guidance)

- Add a new React page/component: create `src/features/YourFeature/YourFeature.tsx`, add styles nearby, then import into `App.tsx` or lazy-load via `React.lazy()`.
- Test HMR locally: edit `src/App.tsx` text or button handler and save — dev server should update without full reload.
- Add a build-time type-check step in CI: run `npm run build` (this already runs `tsc -b`) or run `npx tsc -b --pretty` explicitly.

## Quick notes for AI agents

- Preserve `tsc -b && vite build` unless you can clearly reason about replacing the TypeScript project reference architecture.
- Prefer editing files referenced above; use those examples when adding new features.
- Avoid changing runtime asset paths (`/vite.svg`, imports in `src`) without updating `index.html` or Vite config.

If anything in this summary looks incomplete or you want more examples (routing, adding Tailwind utilities, or CI config snippets), say which area and I will expand.
