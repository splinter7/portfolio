import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --paper: #fafaf7;
    --surface: #ffffff;
    --ink: #16161a;
    --body: #3f3f46;
    --muted: #6e6e76;
    --hairline: #e9e9e4;
    --accent: #2b4eff;
    --accent-soft: rgba(43, 78, 255, 0.07);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  /* Visible keyboard focus for every interactive element */
  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: 4px;
  }

  ::selection {
    background: rgba(43, 78, 255, 0.16);
  }
`;
