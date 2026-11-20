import styled, { css, keyframes } from "styled-components";
import { media } from "../../styles/media";

/*
 * Every value here comes from the tokens in app/styles/GlobalStyles.ts.
 * See DESIGN.md for the rules behind them.
 */

// Hover colour fade shared by every pill and icon button. The resting
// state's transition is the fade OUT (slower, so the colour eases away);
// :hover swaps in a quicker fade IN; :active stays snappy so a click
// registers at once. Ease-in-out (not ease-out) so the colour change is
// spread across the whole duration and reads as a fade, not a snap.
// Reduced motion zeroes all of it (see globals.css).
const hoverFade = css`
  transition-property: background-color, border-color, color;
  transition-duration: var(--dur-slow);
  transition-timing-function: var(--ease-in-out);

  &:hover {
    transition-duration: var(--dur-base);
  }

  &:active {
    transition-duration: var(--dur-fast);
  }
`;

// Shared hover for bordered pills and icon buttons: the control inverts to
// an ink fill with paper text, like the logo block. No lift, no shadow.
// Pressed steps back to body grey so the click registers.
// Deliberately not behind media.hover: some desktop setups (touchscreen
// laptops, embedded browsers) report no hover support and would never see
// it. On phones a tapped pill may stay dark until the next tap; harmless.
const invertOnHover = css`
  ${hoverFade}

  &:hover {
    background: var(--color-ink);
    border-color: var(--color-ink);
    color: var(--color-paper);
  }

  &:active {
    background: var(--color-body);
    border-color: var(--color-body);
    color: var(--color-paper);
  }
`;

/* ---------------------------------- layout --------------------------------- */

export const StyledMain = styled.main`
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--gutter);
  width: 100%;
  box-sizing: border-box;
  color: var(--color-ink);
`;

/* ----------------------------------- hero ---------------------------------- */

// Fills the first screen on every device. svh = the height actually visible
// on phones (excluding the browser bars), with vh as a fallback; min-height
// so short or landscape screens grow instead of cropping. More padding below
// than above sits the content slightly above centre and keeps it clear of
// the scroll cue.
export const StyledHero = styled.div`
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(var(--nav-h) + var(--space-7)) 0
    calc(var(--space-9) + var(--space-7));
  box-sizing: border-box;

  ${media.md} {
    padding: calc(var(--nav-h) + var(--space-6)) 0
      calc(var(--space-9) + var(--space-5));
  }
`;

export const StyledName = styled.h1`
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.035em;
  color: var(--color-ink);
  margin: 0 0 var(--space-4);
  text-wrap: balance;
`;

export const StyledTitle = styled.p`
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--color-body);
  margin: 0;
`;

export const StyledHeroFoot = styled.div`
  margin-top: var(--space-8);
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: var(--space-6);

  ${media.md} {
    grid-template-columns: 1fr;
    gap: var(--space-5);
    margin-top: var(--space-6);
  }
`;

export const StyledSubtitle = styled.p`
  max-width: 46ch;
  font-size: var(--text-lg);
  line-height: 1.6;
  color: var(--color-body);
  margin: 0;
  text-wrap: pretty;
`;

export const StyledHeroLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

export const StyledHeroLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: 44px;
  padding: 0 var(--space-4);
  box-sizing: border-box;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-ink);
  background: var(--color-surface);
  border: 1px solid var(--color-hairline);
  border-radius: var(--radius-pill);
  text-decoration: none;
  ${invertOnHover}
`;

/* ------------------------------ typing motif ------------------------------- */

const blink = keyframes`
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
`;

// Terminal prompt that types "whoami"; the name below answers it.
// Decorative (aria-hidden in the component).
export const StyledTypingMotif = styled.p`
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-muted);
  margin: 0 0 var(--space-5);
`;

export const StyledTypingPrompt = styled.span`
  color: var(--color-accent);
  margin-right: 0.6em;
`;

export const StyledTypingCursor = styled.span`
  display: inline-block;
  width: 0.55em;
  height: 0.72em;
  margin-left: 3px;
  /* Centered with the prompt glyph rather than sitting on the baseline. */
  vertical-align: middle;
  background: var(--color-accent);
  border-radius: 0;
  animation: ${blink} 1.1s steps(1) infinite;
`;

/* ------------------------------- scroll cue -------------------------------- */

const scrollLineDraw = keyframes`
  0% {
    transform: translateY(-101%);
  }
  55%, 100% {
    transform: translateY(101%);
  }
