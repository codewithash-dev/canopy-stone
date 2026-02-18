import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';
import SiteNav from '@/components/SiteNav';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://canopystone.co'),
  title: 'Code with Ash',
  description: 'Portfolio & Projects by Ashley Henderson',
  openGraph: {
    title: 'Code with Ash',
    description: 'Portfolio & Projects by Ashley Henderson',
    type: 'website',
    url: 'https://canopystone.co',
  },
  twitter: {
    card: 'summary',
    title: 'Code with Ash',
    description: 'Portfolio & Projects by Ashley Henderson',
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteNav />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}