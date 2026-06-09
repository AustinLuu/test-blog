---
name: Austin Luu Portfolio
description: >
  The Engineer's Sketchbook — a personal portfolio design system that is
  precise, personal, and lived-in. Like a notebook full of careful drawings
  and personal annotations: both rigorous and warm. Built for quick scanning
  and deep reading alike, with technical depth that comes through in what is
  shown, not how it is described.
colors:
  background: "#faf8f8"
  foreground: "#141021"
  body-text: "#4e4e4e"
  nav-text: "#747474"
  primary-accent: "#84a59d"
  secondary-accent: "#284b63"
  tertiary-accent: "#f28482"
  icon-button: "#717896"
  card-border: "#dadada"
  subtle-background: "#f5f3f3"
typography:
  display:
    fontFamily: "'Source Sans Pro', sans-serif"
    fontSize: "4em"
    fontWeight: "700"
    lineHeight: "1.2"
  body:
    fontFamily: "'Source Sans Pro', sans-serif"
    fontSize: "1em"
    fontWeight: "400"
    lineHeight: "1.55"
  label:
    fontFamily: "'Roboto Mono', monospace"
    fontSize: "1em"
    fontWeight: "400"
    lineHeight: "1.4"
  section-heading:
    fontFamily: "'Source Sans Pro', sans-serif"
    fontSize: "3em"
    fontWeight: "700"
    lineHeight: "1.2"
  timeline-heading:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "1.875rem"
    fontWeight: "600"
    lineHeight: "1.2"
  code:
    fontFamily: "monospace"
    fontSize: "1.05em"
    fontWeight: "400"
    lineHeight: "1.5"
rounded:
  chip: "12px"
  card: "5px"
  button: "0.375rem"
  avatar: "128px"
  timeline-btn: "0.25rem"
spacing:
  content-padding: "5vh 2rem"
  content-max-width: "860px"
  card-padding: "1em 1.5em"
  nav-padding: "6px 6%"
  nav-item-margin: "12px 15px"
  chip-padding: "0.4rem"
  event-padding: "0.25rem 6rem 1rem 3.5rem"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "rgb(113, 128, 150)"
    typography: "label"
    rounded: "button"
    padding: "0"
    height: "3em"
    width: "3em"
  tech-chip:
    backgroundColor: "#84a59d"
    textColor: "#faf8f8"
    typography: "label"
    rounded: "chip"
    padding: "0.4rem"
  nav-link:
    backgroundColor: "transparent"
    textColor: "#3d3d3d"
    typography: "body"
    rounded: "0"
    padding: "0"
  project-card:
    backgroundColor: "transparent"
    textColor: "#4e4e4e"
    typography: "body"
    rounded: "card"
    padding: "1em 1.5em"
  sub-nav-link:
    backgroundColor: "transparent"
    textColor: "#84a59d"
    typography: "label"
    rounded: "0"
    padding: "0 0.5em 0 0"
---

## 1. Overview

Austin Luu's portfolio is built around a single creative north star: **Creative North Star: "The Engineer's Sketchbook"**. The visual language is precise, personal, and lived-in — the kind of notebook that has careful measurements alongside personal margin notes. The system avoids startup-speak polish in favor of warmth and technical authenticity.

The design serves three audiences with different depths of engagement: recruiters scanning in under sixty seconds, collaborators doing a deeper read, and curious visitors following a thread. Every element — color, spacing, motion — is tuned to support both the glance and the linger.

**Design principles in practice:**

1. **Engineer's wit** — Technical details are features, not noise. The rotating hero text cycles through four identity facets (`Austin` / `a builder` / `an engineer` / `an athlete`) using a 3D letter-flip mechanism, not a crossfade.
2. **Show, don't describe** — Project cards expand on click. Tech knowledge is a chip list, not a paragraph.
3. **Multidimensional** — Robotics, ML, powerlifting, and coffee coexist without contradiction. The palette reflects this: not a cold technical blue, but a muted sage.
4. **Motion with intention** — Transitions are precise and satisfying. The letter-flip uses a cubic-bezier easing, not a linear slide. The navbar blur reinforces depth without drama.
5. **Warmth over polish** — The page background is `#faf8f8`, not white. Shadows are ambient, like light through a window, not drop-shadows from a 2016 design kit.

