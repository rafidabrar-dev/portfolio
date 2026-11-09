import type { MetadataRoute } from 'next';
import { site } from './data';

// Search engines and AI crawlers are welcome. Remove a name from `aiBots` to opt that crawler out.
const aiBots = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: aiBots, allow: '/' },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
