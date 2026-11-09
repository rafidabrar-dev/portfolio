import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google';
import { site } from './data';
import { Sidebar, Dock } from './components/Nav';
import './globals.css';

// Self-hosted at build time by next/font: no render-blocking request to Google, no layout shift.
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: '800',
  display: 'swap',
  variable: '--font-bricolage',
});
const body = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.linkedin }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: '/',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: `Portrait of ${site.name}` }],
  },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description, images: ['/og.jpg'] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#f6efd9',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Sidebar />
        <Dock />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
