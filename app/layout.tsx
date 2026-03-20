import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1B3A7A',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://medguard.ie'),
  title: {
    default: 'Medguard — Professional Medical & Healthcare Supplies Ireland',
    template: '%s | Medguard',
  },
  description:
    'Trusted supplier of medical and healthcare supplies across Ireland. Over 15+ years serving hospitals, clinics and care homes. Order today, delivered tomorrow.',
  keywords: [
    'medical supplies Ireland',
    'healthcare supplies',
    'hospital equipment',
    'medical consumables',
    'diagnostics Ireland',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://medguard.ie',
    siteName: 'Medguard Healthcare',
    title: 'Medguard — Professional Medical & Healthcare Supplies Ireland',
    description:
      'Trusted supplier of medical and healthcare supplies across Ireland.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medguard — Medical & Healthcare Supplies',
    description: 'Trusted supplier serving hospitals, clinics and care homes.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://medguard.ie' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IE">
      <head>
        {/* Preconnect to Google Fonts CDN (fonts loaded via next/font, this is belt-and-braces) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  );
}
