import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { NavItem } from '@/types';

interface HeroProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const navItems: NavItem[] = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' }
];

const Hero: React.FC<HeroProps> = ({ activeSection, onSectionChange }) => {
  return (
    <section id="home" className="flex items-center justify-center min-h-screen">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 group relative tracking-wider">
          nocturnal625
          <span className="absolute opacity-0 group-hover:opacity-25 transition-opacity duration-800 delay-1000 text-xs whitespace-nowrap left-full ml-2 bottom-1/2 transform translate-y-1/2 text-teal-600 dark:text-teal-400 normal-case">
            [type: nocturnal625]
          </span>
        </h1>
        <p className="text-xl mb-4 text-gray-800 dark:text-gray-200">Software Developer & Automation Engineer</p>
        <p className="mb-8 text-gray-600 dark:text-gray-400">Metropolitan Manila, Philippines</p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <Link 
            href="https://github.com/nocturnal625" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
          >
            <FaGithub className="h-8 w-8" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link 
            href="" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-teal-600 dark:text-blue-400 dark:hover:text-teal-400 transition-colors"
          >
            <FaLinkedin className="h-8 w-8" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link 
            href="https://x.com/nocturnal625" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-teal-600 dark:text-blue-400 dark:hover:text-teal-400 transition-colors"
          >
            <FaTwitter className="h-8 w-8" />
            <span className="sr-only">X</span>
          </Link>
          <Link 
            href="https://discordlookup.com/user/904940122468909138" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-teal-600 dark:text-blue-400 dark:hover:text-teal-400 transition-colors"
          >
            <FaDiscord className="h-8 w-8" />
            <span className="sr-only">Discord</span>
          </Link>
          <Link 
            href="mailto:contact@nocturnal625.dev" 
            rel="noopener noreferrer"
            className="text-red-600 hover:text-teal-600 dark:text-red-400 dark:hover:text-teal-400 transition-colors"
          >
            <FaEnvelope className="h-8 w-8" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
        
        <div className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`text-lg capitalize transition-colors ${
                activeSection === item.id 
                  ? 'text-teal-600 dark:text-teal-400 font-medium' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;