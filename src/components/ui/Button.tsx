import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary',
  className = ''
}) => {
  const baseStyles = "px-6 py-3 rounded-lg transition-colors font-medium";
  
  const variantStyles = {
    primary: "bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
    outline: "border border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900/30"
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <a 
        href={href} 
        className={styles}
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      onClick={onClick} 
      className={styles}
    >
      {children}
    </button>
  );
};

export default Button;