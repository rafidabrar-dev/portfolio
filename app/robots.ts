import type { MetadataRoute } from 'next';
import { site } from './data';

// Everything is public and crawlable. The named groups are redundant with "*" but make the intent explicit
// for search and AI crawlers. Remove a name to opt that crawler out.
const aiCrawlers = [
  // OpenAI
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  // Anthropic
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai',
  // Google and Apple (AI features and Gemini)
  'Google-Extended', 'Applebot', 'Applebot-Extended',
  // Perplexity, Mistral, Cohere, Meta, Amazon, DuckDuckGo, Common Crawl, others
  'PerplexityBot', 'Perplexity-User', 'MistralAI-User', 'cohere-ai', 'Meta-ExternalAgent', 'meta-externalfetcher',
  'Amazonbot', 'Amzn-User', 'DuckAssistBot', 'CCBot', 'Diffbot', 'YouBot', 'Bytespider',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: aiCrawlers, allow: '/' },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
