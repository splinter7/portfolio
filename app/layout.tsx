import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import { GlobalStyles } from "./styles/GlobalStyles";
import Analytics from "./components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Display face, self-hosted (variable font, latin subset).
const bricolage = localFont({
  src: "./fonts/BricolageGrotesque-latin.woff2",
  variable: "--font-bricolage",
  weight: "200 800",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stewart Small - Technical Lead | Full-Stack Engineer",
  description: "Portfolio of Stewart Small - Building fast, accessible, high-quality web experiences with a focus on frontend craft, UX polish and AI-driven products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bricolage.variable} ${jetbrainsMono.variable}`}
        suppressHydrationWarning
      >
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
        <Analytics />
      </body>
    </html>
  );
}
