import type { MetadataRoute } from 'next';
import { olympiad, site } from './data';

// Only indexable HTML pages. lastModified is the content date in app/data.ts, not the deploy time.
// The home page also declares the BTV video, so search engines can index it as a video result.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.updated);
  const v = olympiad.press.video;
  return [
    {
      url: site.url,
      lastModified,
      priority: 1,
      videos: [
        {
          title: v.titleEn,
          thumbnail_loc: `${site.url}${v.thumbnail}`,
          description: olympiad.press.body,
          player_loc: v.embedUrl,
          content_loc: v.watchUrl,
          publication_date: v.uploadDate,
          duration: 430, // 7 minutes 10 seconds
          family_friendly: 'yes',
        },
      ],
    },
    { url: `${site.url}/education`, lastModified, priority: 0.7 },
    { url: `${site.url}/contact`, lastModified, priority: 0.7 },
  ];
}