---

## 2. Colors

### Light Mode

| Token | Value | Role |
|---|---|---|
| `--light` | `#faf8f8` | Page background — warm off-white, not clinical |
| `--light-op` | `rgba(250,248,248,0.95)` | Navbar background with blur; keeps content readable under scroll |
| `--dark` | `#141021` | Headings and strong text; near-black with a violet undertone |
| `--light-blue` | `rgb(113,128,150)` | Icon button text — muted slate, not brand blue |
| `--navy` | `#284b63` | Section h2 headings and secondary links; deep ink blue |
| `--olive` | `#84a59d` | **Primary accent** — project card top borders, tech chip backgrounds, link resting state. Muted sage: calm, grounding, technically restrained |
| `--salmon` | `#f28482` | **Tertiary accent** — rotating text variant, link hover destination |
| `--gray` | `#4e4e4e` | Body text — dark enough to read, warm enough to not feel like a form |
| `--lightgray` | `#747474` | Nav links and muted labels |
| `--outlinegray` | `#dadada` | Card borders, button borders, nav link underlines |
| `--lightlightgray` | `#f5f3f3` | Subtle background tint for nested surfaces |

### Dark Mode (`[saved-theme="dark"]`)

| Token | Value | Notes |
|---|---|---|
| `--light` | `#1c1b22` | Page background — deep violet-grey, not pure black |
| `--dark` | `#fbfffe` | Text — near-white with a warm cast |
| `--navy` | `#75a1bf` | Lightened for legibility on dark |
| `--olive` | `#84a59d` | Unchanged — the sage reads well on dark |
| `--salmon` | `#f58382` | Slightly brightened |
| `--gray` | `#c4c4c4` | Body text on dark |
| `--lightgray` | `#292633` | Used for muted surfaces in dark mode |
| `--outlinegray` | `#343434` | Borders on dark |

### Accent Color Character

- **Olive (`#84a59d`)** — Muted sage. The deliberate counter to default-blue. Everything it touches reads as "technical restraint" rather than "brand splash." Used at full saturation for chip backgrounds, as a 2px top border on cards, and at full opacity for resting link color.
- **Salmon (`#f28482`)** — The warmth injection. Used for hover states on links (`#f7adae` hover target) and one of the four rotating text color slots. It is the emotional counterbalance to olive's composure.
- **Navy (`#284b63`)** — Ink-blue depth. Reserved for section h2 headings and, in the rotating text, the "a builder" identity slot.

### Hover Link Color

Links rest at `var(--olive)` and transition to `#f7adae` (a lighter salmon) over 0.7s on hover. The slow transition prevents the snap that would make a warm color feel aggressive.

---

## 3. Typography

### Type Scale

| Role | Family | Size | Weight | Line Height | Use |
|---|---|---|---|---|---|
| Display / h1 | `'Source Sans Pro', sans-serif` | `4em` | 700 | 1.2 | Hero greeting, rotating identity text |
| Section heading / h2 | `'Source Sans Pro', sans-serif` | `3em` | 700 | 1.2 | Section titles (About, Projects, Timeline) |
| Sub-heading / h3 | `'Source Sans Pro', sans-serif` | `1em` | 600 | 1.2 | Event titles in timeline |
| Body / p, ul | `'Source Sans Pro', sans-serif` | `1em (16px base)` | 400 | 1.55 | Paragraphs, list items |
| Lists | `'Source Sans Pro', sans-serif` | `1.1em` | 400 | 1.55 | Project and content lists |
| Sub-nav / label | `'Roboto Mono', monospace` | `1em` | 400 | 1.4 | Navigation slugs (`/about`, `/projects`) |
| Timeline year | `'Inter', system-ui` | `1.875rem` | 600 | 1.2 | Year headers in timeline accordion |
| Code | `monospace` | `1.05em` | 400 | 1.5 | Inline code and JSON snippet display |

### Typographic Decisions

