'use client';

import { useEffect, useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import ScrollSection, { ScrollSectionProvider } from './components/ScrollSection';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  StyledMain,
  StyledHero,
  StyledName,
  StyledTitle,
  StyledSubtitle,
  StyledSocialLinks,
  StyledSocialLink,
  StyledEmailLink,
  StyledSection,
  StyledHeading,
  StyledCardsContainer,
  StyledCard,
  StyledCardTitle,
  StyledCardText,
  StyledList,
  StyledStack,
  StyledText,
  StyledFooter,
  StyledFooterContent,
  StyledFooterSocialLinks,
  StyledFooterSocialLink,
  StyledFooterEmailLink,
  StyledFooterCopyright,
} from './components/styled/PageStyles';

export default function Home() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      const experienceSection = document.getElementById('experience');
      if (!experienceSection) return;

      const rect = experienceSection.getBoundingClientRect();
      const sectionBottom = rect.bottom;
      const viewportHeight = window.innerHeight;
      
      // Show footer when the bottom of the experience section is at or past the bottom of the viewport
      // with a small threshold to trigger slightly before fully scrolled
      const threshold = 50; // pixels
      setShowFooter(sectionBottom <= viewportHeight + threshold);
    };

    // Check on mount and scroll
    checkScrollPosition();
    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    window.addEventListener('resize', checkScrollPosition, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  return (
    <>
      <ParticleBackground />
      <Navigation />
      <StyledSocialLinks>
        <StyledSocialLink 
          href="https://github.com/splinter7" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </StyledSocialLink>
        <StyledSocialLink 
          href="https://linkedin.com/in/stewart-small-a45a91b0" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </StyledSocialLink>
      </StyledSocialLinks>
      <StyledEmailLink 
        href="mailto:stewart.a.small@gmail.com" 
        aria-label="Email"
      >
        stewart.a.small@gmail.com
      </StyledEmailLink>
      <ScrollSectionProvider>
        <StyledMain>
          <ScrollSection sectionId="hero">
            <StyledHero>
              <StyledName>Stewart Small</StyledName>
              <StyledTitle>
                Senior Frontend / Website Engineer
              </StyledTitle>
              <StyledSubtitle>
                I build fast, accessible, high-quality web experiences —
                with a particular focus on audio, AI-driven products, and UX polish.
              </StyledSubtitle>
            </StyledHero>
          </ScrollSection>

        <ScrollSection sectionId="about">
          <StyledSection>
            <StyledHeading>About</StyledHeading>
            <StyledText>
              This is a placeholder About section where I’ll share a bit more
              about my background, how I approach building products, and what
              I’m currently focused on. For now, imagine a concise overview of
              my experience, values, and the kind of work that excites me.
            </StyledText>
          </StyledSection>
        </ScrollSection>

        <ScrollSection sectionId="featured-project">
          <StyledSection>
            <StyledHeading>Featured Project</StyledHeading>
            <StyledCardsContainer>
              <StyledCard>
                <StyledCardTitle>Real-Time Audio Streaming Web App</StyledCardTitle>
                <StyledCardText>
                  A low-latency audio streaming application built with React and Node.js.
                  Focused on resilient playback, and real-time delivery using
                  chunked audio and WebRTC.
                </StyledCardText>
                <StyledStack>
                  React · Node.js · WebRTC
                </StyledStack>
              </StyledCard>

              <StyledCard>
                <StyledCardTitle>JCarousel</StyledCardTitle>
                <StyledCardText>
                  A javascript carousel library handles calculating 
                  the position of the carousel items and the number 
                  of items to display based on the container width.
                </StyledCardText>
                <StyledStack>
                  Vanilla JavaScript · HTML · CSS
                </StyledStack>
              </StyledCard>

              <StyledCard>
                <StyledCardTitle>Project Title</StyledCardTitle>
                <StyledCardText>
                  A short description of the project, what problem it solves,
                  and any notable technical or design decisions.
                </StyledCardText>
                <StyledStack>
                  Tech · Stack · Here
                </StyledStack>
              </StyledCard>

              <StyledCard>
                <StyledCardTitle>Project Title</StyledCardTitle>
                <StyledCardText>
                  A short description of the project, what problem it solves,
                  and any notable technical or design decisions.
                </StyledCardText>
                <StyledStack>
                  Tech · Stack · Here
                </StyledStack>
              </StyledCard>
            </StyledCardsContainer>
          </StyledSection>
        </ScrollSection>

        <ScrollSection sectionId="experience">
          <StyledSection>
            <StyledHeading>Experience Snapshot</StyledHeading>
            <StyledText>
              10+ years building customer-facing web applications on large-scale product
              teams. Deep experience with React, performance optimization, accessibility,
              and close collaboration with design and product partners.
            </StyledText>
          </StyledSection>
        </ScrollSection>
        </StyledMain>
      </ScrollSectionProvider>
      <StyledFooter $isVisible={showFooter}>
        <StyledFooterContent>
          <StyledFooterSocialLinks>
            <StyledFooterSocialLink 
              href="https://github.com/splinter7" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </StyledFooterSocialLink>
            <StyledFooterSocialLink 
              href="https://linkedin.com/in/stewart-small-a45a91b0" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </StyledFooterSocialLink>
            <StyledFooterEmailLink 
              href="mailto:stewart.a.small@gmail.com" 
              aria-label="Email"
            >
              <FaEnvelope size={16} />
            </StyledFooterEmailLink>
          </StyledFooterSocialLinks>
        </StyledFooterContent>
        <StyledFooterCopyright>
          © {new Date().getFullYear()} Stewart Small
        </StyledFooterCopyright>
      </StyledFooter>
    </>
  );
}
