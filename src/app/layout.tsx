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
  title: 'Aldrian A - Full Stack LLM Developer Portfolio',
  description: 'Full Stack LLM Developer specializing in Python, FastAPI, React, and TypeScript. Building scalable backend services and modern web applications.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Aldrian A - Full Stack LLM Developer Portfolio',
    description: 'Full Stack LLM Developer specializing in Python, FastAPI, React, and TypeScript. Building scalable backend services and modern web applications.',
    url: 'https://www.aldrian-a.dev',
    siteName: 'Aldrian A',
    images: [
      {
        url: 'https://www.aldrian-a.dev/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Aldrian A - Full Stack LLM Developer',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
