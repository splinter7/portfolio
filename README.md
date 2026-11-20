This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Analytics (Umami)

The site uses [Umami](https://umami.is), a cookieless analytics tool. It only
loads in production builds, and only when a website ID is configured, so
local development visits are never counted.

1. Create a free Umami Cloud account and add your site to get its **Website ID**.
2. In your hosting provider's environment settings, set
   `NEXT_PUBLIC_UMAMI_WEBSITE_ID` (and optionally `NEXT_PUBLIC_UMAMI_DOMAINS`
   to your domain). See [.env.example](.env.example) for all options.
3. Redeploy. Page views are tracked automatically, including navigation
   between pages.

Clicks are tracked as named events in [app/components/trackEvent.ts](app/components/trackEvent.ts):
`resume`, `contact` (GitHub / LinkedIn / Email, in the hero or footer),
`case-study` (which project, opened from the title, button, cover or "next"
link), `live-site` and `source`. To track another link, spread
`trackEvent("name", { key: "value" })` onto it.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
