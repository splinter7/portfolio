import styled, { keyframes } from "styled-components";

/*
 * Light, airy, minimal contemporary design tokens
 * paper       #fafaf7  page background (warm paper)
 * paper-deep  #f3f3ed  hero band (a whisper darker than paper)
 * surface     #ffffff  cards / nav surfaces
 * ink         #16161a  headings / primary text
 * body        #3f3f46  paragraph text (~10:1 on paper — AAA)
 * muted       #6e6e76  secondary text (4.8:1 on paper — AA)
 * hairline    #e9e9e4  borders / dividers
 * accent      #2b4eff  links / active states (5.5:1 on paper — AA)
 * accent-soft rgba(43,78,255,0.07) hover washes
 */

const fontSans = `var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
const fontMono = `var(--font-jetbrains-mono), "SF Mono", "SFMono-Regular", Menlo, Consolas, monospace`;
const easeOut = `cubic-bezier(0.22, 1, 0.36, 1)`;

/* ---------------------------------- layout --------------------------------- */

export const StyledMain = styled.main`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 32px;
  width: 100%;
  font-family: ${fontSans};
  color: #16161a;
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

/* ----------------------------------- hero ---------------------------------- */

export const StyledHero = styled.section`
  position: relative;
  width: 100%;
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* Slightly more bottom padding biases the content above vertical center,
     so the first screen feels composed rather than bottom-heavy with void. */
  padding: 104px 0 152px;
  background: #f3f3ed;
  /* Full-bleed cover band: the hero lives inside the centered content column,
     so extend its background to the viewport edges (clipped vertically to the
     hero itself) without moving any markup. */
  box-shadow: 0 0 0 100vmax #f3f3ed;
  clip-path: inset(0 -100vmax);

  @media (max-width: 768px) {
    padding: 96px 0 120px;
  }
`;

export const StyledName = styled.h1`
  font-family: ${fontSans};
  font-size: clamp(2.9rem, 9vw, 5.75rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  font-weight: 700;
  color: #16161a;
  margin: 0 0 12px;
`;

export const StyledTitle = styled.p`
  font-family: ${fontSans};
  font-size: clamp(1.1rem, 2.5vw, 1.35rem);
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #3f3f46;
  margin: 0 0 20px;
`;

export const StyledSubtitle = styled.p`
  font-family: ${fontSans};
  max-width: 620px;
  font-size: 1.05rem;
  line-height: 1.75;
  color: #3f3f46;
  margin: 0 0 36px;
`;

export const StyledHeroLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

export const StyledHeroLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 12px 20px;
  font-family: ${fontSans};
  font-size: 0.9rem;
  font-weight: 500;
  color: #16161a;
  background: #ffffff;
  border: 1px solid #e9e9e4;
  border-radius: 999px;
  text-decoration: none;
  transition:
    transform 0.35s ${easeOut},
    box-shadow 0.35s ${easeOut},
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(22, 22, 26, 0.08);
    border-color: #d8d8d2;
    color: #2b4eff;
  }
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

// Small terminal-style typing motif for the hero: a prompt plus a looping
// typed command with a blinking block cursor. Decorative (aria-hidden in the
// component); kept at kicker scale so it stays quiet.
export const StyledTypingMotif = styled.p`
  font-family: ${fontMono};
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  color: #3f3f46;
  margin: 0 0 22px;
`;

export const StyledTypingPrompt = styled.span`
  color: #2b4eff;
  margin-right: 0.6em;
`;

export const StyledTypingCursor = styled.span`
  display: inline-block;
  width: 0.55em;
  height: 1.05em;
  margin-left: 3px;
  vertical-align: text-bottom;
  background: #2b4eff;
  border-radius: 1px;
  animation: ${blink} 1.1s steps(1) infinite;
`;


/* ------------------------------- scroll cue -------------------------------- */

const scrollLineDraw = keyframes`
  0% {
    transform: translateY(-101%);
  }
  55% {
    transform: translateY(101%);
  }
  100% {
    transform: translateY(101%);
  }
`;

