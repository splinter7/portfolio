import styled from 'styled-components';

export const StyledMain = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #ffffff;
  line-height: 1.6;
  position: relative;
  z-index: 10;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-bottom: 140px;
  }
`;

export const StyledHero = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledName = styled.h1`
  font-size: 60px;
  margin-bottom: 4px;
  color: #ffffff;
  letter-spacing: 0.05em;
  font-weight: 600;
  font-family: var(--font-orbitron), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const StyledTitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #ffffff;
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledSubtitle = styled.p`
  max-width: 700px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 100%;
  }
`;

export const StyledSocialLinks = styled.div`
  position: fixed;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 20;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledSocialLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.05);
  pointer-events: auto;

  &:hover {
    color: rgb(255, 247, 98);
    border-color: rgba(255, 247, 98, 0.5);
    transform: translateY(-3px);
  }
`;

export const StyledEmailLink = styled.a`
  position: fixed;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 13px;
  letter-spacing: 0.18em;
  z-index: 20;
  transition: all 0.3s ease;
  pointer-events: auto;

  &:hover {
    color: rgb(255, 247, 98);
    transform: translateY(calc(-50% - 3px));
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledHeading = styled.h2`
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #ffffff;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;
  margin-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const StyledCard = styled.div`
  position: relative;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background-color: rgba(44, 45, 68, 0.3);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:has(a:hover) {
    border-color: rgba(255, 255, 255, 0.4);
    background-color: rgba(44, 45, 68, 0.45);
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const StyledCardWebsiteBadge = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.85);
  flex-shrink: 0;
  pointer-events: none;

  @media (max-width: 768px) {
    top: 14px;
    right: 14px;
    width: 26px;
    height: 26px;
  }
`;

export const StyledCardLink = styled(StyledCard).attrs({ as: 'a' })`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    background-color: rgba(44, 45, 68, 0.45);
  }
`;

export const StyledCardDemoLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  min-width: 0;

  &:hover {
    outline: none;
  }
`;

export const StyledCardSourceLink = styled.a`
  position: relative;
  z-index: 1;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  padding: 10px 0;
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

export const StyledCardTitle = styled.h3`
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const StyledCardText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledList = styled.ul`
  color: rgba(255, 255, 255, 0.9);
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  line-height: 1.7;
  margin-left: 24px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledStack = styled.p`
  margin-top: 12px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  font-family: var(--font-jetbrains-mono), 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
`;

export const StyledText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledTechLabel = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  line-height: 1.7;
  margin-top: 24px;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledTechGridWrapper = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: nowrap;
`;

export const StyledTechGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px 0;
  list-style: none;
  margin: 0;
  padding: 0;
  min-width: 0;
  flex: 0 1 auto;
  color: rgba(255, 255, 255, 0.9);
  font-family: var(--font-jetbrains-mono), 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-size: 13px;
`;

export const StyledTechItem = styled.li`
  position: relative;
  padding-left: 20px;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: rgb(255, 247, 98);
  }
`;

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  padding: 20px 40px;
  background-color: rgba(44, 45, 68, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 16px 20px;
  }
`;

export const StyledNavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const StyledNavLogo = styled.div`
  font-family: 'Anurati', sans-serif;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0.05em;
  margin: 0;
  cursor: pointer;

  &:hover {
    color: rgb(255, 247, 98);
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const StyledNavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
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
  color: ${props => props.$isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.6)'};
  text-decoration: none;
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 13px;
  font-weight: ${props => props.$isActive ? '500' : '400'};
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  position: relative;
  padding: 8px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    background-color: rgb(255, 247, 98);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 16px 0;
  }
`;

export const StyledHamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
  z-index: 31;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledMobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background-color: rgba(44, 45, 68, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 24px 20px;
    z-index: 29;
    animation: ${props => props.$isOpen ? 'slideDown' : 'none'} 0.3s ease;

    ${StyledNavList} {
      display: flex !important;
      flex-direction: column;
      gap: 24px;
      align-items: flex-start;
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StyledFooter = styled.footer<{ $isVisible?: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  padding-left: 120px;
  padding-right: 200px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  text-align: center;
  z-index: 15;
  pointer-events: none;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 0.5s ease, transform 0.5s ease;
  visibility: ${props => props.$isVisible ? 'visible' : 'hidden'};

  @media (max-width: 768px) {
    padding: 20px;
    pointer-events: auto;
    background-color: rgba(44, 45, 68, 0.3);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
`;

export const StyledFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 5px;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const StyledFooterSocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
`;

export const StyledFooterSocialLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.05);
  pointer-events: auto;

  &:hover {
    color: rgb(255, 247, 98);
    border-color: rgba(255, 247, 98, 0.5);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const StyledFooterEmailLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.05);
  pointer-events: auto;

  &:hover {
    color: rgb(255, 247, 98);
    border-color: rgba(255, 247, 98, 0.5);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const StyledFooterCopyright = styled.div`
  pointer-events: none;
  font-size: 12px;

  @media (min-width: 769px) {
    margin-top: 0;
    font-size: 14px;
  }
`;
