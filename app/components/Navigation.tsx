'use client';

import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  StyledNav,
  StyledNavContent,
  StyledNavLogo,
  StyledNavList,
  StyledNavItem,
  StyledNavLink,
  StyledHamburgerButton,
  StyledMobileMenu,
} from './styled/PageStyles';

// Helper function to calculate scroll position for a section
const calculateScrollPosition = (sectionId: string, element: HTMLElement): number => {
  const rect = element.getBoundingClientRect();
  const isMobile = window.innerWidth <= 768;
  const isFeaturedProject = sectionId === 'featured-project';
  
  if (isMobile && isFeaturedProject) {
    // On mobile, scroll to top of featured-project section with nav bar offset
    const navElement = document.querySelector('nav');
    const navHeight = navElement ? navElement.getBoundingClientRect().height : 80;
    return rect.top + window.scrollY - navHeight;
  } else {
    // On desktop or other sections, center the section
    return rect.top + window.scrollY - window.innerHeight / 2 + rect.height / 2;
  }
};

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'featured-project', 'experience'];
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Reset to hero section (first slide) on resize
        const heroElement = document.getElementById('hero');
        if (heroElement) {
          const targetScrollPosition = calculateScrollPosition('hero', heroElement);
          window.scrollTo({
            top: targetScrollPosition,
            behavior: 'auto', // Instant scroll on resize
          });
        }
        handleScroll(); // Update active section after resize
      }, 150); // Debounce resize events
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Set a flag to indicate navigation is in progress (will be read by ScrollSection)
      // We'll use a custom event to communicate between components
      window.dispatchEvent(new CustomEvent('navigation-start', { detail: { sectionId } }));
      
      const scrollPosition = calculateScrollPosition(sectionId, element);
      
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
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
            scrollToSection('hero');
          }}
          $isActive={activeSection === 'hero'}
        >
          01. Home
        </StyledNavLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledNavLink
          href="#featured-project"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('featured-project');
          }}
          $isActive={activeSection === 'featured-project'}
        >
          02. Featured Projects
        </StyledNavLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledNavLink
          href="#experience"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('experience');
          }}
          $isActive={activeSection === 'experience'}
        >
          03. Experience
        </StyledNavLink>
      </StyledNavItem>
    </>
  );

  return (
    <StyledNav>
      <StyledNavContent>
        <StyledNavLogo
          onClick={() => scrollToSection('hero')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              scrollToSection('hero');
            }
          }}
        >
          AEON
        </StyledNavLogo>
        <StyledNavList>
          {navLinks}
        </StyledNavList>
        <StyledHamburgerButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </StyledHamburgerButton>
      </StyledNavContent>
      <StyledMobileMenu $isOpen={isMenuOpen}>
        <StyledNavList>
          {navLinks}
        </StyledNavList>
      </StyledMobileMenu>
    </StyledNav>
  );
}
