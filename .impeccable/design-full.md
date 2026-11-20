---
name: Stewart Small Portfolio
description: Personal site of a full-stack engineer and technical lead with a focus on audio and UX polish.
colors:
  paper: "#fafaf7"
  paper-deep: "#f3f3ed"
  surface: "#ffffff"
  ink: "#16161a"
  body: "#3f3f46"
  muted: "#6e6e76"
  hairline: "#e9e9e4"
  hairline-strong: "#d4d4cd"
  accent: "#2b4eff"
  accent-soft: "rgba(43, 78, 255, 0.14)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Inter, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 10.5vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.6vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: "Inter, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
  data:
    fontFamily: "JetBrains Mono, SF Mono, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
  code:
    fontFamily: "JetBrains Mono, SF Mono, Menlo, Consolas, monospace"
    fontSize: "clamp(0.625rem, 2.6cqi, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "6px"
  md: "12px"
  pill: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "24px"
  "6": "32px"
  "7": "48px"
  "8": "64px"
  "9": "96px"
components:
  button-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  project-cover:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  nav-logo:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    size: "36px"
  icon-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    rounded: "{rounded.pill}"
    size: "44px"
---

# Design System: Stewart Small Portfolio

## Overview

**Creative North Star: "The Quiet Signal"**

The page reads like a well-set engineering notebook. Warm paper, near-black ink, generous margins, and a single electric blue that only shows up where something is *happening*: the active nav item, the prompt in the `whoami` line, a focused control. Everything else stays quiet so that the work (projects, roles, outcomes) carries the page.

Identity comes from the Bricolage Grotesque display face, which has enough ink-trap character to feel authored, and from restraint: nothing on the page is decorative unless it carries content. The `whoami` prompt above the name is the one playful touch, and it earns its place because the name answers it. Sections are separated by hairlines and whitespace, not by labels, numbers, or boxes.

The site is light-only and calm. Hover feedback changes color, border or fill, never position or shadow.

**Key Characteristics:**
- Warm off-white paper with ink typography and one accent
- Left-aligned, editorial layout: heading column on the left, content on the right
- Flat surfaces separated by 1px hairlines; no shadows
- Almost no motion: a blinking cursor in the hero and colour fades on hover, nothing on scroll
- Monospace reserved for real data: commands, tech names, dates

## Colors

A warm neutral ramp plus one saturated blue used sparingly.

### Primary
- **Signal Blue** (accent): the only accent. Active nav underline, terminal prompt and cursor, focus rings, project-title hover. Never used for large fills or body text.
- **Signal Blue Wash** (accent-soft): text selection only.

### Neutral
- **Paper** (paper): page background and the scrolled nav bar.
- **Paper Deep** (paper-deep): the browser bar on project covers, code backgrounds in prose, a step darker than paper.
- **Surface** (surface): pill buttons and icon buttons; reads as "raised" against paper without needing a shadow.
- **Ink** (ink): headings, names, primary labels, the logo block.
- **Body** (body): paragraph text (about 10:1 on paper).
- **Muted** (muted): secondary text such as dates, labels, inactive nav and copyright (about 4.8:1 on paper, AA).
- **Hairline** (hairline): section dividers, cover frames and pill borders at rest.
- **Hairline Strong** (hairline-strong): hover borders and list separators.

### Named Rules
**The One Signal Rule.** Signal Blue marks state or liveness (active, focused, live), never decoration. If a screen has blue on more than a few small elements, remove some.

## Typography

**Display Font:** Bricolage Grotesque (self-hosted variable font in `app/fonts/`, falling back to Inter)
**Body Font:** Inter (loaded by Next.js from Google Fonts)
**Data Font:** JetBrains Mono

**Character:** A grotesque with personality for names and headings, a neutral workhorse sans for reading, and a mono that only appears where the content is literally code or data.

### Hierarchy
- **Display** (700, `--text-display`, 0.95): the owner's name in the hero. One per page.
- **Page title** (700, `--text-3xl`, 1): case study titles.
- **Headline** (700, `--text-2xl`, 1.1): section headings (About, Featured Projects, Experience).
- **Body** (400, `--text-lg`, 1.7): about text and hero subtitle, capped at 65ch (`--measure`).
- **Body Small** (400, `--text-md`, 1.65): project summaries on the home page.
- **Code** (mono 400, 10–18px scaled to the frame with `2.6cqi`, 1.6): code excerpts in project covers.
- **Label** (500, `--text-sm`): nav links, buttons, project actions.
- **Data** (mono, `--text-xs` / `--text-sm`): the `whoami` prompt, tech list, project stacks, job dates (tabular numerals).

