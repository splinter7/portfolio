"use client";

import { useEffect, useState } from "react";
import ParticleBackground from "./components/ParticleBackground";
import Navigation from "./components/Navigation";
import ScrollSection, {
  ScrollSectionProvider,
} from "./components/ScrollSection";
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
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
  StyledCardDemoLink,
  StyledCardSourceLink,
  StyledCardWebsiteBadge,
  StyledCardTitle,
  StyledCardText,
  StyledStack,
  StyledText,
  StyledTechLabel,
  StyledTechGridWrapper,
  StyledTechGrid,
  StyledTechItem,
  StyledFooter,
  StyledFooterContent,
  StyledFooterSocialLinks,
  StyledFooterSocialLink,
  StyledFooterEmailLink,
  StyledFooterCopyright,
  StyledSeparator,
} from "./components/styled/PageStyles";

export default function Home() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const computeVisibility = () => {
      const heroSection = document.getElementById("hero");
      const experienceSection = document.getElementById("experience");

      // Use the vertical center of the viewport as the trigger point,
      // with a small buffer to reduce flicker when near boundaries.
      const viewportMiddle = window.innerHeight / 2;
      const buffer = 24; // pixels

      const isSectionInView = (el: HTMLElement | null) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        // Section is considered active when the viewport's vertical center
        // (with a small buffer) lies within the section bounds.
        return (
          rect.top - buffer <= viewportMiddle &&
          rect.bottom + buffer >= viewportMiddle
        );
      };

      const isHeroOrExperienceInView =
        isSectionInView(heroSection) || isSectionInView(experienceSection);

      // Footer is only visible when the viewport is over the hero or experience
      // sections. Once visible in those sections, it stays visible while the
      // user scrolls inside them, and hides only after scrolling outside.
      setShowFooter(isHeroOrExperienceInView);
    };

    const handleScroll = () => {
      computeVisibility();
    };

    const handleResize = () => {
      computeVisibility();
    };

    // Initial check on mount
    computeVisibility();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
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
              <StyledTitle>Senior Frontend / Website Engineer</StyledTitle>
              <StyledSubtitle>
                I build fast, accessible, high-quality web experiences — with a
                particular focus on audio, and UX polish.
              </StyledSubtitle>
            </StyledHero>
          </ScrollSection>

          <ScrollSection sectionId="about">
            <StyledSection>
              <StyledHeading>About</StyledHeading>
              <StyledText>
                I am a senior frontend engineer with 10+ years of experience
                building user-focused web apps and marketing experiences. I
                specialize in React and TypeScript, with a strong focus on
                performance, and accessibility. I enjoy working closely with
                design, product, and growth teams to ship polished, scalable
                interfaces. I’m especially excited about AI-driven and
                audio-first products.
              </StyledText>

              <StyledSeparator aria-hidden />

              <StyledTechLabel>
                <strong>A few technologies I’m most comfortable with:</strong>
              </StyledTechLabel>
              <StyledTechGridWrapper>
                <StyledTechGrid>
                  <StyledTechItem>JavaScript (ES6+)</StyledTechItem>
                  <StyledTechItem>HTML 5</StyledTechItem>
                  <StyledTechItem>CSS 3</StyledTechItem>
                </StyledTechGrid>
                <StyledTechGrid>
                  <StyledTechItem>React</StyledTechItem>
                  <StyledTechItem>ExpressJs</StyledTechItem>
                  <StyledTechItem>Node.js</StyledTechItem>
                </StyledTechGrid>
                <StyledTechGrid>
                  <StyledTechItem>NExtJs</StyledTechItem>
                  <StyledTechItem>Vite</StyledTechItem>
                  <StyledTechItem>Vercel</StyledTechItem>
                </StyledTechGrid>
              </StyledTechGridWrapper>
            </StyledSection>
          </ScrollSection>

          <ScrollSection sectionId="featured-project">
            <StyledSection>
              <StyledHeading>Featured Project</StyledHeading>
              <StyledCardsContainer>
                <StyledCard>
                  <StyledCardDemoLink
                    href="https://github.com/splinter7/audio-streaming"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Real-Time Audio Streaming Web App – view on GitHub"
                  >
                    <StyledCardTitle>
                      Real-Time Audio Streaming Web App
                    </StyledCardTitle>
                    <StyledCardText>
                      A low-latency audio streaming application built with React
                      and Node.js. Focused on resilient playback, and real-time
                      delivery using chunked audio and WebRTC.
                    </StyledCardText>
                    <StyledStack>React · Node.js · WebRTC</StyledStack>
                  </StyledCardDemoLink>
                  <StyledCardSourceLink
                    href="https://github.com/splinter7/audio-streaming"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Real-Time Audio Streaming Web App source code on GitHub"
                  >
                    <FaGithub size={14} aria-hidden /> View source
                  </StyledCardSourceLink>
                </StyledCard>

                <StyledCard>
                  <StyledCardWebsiteBadge aria-hidden title="Live website">
                    <FaGlobe size={14} />
                  </StyledCardWebsiteBadge>
                  <StyledCardDemoLink
                    href="https://j-carousel.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="JCarousel – view live demo"
                  >
                    <StyledCardTitle>
                      JCarousel Javascript Carousel Library
                    </StyledCardTitle>
                    <StyledCardText>
                      A javascript carousel library handles calculating the
                      position of the carousel items and the number of items to
                      display based on the container width.
                    </StyledCardText>
                    <StyledStack>JavaScript · HTML · CSS</StyledStack>
                  </StyledCardDemoLink>
                  <StyledCardSourceLink
                    href="https://github.com/splinter7/JCarousel"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="JCarousel source code on GitHub"
                  >
                    <FaGithub size={14} aria-hidden /> View source
                  </StyledCardSourceLink>
                </StyledCard>

                <StyledCard>
                  <StyledCardWebsiteBadge aria-hidden title="Live website">
                    <FaGlobe size={14} />
                  </StyledCardWebsiteBadge>
                  <StyledCardDemoLink
                    href="https://react-wasps.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="React Wasps – view live demo"
                  >
                    <StyledCardTitle>React Wasps</StyledCardTitle>
                    <StyledCardText>
                      A simple react app showcasing some animated flying wasps.
                    </StyledCardText>
                    <StyledStack>
                      React · Vite · Gsap animation library
                    </StyledStack>
                  </StyledCardDemoLink>
                  <StyledCardSourceLink
                    href="https://github.com/splinter7/React-Wasps"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="React Wasps source code on GitHub"
                  >
                    <FaGithub size={14} aria-hidden /> View source
                  </StyledCardSourceLink>
                </StyledCard>

                <StyledCard>
                  <StyledCardWebsiteBadge aria-hidden title="Live website">
                    <FaGlobe size={14} />
                  </StyledCardWebsiteBadge>
                  <StyledCardDemoLink
                    href="https://frontend-audio-processor.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Frontend Audio Processor – view live demo"
                  >
                    <StyledCardTitle>Audio BPM Detector</StyledCardTitle>
                    <StyledCardText>
                      A beat detection app that analyzes audio files and outputs
                      BPM.
                    </StyledCardText>
                    <StyledStack>JavaScript · Web Audio API · Vite</StyledStack>
                  </StyledCardDemoLink>
                  <StyledCardSourceLink
                    href="https://github.com/splinter7/frontend-audio-processor"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Frontend Audio Processor source code on GitHub"
                  >
                    <FaGithub size={14} aria-hidden /> View source
                  </StyledCardSourceLink>
                </StyledCard>
              </StyledCardsContainer>
            </StyledSection>
          </ScrollSection>

          <ScrollSection sectionId="experience">
            <StyledSection>
              <StyledHeading>Experience Snapshot</StyledHeading>
              <StyledText>
                Technical lead overseeing a three-developer team, conducting
                hands-on security testing with OWASP ZAP to identify and
                remediate vulnerabilities, and using Lighthouse audits to drive
                measurable gains in performance, SEO, and accessibility across
                production web applications.
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
          © {new Date().getFullYear()} AD - Stewart Small
        </StyledFooterCopyright>
      </StyledFooter>
    </>
  );
}
