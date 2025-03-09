import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <header className="fixed w-full z-10">
      <div className="px-4 py-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800 shadow-md">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white mr-10">
            PathOnAI
          </Link>
          <nav className="hidden md:flex space-x-6">
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
          {mounted && (
            <div className="mr-4">
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
              Projects
            </Link>
            <Link 
              href="/services" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/services') 
                ? 'text-blue-600 dark:text-blue-400 bg-gray-200 dark:bg-gray-700' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;