### Named Rules
**The Real Mono Rule.** JetBrains Mono is only for strings a terminal or a spreadsheet would show: commands, technology names, dates. Never for headings, kickers, or "technical flavor".

**The No Kicker Rule.** No eyebrow labels or section numbers above headings. The heading is the label.

## Layout

- Content column: max 1080px (`--container`), side gutter 32px, 20px on phones (`--gutter`).
- Fixed nav, 64px tall (60px on phones, `--nav-h`). Transparent at the top, paper with a hairline once scrolled.
- Hero: left-aligned and full screen on every device: `min-height: 100svh` (the visible height on phones, excluding browser bars; `100vh` fallback), so short or landscape screens grow instead of cropping. More padding below than above sits the content slightly above centre. Order: prompt, name, role, then (64px below) a two-column foot (subtitle left, links right) that stacks on phones. A "Scroll" cue (44px tap target) sits at the bottom left on all devices, since nothing peeks in from the next section, and fades out once you scroll.
- Sections: 96px vertical padding (64px under 960px), a hairline on top, and a two-column grid with a 200px heading column, 48px gap and a fluid content column. Below 960px the heading stacks above the content.
- Featured projects: alternating spreads, 64px apart. Each is a two-column grid (cover 1.15fr, text 1fr, 32px gap) with the cover swapping sides every row; under 768px they stack, cover first, 48px apart.
- Spacing uses a 4px-based scale (`--space-1` to `--space-9`). Leave more space above a heading than below it.
- Breakpoints live in `app/styles/media.ts`: `md` 768px, `lg` 960px, plus a `hover` query so hover styles don't stick on touch screens.

## Elevation & Depth

Flat. There are no shadows anywhere. Depth comes from tone (surface white on paper) and 1px hairlines. Hover states change color, border or fill only; elements never lift.

### Named Rules
**The Flat Paper Rule.** If something needs to look raised, make it `surface` on `paper` with a `hairline` border. Never add `box-shadow` or `translateY` on hover.

## Shapes

- Small radius (`--radius-sm`, 6px): logo block, focus rings, hamburger button.
- Medium radius (`--radius-md`, 12px): project cover frames on the home page and case study pages.
- Pill (`--radius-pill`): small controls only (hero link buttons, footer icon buttons).
- Borders are always 1px hairlines.

## Components

### Pill link buttons (hero)
- **Shape:** full pill, 44px tall, 16px horizontal padding.
- **Default:** surface fill, ink text, hairline border, 16px icon plus label.
- **Hover:** inverts to an ink fill with paper text and icon (the shared `invertOnHover` style in `PageStyles.ts`). Pressed steps back to a body-grey fill. No movement.
- **Fade:** every pill and icon button shares `hoverFade`: the colour fades in over `--dur-base` (240ms) and out over `--dur-slow` (400ms), both on `--ease-in-out` so the change is spread across the whole duration. Pressed uses `--dur-fast` (160ms) so clicks feel immediate.

### Project spread (featured projects)
- **Character:** a magazine spread, not a card. No box around the text; the cover is the only framed object.
- **Structure:** the project cover (a browser window) on one side; on the other, the mono stack line (first three technologies), the title in the display face at `--text-2xl`, the summary at `--text-md`, then an actions row above a hairline.
- **Alternation:** the cover sits left on odd rows and right on even rows. Under 768px every spread stacks with the cover first.
- **Links:** the title opens the case study; the cover goes to the same place but is hidden from assistive tech and the tab order so keyboard users don't hit it twice. The actions row has "Case study →" on the left (semibold ink, Signal Blue on hover) and 44px icon buttons on the right for the live site (globe) and source (GitHub), each with an aria-label and tooltip. When a case study is a draft in production, the cover and title open the live site (or repo) and "Case study" is hidden.
- **Cover:** see Project cover below.
- **Hover:** the cover's frame border darkens to muted; title turns Signal Blue.
- **Icon buttons:** borderless, so hover adds a paper-deep circle behind the icon and turns it ink; pressed deepens the circle to hairline.
- **Component:** `app/components/ProjectSpread.tsx`.

