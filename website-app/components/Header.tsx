import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon, HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { FaLinkedin, FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const isServicesActive = () => {
    return router.pathname.startsWith('/services');
  };

  return (
    <header className="fixed w-full z-10">
      <div className="px-6 py-5 flex justify-between items-center bg-gray-100 dark:bg-gray-800 shadow-md">
        <div className="flex items-center">
          <Link href="/" className="flex items-center text-xl font-bold text-gray-900 dark:text-white mr-12">
            <img 
              src="/pathonai_org.png" 
              alt="PathOnAI Logo" 
              className="h-8 w-auto mr-2" 
            />
            PathOnAI
          </Link>
          <nav className="hidden md:flex space-x-8">
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
              AI Agents Projects
            </Link>
            <Link 
              href="/robotics" 
              className={`text-sm font-medium ${isActive('/robotics') 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
            >
              Robotics & Embodied AI Projects
            </Link>
            <Link 
              href="/opportunities" 
              className={`text-sm font-medium ${isActive('/opportunities') 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
            >
              Opportunities
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center text-sm font-medium ${isServicesActive() 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
              >
                Services
                <HiChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 border-b border-gray-200 dark:border-gray-600"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      All Services
                    </Link>
                    <Link
                      href="/services/computing-resources"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      Computing Resources
                    </Link>
                    <Link
                      href="/services/robot-access"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      Robot Access
                    </Link>
                    <Link
                      href="/services/hardware-equipment"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      Hardware & Equipment Access
                    </Link>
                    <Link
                      href="/services/professional-development"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      Professional Development
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
        <div className="flex items-center">
          {/* Social Media Links */}
          <div className="hidden md:flex items-center space-x-5 mr-6">
            <a
              href="https://github.com/PathOnAIOrg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/pathonaiorg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/PathOnAIOrg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Twitter"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://discord.com/invite/UTxjyNwTeP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Discord"
            >
              <FaDiscord className="h-6 w-6" />
            </a>
          </div>
          
          {mounted && (
            <div className="mr-5">
              {theme === "dark" ? (
                <HiSun 
                  className="w-6 h-6 text-yellow-500" 
                  role="button" 
                  onClick={() => setTheme('light')} 
                />
              ) : (
                <HiMoon 
                  className="w-6 h-6 text-gray-900" 
                  role="button" 
                  onClick={() => setTheme('dark')} 
                />
              )}
            </div>
          )}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-800 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') 
                ? 'text-blue-600 dark:text-blue-400 bg-gray-200 dark:bg-gray-700' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/projects') 
                ? 'text-blue-600 dark:text-blue-400 bg-gray-200 dark:bg-gray-700' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Agents Projects
            </Link>
            <Link 
              href="/robotics" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/robotics') 
                ? 'text-blue-600 dark:text-blue-400 bg-gray-200 dark:bg-gray-700' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Robotics & Embodied AI Projects
            </Link>
            <Link 
              href="/opportunities" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/opportunities') 
                ? 'text-blue-600 dark:text-blue-400 bg-gray-200 dark:bg-gray-700' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Opportunities
            </Link>
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${isServicesActive() 
                  ? 'text-blue-600 dark:text-blue-400 bg-gray-200 dark:bg-gray-700' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'}`}
              >
                Services
                <HiChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 space-y-1">
                  <Link
                    href="/services"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link
                    href="/services/computing-resources"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Computing Resources
                  </Link>
                  <Link
                    href="/services/robot-access"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Robot Access
                  </Link>
                  <Link
                    href="/services/hardware-equipment"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Hardware & Equipment Access
                  </Link>
                  <Link
                    href="/services/professional-development"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Professional Development
                  </Link>
                </div>
              )}
            </div>
            
            {/* Social Media Links in Mobile Menu */}
            <div className="flex items-center space-x-5 px-3 py-2">
              <a
                href="https://github.com/PathOnAIOrg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/pathonaiorg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/PathOnAIOrg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://discord.com/invite/UTxjyNwTeP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Discord"
              >
                <FaDiscord className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;