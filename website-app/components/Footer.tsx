import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-3 md:mb-0">
            <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              Privacy Policy
            </Link>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Email: info@pathonai.org
            </span>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} PathOnAI.org. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  