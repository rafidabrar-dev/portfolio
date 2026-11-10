import { pageMarkdown } from '../llms';

export const dynamic = 'force-static';

export function GET() {
  return new Response(pageMarkdown('education'), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      Vary: 'Accept',
    },
  });
}