`;

export const StyledScrollCue = styled.a<{ $hidden: boolean }>`
  position: absolute;
  bottom: var(--space-6);
  left: 0;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
  text-decoration: none;
  opacity: ${(props) => (props.$hidden ? 0 : 1)};
  visibility: ${(props) => (props.$hidden ? "hidden" : "visible")};
  pointer-events: ${(props) => (props.$hidden ? "none" : "auto")};
  transition:
    opacity 0.45s ease,
    visibility 0s linear ${(props) => (props.$hidden ? "0.45s" : "0s")},
    color var(--dur-fast) ease;

  /* 44px tap target; the cue shows on phones too, since the full-screen
     hero no longer lets the next section peek in. */
  min-height: 44px;

  &:hover {
    color: var(--color-ink);
  }

  ${media.md} {
    bottom: var(--space-5);
  }
`;

export const StyledScrollLine = styled.span`
  display: block;
  width: 1px;
  height: 32px;
  background: var(--color-hairline-strong);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--color-ink);
    animation: ${scrollLineDraw} 2.2s var(--ease-out) infinite;
  }
`;

/* --------------------------------- sections -------------------------------- */

// Heading in a narrow left column, content on the right. Collapses to one
// column on smaller screens.
export const StyledSection = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 200px) minmax(0, 1fr);
  column-gap: var(--space-7);
  padding: var(--space-9) 0;
  border-top: 1px solid var(--color-hairline);

  ${media.lg} {
    grid-template-columns: 1fr;
    padding: var(--space-8) 0;
  }
`;

export const StyledHeading = styled.h2`
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 700;
  line-height: var(--leading-tight);
  letter-spacing: -0.025em;
  color: var(--color-ink);
  margin: 0;

  ${media.lg} {
    margin-bottom: var(--space-5);
  }
`;

export const StyledSectionBody = styled.div`
  min-width: 0;
`;

/* ------------------------------- text & lists ------------------------------ */

export const StyledText = styled.p`
  font-size: var(--text-lg);
  line-height: var(--leading-body);
  color: var(--color-body);
  margin: 0;
  max-width: var(--measure);
  text-wrap: pretty;
`;

export const StyledTechLabel = styled.p`
  font-size: var(--text-sm);
  color: var(--color-muted);
  margin: var(--space-7) 0 var(--space-3);
`;

export const StyledTechRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

export const StyledTechRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-ink);

  li + li::before {
    content: "/";
    color: var(--color-hairline-strong);
    margin: 0 0.75em;
  }
`;

/* --------------------------- projects (spreads) ---------------------------- */

// Featured projects as alternating spreads: cover on one side, text on the
// other, swapping sides each row. Stacks (cover first) on small screens.
export const StyledProjectSpreads = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);

  ${media.md} {
    gap: var(--space-7);
  }
`;

// Scroll-linked entrance for each project spread: a 12px rise and fade that
// tracks the spread's position as it scrolls in, finished once 40% of it is
// in view. Pure CSS (animation-timeline: view()), so nothing waits on
// JavaScript or a timer and content is never left blank. Browsers without
// scroll-driven animations, and visitors who prefer reduced motion, see the
// spreads with no animation at all.
const spreadRise = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

export const StyledProjectSpread = styled.article<{ $flip: boolean }>`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: var(--space-6);
  align-items: center;

  > :first-child {
    order: ${(p) => (p.$flip ? 2 : 0)};
  }

  ${media.md} {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-4);

    > :first-child {
      order: 0;
    }
  }

  @supports (animation-timeline: view()) {
    @media (prefers-reduced-motion: no-preference) {
      animation: ${spreadRise} linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 40%;
    }
  }
`;

// Link wrapper around the browser-frame cover (see CoverStyles.ts, which
// darkens the frame border while this link is hovered).
export const StyledSpreadCover = styled.a`
  display: block;
  border-radius: var(--radius-md);
`;

export const StyledSpreadStack = styled.p`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-muted);
  margin: 0;
`;

export const StyledSpreadTitle = styled.h3`
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: var(--leading-tight);
  margin: var(--space-2) 0 var(--space-3);
  text-wrap: balance;

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--dur-fast) ease;
  }

  a:hover {
    color: var(--color-accent);
  }
`;

export const StyledSpreadSummary = styled.p`
  font-size: var(--text-md);
  line-height: 1.65;
  color: var(--color-body);
  margin: 0 0 var(--space-4);
`;

export const StyledSpreadActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--color-hairline);
  padding-top: var(--space-2);
`;

// The spread's main action (the case study).
export const StyledSpreadLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: 44px;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-ink);
  text-decoration: none;
  transition: color var(--dur-fast) ease;

  &:hover {
    color: var(--color-accent);
  }
`;

