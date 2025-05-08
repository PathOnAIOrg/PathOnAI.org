import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";
import { FaLinkedin, FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  
  // Handle scroll behavior for mobile
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Add scroll event listener for better mobile appearance
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or navigating
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
    };
    
    router.events.on('routeChangeStart', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className={`px-4 sm:px-6 py-3 sm:py-5 flex justify-between items-center bg-gray-100 dark:bg-gray-800 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="flex items-center">
          <Link href="/" className="flex items-center text-lg sm:text-xl font-bold text-gray-900 dark:text-white mr-4 sm:mr-12">
            <img 
              src="/pathonai_org.png" 
              alt="PathOnAI Logo" 
              className="h-7 w-auto mr-2" 
            />
            <span className="truncate">PathOnAI</span>
          </Link>
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium ${isActive('/') 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className={`text-sm font-medium ${isActive('/projects') 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
            >
              Projects
            </Link>
            <Link 
              href="/opportunities" 
              className={`text-sm font-medium ${isActive('/opportunities') 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
            >
              Opportunities
            </Link>
            <Link 
              href="/services" 
              className={`text-sm font-medium ${isActive('/services') 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
            >
              Services
            </Link>
          </nav>
        </div>
        <div className="flex items-center">
          {/* Social Media Links */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-5 mr-4 lg:mr-6">
            <a
              href="https://github.com/PathOnAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5 lg:h-6 lg:w-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/pathonai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 lg:h-6 lg:w-6" />
            </a>
            <a
              href="https://x.com/PathOnAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Twitter"
            >
              <FaTwitter className="h-5 w-5 lg:h-6 lg:w-6" />
            </a>
            <a
              href="https://discord.com/invite/UTxjyNwTeP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Discord"
            >
              <FaDiscord className="h-5 w-5 lg:h-6 lg:w-6" />
            </a>
          </div>
          
          {mounted && (
            <div className="mr-4">
              <button 
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                className="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setTheme(theme === "dark" ? 'light' : 'dark')}
              >
                {theme === "dark" ? (
                  <HiSun 
                    className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" 
                  />
                ) : (
                  <HiMoon 
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" 
                  />
                )}
              </button>
            </div>
          )}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 rounded-full text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Improved with transition */}
      <div 
        className={`md:hidden bg-gray-100 dark:bg-gray-800 shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            href="/" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') 
              ? 'text-blue-600 dark:text-blue-400 bg-gray-200 dark:bg-gray-700' 
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'}`}
          >
            Home
          </Link>
          <Link 
            href="/projects" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/projects') 
              ? 'text-blue-600 dark:text-blue-400 bg-gray-200 dark:bg-gray-700' 
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'}`}
          >
            Projects
          </Link>
          <Link 
            href="/opportunities" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/opportunities') 
              ? 'text-blue-600 dark:text-blue-400 bg-gray-200 dark:bg-gray-700' 
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'}`}
          >
            Opportunities
          </Link>
          <Link 
            href="/services" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/services') 
              ? 'text-blue-600 dark:text-blue-400 bg-gray-200 dark:bg-gray-700' 
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'}`}
          >
            Services
          </Link>
          
          {/* Social Media Links in Mobile Menu - Made more touch-friendly */}
          <div className="flex items-center justify-around py-4 border-t border-gray-200 dark:border-gray-700 mt-2">
            <a
              href="https://github.com/PathOnAI"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/pathonai/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/PathOnAI"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Twitter"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://discord.com/invite/UTxjyNwTeP"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Discord"
            >
              <FaDiscord className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 md:hidden z-0"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;