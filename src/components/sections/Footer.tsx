import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 text-center text-gray-800 dark:text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} komiwalnut. All rights reserved.</p>
      {/* Invisible to real visitors and skipped by screen readers; only a bot
          that blindly crawls every <a href> will ever request this. Middleware
          logs any hit as a honeypot trap. */}
      <a
        href="/staff-portal/login"
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
        rel="nofollow"
      >
        Staff Portal Login
      </a>
    </footer>
  );
};

export default Footer;