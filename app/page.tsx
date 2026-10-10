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
  StyledList,
} from "./components/styled/PageStyles";

export default function Home() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const CLOSE_THRESHOLD_PX = 60;

    const getNearestDistance = () => {
      const heroSection = document.getElementById("hero");
      const aboutSection = document.getElementById("about");
      const experienceSection = document.getElementById("experience");

      // Use the vertical center of the viewport as the reference point.
      const viewportMiddle = window.innerHeight / 2;

      // Helper to measure how far a section's vertical center is from the
      // viewport's vertical center. If a section is missing, treat it as
      // infinitely far away.
      const getDistanceToCenter = (el: HTMLElement | null) => {
        if (!el) return Number.POSITIVE_INFINITY;
        const rect = el.getBoundingClientRect();
        const sectionMiddle = rect.top + rect.height / 2;
        return Math.abs(sectionMiddle - viewportMiddle);
      };

      return Math.min(
        getDistanceToCenter(heroSection),
        getDistanceToCenter(aboutSection),
        getDistanceToCenter(experienceSection),
      );
    };

    const computeVisibility = () => {
      // Only show the footer when one of the target sections' content is
      // actually near the exact vertical center of the viewport.
      const nearestDistance = getNearestDistance();

      setShowFooter(nearestDistance <= CLOSE_THRESHOLD_PX);
    };

    let scrollTimeout: number | undefined;

    const handleScroll = () => {
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }

      // While scrolling, only hide the footer if we've actually moved past
      // the "centered content" zone; if we're still near the vertical center,
      // keep the footer visible.
      const nearestDistance = getNearestDistance();
      if (nearestDistance > CLOSE_THRESHOLD_PX) {
        setShowFooter(false);
      }

      // Wait for ~10ms after scroll stops before recomputing visibility
      scrollTimeout = window.setTimeout(() => {
        computeVisibility();
      }, 10);
    };

    const handleResize = () => {
      computeVisibility();
    };

    // Initial check on mount
    computeVisibility();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }
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
              <StyledTitle>Technical Lead | Full-Stack Engineer</StyledTitle>
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
                I am a full-stack engineer and technical lead with 13+ years
                of experience building web applications — from early startup
                sites to high-traffic marketplaces. Most recently at Angi, I
                shipped a sponsored placement solution contributing €4M+ in
                revenue, pairing feature development with experimentation
                rigor. At HomeStars, I grew from Software Engineer to
                Technical Lead over 7+ years, owning team delivery while
                staying hands-on across APIs, performance, accessibility, and
                security. I’m especially excited about AI-driven and
                audio-first products.
              </StyledText>

              <StyledSeparator aria-hidden />

              <StyledTechLabel>
                <strong>A few technologies I’m most comfortable with:</strong>
              </StyledTechLabel>
              <StyledTechGridWrapper>
                <StyledTechGrid>
                  <StyledTechItem>JavaScript (ES6+)</StyledTechItem>
                  <StyledTechItem>HTML5</StyledTechItem>
                  <StyledTechItem>CSS3</StyledTechItem>
                </StyledTechGrid>
                <StyledTechGrid>
                  <StyledTechItem>React</StyledTechItem>
                  <StyledTechItem>Express.js</StyledTechItem>
                  <StyledTechItem>Node.js</StyledTechItem>
                </StyledTechGrid>
                <StyledTechGrid>
                  <StyledTechItem>Next.js</StyledTechItem>
                  <StyledTechItem>Vite</StyledTechItem>
                  <StyledTechItem>Vercel</StyledTechItem>
                </StyledTechGrid>
              </StyledTechGridWrapper>
            </StyledSection>
          </ScrollSection>

          <ScrollSection sectionId="featured-project">
            <StyledSection>
              <StyledHeading>Featured Projects</StyledHeading>
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
                      JCarousel JavaScript Carousel Library
                    </StyledCardTitle>
                    <StyledCardText>
                      A JavaScript carousel library that calculates the
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
                    aria-label="Audio BPM Detector – view live demo"
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
                    aria-label="Audio BPM Detector source code on GitHub"
                  >
                    <FaGithub size={14} aria-hidden /> View source
                  </StyledCardSourceLink>
                </StyledCard>
              </StyledCardsContainer>
            </StyledSection>
          </ScrollSection>

          <ScrollSection sectionId="experience">
            <StyledSection>
              <StyledHeading>Experience</StyledHeading>
              <StyledText>
                <strong>Software Engineer II — Angi</strong> · Oct
                2025–Present · Toronto
              </StyledText>
              <StyledList>
                <li>
                  Shipped a premium sponsored placement solution for Instapro,
                  contributing €4M+ in revenue; designed LaunchDarkly
                  experiments and built Redshift dashboards from Snowplow data
                  to guide product decisions.
                </li>
              </StyledList>
              <StyledText>
                <strong>Technical Lead — HomeStars</strong> · Jun
                2024–Oct 2025 · Toronto
              </StyledText>
              <StyledList>
                <li>
                  Owned team delivery — agile ceremonies, sprint outcomes,
                  cross-team coordination — removing blockers and shipping
                  predictably with high quality.
                </li>
              </StyledList>
              <StyledText>
                <strong>Full Stack Engineer (L3) — HomeStars</strong> ·
                Apr 2023–Jun 2024 · Toronto
              </StyledText>
              <StyledList>
                <li>
                  Optimized REST endpoints for critical conversion flows,
                  fixed security vulnerabilities, and ran A/B tests (Split)
                  with Mixpanel tracking.
                </li>
              </StyledList>
              <StyledText>
                <strong>Software Engineer — HomeStars</strong> · Jul
                2018–Apr 2023 · Toronto
              </StyledText>
              <StyledList>
                <li>
                  Built responsive, accessible, SEO-friendly UIs and supported
                  the marketing team on WordPress sites.
                </li>
              </StyledList>
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