export const StyledScrollCue = styled.a<{ $hidden: boolean }>`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-family: ${fontMono};
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #6e6e76;
  text-decoration: none;
  opacity: ${(props) => (props.$hidden ? 0 : 1)};
  visibility: ${(props) => (props.$hidden ? "hidden" : "visible")};
  pointer-events: ${(props) => (props.$hidden ? "none" : "auto")};
  transition:
    opacity 0.45s ease,
    visibility 0s linear ${(props) => (props.$hidden ? "0.45s" : "0s")},
    color 0.2s ease;

  &:hover {
    color: #2b4eff;
  }

  &:focus-visible {
    outline: 2px solid #2b4eff;
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

export const StyledScrollLine = styled.span`
  display: block;
  width: 1px;
  height: 44px;
  background: #e4e4de;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: #2b4eff;
    animation: ${scrollLineDraw} 2.2s ${easeOut} infinite;
  }
`;

/* --------------------------------- sections -------------------------------- */

export const StyledSection = styled.section`
  width: 100%;
  padding: 72px 0 88px;
  scroll-margin-top: 72px;

  @media (max-width: 768px) {
    padding: 56px 0 64px;
  }
`;

export const StyledEyebrow = styled.p`
  font-family: ${fontMono};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #2b4eff;
  margin: 0 0 12px;
`;

export const StyledHeading = styled.h2`
  font-family: ${fontSans};
  font-size: clamp(1.65rem, 4vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #16161a;
  margin: 0 0 20px;
`;

/* ---------------------------------- cards ---------------------------------- */

export const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  width: 100%;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const StyledCard = styled.article`
  position: relative;
  height: 100%;
  padding: 28px;
  border: 1px solid #e9e9e4;
  border-radius: 12px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.4s ${easeOut},
    box-shadow 0.4s ${easeOut},
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(22, 22, 26, 0.08);
    border-color: #dcdcd6;
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const StyledCardWebsiteBadge = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(43, 78, 255, 0.08);
  color: #2b4eff;
  flex-shrink: 0;
  pointer-events: none;
`;

export const StyledCardDemoLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;

  &:hover {
    outline: none;
  }
`;

export const StyledCardSourceLink = styled.a`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding: 12px 0;
  min-height: 44px;
  font-family: ${fontSans};
  font-size: 0.85rem;
  font-weight: 500;
  color: #6e6e76;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #2b4eff;
  }
`;

export const StyledCardTitle = styled.h3`
  font-family: ${fontSans};
  font-size: 1.1rem;
  font-weight: 650;
  letter-spacing: -0.01em;
  color: #16161a;
  margin: 0 0 10px;
  padding-right: 40px;
`;

export const StyledCardText = styled.p`
  font-family: ${fontSans};
  font-size: 0.95rem;
  line-height: 1.65;
  color: #3f3f46;
  margin: 0 0 14px;
`;

export const StyledStack = styled.p`
  margin: 4px 0 0;
  font-family: ${fontMono};
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  color: #6e6e76;
`;

/* ------------------------------- text & lists ------------------------------ */

export const StyledText = styled.p`
  font-family: ${fontSans};
  font-size: 1rem;
  line-height: 1.75;
  color: #3f3f46;
  margin: 0 0 8px;
  max-width: 720px;
`;

export const StyledList = styled.ul`
  font-family: ${fontSans};
  font-size: 0.95rem;
  line-height: 1.7;
  color: #3f3f46;
  margin: 4px 0 8px;
  padding-left: 20px;
  max-width: 720px;

  li {
    margin-bottom: 6px;
  }

  li::marker {
    color: #2b4eff;
  }
`;

export const StyledJob = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledJobHeader = styled.p`
  font-family: ${fontSans};
  font-size: 1rem;
  font-weight: 600;
  color: #16161a;
  margin: 0 0 6px;

  span {
    font-weight: 400;
    color: #6e6e76;
  }
`;

/* -------------------------------- tech pills ------------------------------- */

export const StyledTechLabel = styled.p`
  font-family: ${fontSans};
  font-size: 0.95rem;
  color: #3f3f46;
  margin: 32px 0 16px;
`;

export const StyledTechGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const StyledTechGrid = styled.ul`
  display: contents;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledTechItem = styled.li`
  font-family: ${fontSans};
  font-size: 0.85rem;
  font-weight: 500;
  color: #3f3f46;
  background: #ffffff;
  border: 1px solid #e9e9e4;
  border-radius: 999px;
  padding: 9px 18px;
  transition:
    border-color 0.2s ease,
    transform 0.3s ${easeOut};

  &:hover {
    border-color: #2b4eff;
    transform: translateY(-2px);
  }
`;

/* ----------------------------------- nav ----------------------------------- */

export const StyledNav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  padding: 14px 32px;
  background: ${(props) =>
    props.$scrolled ? "rgba(250, 250, 247, 0.85)" : "transparent"};
  backdrop-filter: ${(props) => (props.$scrolled ? "blur(12px)" : "none")};
  -webkit-backdrop-filter: ${(props) =>
    props.$scrolled ? "blur(12px)" : "none"};
  border-bottom: 1px solid
    ${(props) => (props.$scrolled ? "#e9e9e4" : "transparent")};
  transition:
    background 0.3s ease,
    border-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 12px 20px;
  }
`;

export const StyledNavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
`;

export const StyledNavLogo = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: #16161a;
  color: #fafaf7;
  font-family: ${fontSans};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition:
    background 0.25s ease,
    transform 0.3s ${easeOut};

  &:hover {
    background: #2b4eff;
    transform: translateY(-1px);
  }
`;

export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledNavItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const StyledNavLink = styled.a<{ $isActive: boolean }>`
  position: relative;
  font-family: ${fontSans};
  font-size: 0.85rem;
  font-weight: ${(props) => (props.$isActive ? "600" : "400")};
  letter-spacing: 0.04em;
  color: ${(props) => (props.$isActive ? "#16161a" : "#6e6e76")};
  text-decoration: none;
  padding: 10px 0;
  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 4px;
    height: 2px;
    width: ${(props) => (props.$isActive ? "100%" : "0")};
    background: #2b4eff;
    border-radius: 2px;
    transition: width 0.3s ${easeOut};
  }

  // Hover feedback only on devices with a real hover input: on touch screens
  // :hover sticks to the last-tapped link and its underline is identical to
  // the active-section one, which reads as two sections highlighted at once.
  @media (hover: hover) {
    &:hover {
      color: #16161a;

      &::after {
        width: 100%;
      }
    }
  }
`;

export const StyledHamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #16161a;
  cursor: pointer;
  padding: 12px;
  min-width: 44px;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

export const StyledMobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    position: fixed;
    top: 62px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid #e9e9e4;
    padding: 12px 20px 20px;
    z-index: 29;

    ${StyledNavList} {
      display: flex !important;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }

    ${StyledNavLink} {
      display: block;
      font-size: 1rem;
      padding: 12px 0;
    }
  }
