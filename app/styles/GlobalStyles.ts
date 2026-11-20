import { createGlobalStyle } from "styled-components";

/*
 * Design tokens. DESIGN.md at the repo root documents what each one is for;
 * components read these through var(--…) and never restate the raw values.
 */
export const GlobalStyles = createGlobalStyle`
  :root {
    /* color */
    --color-paper: #fafaf7;
    --color-paper-deep: #f3f3ed;
    --color-surface: #ffffff;
    --color-ink: #16161a;
    --color-body: #3f3f46;
    --color-muted: #6e6e76;
    --color-hairline: #e9e9e4;
    --color-hairline-strong: #d4d4cd;
    --color-accent: #2b4eff;
    --color-accent-soft: rgba(43, 78, 255, 0.14);

    /* type (font families are declared on body, see below) */
    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-md: 0.9375rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: clamp(1.125rem, 2.2vw, 1.375rem);
    --text-2xl: clamp(1.75rem, 3.6vw, 2.25rem);
    --text-3xl: clamp(2.25rem, 4.5vw, 3.25rem);
    --text-display: clamp(3.25rem, 10.5vw, 6rem);

    --leading-tight: 1.1;
    --leading-body: 1.7;
    --measure: 65ch;

    /* space (4px base) */
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 24px;
    --space-6: 32px;
    --space-7: 48px;
    --space-8: 64px;
    --space-9: 96px;

    /* shape */
    --radius-sm: 6px;
    --radius-md: 12px;
    --radius-pill: 999px;

    /* layout */
    --container: 1080px;
    --gutter: 32px;
    --nav-h: 64px;

    /* motion */
    --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
    --ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);
    --dur-fast: 160ms;
    --dur-base: 240ms;
    --dur-slow: 400ms;
  }

  @media (max-width: 768px) {
    :root {
      --gutter: 20px;
      --nav-h: 60px;
    }
  }

  html {
    scroll-behavior: smooth;
    scrollbar-color: var(--color-hairline-strong) var(--color-paper);
    accent-color: var(--color-accent);
    caret-color: var(--color-accent);
  }

  /* next/font puts its --font-* variables on <body>, so the family tokens
     must be declared here too: on :root they would resolve as invalid. */
  body {
    --font-display: var(--font-bricolage), var(--font-inter), system-ui, sans-serif;
    --font-sans: var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --font-mono: var(--font-jetbrains-mono), "SF Mono", Menlo, Consolas, monospace;

    margin: 0;
    background: var(--color-paper);
    color: var(--color-ink);
    font-family: var(--font-sans);
    line-height: var(--leading-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  a {
    text-underline-offset: 0.2em;
  }

  /* Visible keyboard focus for every interactive element */
  :focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
    border-radius: var(--radius-sm);
  }

  ::selection {
    background: var(--color-accent-soft);
    color: var(--color-ink);
  }
`;