// Secondary project links (live site, source) as 44px icon buttons.
export const StyledIconLinks = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: calc(var(--space-3) * -1);

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: var(--radius-pill);
    color: var(--color-muted);
    ${hoverFade}
  }

  /* Borderless, so hover adds a soft circle rather than an ink fill.
     Not behind media.hover, for the same reason as invertOnHover. */
  a:hover {
    color: var(--color-ink);
    background: var(--color-paper-deep);
  }

  a:active {
    color: var(--color-ink);
    background: var(--color-hairline);
  }
`;

/* -------------------------------- experience ------------------------------- */

export const StyledJobs = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  max-width: var(--measure);
`;

export const StyledJob = styled.li`
  margin: 0;
`;

export const StyledJobRole = styled.h3`
  font-size: var(--text-lg);
  font-weight: 600;
  line-height: 1.4;
  color: var(--color-ink);
  margin: 0;

  span {
    font-weight: 400;
    color: var(--color-body);
  }
`;

export const StyledJobMeta = styled.p`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-variant-numeric: tabular-nums;
  color: var(--color-muted);
  margin: var(--space-1) 0 var(--space-3);
`;

export const StyledJobText = styled.p`
  font-size: var(--text-base);
  line-height: var(--leading-body);
  color: var(--color-body);
  margin: 0;
`;

/* ----------------------------------- nav ----------------------------------- */

export const StyledNav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  padding: 0 var(--gutter);
  background: ${(props) =>
    props.$scrolled ? "var(--color-paper)" : "transparent"};
  border-bottom: 1px solid
    ${(props) => (props.$scrolled ? "var(--color-hairline)" : "transparent")};
  transition:
    background var(--dur-base) ease,
    border-color var(--dur-base) ease;
`;

export const StyledNavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Same content width as StyledMain: the container minus its gutters
     (this row sits inside the nav's own gutter padding). */
  max-width: calc(var(--container) - 2 * var(--gutter));
  margin: 0 auto;
  width: 100%;
`;

export const StyledNavLogo = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  background: var(--color-ink);
  color: var(--color-paper);
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: background var(--dur-base) ease;

  &:hover {
    background: var(--color-accent);
  }
`;

export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: var(--space-6);
  list-style: none;
  margin: 0;
  padding: 0;

  ${media.md} {
    display: none;
  }
`;

export const StyledNavItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const StyledNavLink = styled.a<{ $isActive: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--text-sm);
  font-weight: 500;
  color: ${(props) =>
    props.$isActive ? "var(--color-ink)" : "var(--color-muted)"};
  text-decoration: none;
  padding: var(--space-3) 0;
  transition: color var(--dur-fast) ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 6px;
    height: 2px;
    width: ${(props) => (props.$isActive ? "100%" : "0")};
    background: var(--color-accent);
    transition: width var(--dur-base) var(--ease-out);
  }

  /* Hover only on real pointers: on touch, :hover sticks to the last-tapped
     link and looks like a second active section. */
  ${media.hover} {
    &:hover {
      color: var(--color-ink);
    }
  }
`;

export const StyledHamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--color-ink);
  cursor: pointer;
  padding: var(--space-3);
  margin-right: calc(var(--space-3) * -1);
  min-width: 44px;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);

  ${media.md} {
    display: inline-flex;
  }
`;

export const StyledMobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;

  ${media.md} {
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    position: fixed;
    top: var(--nav-h);
    left: 0;
    right: 0;
    background: var(--color-paper);
    border-bottom: 1px solid var(--color-hairline);
    padding: var(--space-2) var(--gutter) var(--space-5);
    z-index: 29;

    ${StyledNavList} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
    }

    ${StyledNavLink} {
      font-size: var(--text-base);
      padding: var(--space-3) 0;
    }
  }
`;

/* ---------------------------------- footer --------------------------------- */

export const StyledFooter = styled.footer`
  border-top: 1px solid var(--color-hairline);
  padding: var(--space-7) var(--gutter);
`;

export const StyledFooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-4);
  /* Matches StyledMain's content width, as in StyledNavContent. */
  max-width: calc(var(--container) - 2 * var(--gutter));
  margin: 0 auto;
`;

export const StyledFooterLinks = styled.div`
  display: flex;
  gap: var(--space-2);
`;

export const StyledFooterLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-hairline);
  background: var(--color-surface);
  color: var(--color-body);
  ${invertOnHover}
`;

export const StyledFooterCopyright = styled.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-muted);
`;
