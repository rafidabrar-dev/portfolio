import type { MetadataRoute } from 'next';
import { site } from './data';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: site.url, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/education`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${site.url}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${site.url}/llms.txt`, lastModified, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${site.url}/llms-full.txt`, lastModified, changeFrequency: 'monthly', priority: 0.3 },
  ];
}
