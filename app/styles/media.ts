// Breakpoints can't be CSS custom properties inside @media, so they live here.
export const media = {
  /** phones and small tablets */
  md: "@media (max-width: 768px)",
  /** two-column section layout collapses below this */
  lg: "@media (max-width: 960px)",
  /** devices with a real pointer; avoids sticky :hover on touch */
  hover: "@media (hover: hover)",
} as const;
