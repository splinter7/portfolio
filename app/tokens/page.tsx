import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TokensView from "./TokensView";

export const metadata: Metadata = {
  title: "Design tokens",
  robots: { index: false, follow: false },
};

// Development-only reference for the design system. Production builds
// render a 404 for this route.
export default function TokensPage() {
  if (process.env.NODE_ENV === "production") notFound();
  return <TokensView />;
}
