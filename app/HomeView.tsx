"use client";

import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import TypingMotif from "./components/TypingMotif";
import ProjectSpread from "./components/ProjectSpread";
import SiteFooter, { EMAIL, GITHUB, LINKEDIN } from "./components/SiteFooter";
import { scrollToSection } from "./components/scrollToSection";
import { trackEvent } from "./components/trackEvent";
import ScrollSection, {
  ScrollSectionProvider,
} from "./components/ScrollSection";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import type { ProjectMeta } from "./projects/content";
import {
  StyledMain,
  StyledHero,
  StyledName,
  StyledTitle,
  StyledHeroFoot,
  StyledSubtitle,
  StyledHeroLinks,
  StyledHeroLink,
  StyledScrollCue,
  StyledScrollLine,
  StyledSection,
  StyledHeading,
  StyledSectionBody,
  StyledText,
  StyledTechLabel,
  StyledTechRows,
  StyledTechRow,
  StyledProjectSpreads,
  StyledJobs,
  StyledJob,
  StyledJobRole,
  StyledJobMeta,
  StyledJobText,
} from "./components/styled/PageStyles";

const TECH_ROWS = [
  ["JavaScript (ES6+)", "HTML5", "CSS3"],
  ["React", "Express.js", "Node.js"],
  ["Next.js", "Vite", "Vercel"],
];

const JOBS = [
  {
    role: "Software Engineer II",
    company: "Angi",
    dates: "Oct 2025 – Present",
    location: "Toronto",
    text: "Shipped a premium sponsored placement solution for Instapro, contributing €4M+ in revenue; designed LaunchDarkly experiments and built Redshift dashboards from Snowplow data to guide product decisions.",
  },
  {
    role: "Technical Lead",
    company: "HomeStars",
    dates: "Jun 2024 – Oct 2025",
    location: "Toronto",
    text: "Owned team delivery (agile ceremonies, sprint outcomes, cross-team coordination), removing blockers and shipping predictably with high quality.",
  },
  {
    role: "Full Stack Engineer (L3)",
    company: "HomeStars",
    dates: "Apr 2023 – Jun 2024",
    location: "Toronto",
    text: "Optimized REST endpoints for critical conversion flows, fixed security vulnerabilities, and ran A/B tests (Split) with Mixpanel tracking.",
  },
  {
    role: "Software Engineer",
    company: "HomeStars",
    dates: "Jul 2018 – Apr 2023",
    location: "Toronto",
    text: "Built responsive, accessible, SEO-friendly UIs and supported the marketing team on WordPress sites.",
  },
];

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
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("about");
      }}
      aria-label="Scroll to about section"
      aria-hidden={dismissed}
      tabIndex={dismissed ? -1 : 0}
      $hidden={dismissed}
    >
      <StyledScrollLine aria-hidden="true" />
      <span>Scroll</span>
    </StyledScrollCue>
  );
}

export default function HomeView({ projects }: { projects: ProjectMeta[] }) {
  return (
    <>
      <Navigation />
      <ScrollSectionProvider>
        <StyledMain>
          <ScrollSection sectionId="hero">
            <StyledHero>
              <TypingMotif />
              <StyledName>Stewart Small</StyledName>
              <StyledTitle>
                Technical Lead · Frontend-Focused Full-Stack Engineer
              </StyledTitle>
              <StyledHeroFoot>
                <StyledSubtitle>
                  I build fast, accessible, high-quality web experiences, with
                  a particular focus on UX polish.
                </StyledSubtitle>
                <StyledHeroLinks>
                  <StyledHeroLink
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...trackEvent("contact", { channel: "github", location: "hero" })}
                  >
                    <FaGithub size={16} aria-hidden /> GitHub
                  </StyledHeroLink>
                  <StyledHeroLink
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...trackEvent("contact", { channel: "linkedin", location: "hero" })}
                  >
                    <FaLinkedin size={16} aria-hidden /> LinkedIn
                  </StyledHeroLink>
                  <StyledHeroLink
                    href={EMAIL}
                    {...trackEvent("contact", { channel: "email", location: "hero" })}
                  >
                    <FaEnvelope size={16} aria-hidden /> Email
                  </StyledHeroLink>
                </StyledHeroLinks>
              </StyledHeroFoot>
              <ScrollCue />
            </StyledHero>
          </ScrollSection>

          <ScrollSection sectionId="about">
            <StyledSection>
              <StyledHeading>About</StyledHeading>
              <StyledSectionBody>
                <StyledText>
                  I’m a full-stack engineer and technical lead with 13+ years of
                  experience building web applications, from early startup
                  sites to high-traffic marketplaces. My focus is the frontend:
                  turning designs into fast, accessible interfaces and caring
                  about the details that make them feel finished. Most recently at Angi, I shipped a sponsored
                  placement solution contributing €4M+ in revenue, pairing
                  feature development with experimentation rigor. At HomeStars,
                  I grew from Software Engineer to Technical Lead over 7+ years,
                  owning team delivery while staying hands-on across APIs,
                  performance, accessibility, and security. I’m especially
                  excited about AI-driven products.
                </StyledText>

                <StyledTechLabel>
                  A few technologies I’m most comfortable with:
                </StyledTechLabel>
                <StyledTechRows>
                  {TECH_ROWS.map((row) => (
                    <StyledTechRow key={row[0]}>
                      {row.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </StyledTechRow>
                  ))}
                </StyledTechRows>
              </StyledSectionBody>
            </StyledSection>
          </ScrollSection>

          <ScrollSection sectionId="featured-project">
            <StyledSection>
              <StyledHeading>Featured Projects</StyledHeading>
              <StyledSectionBody>
                <StyledProjectSpreads>
                  {projects.map((project, i) => (
                    <ProjectSpread
                      key={project.slug}
                      project={project}
                      flip={i % 2 === 1}
                    />
                  ))}
                </StyledProjectSpreads>
              </StyledSectionBody>
            </StyledSection>
          </ScrollSection>

          <ScrollSection sectionId="experience">
            <StyledSection>
              <StyledHeading>Experience</StyledHeading>
              <StyledSectionBody>
                <StyledJobs>
                  {JOBS.map((job) => (
                    <StyledJob key={`${job.role}-${job.dates}`}>
                      <StyledJobRole>
                        {job.role} <span>· {job.company}</span>
                      </StyledJobRole>
                      <StyledJobMeta>
                        {job.dates} · {job.location}
                      </StyledJobMeta>
                      <StyledJobText>{job.text}</StyledJobText>
                    </StyledJob>
                  ))}
                </StyledJobs>
              </StyledSectionBody>
            </StyledSection>
          </ScrollSection>
        </StyledMain>
      </ScrollSectionProvider>

      <SiteFooter />
    </>
  );
}
