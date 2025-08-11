import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { HiArrowLeft } from "react-icons/hi"

const ComputingResources = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
      <div className="w-full max-w-4xl">
        <Link href="/services" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6">
          <HiArrowLeft className="mr-2" />
          Back to Services
        </Link>
        
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-black dark:text-white">
          Computing Resources
        </h1>
        <p className="leading-7 mb-12 text-black dark:text-white">
          Access to high-performance computing resources for AI research and development.
        </p>
        
        <div className="space-y-8">
          <Card className="border-2 border-green-200 dark:border-green-900 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Available GPUs</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                High-performance GPU systems for AI research and development.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">MSI Raider 18 HX AI Gaming Laptop</h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-5">
                    <li>Intel Core Ultra 9 285HX 2.1GHz Processor</li>
                    <li>NVIDIA GeForce RTX 5090 GPU with 24GB GDDR7</li>
                    <li>64GB DDR5-6400 RAM</li>
                    <li>2TB Solid State Drive</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">RTX 3090 Workstation</h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-5">
                    <li>NVIDIA GeForce RTX 3090 GPU</li>
                    <li>Dedicated workstation for intensive computing tasks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 dark:border-orange-900 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">How to Request Access</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To request access to our computing resources:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="font-semibold text-black dark:text-white">Join our Discord</p>
                    <p className="text-gray-600 dark:text-gray-300">Connect with our community and submit your request</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold text-black dark:text-white">Email us</p>
                    <p className="text-gray-600 dark:text-gray-300">Send your request to info@pathonai.org</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <a 
                  href="https://discord.com/invite/UTxjyNwTeP" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors mr-3"
                >
                  Join Discord
                </a>
                <a 
                  href="mailto:info@pathonai.org" 
                  className="inline-block bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ComputingResources;