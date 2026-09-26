# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on http://localhost:3001
npm run build    # Production build
npm run lint     # ESLint via next lint
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
