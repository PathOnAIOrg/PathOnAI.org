import Link from 'next/link';
import SEO from '@/components/SEO';

export default function Custom404() {
  return (
    <>
      <SEO 
        title="Page Not Found - PathOnAI.org" 
        description="The page you are looking for does not exist."
      />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-4 pt-24">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-black dark:text-white">
          404 - Page Not Found
        </h1>
        <p className="leading-7 mb-6 text-black dark:text-white max-w-3xl text-center">
          The page you are looking for does not exist.
        </p>
        <Link 
          href="/" 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </>
  );
} 