### Project cover
- **Character:** the project shown as a real thing in a browser, not an illustration of it.
- **Frame:** a minimal browser window: 12px radius, hairline-strong border, a 32px paper-deep bar with three dots and the address (live site, or the repo when there isn't one) in mono on a surface pill.
- **View (16:10):** in order of preference, a screenshot of the live site (653×408, by slug in `app/components/projectCovers.tsx` and `shots.ts`), the project's `coverCode` excerpt from its markdown front matter, or the project title in the display face.
- **Code view:** ink background, paper text in mono with ligatures off so operators read as typed, a file label above a faint rule, highlighted lines on a 10% paper wash, comments at 50%. Text scales with the frame (2.6cqi, 10–18px); long lines wrap with a hanging indent and the block centres vertically without ever clipping its first lines.
- **No illustrations:** don't draw stand-in art for a project. Use a screenshot, real code or the title.
- **Component:** `app/components/projectCovers.tsx`, styles in `CoverStyles.ts`.

### Case study page (`/projects/[slug]`)
- **Content:** one markdown file per project in `content/projects/<slug>.md`, front matter for title, summary, order, stack, source, live, year, role and draft. `_template.md` shows the shape. Body sections: Overview, The challenge, Approach, Design decisions, Outcome.
- **Header:** "All projects" back link, then the title in the display face (`--text-3xl`, max 18ch) and the summary as a `--text-xl` lede.
- **Cover:** the project cover (below) at full width. A code cover takes the height of its code instead of 16:10.
- **Body:** the home page's section grid. Left 200px column holds the project facts (role, year, stack in mono, links), sticky below the nav on desktop and a wrapped row above the article on smaller screens. Right column is the article at 65ch, `--text-lg` body text, display-face h2s at `--text-2xl` (same as section headings) with 64px above them.
- **Prose:** inline code and code blocks on paper-deep, links in ink with a hairline underline that turns Signal Blue on hover, pull quotes in the display face with no side bar.
- **Next case study:** a full-width link above the footer with the next project's title in headline size; wraps to the first.
- **Drafts:** `draft: true` shows a neutral note under the back link in development; in production the page doesn't exist.

### Navigation
- Logo: 36px ink square with "S." in the display face. Turns Signal Blue on hover. It's a link back to the top.
- Links: label size, muted at rest and ink when active, with a 2px Signal Blue underline on the active item. Resume carries an up-right arrow because it opens in a new tab.
- Mobile: hamburger (44px target) opens a full-width paper panel under the nav.

### Experience entries
- Role in semibold ink with the company in body weight, then a mono dates and location line, then one paragraph. No single-item bullet lists.

### Footer
- Copyright on the left, three 44px pill icon buttons (GitHub, LinkedIn, Email) on the right. Hover inverts them to an ink fill with a paper icon, and pressed steps back to body grey, the same as the hero pills.

## Do's and Don'ts

### Do:
- **Do** take every color, size, space, radius and duration from the CSS custom properties in `app/styles/GlobalStyles.ts`.
- **Do** keep Signal Blue to state and liveness: active, focused, live.
- **Do** keep 44px minimum touch targets on every link and button.
- **Do** keep hover styles behind `media.hover` only when a stuck hover would mislead on touch screens (nav links). Buttons and pills apply :hover directly, because some desktop setups report no hover support.
- **Do** honor `prefers-reduced-motion`; `globals.css` already zeroes animation and transition durations.

### Don't:
- **Don't** add eyebrow labels, kickers, or section numbers ("01 · About").
- **Don't** lift elements on hover or add drop shadows.
- **Don't** wrap sections in staggered fade-up reveals or add scroll-triggered animation.
- **Don't** add decorative motifs (waveforms, particles, background graphics) that nothing else on the page connects to.
- **Don't** add film grain, noise overlays, gradient text, or glass/blur panels.
- **Don't** use monospace for anything that isn't code or data.
- **Don't** draw stand-in illustrations for projects; show a screenshot, real code or the title.
- **Don't** hard-code hex values in components; add a token if one is missing.
