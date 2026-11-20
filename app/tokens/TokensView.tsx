"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import styled from "styled-components";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { media } from "../styles/media";
import ProjectSpread from "../components/ProjectSpread";
import type { ProjectMeta } from "../projects/content";
import {
  StyledMain,
  StyledSection,
  StyledHeading,
  StyledSectionBody,
  StyledHeroLink,
  StyledFooterLink,
  StyledNavLink,
} from "../components/styled/PageStyles";

// Real project data so the specimen shows real cover art; links resolve to
// the actual case study and sites.
const SAMPLE_PROJECT: ProjectMeta = {
  slug: "audio-bpm-detector",
  title: "Audio BPM Detector",
  summary: "A beat detection app that analyzes audio files and outputs BPM.",
  order: 1,
  stack: ["JavaScript", "Web Audio API", "Vite"],
  source: "https://github.com/splinter7/frontend-audio-processor",
  live: "https://frontend-audio-processor.vercel.app/",
  draft: true,
  hasCaseStudy: true,
};

/* ------------------------------ token reading ------------------------------ */

type Tokens = Map<string, string>;

// Reads every custom property declared on :root or body in the page's
// stylesheets (GlobalStyles injects them there), so this page always shows
// the live values and never needs updating when a token changes.
function readTokens(): Tokens {
  const out: Tokens = new Map();
  for (const sheet of Array.from(document.styleSheets)) {
    let rules: CSSRuleList;
    try {
      rules = sheet.cssRules;
    } catch {
      continue; // cross-origin sheet
    }
    for (const rule of Array.from(rules)) {
      if (
        !(rule instanceof CSSStyleRule) ||
        (rule.selectorText !== ":root" && rule.selectorText !== "body")
      )
        continue;
      for (let i = 0; i < rule.style.length; i++) {
        const prop = rule.style[i];
        if (prop.startsWith("--")) {
          out.set(prop, rule.style.getPropertyValue(prop).trim());
        }
      }
    }
  }
  return out;
}

const EMPTY: Tokens = new Map();
let cache: Tokens | null = null;
const subscribe = () => () => {};
const getSnapshot = () => (cache ??= readTokens());
const getServerSnapshot = () => EMPTY;

/* --------------------------------- grouping -------------------------------- */

type Group = {
  title: string;
  note?: string;
  match: (name: string) => boolean;
  render: (entries: [string, string][]) => ReactNode;
};

/* -------------------------------- contrast --------------------------------- */

