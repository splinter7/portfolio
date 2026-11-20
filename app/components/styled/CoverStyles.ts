import styled from "styled-components";

/*
 * Project cover: the project shown in a minimal browser window. The view
 * holds a screenshot of the live site, a code excerpt when there's no live
 * site, or the project title as a last resort. Used on the home page spreads
 * and as the case study hero.
 */

export const StyledBrowser = styled.span`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--color-surface);
  border: 1px solid var(--color-hairline-strong);
  border-radius: var(--radius-md);
  transition: border-color var(--dur-base) var(--ease-in-out);

  /* Darkens when its link (the spread cover) is hovered. */
  a:hover > & {
    border-color: var(--color-muted);
  }
`;

export const StyledBrowserBar = styled.span`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  height: 32px;
  flex-shrink: 0;
  padding: 0 var(--space-3);
  background: var(--color-paper-deep);
  border-bottom: 1px solid var(--color-hairline);
`;

// Three window dots, drawn in CSS.
export const StyledBrowserDots = styled.span`
  display: inline-flex;
  gap: 5px;

  &::before,
  &::after,
  span {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: var(--radius-pill);
    background: var(--color-hairline-strong);
  }
`;

export const StyledBrowserAddress = styled.span`
  flex: 1;
  /* Let the address truncate instead of forcing the frame wider. */
  min-width: 0;
  max-width: 70%;
  margin: 0 auto;
  padding: 2px var(--space-3);
  border-radius: var(--radius-pill);
  background: var(--color-surface);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  line-height: 1.5;
  color: var(--color-muted);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// The page area keeps the 16:10 proportion of the screenshots.
export const StyledBrowserView = styled.span`
  display: block;
  /* Positioned so next/image's "fill" screenshot sizes to this box. */
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  /* Lets the code view size its text to the frame (cqi units). */
  container-type: inline-size;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
`;

/* ------------------------------- code view --------------------------------- */

export const StyledCodeView = styled.span`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--color-ink);
  color: var(--color-paper);
  font-family: var(--font-mono);
  /* Scales with the frame: ~11px in a home page spread, up to 18px in the
     full-width case study hero. */
  font-size: clamp(0.625rem, 2.6cqi, 1.125rem);
  line-height: 1.6;
  /* Show operators as typed (>=, ++), not as ligature glyphs. */
  font-variant-ligatures: none;
  font-feature-settings: "calt" 0, "liga" 0;
`;

export const StyledCodeFile = styled.span`
  display: block;
  padding: var(--space-2) var(--space-4);
  border-bottom: 1px solid
    color-mix(in srgb, var(--color-paper) 12%, transparent);
  color: color-mix(in srgb, var(--color-paper) 55%, transparent);
`;

export const StyledCodeBody = styled.span`
  display: flex;
  flex-direction: column;
  /* "safe" falls back to top alignment when the code is taller than the
     view, so overflow is clipped at the bottom, never the first lines. */
  justify-content: safe center;
  flex: 1;
  padding: max(var(--space-3), 4cqi) 0;
  overflow: hidden;
`;

export const StyledCodeLine = styled.span<{ $highlight: boolean; $comment: boolean }>`
  display: block;
  /* Long lines wrap with a hanging indent instead of being cut off. */
  padding: 0 var(--space-4) 0 calc(var(--space-4) + 2ch);
  text-indent: -2ch;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  background: ${(p) =>
    p.$highlight
      ? "color-mix(in srgb, var(--color-paper) 10%, transparent)"
      : "transparent"};
  color: ${(p) =>
    p.$comment
      ? "color-mix(in srgb, var(--color-paper) 50%, transparent)"
      : "var(--color-paper)"};
`;

/* ------------------------------ title fallback ----------------------------- */

export const StyledTitleView = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: var(--space-6);
  box-sizing: border-box;
  background: var(--color-paper-deep);
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: var(--leading-tight);
  color: var(--color-ink);
  text-align: center;
  text-wrap: balance;
`;
