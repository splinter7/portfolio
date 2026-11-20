"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight, FiGlobe } from "react-icons/fi";
import ProjectCover from "./projectCovers";
import { trackEvent } from "./trackEvent";
import type { ProjectMeta } from "../projects/content";
import {
  StyledProjectSpread,
  StyledSpreadCover,
  StyledSpreadStack,
  StyledSpreadTitle,
  StyledSpreadSummary,
  StyledSpreadActions,
  StyledSpreadLink,
  StyledIconLinks,
} from "./styled/PageStyles";

type Props = {
  project: ProjectMeta;
  /** Put the cover on the right (alternate rows). */
  flip?: boolean;
};

// One featured project: cover beside stack, title, summary and links.
// With a case study, the cover and title open it; without one (a draft in
// production), they open the live site or the repo instead.
export default function ProjectSpread({ project, flip = false }: Props) {
  const { slug, title, summary, stack, source, live, hasCaseStudy } = project;
  const caseHref = `/projects/${slug}`;
  const external = live ?? source;

  const linkProps = hasCaseStudy
    ? { as: Link, href: caseHref }
    : { href: external, target: "_blank", rel: "noopener noreferrer" };

  // Analytics: which project, and which link on the spread was used.
  const caseEvent = (from: string) =>
    trackEvent("case-study", { project: slug, from });
  const outEvent = (location = "home") =>
    trackEvent(live ? "live-site" : "source", { project: slug, location });
  const coverEvent = hasCaseStudy ? caseEvent("cover") : outEvent();

  return (
    <StyledProjectSpread $flip={flip}>
      {/* Same destination as the title link, so it's hidden from assistive
          tech and the tab order to avoid a duplicate stop. */}
      <StyledSpreadCover
        {...linkProps}
        {...coverEvent}
        aria-hidden
        tabIndex={-1}
      >
        <ProjectCover project={project} />
      </StyledSpreadCover>

      <div>
        <StyledSpreadStack>{stack.slice(0, 3).join(" · ")}</StyledSpreadStack>
        <StyledSpreadTitle>
          {hasCaseStudy ? (
            <Link href={caseHref} {...caseEvent("title")}>
              {title}
            </Link>
          ) : (
            <a
              href={external}
              target="_blank"
              rel="noopener noreferrer"
              {...outEvent()}
            >
              {title}
            </a>
          )}
        </StyledSpreadTitle>
        <StyledSpreadSummary>{summary}</StyledSpreadSummary>
        <StyledSpreadActions>
          {hasCaseStudy && (
            <StyledSpreadLink
              as={Link}
              href={caseHref}
              aria-label={`${title}: read the case study`}
              {...caseEvent("button")}
            >
              Case study <FiArrowRight size={16} aria-hidden />
            </StyledSpreadLink>
          )}
          <StyledIconLinks>
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title}: live site`}
                title="Live site"
                {...trackEvent("live-site", { project: slug, location: "home" })}
              >
                <FiGlobe size={18} aria-hidden />
              </a>
            )}
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title}: source code on GitHub`}
              title="Source on GitHub"
              {...trackEvent("source", { project: slug, location: "home" })}
            >
              <FaGithub size={18} aria-hidden />
            </a>
          </StyledIconLinks>
        </StyledSpreadActions>
      </div>
    </StyledProjectSpread>
  );
}
