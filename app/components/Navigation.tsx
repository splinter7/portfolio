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
import { scrollToSection } from "./scrollToSection";

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
      // Reference the top of the content area (just below the nav): nav clicks
      // land each section's heading exactly there, so the highlight always
      // matches the section you navigated to. Viewport-center math overshoots
      // short sections (About) on tall viewports and highlights the next one.
      const navEl = document.querySelector("nav");
      const navH = navEl ? navEl.getBoundingClientRect().height : 80;
      const scrollPosition = window.scrollY + navH + 24;

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

  const handleSectionNav = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false); // Close menu after navigation
  };

  const navLinks = (
    <>
      <StyledNavItem>
        <StyledNavLink
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleSectionNav("hero");
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
            handleSectionNav("about");
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
            handleSectionNav("featured-project");
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
            handleSectionNav("experience");
          }}
          $isActive={activeSection === "experience"}
        >
          04. Experience
        </StyledNavLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledNavLink
          href="/resume"
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
          onClick={() => handleSectionNav("hero")}
          role="button"
          tabIndex={0}
          aria-label="Back to top"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleSectionNav("hero");
            }
          }}
        >
          S.
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
