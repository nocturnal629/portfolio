import React, { Suspense } from 'react';
import './globals.css';
import { Analytics } from "@vercel/analytics/react";
import ScrollProgress from '@/components/features/ScrollProgress';
import FloatingElements from '@/components/features/FloatingElements';
import KeyboardHint from '@/components/features/KeyboardHint';
import ThemeProvider from '@/components/features/ThemeProvider';
import ColorThemeProvider from '@/components/features/ColorThemeProvider';
import SecretGamingProfiles from '@/components/features/SecretGamingProfiles';
import ColorPicker from '@/components/features/ColorPicker';
import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
};

export const metadata: Metadata = {
  title: 'nocturnal625',
  description: 'Software Developer & Automation Engineer',
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Check for stored theme preference
                  var storedTheme = localStorage.getItem('theme');
                  
                  // Check system preference
                  var systemPrefersDark = window.matchMedia && 
                    window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  // Apply theme based on priorities:
                  // 1. Stored theme has highest priority
                  // 2. System preference if no stored theme
                  if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else if (storedTheme === 'light' || (!storedTheme && !systemPrefersDark)) {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  // Fail silently if localStorage is not available or other issues
                  console.error('Error applying theme:', e);
                }
              })();
            `
          }}
        />
      </head>
      <body className="overflow-x-hidden">
        <ThemeProvider />
        <Suspense fallback={null}>
          <ColorThemeProvider />
        </Suspense>
        
        <ScrollProgress />
        <FloatingElements />
        <SecretGamingProfiles />
        <KeyboardHint />
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