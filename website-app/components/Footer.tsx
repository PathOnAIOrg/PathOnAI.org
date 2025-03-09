import Link from 'next/link';

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
            className="text-center text-sm text-gray-800 dark:text-gray-400"
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
        </div>
      </footer>
    );
  };
  
  export default Footer;
  