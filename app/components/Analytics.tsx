import Script from "next/script";

// Umami analytics (cookieless; https://umami.is). Loads only when:
//  - this is a production build, so local `npm run dev` visits aren't counted
//  - NEXT_PUBLIC_UMAMI_WEBSITE_ID is set (see .env.example)
// NEXT_PUBLIC_UMAMI_DOMAINS (optional, comma-separated) restricts tracking to
// your real domain(s), so `next start` on localhost and preview deploys stay
// out of your stats.
const WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
const SCRIPT_URL =
  process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || "https://cloud.umami.is/script.js";
const DOMAINS = process.env.NEXT_PUBLIC_UMAMI_DOMAINS;

export default function Analytics() {
  if (process.env.NODE_ENV !== "production" || !WEBSITE_ID) return null;

  return (
    <Script
      src={SCRIPT_URL}
      data-website-id={WEBSITE_ID}
      {...(DOMAINS ? { "data-domains": DOMAINS } : {})}
      // Respect visitors whose browser sends Do Not Track.
      data-do-not-track="true"
      strategy="afterInteractive"
    />
  );
}
