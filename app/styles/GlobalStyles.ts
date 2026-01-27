import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Font Face Declarations */
  /* Akatab - latin */
  @font-face {
    font-display: swap;
    font-family: 'Akatab';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/akatab-v7-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Akatab';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/akatab-v7-latin-500.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Akatab';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/akatab-v7-latin-600.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Akatab';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/akatab-v7-latin-700.woff2') format('woff2');
  }

  /* Anurati - regular */
  @font-face {
    font-display: swap;
    font-family: 'Anurati';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/anurati-regular.woff2') format('woff2');
  }

  /* Roboto Mono - latin */
  @font-face {
    font-display: swap;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 200;
    src: url('/fonts/roboto-mono-v23-latin-200.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/roboto-mono-v23-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/roboto-mono-v23-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/roboto-mono-v23-latin-500.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/roboto-mono-v23-latin-600.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/roboto-mono-v23-latin-700.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 200;
    src: url('/fonts/roboto-mono-v23-latin-200italic.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 300;
    src: url('/fonts/roboto-mono-v23-latin-300italic.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 400;
    src: url('/fonts/roboto-mono-v23-latin-italic.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 500;
    src: url('/fonts/roboto-mono-v23-latin-500italic.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 600;
    src: url('/fonts/roboto-mono-v23-latin-600italic.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 700;
    src: url('/fonts/roboto-mono-v23-latin-700italic.woff2') format('woff2');
  }

  :root {
    --background: #2c2d44;
    --foreground: #ffffff;
    --aeon-dark: #2c2d44;
    --aeon-purple: #3f3251;
    --aeon-dark-blue: #002025;
  }

  @theme inline {
    --color-background: var(--background);
    --color-foreground: var(--foreground);
    --font-sans: var(--font-geist-sans);
    --font-mono: var(--font-geist-mono);
  }

  html {
    display: table;
    width: 100%;
    height: 100%;
  }

  body {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
    background: url('/images/background.webp');
    background-size: cover;
    background-position: top;
    background-attachment: fixed;
    color: var(--foreground);
    font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    position: relative;
    overflow-x: hidden;
  }

  body::after {
    content: '';
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(44, 45, 68, 0.2);
    background-image: radial-gradient(black 25%, transparent 25%);
    background-size: 3px 3px;
    z-index: 0;
    pointer-events: none;
  }

  /* Link hover effects */
  a {
    transition: all 0.3s ease;
  }

  a:hover {
    color: rgb(255, 247, 98) !important;
    border-color: rgba(255, 247, 98, 0.5) !important;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    body {
      background-attachment: scroll;
    }
    
    main {
      padding: 32px 8px !important;
    }
    
    h1 {
      font-size: 32px !important;
    }
  }
`;
