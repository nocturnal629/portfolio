import './globals.css';
import ThemeToggle from '@/components/ThemeToggle';
import Contact from '@/components/Contact';
import { Analytics } from "@vercel/analytics/react"
import ScrollProgress from '@/components/ScrollProgress';
import FloatingElements from '@/components/FloatingElements';

export const metadata = {
  title: 'nocturnal625 - Resume',
  description: 'Software Developer & Automation Engineer specializing in web3 and gaming communities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <ScrollProgress />
        <FloatingElements />
        {/* Sidebar with Contact */}
        <aside className="w-60 min-h-screen p-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 border-r dark:border-slate-700 relative">
          {/* Add Theme Toggle at top-right of sidebar */}
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>
          <Contact />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}