**Source Sans Pro as primary:** Chosen for its legibility at body sizes and its slightly humanist construction. It doesn't feel like a corporate sans, which matches the "warm over polish" principle.

**Roboto Mono for sub-nav:** The monospace font on `/about`, `/projects`, `/timeline`, `/contact` is a deliberate engineering aesthetic choice. It signals that this is a terminal-style navigation — a nod to command-line thinking without being a caricature.

**Inter for timeline years:** Inter's tabular numerals and strong weight make year labels (`2021`, `2020`) read cleanly as structural anchors in the accordion timeline.

**Code display (Dracula theme):**
- Background: `#282a36` (Dracula base)
- Text: `#f8f8f2`
- Keys: `#ff79c6` (pink)
- Values: `#f1fa8c` (yellow)

This is a deliberate Dracula theme reference — recognizable to engineers as a specific aesthetic preference, not a random dark block.

---

## 4. Elevation

The system uses a single, ambient shadow class: `.lt-shadow`.

```
box-shadow:
  0px 14px 28px rgba(27, 33, 48, 0.06),
  0  10px 10px rgba(27, 33, 48, 0.02);
```

**Philosophy:** Ambient shadows throughout. Soft, diffuse, physically warm — like an object sitting on a desk in indirect daylight, not a UI element in a flat design kit. Both shadow layers use the same dark-blue color base (`rgb(27,33,48)`) at very low opacity (6% and 2%). This creates a subtle sense of depth without visual noise.

**Where it is applied:** Project cards (`.project.lt-shadow`). Not applied to the navbar, footer, or typographic elements.

**Navbar blur:** The navbar uses `background: var(--light-op)` — the page background color at 95% opacity — rather than a shadow. This creates depth through translucency, not a hard shadow line.

**Elevation philosophy summary:**
- No harsh drop shadows
- No multi-layered card elevation scales
- One ambient class for interactive surfaces; transparency for fixed elements

---

## 5. Components

### Navbar

Fixed to the top, full viewport width. Logo on the left (30px, functions as a dark/light theme toggle via a hidden checkbox). Nav links right-aligned at 75% opacity by default.

- Background: `var(--light-op)` — page background at 95% opacity
- Height: implied by `padding: 6px 6%` on a flex container
- Nav link size: `0.95em`, color: `#3d3d3d`
- Nav link hover: `text-decoration: underline var(--outlinegray) 2.5px` with `5px offset`
- Logo hover: `opacity: 0.75`, `transition: 0.4s`

### Hero / Header

Full viewport height (`100vh`). Particle canvas underneath (`position: absolute`), landing overlay content on top (`z-index: 2000`).

**Rotating text:** The `h1` "I'm [word]" cycles four identity descriptors using per-letter 3D flip. Each letter has `transform-origin: center center 0.8em` — rotating around a point 0.8em into the Z axis, creating a book-page flip effect. Letters exit at `rotateX(90deg)` via `cubic-bezier(0.6, 0, 0.7, 0.2)` and enter from `rotateX(-90deg)` via `ease` over 0.32s, staggered by 20–40ms per letter.

**Cascade fade-in:** The greeting `h1` and sub-nav items fade in sequentially via `@keyframes fadeIn` (opacity 0→1, 0.6s ease). First h1 at 0.4s delay, second at 0.8s, sub-nav items staggered from 1.3s to 1.6s.

**Sub-nav links:** Monospace (`Roboto Mono`), `font-weight: 400`, horizontal list. Styled to look like terminal paths.

**Particle canvas:** `<canvas id="canvas">` positioned absolutely behind overlay. Floating circles in navy/olive/salmon drift rightward.

**Side header labels:** `.side-header` elements appear on section hover. They are rotated 90° with a `::before` pseudo-element border that expands (`width: 0 → 180px`) over 0.6s via `cubic-bezier(.25, .8, .25, 1)` with a 0.3s delay. This creates the "annotation appearing" effect central to the Sketchbook metaphor.

### Project Card

```
border: 1px solid var(--outlinegray)
border-top: 2px solid var(--olive)
border-radius: 5px
padding: 1em 1.5em
```

