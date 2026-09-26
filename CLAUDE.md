# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on http://localhost:3001
npm run build    # Production build
npm run lint     # ESLint via next lint
```

**API integration tests** (requires the Next.js dev server running first):
```bash
cd api-tests
.venv\Scripts\activate          # Windows
pip install -r requirements.txt # first time only
pytest -v                       # run all tests
uvicorn app.main:app --reload --port 8000  # interactive Swagger UI at /docs
```

## Architecture

### Component organization

`src/components/` is split into three layers:
- `features/` — interactive/stateful components mounted globally in `layout.tsx` (ThemeProvider, ColorThemeProvider, ScrollProgress, FloatingElements, ColorPicker)
- `sections/` — the visible page sections rendered in `page.tsx` (Hero, Projects, Experience, Certifications, About, Footer)
- `ui/` — stateless primitives (Button, ProjectCard, SectionTitle, ThemeToggle)

### Content data

All user-facing content lives in `src/data/*.ts` as plain TypeScript arrays. To update projects, experience, certifications, or navigation links, edit those files — never edit section components directly.

### Theme system (two independent layers)

1. **Dark/light**: `ThemeProvider` reads `localStorage('theme')` and toggles the `dark` class on `<html>`. `page.tsx` reads the class back into React state on mount. The `suppressHydrationWarning` on `<html>` in `layout.tsx` is intentional.

2. **Accent color**: `ColorThemeProvider` reads a `?color=RRGGBB` URL query param and sets a family of CSS custom properties on `document.documentElement` (`--theme-color`, `--theme-color-dark`, `--theme-color-light`, `--theme-page-tint`, etc.). Components reference these via Tailwind's `text-theme-*` / `bg-theme-*` utilities. `ColorPicker` (bottom-right UI) writes to the URL.

Theme-dependent components use an `isMounted` guard before rendering to prevent hydration mismatches.

### Proxy honeypot (`src/proxy.ts`)

The middleware intercepts bot reconnaissance probes. **Critical constraint**: the exported `config.matcher` array must stay exactly in sync with `ENV_DECOY_PATH_LIST` and `RECON_PROBE_PATHS` — Next.js statically parses `config.matcher` at build time so it cannot be a spread or reference. A dev-mode check warns on drift. When adding a new trap path, add it in all three places.

Honeypot hits and idea submissions are both persisted to Vercel Blob storage. The SDK is forced to use `process.env.BLOB_READ_WRITE_TOKEN` explicitly (rather than OIDC token auto-detection) because OIDC fails outside an actual Vercel deployment.

### Idea submission

`src/app/api/ideas/route.ts` — POST-only route that validates input and writes to Vercel Blob. Locally, valid submissions will 500 at the blob write step unless `BLOB_READ_WRITE_TOKEN` is set — this is expected and the API tests account for it. `IdeaSubmission.tsx` includes a hidden `company` honeypot field that must stay hidden from real users.

### API tests

`api-tests/` is a thin FastAPI proxy + pytest suite. It forwards every request to the real Next.js server (`http://localhost:3001` by default, override with `NEXT_API_BASE_URL`). It tests the validation contract of `/api/ideas`, not a mock.

## Environment variables

Copy `.env.local.example` to `.env.local`:
- `BLOB_READ_WRITE_TOKEN` — required for idea submissions and honeypot logging to work locally (pull from Vercel dashboard; ensure "Development" environment is checked on the Blob store connection)
- `HONEYPOT_AWS_ACCESS_KEY_ID` / `HONEYPOT_AWS_SECRET_ACCESS_KEY` — optional canary token credentials served in the decoy `.env` file

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
