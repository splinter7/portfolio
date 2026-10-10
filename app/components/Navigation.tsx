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
  const isDesktop = window.innerWidth > 768;
  // "featured-project" and "experience" always scroll to the top (below the nav):
  // centering math can target a position past the page's max scroll, and the
  // browser clamps it — leaving the scrollspy highlighting the wrong section.
  // "about" stays centered on desktop, top-aligned on smaller screens.
  const scrollToTop =
    sectionId === "featured-project" ||
    sectionId === "experience" ||
    (sectionId === "about" && !isDesktop);
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      // Bottom-of-page guard: when the page can't scroll any further, the last
      // section is active. Without this, viewport-center math can keep the
      // previous tall section highlighted after the browser clamps a scroll
      // targeting the final section.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        setActiveSection("experience");
        return;
      }

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

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Refresh the active-section highlight after resize.
        // Never move the user's scroll position here — resize fires for
        // scrollbar changes, zoom gestures, devtools, etc.
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
      // Use instant scroll only for sections that are using a scroll-to-top layout
      // (featured-project and experience on all viewports, about only on smaller
      // screens to match calculateScrollPosition)
      const isDesktop = window.innerWidth > 768;
      const useInstantScroll =
        sectionId === "featured-project" ||
        sectionId === "experience" ||
        (sectionId === "about" && !isDesktop);
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
      <StyledNavItem>
        <StyledNavLink
          href="https://www.linkedin.com/in/stewart-small-a45a91b0"
          target="_blank"
          rel="noopener noreferrer"
          $isActive={false}
        >
          05. Resume
        </StyledNavLink>
      </StyledNavItem>
    </>
  );

  return (
    <StyledNav $scrolled={scrolled}>
      <StyledNavContent>
        <StyledNavLogo
          onClick={() => scrollToSection("hero")}
          role="button"
          tabIndex={0}
          aria-label="Back to top"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              scrollToSection("hero");
            }
          }}
        >
          SS
        </StyledNavLogo>
        <StyledNavList>{navLinks}</StyledNavList>
        <StyledHamburgerButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
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
