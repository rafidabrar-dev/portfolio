<div align="center">

# Rafid Abrar

**Portfolio of a finance graduate and researcher in Dhaka.**
Financial modeling, corporate finance, econometric research and financial inclusion.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/new)
[![License: MIT](https://img.shields.io/badge/License-MIT-f6d84a.svg)](LICENSE)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rafid%20Abrar-0a66c2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafid-abrar/)

</div>

---

## Highlights

- **Fully static.** Every page is pre-rendered, with about 7 KB of HTML and a few KB of CSS.
- **Fast by default.** Self-hosted fonts through `next/font`, an optimised hero image through `next/image`, and one small client component.
- **Cream and yellow design.** Rounded panels, a left sidebar on desktop, a floating pill nav on mobile, and dot-and-line timelines.
- **Edit one file.** All content lives in [`app/data.ts`](app/data.ts).
- **SEO and LLM ready.** Per-page metadata and canonicals, Open Graph image, sitemap, robots (AI crawlers allowed), web manifest, JSON-LD (`Person`, `ProfilePage`, breadcrumbs), plus `/llms.txt` and `/llms-full.txt` generated from `app/data.ts`.

## Structure

```
app/
  data.ts           all content: roles, education, projects, CV link
  layout.tsx        fonts, metadata, navigation
  page.tsx          every section, server-rendered
  globals.css       design tokens and styles
  education/, contact/   separate pages
  components/       Nav, Footer, Timeline, CvButton, Icon, ActiveNav
  seo.ts, llms.ts   shared metadata helpers and the llms.txt text
  robots.ts, sitemap.ts, manifest.ts, llms.txt/, llms-full.txt/
public/             compressed photographs (WebP) and the social preview image
```

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # production build
npm start            # serve the build
```

## Before going live

| Task | Where |
| --- | --- |
| Enable the CV button | Put the PDF in `public/` and set `cvUrl` in `app/data.ts` |
| Replace the sample projects | `projects.items` in `app/data.ts` |
| Set the canonical domain | `NEXT_PUBLIC_SITE_URL` in Vercel (optional; link previews need an absolute URL, which Vercel supplies) |
| Verify Search Console and Bing | Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and `NEXT_PUBLIC_BING_SITE_VERIFICATION` in Vercel (the tags appear automatically) |
| Bump the content date | Change `site.updated` in `app/data.ts` when content changes (feeds sitemap, JSON-LD, footer) |
| Refresh the link-preview image | Run `npm run og` (writes `public/og.jpg`, 1200×630) |

## For crawlers and LLMs

- `/robots.txt` allows search and AI crawlers; `/sitemap.xml` lists the three pages.
- `/llms.txt` (index) and `/llms-full.txt` (everything) are generated from `app/data.ts`.
- Every page is also Markdown: `/index.md`, `/education.md`, `/contact.md`, or the normal URL with `Accept: text/markdown`.
- Each page links its Markdown and `llms.txt` with `<link rel="alternate">`; JSON-LD ties pages to one `Person` entity.

## Deploy

Import the repository in [Vercel](https://vercel.com/new). No configuration is needed.

## License

Released under the [MIT License](LICENSE). The photograph and personal details belong to Rafid Abrar and are not covered by the license.