The 2px olive top border is the card's signature — a thin accent line that identifies all project cards as a distinct surface type. Content is hidden behind a Chakra UI Accordion; clicking the project row expands description, tech chips, and external links.

**Project highlight row:** Flex row with project title (bold, `var(--dark)`) and brief description (`—` separator). Accordion chevron right-aligned.

**Project links:** Rendered as sub-nav items (`Roboto Mono`, `/github`, `/devpost`, `/website`) at `font-size: 0.9em`.

### Tech Chip

```
background-color: var(--olive)
color: var(--light)
border-radius: 12px
padding: 0.4rem
font-size: 0.9em
display: inline-block
margin-right: 6px
margin-bottom: 4px
```

Used as an `<li>` in a `.tools` list inside the project accordion panel. No border, no shadow — the olive fill is the entire visual treatment.

### Icon Button (Footer)

```
color: var(--light-blue)
border-color: var(--outlinegray)
border-radius: 0.375rem
height: 3em
min-width: 3em
background-color: transparent
transition: all 250ms ease 0s
```

On hover: `background-color: var(--outlinegray)` fills the button square. The hover fill is a subtle wash, not a color change — the icon color (`--light-blue`) stays constant.

Used for GitHub, LinkedIn, Instagram, Email, and Resume links in the footer. All buttons are square and identical in size, creating a uniform social link strip.

### Avatar Photo

```css
border-radius: 128px;
max-height: 256px;
filter: grayscale(10%);
```

Circular crop at 256px max size, 10% desaturated. The light desaturation integrates the photo into the muted palette without making it feel like a stock photo treatment.

### Timeline (Event Year / Event)

Timeline uses a Chakra-adjacent accordion pattern styled with Inter. Year headers are `1.875rem`, `font-weight: 600`. The expand button has `border-width: 1px 0 0 0` (top border only) and `transition: all 0.2s`. Event body is indented `3.5rem` from left, padded `6rem` from right.

---

## 6. Do's and Don'ts

### Do's

- **Use olive as the primary accent color.** It is the visual signature of the portfolio. Apply it to interactive top borders, chip backgrounds, and link resting states.
- **Use the ambient shadow class (`.lt-shadow`) on all card-like surfaces.** The shadow is the system's single elevation primitive; do not invent new shadow values.
- **Use Roboto Mono for navigation slugs and sub-nav links.** The monospace style is a deliberate design choice — it should appear consistently wherever path-style links appear.
- **Write link copy as terminal paths** (`/about`, `/github`, `/devpost`). This is part of the identity voice, not just a style.
- **Let transitions finish.** The link hover color transition is 0.7s — intentionally slow for a warm color. Do not shorten it to be "snappy."
- **Respect the max-width.** Content lives inside `860px` centered columns with `5vh 2rem` padding. Do not bleed text to full viewport width.
- **Support `prefers-reduced-motion`.** All animations collapse to instant when this preference is set. Any new animations must include a reduced-motion override.

### Don'ts

- **Don't** design for generic SaaS landing pages — no gradient hero metrics, no big-number stat callouts, no hero-with-stats template.
- **Don't add new accent colors.** The three-color accent system (olive / navy / salmon) is complete. Adding a fourth branded color dilutes the intentionality.
- **Don't use box-shadows larger or darker than `.lt-shadow`.** The elevation philosophy is ambient and subtle. Heavy drop-shadows break the physical warmth of the design.
- **Don't** use startup-speak copy ("unleash," "empower," "transform," "seamless," "next-generation"). Austin is a person, not a product launch.
- **Don't apply motion to layout.** The rotating text and cascade fade-in are intentional hero moments. Animating list items, headings, or navigation on every scroll undermines the system's restraint.
- **Don't center body text.** The site reads left-to-right like a notebook. Center alignment is used only for the footer copyright block.
- **Don't make the navbar opaque.** The translucent `--light-op` navbar is important for maintaining visual continuity between the hero and content sections.
- **Don't use Roboto Mono for body text.** The monospace font is exclusively for the terminal-path navigation metaphor.
