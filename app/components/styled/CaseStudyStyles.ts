import styled from "styled-components";
import { media } from "../../styles/media";

/*
 * Case study pages (/projects/[slug]). Same tokens and section grid as the
 * home page: a narrow left column (here, project facts) beside the content.
 */

export const StyledCaseHeader = styled.header`
  padding: calc(var(--nav-h) + var(--space-8)) 0 var(--space-7);

  ${media.md} {
    padding: calc(var(--nav-h) + var(--space-6)) 0 var(--space-6);
  }
`;

export const StyledBackLink = styled.a`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: var(--space-2);
  min-height: 44px;
  margin-bottom: var(--space-5);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-muted);
  text-decoration: none;
  transition: color var(--dur-fast) ease;

  &:hover {
    color: var(--color-ink);
  }
`;

export const StyledCaseTitle = styled.h1`
  max-width: 18ch;
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--color-ink);
  margin: 0 0 var(--space-5);
  text-wrap: balance;
`;

export const StyledCaseLede = styled.p`
  max-width: 52ch;
  font-size: var(--text-xl);
  line-height: 1.5;
  color: var(--color-body);
  margin: 0;
  text-wrap: pretty;
`;

export const StyledDraftNote = styled.p`
  width: fit-content;
  margin: 0 0 var(--space-5);
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-body);
  background: var(--color-paper-deep);
  border: 1px solid var(--color-hairline-strong);
  border-radius: var(--radius-sm);
`;

// Holds the browser-frame cover, which draws its own border.
export const StyledCaseCover = styled.div`
  margin-bottom: var(--space-9);

  ${media.lg} {
    margin-bottom: var(--space-8);
  }
`;

export const StyledCaseBody = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 200px) minmax(0, 1fr);
  column-gap: var(--space-7);
  align-items: start;
  padding-bottom: var(--space-9);

  ${media.lg} {
    grid-template-columns: 1fr;
    row-gap: var(--space-7);
    padding-bottom: var(--space-8);
  }
`;

export const StyledFacts = styled.dl`
  position: sticky;
  top: calc(var(--nav-h) + var(--space-5));
  margin: 0;
  display: grid;
  gap: var(--space-5);

  dt {
    font-size: var(--text-sm);
    color: var(--color-muted);
    margin: 0 0 var(--space-1);
  }

  dd {
    margin: 0;
    font-size: var(--text-base);
    color: var(--color-ink);
  }

  ${media.lg} {
    position: static;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    padding-bottom: var(--space-6);
    border-bottom: 1px solid var(--color-hairline);

    /* Links get a full row so they never wrap mid-label. */
    > div:last-child {
      grid-column: 1 / -1;
    }
  }
`;

export const StyledFactStack = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: 1.8;
`;

export const StyledFactLinks = styled.dd`
  display: flex;
  flex-direction: column;

  a {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    min-height: 36px;
    color: var(--color-ink);
    font-weight: 500;
    text-decoration: none;
    transition: color var(--dur-fast) ease;
  }

  a:hover {
    color: var(--color-accent);
  }

  ${media.lg} {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: var(--space-5);
  }
`;

// Long-form markdown content.
export const StyledProse = styled.article`
  max-width: var(--measure);
  min-width: 0;
  font-size: var(--text-lg);
  line-height: var(--leading-body);
  color: var(--color-body);

  > :first-child {
    margin-top: 0;
  }

  h2 {
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    font-weight: 700;
    line-height: var(--leading-tight);
    letter-spacing: -0.02em;
    color: var(--color-ink);
    margin: var(--space-8) 0 var(--space-4);
    scroll-margin-top: calc(var(--nav-h) + var(--space-5));
  }

  h3 {
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--color-ink);
    margin: var(--space-6) 0 var(--space-2);
    scroll-margin-top: calc(var(--nav-h) + var(--space-5));
  }

  p,
  ul,
  ol {
    margin: 0 0 var(--space-5);
  }

  ul,
  ol {
    padding-left: 1.25em;
  }

  li {
    margin-bottom: var(--space-2);
  }

  li::marker {
    color: var(--color-muted);
  }

  strong {
    font-weight: 600;
    color: var(--color-ink);
  }

  a {
    color: var(--color-ink);
    text-decoration: underline;
    text-decoration-color: var(--color-hairline-strong);
    transition: text-decoration-color var(--dur-fast) ease;
  }

  a:hover {
    text-decoration-color: var(--color-accent);
  }

  code {
    font-family: var(--font-mono);
    font-size: 0.85em;
    padding: 0.1em 0.35em;
    background: var(--color-paper-deep);
    border-radius: var(--radius-sm);
    color: var(--color-ink);
  }

  pre {
    margin: 0 0 var(--space-5);
    padding: var(--space-4);
    overflow-x: auto;
    background: var(--color-paper-deep);
    border: 1px solid var(--color-hairline);
    border-radius: var(--radius-sm);
    font-size: var(--text-sm);
    line-height: 1.6;

    code {
      padding: 0;
      background: none;
      font-size: inherit;
    }
  }

  blockquote {
    margin: var(--space-6) 0;
    padding: 0;
    font-family: var(--font-display);
    font-size: var(--text-xl);
    line-height: 1.4;
    color: var(--color-ink);
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: var(--space-6) 0;
    border: 1px solid var(--color-hairline);
    border-radius: var(--radius-md);
  }

  hr {
    border: 0;
    border-top: 1px solid var(--color-hairline);
    margin: var(--space-7) 0;
  }
`;

export const StyledNextProject = styled.a`
  display: block;
  padding: var(--space-8) 0;
  border-top: 1px solid var(--color-hairline);
  text-decoration: none;
  color: var(--color-ink);

  span {
    display: block;
    font-size: var(--text-sm);
    color: var(--color-muted);
    margin-bottom: var(--space-2);
  }

  strong {
    display: inline-flex;
    align-items: center;
    gap: var(--space-3);
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    font-weight: 700;
    letter-spacing: -0.025em;
    line-height: var(--leading-tight);
    transition: color var(--dur-fast) ease;
  }

  &:hover strong {
    color: var(--color-accent);
  }
`;
