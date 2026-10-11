// Shared section-navigation logic. The nav bar and the hero scroll cue both
// use this, so every entry point lands on exactly the same scroll position.

// Sections that always scroll to the top (below the nav): centering math can
// target a position past the page's max scroll, and the browser clamps it —
// leaving the scrollspy highlighting the wrong section.
const TOP_ALIGNED_SECTIONS = new Set([
  "featured-project",
  "experience",
  "about",
]);

// Helper function to calculate scroll position for a section
const calculateScrollPosition = (
  sectionId: string,
  element: HTMLElement,
): number => {
  const rect = element.getBoundingClientRect();
  const navElement = document.querySelector("nav");
  const navHeight = navElement ? navElement.getBoundingClientRect().height : 80;

  if (TOP_ALIGNED_SECTIONS.has(sectionId)) {
    // Scroll so the section's eyebrow kicker (the small mono words above the
    // title) lands below the nav — it counts as the top of the section, so
    // the nav must not cover it. Falls back to the h2, then the section top.
    const BUFFER_PX = 24;
    const heading =
      element.querySelector("[data-eyebrow]") || element.querySelector("h2");
    const scrollPosition = heading
      ? heading.getBoundingClientRect().top +
        window.scrollY -
        navHeight -
        BUFFER_PX
      : rect.top + window.scrollY - navHeight - BUFFER_PX;
    return scrollPosition;
  }
  // Other sections: center the section in the viewport
  return rect.top + window.scrollY - window.innerHeight / 2 + rect.height / 2;
};

export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (!element) return;
  window.dispatchEvent(
    new CustomEvent("navigation-start", { detail: { sectionId } }),
  );
  const scrollPosition = calculateScrollPosition(sectionId, element);
  // Use instant scroll only for sections that are using a scroll-to-top
  // layout (matching calculateScrollPosition)
  const useInstantScroll = TOP_ALIGNED_SECTIONS.has(sectionId);
  window.scrollTo({
    top: scrollPosition,
    behavior: useInstantScroll ? "auto" : "smooth",
  });
};
