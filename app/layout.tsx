import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { site } from './data';
import { Sidebar, Dock } from './components/Nav';
import { alternatesFor, ogImage } from './seo';
import Footer from '@/components/Footer';
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
  alternates: alternatesFor('/', '/index.md'),
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'profile',
    firstName: 'Rafid',
    lastName: 'Abrar',
    siteName: site.name,
    title: site.title,
    description: site.shareDescription,
    url: '/',
    locale: 'en_US',
    images: [ogImage],
  },
  twitter: { card: 'summary_large_image', title: site.title, description: site.shareDescription, images: [ogImage.url] },
  keywords: ['Rafid Abrar', 'finance', 'financial modeling', 'corporate finance', 'econometrics', 'financial inclusion', 'Bangladesh Economics Olympiad', 'Dhaka'],
  // Allow full-size image previews and unrestricted snippets in search and AI answers.
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  // Search Console and Bing Webmaster verification: set these in Vercel when you add the property.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : undefined,
  },
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
        <div className="shell">
          <main id="main">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
