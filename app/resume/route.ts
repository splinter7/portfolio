import { RESUME_PDF_BASE64 } from "./resumePdf";

// Serves Steuart's resume PDF at /resume (the PDF is embedded as base64
// because binary uploads aren't available through the repo API).
export async function GET() {
  const bytes = Buffer.from(RESUME_PDF_BASE64, "base64");
  return new Response(bytes, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="stewart-small-resume.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
