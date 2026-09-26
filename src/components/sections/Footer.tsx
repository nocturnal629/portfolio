import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 text-center text-gray-800 dark:text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;