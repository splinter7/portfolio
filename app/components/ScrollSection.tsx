'use client';

import { useEffect, useRef, useState, ReactNode, createContext, useContext } from 'react';
import styled from 'styled-components';

// Context to manage which section should be visible
interface ScrollSectionContextType {
  activeSection: string | null;
  setActiveSection: (sectionId: string | null) => void;
  registerSection: (sectionId: string, element: HTMLElement) => void;
  unregisterSection: (sectionId: string) => void;
}

const ScrollSectionContext = createContext<ScrollSectionContextType | null>(null);

const StyledScrollSection = styled.div<{ $isVisible: boolean; $sectionId?: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 0.5s ease, transform 0.5s ease;
  will-change: opacity, transform;
  position: relative;
  width: 100%;
  padding: 80px 120px 80px 120px;

  @media (max-width: 768px) {
    padding: 64px 24px 64px 24px;
    ${props => props.$sectionId === 'featured-project' ? `
      justify-content: flex-start;
      height: auto;
      min-height: 100vh;
      scroll-margin-top: 80px;
      padding-top: 80px;
    ` : ''}
  }
`;

interface ScrollSectionProps {
  children: ReactNode;
  sectionId: string;
  onVisibilityChange?: (isVisible: boolean) => void;
}

// Provider component to manage scroll state
export function ScrollSectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<string | null>('hero');
  const sectionsRef = useRef<Map<string, HTMLElement>>(new Map());
  const isNavigatingRef = useRef(false);

  const registerSection = (sectionId: string, element: HTMLElement) => {
    sectionsRef.current.set(sectionId, element);
  };

  const unregisterSection = (sectionId: string) => {
    sectionsRef.current.delete(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      const heroElement = sectionsRef.current.get('hero');
      
      // Constrain hero section scrolling on mobile - prevent scrolling UP past center
      // Only apply constraint if hero is the active section and not during navigation
      if (isMobile && heroElement && activeSection === 'hero' && !isNavigatingRef.current) {
        const heroRect = heroElement.getBoundingClientRect();
        const heroTop = heroRect.top + window.scrollY;
        const heroCenter = heroTop + heroRect.height / 2;
        const centerScrollY = heroCenter - window.innerHeight / 2;
        
        // Only constrain when scrolling UP (scrollY < centerScrollY) and hero is still in view
        // This allows scrolling DOWN to other sections but prevents scrolling UP past center
        if (heroRect.top < window.innerHeight && heroRect.bottom > 0 && window.scrollY < centerScrollY) {
          // Use requestAnimationFrame to avoid scroll event conflicts
          requestAnimationFrame(() => {
            window.scrollTo({
              top: centerScrollY,
              behavior: 'auto'
            });
          });
          return; // Skip section detection on this scroll event
        }
      }
      
      // Reset navigation flag after scroll completes
      if (isNavigatingRef.current) {
        setTimeout(() => {
          isNavigatingRef.current = false;
        }, 1000);
      }
      
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      let closestSection: string | null = null;
      let closestDistance = Infinity;

      sectionsRef.current.forEach((element, sectionId) => {
        const rect = element.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionCenter = sectionTop + rect.height / 2;
        const distance = Math.abs(viewportCenter - sectionCenter);

        // Check if section is in viewport and closest to center
        if (rect.top < window.innerHeight && rect.bottom > 0 && distance < closestDistance) {
          closestDistance = distance;
          closestSection = sectionId;
        }
      });

      if (closestSection !== activeSection) {
        setActiveSection(closestSection);
      }
    };

    // Throttle scroll events
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Listen for navigation events to disable constraint during navigation
    const handleNavigationStart = ((e: CustomEvent) => {
      isNavigatingRef.current = true;
    }) as EventListener;
    window.addEventListener('navigation-start', handleNavigationStart);
    
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('navigation-start', handleNavigationStart);
    };
  }, [activeSection]);

  return (
    <ScrollSectionContext.Provider
      value={{ activeSection, setActiveSection, registerSection, unregisterSection }}
    >
      {children}
    </ScrollSectionContext.Provider>
  );
}

export default function ScrollSection({ 
  children, 
  sectionId,
  onVisibilityChange 
}: ScrollSectionProps) {
  const context = useContext(ScrollSectionContext);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = context?.activeSection === sectionId || (sectionId === 'hero' && !context?.activeSection);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !context) return;

    context.registerSection(sectionId, section);

    return () => {
      context.unregisterSection(sectionId);
    };
  }, [sectionId, context]);

  useEffect(() => {
    onVisibilityChange?.(isVisible);
  }, [isVisible, onVisibilityChange]);

  return (
    <StyledScrollSection ref={sectionRef} $isVisible={isVisible} $sectionId={sectionId} id={sectionId}>
      {children}
    </StyledScrollSection>
  );
}
