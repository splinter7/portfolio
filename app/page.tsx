'use client';

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

        <ScrollSection sectionId="featured-project">
          <StyledSection>
            <StyledHeading>Featured Project</StyledHeading>
            <StyledCardsContainer>
              <StyledCard>
                <StyledCardTitle>Real-Time Audio Streaming Web App</StyledCardTitle>
                <StyledCardText>
                  A low-latency audio streaming application built with React and Node.js.
                  Focused on UX polish, resilient playback, and real-time delivery using
                  chunked audio and WebRTC-based techniques.
                </StyledCardText>
                <StyledStack>
                  React · Node.js · WebRTC
                </StyledStack>
              </StyledCard>

              <StyledCard>
                <StyledCardTitle>Real-Time Audio Streaming Web App</StyledCardTitle>
                <StyledCardText>
                  A low-latency audio streaming application built with React and Node.js.
                  Focused on UX polish, resilient playback, and real-time delivery using
                  chunked audio and WebRTC-based techniques.
                </StyledCardText>
                <StyledStack>
                  React · Node.js · WebRTC
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
      <StyledFooter>
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
