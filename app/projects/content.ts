// Server-only: reads case studies from content/projects/*.md at build time.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked } from "marked";

const DIR = path.join(process.cwd(), "content", "projects");
const IS_PROD = process.env.NODE_ENV === "production";

/** Code shown in the cover's browser frame when there's no screenshot. */
export type CoverCode = {
  file: string;
  lines: string[];
  /** Zero-based line numbers to highlight. */
  highlight: number[];
};

export type ProjectMeta = {
  slug: string;
  title: string;
  /** One or two sentences: the card description and the case study lede. */
  summary: string;
  order: number;
  stack: string[];
  source: string;
  live?: string;
  year?: string;
  role?: string;
  coverCode?: CoverCode;
  draft: boolean;
  /** False for drafts in production: the card links out instead. */
  hasCaseStudy: boolean;
};

export type CaseStudy = ProjectMeta & {
  html: string;
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Headings get ids so sections can be linked to directly.
const markdown = new Marked({
  renderer: {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      return `<h${depth} id="${slugify(text)}">${text}</h${depth}>\n`;
    },
  },
});

function fail(file: string, message: string): never {
  throw new Error(`content/projects/${file}: ${message}`);
}

function parseFile(file: string): { meta: ProjectMeta; body: string } {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);
  const slug = file.replace(/\.md$/, "");

  for (const key of ["title", "summary", "source"] as const) {
    if (typeof data[key] !== "string" || !data[key].trim()) {
      fail(file, `front matter needs a "${key}"`);
    }
  }
  if (!Array.isArray(data.stack)) fail(file, `"stack" must be a list`);

  let coverCode: CoverCode | undefined;
  if (data.coverCode != null) {
    const c = data.coverCode;
    if (typeof c.file !== "string" || typeof c.code !== "string") {
      fail(file, `"coverCode" needs "file" and "code"`);
    }
    coverCode = {
      file: c.file,
      lines: c.code.replace(/\n+$/, "").split("\n"),
      highlight: Array.isArray(c.highlight)
        ? c.highlight.map((n: unknown) => Number(n) - 1)
        : [],
    };
  }

  const draft = data.draft === true;
  return {
    meta: {
      slug,
      title: data.title,
      summary: data.summary,
      order: typeof data.order === "number" ? data.order : 99,
      stack: data.stack.map(String),
      source: data.source,
      live: data.live || undefined,
      year: data.year != null ? String(data.year) : undefined,
      role: data.role || undefined,
      coverCode,
      draft,
      hasCaseStudy: !(draft && IS_PROD),
    },
    body: content,
  };
}

// Files starting with "_" (like _template.md) are ignored.
const files = () =>
  fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"));

export function getProjects(): ProjectMeta[] {
  return files()
    .map((f) => parseFile(f).meta)
    .sort((a, b) => a.order - b.order);
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const file = `${slug}.md`;
  if (!files().includes(file)) return null;
  const { meta, body } = parseFile(file);
  if (!meta.hasCaseStudy) return null;
  return { ...meta, html: markdown.parse(body) as string };
}
