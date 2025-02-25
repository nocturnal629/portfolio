import './globals.css';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata = {
  title: 'nocturnal625 - Resume',
  description: 'Software Developer & Automation Engineer specializing in web3 and gaming communities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased">
        <div className="fixed top-4 right-4">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}