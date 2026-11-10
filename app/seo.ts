import type { Metadata } from 'next';
import { site } from './data';

export const ogImage = {
  url: '/og.jpg',
  width: 1200,
  height: 630,
  type: 'image/jpeg',
  alt: `${site.name}, finance graduate and researcher in Dhaka`,
};

// Stable entity ids, so every page's structured data points at the same Person and WebSite.
export const ids = {
  person: `${site.url}/#person`,
  website: `${site.url}/#website`,
};

/** <link rel="alternate"> targets: this page as Markdown, and the site-wide llms.txt. Helps LLM agents discover them. */
export function alternatesFor(path: string, markdownPath: string): NonNullable<Metadata['alternates']> {
  return {
    canonical: path,
    types: {
      'text/markdown': markdownPath,
      'text/plain': [{ url: '/llms.txt', title: 'llms.txt' }],
    },
  };
}

/** Shared metadata for inner pages: canonical, alternates, Open Graph and Twitter in one place. */
export function pageMetadata({
  title,
  description,
  path,
  markdownPath,
  absoluteTitle,
}: {
  title: string;
  description: string;
  path: string;
  markdownPath: string;
  absoluteTitle?: boolean;
}): Metadata {
  const full = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: alternatesFor(path, markdownPath),
    openGraph: {
      type: 'website',
      siteName: site.name,
      title: full,
      description,
      url: path,
      locale: 'en_US',
      images: [ogImage],
    },
    twitter: { card: 'summary_large_image', title: full, description, images: [ogImage.url] },
  };
}

/** schema.org BreadcrumbList for an inner page. */
export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '' }, ...trail].map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.path}`,
    })),
  };
}

/** schema.org WebPage (or a subtype) tied to the shared Person and WebSite entities, with a real modified date. */
export function webPageLd({ type, name, path, description }: { type: 'WebPage' | 'AboutPage' | 'ContactPage'; name: string; path: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${site.url}${path}#webpage`,
    url: `${site.url}${path}`,
    name,
    description,
    inLanguage: 'en',
    dateModified: site.updated,
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.person },
    primaryImageOfPage: { '@type': 'ImageObject', url: `${site.url}${ogImage.url}`, width: ogImage.width, height: ogImage.height },
  };
}
