# AGENTS.md

## Cursor Cloud specific instructions

This is a Next.js 16 portfolio website (single-page app, no backend services or databases).

### Environment

- **Node.js** is managed via nvm at `/home/ubuntu/.nvm`. The update script sources it automatically.
- **Package manager**: npm (lockfile: `package-lock.json`).

### Running the app

- `npm run dev` — starts the Next.js dev server on port 3000 (Turbopack).
- `npm run build` — production build.
- `npm run lint` — runs ESLint. There are pre-existing warnings/errors in the codebase; these are not blocking.

### Key notes

- No `.env` files, external services, databases, or Docker are required.
- The particle animation library is vendored at `public/scripts/particleground.js`.
- All content is hardcoded in React components under `app/`.
- styled-components + Tailwind CSS are both used for styling.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
