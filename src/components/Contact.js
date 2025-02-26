import Link from 'next/link';
import { FaTwitter, FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold dark:text-white">Contact</h2>

      {/* GitHub */}
      <div className="flex items-center gap-2 dark:text-gray-300">
        <FaGithub className="h-5 w-5" />
        <Link 
          href="https://github.com/nocturnal625" 
          target="_blank"
          className="animated-link"
        >
          nocturnal625
        </Link>
      </div>

      {/* LinkedIn */}
      <div className="flex items-center gap-2 dark:text-gray-300">
        <FaLinkedin className="h-5 w-5 text-blue-600" />
        <Link 
          href="" 
          target="_blank"
          className="animated-link"
        >
          nocturnal625
        </Link>
      </div>

      {/* Twitter */}
      <div className="flex items-center gap-2 dark:text-gray-300">
        <FaTwitter className="h-5 w-5 text-blue-400" />
        <Link 
          href="https://twitter.com/nocturnal625" 
          target="_blank"
          className="animated-link"
        >
          @nocturnal625
        </Link>
      </div>

      {/* Discord */}
      <div className="flex items-center gap-2 dark:text-gray-300">
        <FaDiscord className="h-5 w-5 text-indigo-400" />
        <span>nocturnal625</span>
      </div>
    </div>
  );
}