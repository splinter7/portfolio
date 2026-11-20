import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyView from "./CaseStudyView";
import { getCaseStudy, getProjects } from "../content";

type Params = { params: Promise<{ slug: string }> };

// Only pre-rendered slugs exist; drafts are left out of production builds.
export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects()
    .filter((p) => p.hasCaseStudy)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} · Case study · Stewart Small`,
    description: study.summary,
    robots: study.draft ? { index: false, follow: false } : undefined,
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  // "Next" wraps around to the first published case study.
  const published = getProjects().filter((p) => p.hasCaseStudy);
  const i = published.findIndex((p) => p.slug === slug);
  const next =
    published.length > 1 ? published[(i + 1) % published.length] : null;

  return <CaseStudyView study={study} next={next} />;
}
