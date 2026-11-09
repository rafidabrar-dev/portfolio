import type { Metadata } from 'next';
import { site } from './data';

export const ogImage = {
  url: '/og.jpg',
  width: 1200,
  height: 630,
  type: 'image/jpeg',
  alt: `${site.name}, finance graduate and researcher in Dhaka`,
};

/** Shared metadata for inner pages: canonical, Open Graph and Twitter in one place. */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const full = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
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
