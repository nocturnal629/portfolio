import React from 'react';
import './globals.css';
import { Analytics } from "@vercel/analytics/react";
import ScrollProgress from '@/components/features/ScrollProgress';
import FloatingElements from '@/components/features/FloatingElements';
import KeyboardHint from '@/components/features/KeyboardHint';
import SecretGamingProfiles from '@/components/features/SecretGamingProfiles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'nocturnal625 - Software Developer',
  description: 'Software Developer & Automation Engineer specializing in web3 and gaming communities.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
      <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              if (localStorage.getItem('theme') === 'dark' || 
                  (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `
        }} />
      </head>

      <body>
        <ScrollProgress />
        <FloatingElements />
        <SecretGamingProfiles />
        <KeyboardHint />
        
        <main>
          {children}
          <Analytics />
        </main>

      </body>
    </html>
  );
}