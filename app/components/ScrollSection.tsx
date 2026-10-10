"use client";

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  createContext,
  useContext,
} from "react";
import styled from "styled-components";

// Context to manage which section should be visible
interface ScrollSectionContextType {
  activeSection: string | null;
  setActiveSection: (sectionId: string | null) => void;
  registerSection: (sectionId: string, element: HTMLElement) => void;
  unregisterSection: (sectionId: string) => void;
}

const ScrollSectionContext = createContext<ScrollSectionContextType | null>(
  null,
);

// Plain semantic section wrapper. Scroll-reveal animation is handled by the
// Reveal component; this wrapper only provides the anchor id and registers
// the section for scroll tracking.
const StyledScrollSection = styled.section`
  width: 100%;
  scroll-margin-top: 76px;
`;

interface ScrollSectionProps {
  children: ReactNode;
  sectionId: string;
  onVisibilityChange?: (isVisible: boolean) => void;
}

// Provider component to manage scroll state
export function ScrollSectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<string | null>("hero");
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
        if (
          rect.top < window.innerHeight &&
          rect.bottom > 0 &&
          distance < closestDistance
        ) {
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

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    // Listen for navigation events to disable constraint during navigation
    const handleNavigationStart = ((e: CustomEvent) => {
      isNavigatingRef.current = true;
    }) as EventListener;
    window.addEventListener("navigation-start", handleNavigationStart);

    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      window.removeEventListener("navigation-start", handleNavigationStart);
    };
  }, [activeSection]);

  return (
    <ScrollSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        registerSection,
        unregisterSection,
      }}
    >
      {children}
    </ScrollSectionContext.Provider>
  );
}

export default function ScrollSection({
  children,
  sectionId,
  onVisibilityChange,
}: ScrollSectionProps) {
  const context = useContext(ScrollSectionContext);
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible =
    context?.activeSection === sectionId ||
    (sectionId === "hero" && !context?.activeSection);

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
    <StyledScrollSection ref={sectionRef} id={sectionId}>
      {children}
    </StyledScrollSection>
  );
}
