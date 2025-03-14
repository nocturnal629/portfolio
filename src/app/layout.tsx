import React from 'react';
import './globals.css';
import { Analytics } from "@vercel/analytics/react";
import ScrollProgress from '@/components/features/ScrollProgress';
import FloatingElements from '@/components/features/FloatingElements';
import KeyboardHint from '@/components/features/KeyboardHint';
import ThemeProvider from '@/components/features/ThemeProvider';
import SecretGamingProfiles from '@/components/features/SecretGamingProfiles';
import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
};

export const metadata: Metadata = {
  title: 'nocturnal625',
  description: 'Software Developer & Automation Engineer specializing in web3, Python automation, and gaming communities.',
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden">
        <ThemeProvider />
        
        <ScrollProgress />
        <FloatingElements />
        <SecretGamingProfiles />
        <KeyboardHint />
        
        <main className="overflow-x-hidden relative w-full">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}