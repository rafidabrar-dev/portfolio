# Rafid Abrar, portfolio

Next.js (App Router) site, fully static, built for Vercel.

## Structure

```
app/
  layout.tsx        fonts (next/font), metadata, sidebar + mobile pill
  page.tsx          every section, server-rendered
  data.ts           ALL content: edit this file to change text, roles, projects, CV link
  globals.css       design tokens + styles (cream and yellow, rounded)
  components/       Nav, Timeline, CvButton, Icon, ActiveNav (the only client component)
  robots.ts, sitemap.ts, icon.svg, not-found.tsx
public/
  rafid_hero.webp   hero photograph (optimised on the fly by next/image)
  og.jpg            1200x630 social preview
legacy-static/      the earlier plain HTML version, kept for reference, not deployed
```

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Before going live

- **CV:** put the PDF in `public/` and set `cvUrl` in `app/data.ts` (for example `'/Rafid-Abrar-CV.pdf'`). Until then the button is inert.
- **Projects:** replace the sample entries in `app/data.ts` (`projects.items`).
- **Domain:** set `NEXT_PUBLIC_SITE_URL` in Vercel (for canonical, sitemap and social links). On Vercel it falls back to the production URL automatically.

## Deploy

Import the repository in Vercel. No settings are needed: framework Next.js, build `next build`.
