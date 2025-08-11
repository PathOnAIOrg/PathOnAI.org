import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { HiArrowLeft } from "react-icons/hi"

const ProfessionalDevelopment = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
      <div className="w-full max-w-4xl">
        <Link href="/services" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6">
          <HiArrowLeft className="mr-2" />
          Back to Services
        </Link>
        
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-black dark:text-white">
          Professional Development
        </h1>
        <p className="leading-7 mb-12 text-black dark:text-white">
          Advance your career in AI through mentorship, research collaboration, and industry connections.
        </p>
        
        <div className="space-y-8">
          <Card className="border-2 border-blue-200 dark:border-blue-900 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Mentorship Program</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                One-on-one mentorship with experienced AI researchers and industry professionals.
              </p>
              <ul className="text-black dark:text-white space-y-2 list-disc pl-5">
                <li>Personalized career guidance and planning</li>
                <li>Technical skill development in ML/AI</li>
                <li>Research project supervision</li>
                <li>Graduate school application support</li>
                <li>Industry interview preparation</li>
              </ul>
              <div className="mt-4">
                <a 
                  href="https://calendly.com/danqingzhang/pathonai-org-office-hours" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Schedule a Mentorship Session →
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 dark:border-green-900 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Research Collaboration</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Join cutting-edge AI research projects with academic and industry partners.
              </p>
              <ul className="text-black dark:text-white space-y-2 list-disc pl-5">
                <li>Contribute to open-source AI projects</li>
                <li>Co-author research publications</li>
                <li>Access to research compute resources</li>
                <li>Collaboration with leading AI labs</li>
                <li>Conference presentation opportunities</li>
              </ul>
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

export default ProfessionalDevelopment;