const hexToRgb = (v: string): [number, number, number] | null => {
  const m = v.match(/^#([0-9a-f]{6})$/i);
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const luminance = ([r, g, b]: [number, number, number]) => {
  const f = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};

const contrastOn = (fg: string, bg: string): string | null => {
  const a = hexToRgb(fg);
  const b = hexToRgb(bg);
  if (!a || !b) return null;
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  const ratio = (hi + 0.05) / (lo + 0.05);
  const grade = ratio >= 7 ? "AAA" : ratio >= 4.5 ? "AA" : ratio >= 3 ? "AA large" : "fails";
  return `${ratio.toFixed(1)}:1 on paper · ${grade}`;
};

// Only these colors are used for text, so only they get a contrast reading.
const TEXT_COLORS = new Set([
  "--color-ink",
  "--color-body",
  "--color-muted",
  "--color-accent",
]);

/* ---------------------------------- styles --------------------------------- */

const Header = styled.header`
  padding: var(--space-9) 0 var(--space-7);

  ${media.md} {
    padding: var(--space-8) 0 var(--space-6);
  }
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;
  margin: 0 0 var(--space-4);
`;

const Lede = styled.p`
  max-width: var(--measure);
  font-size: var(--text-lg);
  color: var(--color-body);
  margin: 0;

  a {
    color: var(--color-ink);
  }

  code {
    font-family: var(--font-mono);
    font-size: 0.875em;
  }
`;

const Name = styled.code`
  display: block;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-ink);
`;

const Value = styled.code`
  display: block;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-muted);
  word-break: break-word;
`;

const Swatches = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: var(--space-5);
`;

const Swatch = styled.li`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const Chip = styled.span`
  display: block;
  height: 72px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-hairline);
  margin-bottom: var(--space-1);
`;

const Rows = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const Row = styled.li`
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  align-items: center;
  gap: var(--space-5);
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--color-hairline);

  &:first-child {
    padding-top: 0;
  }

  ${media.md} {
    grid-template-columns: 1fr;
    gap: var(--space-2);
  }
`;

const Sample = styled.div`
  min-width: 0;
  color: var(--color-ink);
  overflow-wrap: anywhere;
`;

const Bar = styled.span`
  display: block;
  height: 12px;
  background: var(--color-ink);
  border-radius: 0;
`;

const RadiusBox = styled.span`
  display: block;
  width: 72px;
  height: 72px;
  background: var(--color-surface);
  border: 1px solid var(--color-hairline-strong);
`;

const MotionTrack = styled.div`
  position: relative;
  height: 32px;
  border-radius: var(--radius-pill);
  background: var(--color-paper-deep);

  span {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 16px;
    height: 16px;
    border-radius: var(--radius-pill);
    background: var(--color-ink);
  }

  &:hover span {
    left: calc(100% - 24px);
  }
`;

const Specimens = styled.div`
  display: grid;
  gap: var(--space-7);
`;

const Specimen = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
`;

const SpecimenLabel = styled.p`
  width: 100%;
  margin: 0 0 var(--space-1);
  font-size: var(--text-sm);
  color: var(--color-muted);
`;

const SpreadWrap = styled.div`
  width: 100%;
`;

/* -------------------------------- renderers -------------------------------- */

const meta = (name: string, value: string, extra?: string | null) => (
  <>
    <Name>{name}</Name>
    <Value>{value}</Value>
    {extra && <Value>{extra}</Value>}
  </>
);

const GROUPS: Group[] = [
  {
    title: "Color",
    note: "Text colors show their contrast against --color-paper.",
    match: (n) => n.startsWith("--color-"),
    render: (entries) => {
      const paper = entries.find(([n]) => n === "--color-paper")?.[1] ?? "";
      return (
        <Swatches>
          {entries.map(([name, value]) => (
            <Swatch key={name}>
              <Chip style={{ background: `var(${name})` }} />
              {meta(
                name,
                value,
                TEXT_COLORS.has(name) ? contrastOn(value, paper) : null,
              )}
            </Swatch>
          ))}
        </Swatches>
      );
    },
  },
  {
    title: "Font families",
    match: (n) =>
      n === "--font-display" || n === "--font-sans" || n === "--font-mono",
    render: (entries) => (
      <Rows>
        {entries.map(([name, value]) => (
          <Row key={name}>
            <div>{meta(name, value.split(",")[0])}</div>
            <Sample style={{ fontFamily: `var(${name})`, fontSize: "1.75rem" }}>
              Technical Lead · 0123456789
            </Sample>
          </Row>
        ))}
      </Rows>
    ),
  },
  {
    title: "Type scale",
    match: (n) => n.startsWith("--text-"),
    render: (entries) => (
      <Rows>
        {entries.map(([name, value]) => (
          <Row key={name}>
            <div>{meta(name, value)}</div>
            <Sample
              style={{
                fontSize: `var(${name})`,
                lineHeight: 1.15,
                fontFamily:
                  name === "--text-display" || name === "--text-2xl"
                    ? "var(--font-display)"
                    : undefined,
                fontWeight:
                  name === "--text-display" || name === "--text-2xl" ? 700 : 400,
              }}
            >
              Stewart Small
            </Sample>
          </Row>
        ))}
      </Rows>
    ),
  },
  {
    title: "Rhythm",
    match: (n) => n.startsWith("--leading-") || n === "--measure",
    render: (entries) => (
      <Rows>
        {entries.map(([name, value]) => (
          <Row key={name}>
            <div>{meta(name, value)}</div>
            <Sample
              style={
                name === "--measure"
                  ? { maxWidth: `var(${name})`, color: "var(--color-body)" }
                  : { lineHeight: `var(${name})`, color: "var(--color-body)" }
              }
            >
              I build fast, accessible, high-quality web experiences, with a
              particular focus on audio and UX polish. This line wraps so the
              rhythm is visible.
            </Sample>
          </Row>
        ))}
      </Rows>
    ),
  },
  {
    title: "Spacing",
    match: (n) => n.startsWith("--space-"),
    render: (entries) => (
      <Rows>
        {entries.map(([name, value]) => (
          <Row key={name}>
            <div>{meta(name, value)}</div>
            <Sample>
              <Bar style={{ width: `var(${name})` }} />
            </Sample>
          </Row>
        ))}
      </Rows>
    ),
  },
  {
    title: "Radius",
    match: (n) => n.startsWith("--radius-"),
    render: (entries) => (
      <Swatches>
        {entries.map(([name, value]) => (
          <Swatch key={name}>
            <RadiusBox style={{ borderRadius: `var(${name})` }} />
            {meta(name, value)}
          </Swatch>
        ))}
      </Swatches>
    ),
  },
  {
    title: "Layout",
    note: "Gutter and nav height shrink below 768px.",
    match: (n) => n === "--container" || n === "--gutter" || n === "--nav-h",
    render: (entries) => (
      <Rows>
        {entries.map(([name, value]) => (
          <Row key={name}>
            <div>{meta(name, value)}</div>
            <Sample>
              <Bar style={{ width: `min(100%, var(${name}))` }} />
            </Sample>
          </Row>
        ))}
        {Object.entries(media).map(([key, query]) => (
          <Row key={key}>
            <div>{meta(`media.${key}`, "app/styles/media.ts")}</div>
            <Sample>
              <Value>{query}</Value>
            </Sample>
          </Row>
        ))}
      </Rows>
    ),
  },
  {
    title: "Motion",
    note: "Hover a track to play the duration with the default ease.",
    match: (n) => n.startsWith("--ease-") || n.startsWith("--dur-"),
    render: (entries) => (
      <Rows>
        {entries.map(([name, value]) => (
          <Row key={name}>
            <div>{meta(name, value)}</div>
            <Sample>
              <MotionTrack>
                <span
                  style={{
                    transition: name.startsWith("--dur-")
                      ? `left var(${name}) var(--ease-out)`
                      : `left 600ms var(${name})`,
                  }}
                />
              </MotionTrack>
            </Sample>
          </Row>
        ))}
      </Rows>
    ),
  },
];

/* ---------------------------------- page ----------------------------------- */

export default function TokensView() {
  const tokens = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const all = Array.from(tokens.entries());
  const claimed = new Set<string>();

  const sections = GROUPS.map((group) => {
    const entries = all.filter(([n]) => group.match(n));
    entries.forEach(([n]) => claimed.add(n));
    return { group, entries };
  });
  const other = all.filter(([n]) => !claimed.has(n));

  return (
    <StyledMain>
      <Header>
        <Title>Design tokens</Title>
        <Lede>
          Live values from <code>app/styles/GlobalStyles.ts</code>, with the
          rules in <code>DESIGN.md</code>. This page only exists in
          development. <a href="/">Back to the site</a>
        </Lede>
      </Header>

      {sections.map(({ group, entries }) =>
        entries.length === 0 ? null : (
          <StyledSection key={group.title}>
            <StyledHeading>{group.title}</StyledHeading>
            <StyledSectionBody>
              {group.note && (
                <SpecimenLabel style={{ marginBottom: "var(--space-5)" }}>
                  {group.note}
                </SpecimenLabel>
              )}
              {group.render(entries)}
            </StyledSectionBody>
          </StyledSection>
        ),
      )}

      {other.length > 0 && (
        <StyledSection>
          <StyledHeading>Other</StyledHeading>
          <StyledSectionBody>
            <Rows>
              {other.map(([name, value]) => (
                <Row key={name}>
                  <div>{meta(name, value)}</div>
                </Row>
              ))}
            </Rows>
          </StyledSectionBody>
        </StyledSection>
      )}

      <StyledSection>
        <StyledHeading>Components</StyledHeading>
        <StyledSectionBody>
          <Specimens>
            <Specimen>
              <SpecimenLabel>Pill link button (hover for border)</SpecimenLabel>
              <StyledHeroLink href="#components">
                <FaGithub size={16} aria-hidden /> GitHub
              </StyledHeroLink>
              <StyledHeroLink href="#components">
                <FaEnvelope size={16} aria-hidden /> Email
              </StyledHeroLink>
            </Specimen>

            <Specimen>
              <SpecimenLabel>Icon button</SpecimenLabel>
              <StyledFooterLink href="#components" aria-label="GitHub">
                <FaGithub size={18} aria-hidden />
              </StyledFooterLink>
              <StyledFooterLink href="#components" aria-label="Email">
                <FaEnvelope size={18} aria-hidden />
              </StyledFooterLink>
            </Specimen>

            <Specimen>
              <SpecimenLabel>Nav links: active, rest, external</SpecimenLabel>
              <StyledNavLink href="#components" $isActive>
                About
              </StyledNavLink>
              <StyledNavLink href="#components" $isActive={false}>
                Projects
              </StyledNavLink>
              <StyledNavLink href="#components" $isActive={false}>
                Resume <FiArrowUpRight size={14} aria-hidden />
              </StyledNavLink>
            </Specimen>

            <Specimen>
              <SpecimenLabel>Project spread (alternates sides per row)</SpecimenLabel>
              <SpreadWrap>
                <ProjectSpread project={SAMPLE_PROJECT} />
              </SpreadWrap>
            </Specimen>
          </Specimens>
        </StyledSectionBody>
      </StyledSection>
    </StyledMain>
  );
}
