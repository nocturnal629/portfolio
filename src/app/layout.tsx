import React, { Suspense } from 'react';
import './globals.css';
import { Analytics } from "@vercel/analytics/react";
import ScrollProgress from '@/components/features/ScrollProgress';
import FloatingElements from '@/components/features/FloatingElements';
import ThemeProvider from '@/components/features/ThemeProvider';
import ColorThemeProvider from '@/components/features/ColorThemeProvider';
import ColorPicker from '@/components/features/ColorPicker';
import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
};

export const metadata: Metadata = {
  title: 'Your Name - Your Job Title Portfolio',
  description: 'Your Job Title specializing in [your main technologies]. Building [type of applications] and modern web applications.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Your Name - Your Job Title Portfolio',
    description: 'Your Job Title specializing in [your main technologies]. Building [type of applications] and modern web applications.',
    url: 'https://www.yourname.dev',
    siteName: 'Your Name',
    images: [
      {
        url: 'https://www.yourname.dev/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Your Name - Your Job Title',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Your Job Title Portfolio',
    description: 'Your Job Title specializing in [your main technologies]. Building [type of applications] and modern web applications.',
    site: '@yourusername',
    creator: '@yourusername',
    images: ['https://www.yourname.dev/favicon.png'],
  },
  other: {
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <ThemeProvider />
        <Suspense fallback={null}>
          <ColorThemeProvider />
        </Suspense>
        
        <ScrollProgress />
        <FloatingElements />
        <Suspense fallback={null}>
          <ColorPicker />
        </Suspense>
        
        <main className="overflow-x-hidden relative w-full">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
