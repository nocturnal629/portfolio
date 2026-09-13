import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';
import KomiwalnutTitle from '@/components/features/KomiwalnutTitle';
import IdeaSubmission from '@/components/features/IdeaSubmission';
import { navItems } from '@/data/navigation';

interface HeroProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ activeSection, onSectionChange }) => {
  return (
    <section id="home" className="flex items-center justify-center min-h-screen">
      <div className="text-center max-w-2xl px-4">
        <KomiwalnutTitle />
        <p className="text-xl mb-4 text-gray-800 dark:text-gray-200">Full Stack LLM Developer</p>
        <p className="mb-8 text-gray-800 dark:text-gray-400">Metropolitan Manila, Philippines</p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <Link 
            href="https://github.com/komiwalnut" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-teal-800 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
          >
            <FaGithub className="h-8 w-8" suppressHydrationWarning />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link 
            href="https://www.linkedin.com/in/aldrian-a-098558246/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-teal-800 dark:text-blue-400 dark:hover:text-teal-400 transition-colors"
          >
            <FaLinkedin className="h-8 w-8" suppressHydrationWarning />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link 
            href="https://discord.com/users/904940122468909138" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-teal-800 dark:text-blue-400 dark:hover:text-teal-400 transition-colors"
          >
            <FaDiscord className="h-8 w-8" suppressHydrationWarning />
            <span className="sr-only">Discord</span>
          </Link>
          <Link 
            href="mailto:contact@komiwalnut.dev" 
            rel="noopener noreferrer"
            className="text-red-600 hover:text-teal-800 dark:text-red-400 dark:hover:text-teal-400 transition-colors"
          >
            <FaEnvelope className="h-8 w-8" suppressHydrationWarning />
            <span className="sr-only">Email</span>
          </Link>
        </div>
        
        <nav id="hero-nav" className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border text-sm sm:text-lg capitalize transition-colors ${
                activeSection === item.id
                  ? 'border-teal-600/40 bg-teal-600/10 text-teal-800 font-medium dark:border-teal-400/40 dark:bg-teal-400/10 dark:text-teal-400'
                  : 'border-transparent text-gray-800 hover:border-teal-600/30 hover:bg-teal-600/10 hover:text-teal-800 dark:text-gray-400 dark:hover:border-teal-400/30 dark:hover:bg-teal-400/10 dark:hover:text-teal-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <IdeaSubmission />
      </div>
    </section>
  );
};

export default Hero;
