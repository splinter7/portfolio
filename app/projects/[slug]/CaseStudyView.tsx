"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import ProjectCover from "../../components/projectCovers";
import SiteFooter from "../../components/SiteFooter";
import { trackEvent } from "../../components/trackEvent";
import type { CaseStudy, ProjectMeta } from "../content";
import {
  StyledMain,
  StyledNav,
  StyledNavContent,
  StyledNavLogo,
} from "../../components/styled/PageStyles";
import {
  StyledCaseHeader,
  StyledBackLink,
  StyledCaseTitle,
  StyledCaseLede,
  StyledDraftNote,
  StyledCaseCover,
  StyledCaseBody,
  StyledFacts,
  StyledFactStack,
  StyledFactLinks,
  StyledProse,
  StyledNextProject,
} from "../../components/styled/CaseStudyStyles";

type Props = {
  study: CaseStudy;
  next: ProjectMeta | null;
};

export default function CaseStudyView({ study, next }: Props) {
  const { slug, title, summary, stack, source, live, year, role, draft, html } =
    study;

  return (
    <>
      <StyledNav $scrolled>
        <StyledNavContent>
          <StyledNavLogo as={Link} href="/" aria-label="Home">
            S.
          </StyledNavLogo>
        </StyledNavContent>
      </StyledNav>

      <StyledMain>
        <StyledCaseHeader>
          <StyledBackLink as={Link} href="/#featured-project">
            <FiArrowLeft size={16} aria-hidden /> All projects
          </StyledBackLink>
          {draft && (
            <StyledDraftNote>
              Draft: fact-check before publishing. Hidden in production until
              you remove <code>draft: true</code>.
            </StyledDraftNote>
          )}
          <StyledCaseTitle>{title}</StyledCaseTitle>
          <StyledCaseLede>{summary}</StyledCaseLede>
        </StyledCaseHeader>

        <StyledCaseCover>
          <ProjectCover project={study} variant="hero" />
        </StyledCaseCover>

        <StyledCaseBody>
          <StyledFacts>
            {role && (
              <div>
                <dt>Role</dt>
                <dd>{role}</dd>
              </div>
            )}
            {year && (
              <div>
                <dt>Year</dt>
                <dd>{year}</dd>
              </div>
            )}
            <div>
              <dt>Stack</dt>
              <dd>
                <StyledFactStack>
                  {stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </StyledFactStack>
              </dd>
            </div>
            <div>
              <dt>Links</dt>
              <StyledFactLinks>
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...trackEvent("live-site", { project: slug, location: "case-study" })}
                  >
                    <FiArrowUpRight size={16} aria-hidden /> Live site
                  </a>
                )}
                <a
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...trackEvent("source", { project: slug, location: "case-study" })}
                >
                  <FaGithub size={14} aria-hidden /> Source on GitHub
                </a>
              </StyledFactLinks>
            </div>
          </StyledFacts>

          {/* Markdown rendered at build time from content/projects/*.md
              (authored in this repo, so trusted). */}
          <StyledProse dangerouslySetInnerHTML={{ __html: html }} />
        </StyledCaseBody>

        {next && (
          <StyledNextProject
            as={Link}
            href={`/projects/${next.slug}`}
            {...trackEvent("case-study", { project: next.slug, from: "next" })}
          >
            <span>Next case study</span>
            <strong>
              {next.title} <FiArrowRight aria-hidden />
            </strong>
          </StyledNextProject>
        )}
      </StyledMain>

      <SiteFooter />
    </>
  );
}