`;

/* ---------------------------------- footer --------------------------------- */

export const StyledFooter = styled.footer`
  border-top: 1px solid #e9e9e4;
  padding: 48px 32px;
  font-family: ${fontSans};
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const StyledFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 1080px;
  margin: 0 auto;
`;

export const StyledFooterSocialLinks = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

export const StyledFooterSocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #e9e9e4;
  background: #ffffff;
  color: #3f3f46;
  text-decoration: none;
  transition:
    transform 0.3s ${easeOut},
    color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.3s ${easeOut};

  &:hover {
    color: #2b4eff;
    border-color: #2b4eff;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(22, 22, 26, 0.08);
  }
`;

export const StyledFooterEmailLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #e9e9e4;
  background: #ffffff;
  color: #3f3f46;
  text-decoration: none;
  transition:
    transform 0.3s ${easeOut},
    color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.3s ${easeOut};

  &:hover {
    color: #2b4eff;
    border-color: #2b4eff;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(22, 22, 26, 0.08);
  }
`;

export const StyledFooterCopyright = styled.p`
  margin: 0;
  font-family: ${fontSans};
  font-size: 0.8rem;
  color: #6e6e76;
`;

export const StyledSeparator = styled.hr`
  border: none;
  border-top: 1px solid #e9e9e4;
  margin: 40px 0 0;
  width: 100%;
`;
