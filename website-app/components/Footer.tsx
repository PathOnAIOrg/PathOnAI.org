import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="relative px-4 py-6 bg-gray-100 dark:bg-gray-500 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-800 dark:text-gray-400 mb-4 md:mb-0">
            <Link 
              href="/privacy-policy" 
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 mr-4"
            >
              Privacy Policy
            </Link>
          </div>
          
          <div
            className="text-center text-sm text-gray-800 dark:text-gray-400 mb-4 md:mb-0"
          >
            © {new Date().getFullYear()}, Built by
            {` `}
            <a
              href="https://github.com/PathOnAI"
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
            >
              PathOnAI.org
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/PathOnAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/pathonai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/PathOnAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
              aria-label="Twitter"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="https://discord.com/invite/UTxjyNwTeP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
              aria-label="Discord"
            >
              <FaDiscord className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  