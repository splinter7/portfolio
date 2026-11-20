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
  page-title:
    fontFamily: "Bricolage Grotesque, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
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

<!-- impeccable:design-map -->
Name: Stewart Small Portfolio
Colors: primary: accent #2b4eff; neutral: paper #fafaf7; primary: accent-soft rgba(43, 78, 255, 0.14); neutral: paper-deep #f3f3ed; neutral: surface #ffffff; neutral: ink #16161a (+4 more in the sidecar)
Fonts: Bricolage Grotesque (display, page-title, headline); Inter (body, body-sm, label); JetBrains Mono (data, code)
Spacing: 1 4px, 2 8px, 3 12px, 4 16px, 5 24px, 6 32px, 7 48px, 8 64px, 9 96px
Radius: sm 6px, md 12px, pill 999px
North Star: "The Quiet Signal"
Rules:
- The One Signal Rule. Signal Blue marks state or liveness (active, focused, live), never decoration.
- The Real Mono Rule. JetBrains Mono is only for strings a terminal or a spreadsheet would show: commands, technology names, dates.
- The No Kicker Rule. No eyebrow labels or section numbers above headings.
- The Flat Paper Rule. If something needs to look raised, make it `surface` on `paper` with a `hairline` border.
Don't:
- Don't add eyebrow labels, kickers, or section numbers ("01 · About").
- Don't lift elements on hover or add drop shadows.
- Don't wrap sections in staggered fade-up reveals or hide content until an animation runs. The only scroll motion is the project spreads' scroll-linked rise.
- Don't add decorative motifs (waveforms, particles, background graphics) that nothing else on the page connects to.
- Don't add film grain, noise overlays, gradient text, or glass/blur panels.
- Don't use monospace for anything that isn't code or data.
- Don't draw stand-in illustrations for projects; show a screenshot, real code or the title.
- Don't hard-code hex values in components; add a token if one is missing.
Do:
- Do take every color, size, space, radius and duration from the CSS custom properties in `app/styles/GlobalStyles.ts`.
- Do keep Signal Blue to state and liveness: active, focused, live.
- Do keep 44px minimum touch targets on every link and button.
- Do keep hover styles behind `media.hover` only when a stuck hover would mislead on touch screens (nav links). Buttons and pills apply :hover directly, because some desktop setups report no hover support.
- Do honor `prefers-reduced-motion`; `globals.css` already zeroes animation and transition durations.
Map: app/fonts/
Map: app/styles/media.ts
Map: app/styles/GlobalStyles.ts
Map: app/components/styled/CaseStudyStyles.ts (case study pages)
Map: app/components/styled/CoverStyles.ts (project covers: browser frame)
Map: content/projects/ (case study markdown; see _template.md)
Full: .impeccable/design-full.md (read a section when you need its detail)
