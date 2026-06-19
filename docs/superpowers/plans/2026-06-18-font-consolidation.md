# Font Consolidation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Source Sans Pro with Inter across the site, establishing Inter + Roboto Mono as the only two fonts.

**Architecture:** Three-file change — add Google Fonts loading to `_document.js`, swap font-family declarations in `global.scss`, update the design spec in `DESIGN.md`. No structural changes; purely declarative.

**Tech Stack:** Next.js 14 Pages Router, SCSS, Google Fonts CDN

---

## File Map

| File | Change |
|---|---|
| `pages/_document.js` | Add preconnect + stylesheet `<link>` tags for Inter + Roboto Mono |
| `styles/global.scss` | Swap `'Source Sans Pro'` → Inter stack in `body` and `p, ul`; normalize `.event-year` |
| `DESIGN.md` | Update `fontFamily` for display, body, section-heading, timeline-heading |

---

### Task 1: Load fonts via Google Fonts in `_document.js`

**Files:**
- Modify: `pages/_document.js`

- [ ] **Step 1: Open `pages/_document.js` — current state:**

```js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

- [ ] **Step 2: Replace with font-loading version**

```js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

- [ ] **Step 3: Verify dev server renders Inter in browser**

Run: `npm run dev`

Open `http://localhost:3000` in browser. Open DevTools → Elements → inspect `<body>`. Computed font should show `Inter` (not `Source Sans Pro` or system fallback). Check Network tab — `fonts.googleapis.com` request should appear.

- [ ] **Step 4: Commit**

```bash
git add pages/_document.js
git commit -m "feat: load Inter and Roboto Mono via Google Fonts"
```

---

### Task 2: Swap font-family in `styles/global.scss`

**Files:**
- Modify: `styles/global.scss`

Three locations to change:

**Location 1 — `body` (line ~20):**

Before:
```scss
body {
  ...
  font-family:'Source Sans Pro',sans-serif;
  ...
}
```

After:
```scss
body {
  ...
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  ...
}
```

**Location 2 — `p, ul` (line ~86):**

Before:
```scss
p, ul {
  line-height: 1.55;
  font-family:'Source Sans Pro',sans-serif;
  ...
}
```

After:
```scss
p, ul {
  line-height: 1.55;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  ...
}
```

**Location 3 — `.event-year` (line ~411):**

Before:
```scss
.event-year{
  font-family: 'Inter',-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  ...
}
```

After:
```scss
.event-year{
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  ...
}
```

- [ ] **Step 1: Apply Location 1 change** (body font-family)

- [ ] **Step 2: Apply Location 2 change** (p, ul font-family)

- [ ] **Step 3: Apply Location 3 change** (.event-year normalization)

- [ ] **Step 4: Verify no remaining Source Sans Pro references**

Run:
```bash
grep -n "Source Sans" styles/global.scss
```
Expected: no output.

- [ ] **Step 5: Visual check in browser**

With dev server still running at `http://localhost:3000`:
- Headings (h1, h2) render in Inter
- Body paragraphs render in Inter
- Tech chips, dates, filter buttons render in Roboto Mono (unchanged)
- Timeline/experience section headings render in Inter

- [ ] **Step 6: Commit**

```bash
git add styles/global.scss
git commit -m "feat: swap Source Sans Pro for Inter across global styles"
```

---

### Task 3: Update DESIGN.md typography spec

**Files:**
- Modify: `DESIGN.md`

Four `fontFamily` values to update in the `typography:` section:

| Key | Before | After |
|---|---|---|
| `display.fontFamily` | `"'Source Sans Pro', sans-serif"` | `"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"` |
| `body.fontFamily` | `"'Source Sans Pro', sans-serif"` | `"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"` |
| `section-heading.fontFamily` | `"'Source Sans Pro', sans-serif"` | `"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"` |
| `timeline-heading.fontFamily` | `"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"` | `"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"` |

- [ ] **Step 1: Apply all four fontFamily changes in DESIGN.md**

- [ ] **Step 2: Verify no remaining Source Sans Pro in DESIGN.md**

```bash
grep -n "Source Sans" DESIGN.md
```
Expected: no output.

- [ ] **Step 3: Commit**

```bash
git add DESIGN.md
git commit -m "docs: update DESIGN.md typography to Inter + Roboto Mono"
```
