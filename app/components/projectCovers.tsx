"use client";

import Image, { type StaticImageData } from "next/image";
import type { ProjectMeta } from "../projects/content";
import shotJCarousel from "@/public/images/projects/jcarousel.jpg";
import shotWasps from "@/public/images/projects/react-wasps.jpg";
import shotBpm from "@/public/images/projects/audio-bpm-detector.jpg";
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
// filename). Sources live in public/images/projects: 2560×1600 (a 1280×800
// viewport at 2× density), captured from the live site. next/image serves
// each device a resized WebP/AVIF, so the large source costs nothing extra.
const SCREENSHOTS: Record<string, StaticImageData> = {
  jcarousel: shotJCarousel,
  "react-wasps": shotWasps,
  "audio-bpm-detector": shotBpm,
};

// How wide the image is drawn, so the browser picks the right file size.
// Spread: the cover column of the home page grid (~440px on desktop, full
// width when stacked). Hero: the right half of the case study's split header
// (~520px on desktop, full width once it stacks below 960px).
const SIZES = {
  spread: "(max-width: 768px) calc(100vw - 40px), (max-width: 960px) 55vw, 440px",
  hero: "(max-width: 768px) calc(100vw - 40px), (max-width: 960px) calc(100vw - 64px), 520px",
};

// "https://j-carousel.vercel.app/" -> "j-carousel.vercel.app"
const address = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

// The project in a minimal browser window. The address bar shows the live
// site, or the repo when there isn't one. The view shows, in order of
// preference: a screenshot, the project's coverCode excerpt, its title.
type Props = {
  project: ProjectMeta;
  /** "hero" (case study page header): the screenshot preloads and loads
   *  eagerly as the page's main image. Every cover is 16:10. */
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
      <StyledBrowserView>
        {shot ? (
          <Image
            src={shot}
            alt={`Screenshot of ${title}`}
            fill
            sizes={SIZES[variant]}
            quality={85}
            placeholder="blur"
            // The case study hero is the page's main image: preload it and
            // load it immediately. Home page spreads lazy-load as you scroll.
            preload={variant === "hero"}
            loading={variant === "hero" ? "eager" : "lazy"}
            fetchPriority={variant === "hero" ? "high" : "auto"}
          />
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
