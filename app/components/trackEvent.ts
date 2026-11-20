// Umami click tracking via data attributes: spread the result onto a link
// and Umami records a named event (with properties) when it's clicked.
// Without the Umami script (development, or no website ID) the attributes
// are inert.
//
// Events used on this site:
//   resume      { location }                  Resume link in the nav
//   contact     { channel, location }         GitHub / LinkedIn / Email
//   case-study  { project, from }             opening a case study
//   live-site   { project, location }         a project's live site
//   source      { project, location }         a project's GitHub repo

type EventProps = Record<string, string>;

export function trackEvent(name: string, props: EventProps = {}) {
  const attrs: Record<string, string> = { "data-umami-event": name };
  for (const [key, value] of Object.entries(props)) {
    attrs[`data-umami-event-${key}`] = value;
  }
  return attrs;
}
