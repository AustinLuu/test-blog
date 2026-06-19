# Font Consolidation: Inter + Roboto Mono

**Date:** 2026-06-18

## Decision

Consolidate from 3 fonts (Source Sans Pro, Roboto Mono, Inter) to 2:

- **Inter** (400, 700) — all prose: headings, body, nav
- **Roboto Mono** (400, 500) — all UI labels: chips, tags, dates, filter buttons, code

## Changes

### `pages/_document.js`
Add Google Fonts preconnect + stylesheet link:
- Inter: weights 400, 700
- Roboto Mono: weights 400, 500

### `styles/global.scss`
- `body` font-family: `'Source Sans Pro', sans-serif` → `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- `p, ul` font-family: same swap
- `.event-year` font-family: normalize to canonical Inter declaration (already Inter-based, just verbose)
- All `'Roboto Mono'` declarations: unchanged

### `DESIGN.md`
- `display.fontFamily`: `'Source Sans Pro', sans-serif` → `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- `body.fontFamily`: same
- `section-heading.fontFamily`: same
- `timeline-heading.fontFamily`: normalize to same Inter stack

## Out of Scope
- Font weights (400/700 kept as-is)
- Roboto Mono usage
- Any layout, color, or spacing changes
