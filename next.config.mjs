/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    // Long cache for optimised images; the hero is a fixed asset.
    minimumCacheTTL: 31536000,
  },

  // Browsers ask for /favicon.ico by default; serve the one from the pack.
  async rewrites() {
    return [{ source: '/favicon.ico', destination: '/favicon/favicon.ico' }];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Link', value: '</llms.txt>; rel="llms-txt", </llms-full.txt>; rel="llms-full-txt"' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Content-Security-Policy', value: "frame-ancestors 'none'" },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // Static files in /public that never change name: cache hard at the edge and the browser.
        source: '/rafid_hero.webp',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/og.jpg',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400' }],
      },
    ];
  },
};

export default nextConfig;
