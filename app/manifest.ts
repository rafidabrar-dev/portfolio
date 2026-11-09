import type { MetadataRoute } from 'next';
import { site } from './data';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: site.name,
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#f6efd9',
    theme_color: '#f6efd9',
    icons: [
      { src: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
