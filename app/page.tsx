"use client";

import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Reveal from "./components/Reveal";
import {
  AudioStreamingArt,
  JCarouselArt,
  WaspsArt,
  BpmArt,
  Grain,
} from "./components/Covers";
import { SHOT_JCAROUSEL, SHOT_WASPS, SHOT_BPM } from "./components/shots";
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
  StyledHeroLinks,
  StyledHeroLink,
  StyledScrollCue,
  StyledScrollLine,
  StyledSection,
  StyledEyebrow,
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
  StyledJob,
  StyledJobHeader,
  StyledList,
  StyledFooter,
  StyledFooterContent,
  StyledFooterSocialLinks,
  StyledFooterSocialLink,
  StyledFooterEmailLink,
  StyledFooterCopyright,
  StyledSeparator,
} from "./components/styled/PageStyles";

function ScrollCue() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setDismissed(window.scrollY > 140);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <StyledScrollCue
      href="#about"
      aria-label="Scroll to about section"
      aria-hidden={dismissed}
      tabIndex={dismissed ? -1 : 0}
      $hidden={dismissed}
    >
      <span>Scroll</span>
      <StyledScrollLine aria-hidden="true" />
    </StyledScrollCue>
  );
}

export default function Home() {
  return (
    <>
      <Navigation />
      <Grain />
      <ScrollSectionProvider>
        <StyledMain>
          <ScrollSection sectionId="hero">
            <StyledHero>
              <Reveal>
                <StyledName>Stewart Small</StyledName>
              </Reveal>
              <Reveal delay={90}>
                <StyledTitle>Technical Lead | Full-Stack Engineer</StyledTitle>
              </Reveal>
              <Reveal delay={180}>
                <StyledSubtitle>
                  I build fast, accessible, high-quality web experiences — with
                  a particular focus on audio, and UX polish.
                </StyledSubtitle>
              </Reveal>
              <Reveal delay={270}>
                <StyledHeroLinks>
                  <StyledHeroLink
                    href="https://github.com/splinter7"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                  >
                    <FaGithub size={16} aria-hidden /> GitHub
                  </StyledHeroLink>
                  <StyledHeroLink
                    href="https://linkedin.com/in/stewart-small-a45a91b0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                  >
                    <FaLinkedin size={16} aria-hidden /> LinkedIn
                  </StyledHeroLink>
                  <StyledHeroLink
                    href="mailto:stewart.a.small@gmail.com"
                    aria-label="Email Stewart Small"
                  >
                    <FaEnvelope size={16} aria-hidden /> Email
                  </StyledHeroLink>
                </StyledHeroLinks>
              </Reveal>
              <ScrollCue />
            </StyledHero>
          </ScrollSection>

          <ScrollSection sectionId="about">
            <StyledSection>
              <Reveal>
                <StyledEyebrow>01 · About</StyledEyebrow>
                <StyledHeading>About</StyledHeading>
              </Reveal>
              <Reveal delay={80}>
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
              </Reveal>

              <Reveal delay={140}>
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
              </Reveal>
            </StyledSection>
          </ScrollSection>

          <ScrollSection sectionId="featured-project">
            <StyledSection>
              <Reveal>
                <StyledEyebrow>02 · Projects</StyledEyebrow>
                <StyledHeading>Featured Projects</StyledHeading>
              </Reveal>
              <StyledCardsContainer>
                <Reveal style={{ height: "100%" }}>
                  <StyledCard>
                    <StyledCardDemoLink
                      href="https://github.com/splinter7/audio-streaming"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Real-Time Audio Streaming Web App – view on GitHub"
                    >
                      <span className="cover-frame cover-static">
                        <span className="cover-art">
                          <AudioStreamingArt />
                        </span>
                      </span>
                      <StyledCardTitle>
                        Real-Time Audio Streaming Web App
                      </StyledCardTitle>
                      <StyledCardText>
                        A low-latency audio streaming application built with
                        React and Node.js. Focused on resilient playback, and
                        real-time delivery using chunked audio and WebRTC.
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
                </Reveal>

                <Reveal delay={80} style={{ height: "100%" }}>
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
                      <span className="cover-frame">
                        <img
                          className="cover-shot"
                          src={SHOT_JCAROUSEL}
                          alt=""
                        />
                        <span className="cover-art">
                          <JCarouselArt />
                        </span>
                      </span>
                      <StyledCardTitle>
                        JCarousel JavaScript Carousel Library
                      </StyledCardTitle>
                      <StyledCardText>
                        A JavaScript carousel library that calculates the
                        position of the carousel items and the number of items
                        to display based on the container width.
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
                </Reveal>

                <Reveal delay={160} style={{ height: "100%" }}>
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
                      <span className="cover-frame">
                        <img className="cover-shot" src={SHOT_WASPS} alt="" />
                        <span className="cover-art">
                          <WaspsArt />
                        </span>
                      </span>
                      <StyledCardTitle>React Wasps</StyledCardTitle>
                      <StyledCardText>
                        A simple react app showcasing some animated flying
                        wasps.
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
                </Reveal>

                <Reveal delay={240} style={{ height: "100%" }}>
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
                      <span className="cover-frame">
                        <img className="cover-shot" src={SHOT_BPM} alt="" />
                        <span className="cover-art">
                          <BpmArt />
                        </span>
                      </span>
                      <StyledCardTitle>Audio BPM Detector</StyledCardTitle>
                      <StyledCardText>
                        A beat detection app that analyzes audio files and
                        outputs BPM.
                      </StyledCardText>
                      <StyledStack>
                        JavaScript · Web Audio API · Vite
                      </StyledStack>
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
                </Reveal>
              </StyledCardsContainer>
            </StyledSection>
          </ScrollSection>

          <ScrollSection sectionId="experience">
            <StyledSection>
              <Reveal>
                <StyledEyebrow>03 · Experience</StyledEyebrow>
                <StyledHeading>Experience</StyledHeading>
              </Reveal>
              <Reveal delay={80}>
                <StyledJob>
                  <StyledJobHeader>
                    <strong>Software Engineer II — Angi</strong>{" "}
                    <span>· Oct 2025–Present · Toronto</span>
                  </StyledJobHeader>
                  <StyledList>
                    <li>
                      Shipped a premium sponsored placement solution for
                      Instapro, contributing €4M+ in revenue; designed
                      LaunchDarkly experiments and built Redshift dashboards
                      from Snowplow data to guide product decisions.
                    </li>
                  </StyledList>
                </StyledJob>
                <StyledJob>
                  <StyledJobHeader>
                    <strong>Technical Lead — HomeStars</strong>{" "}
                    <span>· Jun 2024–Oct 2025 · Toronto</span>
                  </StyledJobHeader>
                  <StyledList>
                    <li>
                      Owned team delivery — agile ceremonies, sprint outcomes,
                      cross-team coordination — removing blockers and shipping
                      predictably with high quality.
                    </li>
                  </StyledList>
                </StyledJob>
                <StyledJob>
                  <StyledJobHeader>
                    <strong>Full Stack Engineer (L3) — HomeStars</strong>{" "}
                    <span>· Apr 2023–Jun 2024 · Toronto</span>
                  </StyledJobHeader>
                  <StyledList>
                    <li>
                      Optimized REST endpoints for critical conversion flows,
                      fixed security vulnerabilities, and ran A/B tests (Split)
                      with Mixpanel tracking.
                    </li>
                  </StyledList>
                </StyledJob>
                <StyledJob>
                  <StyledJobHeader>
                    <strong>Software Engineer — HomeStars</strong>{" "}
                    <span>· Jul 2018–Apr 2023 · Toronto</span>
                  </StyledJobHeader>
                  <StyledList>
                    <li>
                      Built responsive, accessible, SEO-friendly UIs and
                      supported the marketing team on WordPress sites.
                    </li>
                  </StyledList>
                </StyledJob>
              </Reveal>
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
              aria-label="GitHub profile"
            >
              <FaGithub size={18} aria-hidden />
            </StyledFooterSocialLink>
            <StyledFooterSocialLink
              href="https://linkedin.com/in/stewart-small-a45a91b0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={18} aria-hidden />
            </StyledFooterSocialLink>
            <StyledFooterEmailLink
              href="mailto:stewart.a.small@gmail.com"
              aria-label="Email Stewart Small"
            >
              <FaEnvelope size={18} aria-hidden />
            </StyledFooterEmailLink>
          </StyledFooterSocialLinks>
          <StyledFooterCopyright>
            © {new Date().getFullYear()} Stewart Small
          </StyledFooterCopyright>
        </StyledFooterContent>
      </StyledFooter>
    </>
  );
}
