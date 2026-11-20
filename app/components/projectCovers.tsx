"use client";

import type { ProjectMeta } from "../projects/content";
import { SHOT_JCAROUSEL, SHOT_WASPS, SHOT_BPM } from "./shots";
import {
  StyledBrowser,
  StyledBrowserBar,
  StyledBrowserDots,
  StyledBrowserAddress,
  StyledBrowserView,
  StyledCodeView,
  StyledCodeFile,
  StyledCodeBody,
  StyledCodeLine,
  StyledTitleView,
} from "./styled/CoverStyles";

// Screenshots of each live site, by project slug (the content/projects
// filename). 653×408 (16:10) JPEGs; see shots.ts.
const SCREENSHOTS: Record<string, string> = {
  jcarousel: SHOT_JCAROUSEL,
  "react-wasps": SHOT_WASPS,
  "audio-bpm-detector": SHOT_BPM,
};

// "https://j-carousel.vercel.app/" -> "j-carousel.vercel.app"
const address = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

// The project in a minimal browser window. The address bar shows the live
// site, or the repo when there isn't one. The view shows, in order of
// preference: a screenshot, the project's coverCode excerpt, its title.
type Props = {
  project: ProjectMeta;
  /** "hero" (case study page): a code cover takes its own height instead of
   *  16:10. Screenshots stay 16:10 everywhere. */
  variant?: "spread" | "hero";
};

export default function ProjectCover({ project, variant = "spread" }: Props) {
  const { slug, title, live, source, coverCode } = project;
  const shot = SCREENSHOTS[slug];

  return (
    <StyledBrowser>
      <StyledBrowserBar>
        <StyledBrowserDots>
          <span />
        </StyledBrowserDots>
        <StyledBrowserAddress>{address(live ?? source)}</StyledBrowserAddress>
      </StyledBrowserBar>
      <StyledBrowserView $fitContent={variant === "hero" && !shot && !!coverCode}>
        {shot ? (
          <img src={shot} alt={`Screenshot of ${title}`} />
        ) : coverCode ? (
          <StyledCodeView>
            <StyledCodeFile>{coverCode.file}</StyledCodeFile>
            <StyledCodeBody>
              {coverCode.lines.map((line, i) => (
                <StyledCodeLine
                  key={i}
                  $highlight={coverCode.highlight.includes(i)}
                  $comment={line.trimStart().startsWith("//")}
                >
                  {line || " "}
                </StyledCodeLine>
              ))}
            </StyledCodeBody>
          </StyledCodeView>
        ) : (
          <StyledTitleView>{title}</StyledTitleView>
        )}
      </StyledBrowserView>
    </StyledBrowser>
  );
}
