"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  StyledNav,
  StyledNavContent,
  StyledNavLogo,
  StyledNavList,
  StyledNavItem,
  StyledNavLink,
  StyledHamburgerButton,
  StyledMobileMenu,
} from "./styled/PageStyles";

// Helper function to calculate scroll position for a section
const calculateScrollPosition = (
  sectionId: string,
  element: HTMLElement,
): number => {
  const rect = element.getBoundingClientRect();
  const scrollToTop = sectionId === "featured-project" || sectionId === "about";
  const navElement = document.querySelector("nav");
  const navHeight = navElement ? navElement.getBoundingClientRect().height : 80;

  if (scrollToTop) {
    // Scroll so the section heading (h2) lands below the nav — use heading position when available so
    // we're correct for all viewports (section top varies due to centering/padding)
    const BUFFER_PX = 24;
    const heading = element.querySelector("h2");
    const scrollPosition = heading
      ? heading.getBoundingClientRect().top +
        window.scrollY -
        navHeight -
        BUFFER_PX
      : rect.top + window.scrollY - navHeight - BUFFER_PX;
    return scrollPosition;
  }
  // Other sections: center the section in the viewport
  return rect.top + window.scrollY - window.innerHeight / 2 + rect.height / 2;
};

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "featured-project", "experience"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    let resizeTimeout: NodeJS.Timeout;
    let lastInnerWidth = window.innerWidth;
    let lastInnerHeight = window.innerHeight;
    // Threshold (px): height changes smaller than this are treated as browser chrome (e.g. address bar) and do not trigger scroll reset
    const MOBILE_CHROME_RESIZE_THRESHOLD = 120;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const widthChanged = width !== lastInnerWidth;
        const heightDelta = Math.abs(height - lastInnerHeight);
        const isMeaningfulResize =
          widthChanged || heightDelta >= MOBILE_CHROME_RESIZE_THRESHOLD;

        lastInnerWidth = width;
        lastInnerHeight = height;

        if (isMeaningfulResize) {
          // Real resize (orientation, window size): reset to hero
          const heroElement = document.getElementById("hero");
          if (heroElement) {
            const targetScrollPosition = calculateScrollPosition(
              "hero",
              heroElement,
            );
            window.scrollTo({
              top: targetScrollPosition,
              behavior: "auto", // Instant scroll on resize
            });
          }
        }
        // Always update active section (e.g. after address bar show/hide)
        handleScroll();
      }, 150); // Debounce resize events
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.dispatchEvent(
        new CustomEvent("navigation-start", { detail: { sectionId } }),
      );
      const scrollPosition = calculateScrollPosition(sectionId, element);
      // Use instant scroll for scroll-to-top sections so we hit the target exactly (smooth scroll was falling short at some widths)
      const useInstantScroll =
        sectionId === "featured-project" || sectionId === "about";
      window.scrollTo({
        top: scrollPosition,
        behavior: useInstantScroll ? "auto" : "smooth",
      });
      setIsMenuOpen(false); // Close menu after navigation
    }
  };

  const navLinks = (
    <>
      <StyledNavItem>
        <StyledNavLink
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          $isActive={activeSection === "hero"}
        >
          01. Home
        </StyledNavLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledNavLink
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
          $isActive={activeSection === "about"}
        >
          02. About
        </StyledNavLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledNavLink
          href="#featured-project"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("featured-project");
          }}
          $isActive={activeSection === "featured-project"}
        >
          03. Featured Projects
        </StyledNavLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledNavLink
          href="#experience"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("experience");
          }}
          $isActive={activeSection === "experience"}
        >
          04. Experience
        </StyledNavLink>
      </StyledNavItem>
    </>
  );

  return (
    <StyledNav>
      <StyledNavContent>
        <StyledNavLogo
          onClick={() => scrollToSection("hero")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              scrollToSection("hero");
            }
          }}
        >
          AEON
        </StyledNavLogo>
        <StyledNavList>{navLinks}</StyledNavList>
        <StyledHamburgerButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </StyledHamburgerButton>
      </StyledNavContent>
      <StyledMobileMenu $isOpen={isMenuOpen}>
        <StyledNavList>{navLinks}</StyledNavList>
      </StyledMobileMenu>
    </StyledNav>
  );
}
