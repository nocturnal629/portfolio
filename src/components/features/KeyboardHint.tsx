'use client';
import React from 'react';

const KeyboardHint: React.FC = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) return null;
  
  return (
    <div className="fixed bottom-2 right-2 opacity-30 hover:opacity-30 transition-opacity duration-300 text-xs text-gray-500 dark:text-gray-400 pointer-events-none z-50">
      <span className="tracking-widest font-mono">k-o-m-i-w-a-l-n-u-t</span>
    </div>
  );
};

export default KeyboardHint;