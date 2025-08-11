import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi"

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-black dark:text-white">
        Our Services
      </h1>
      <p className="leading-7 mb-12 text-black dark:text-white max-w-3xl text-center">
        PathOnAI.org is an independent, non-profit organization with a mission to advance open-source development and AGI research through inclusive collaboration, mentorship, and community-driven innovation.
      </p>
      
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-6">
        <Link href="/services/computing-resources">
          <Card className="border-2 border-green-200 dark:border-green-900 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer h-full">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white flex items-center justify-between">
                Computing Resources
                <HiArrowRight className="text-gray-400" />
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Access high-performance GPU clusters, cloud credits, and development servers for AI research and experimentation.
              </p>
              <ul className="text-gray-500 dark:text-gray-400 space-y-1 text-sm">
                <li>• MSI Raider 18 HX with RTX 5090</li>
                <li>• RTX 3090 Workstation</li>
                <li>• High-performance computing access</li>
              </ul>
            </CardContent>
          </Card>
        </Link>

        <Link href="/services/robot-access">
          <Card className="border-2 border-blue-200 dark:border-blue-900 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer h-full">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white flex items-center justify-between">
                Robot Access
                <HiArrowRight className="text-gray-400" />
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Access to various robotic platforms for hands-on learning and research.
              </p>
              <ul className="text-gray-500 dark:text-gray-400 space-y-1 text-sm">
                <li>• SO-ARM100 & SO-ARM101 Robot Arms</li>
                <li>• LeKiwi Mobile Manipulator</li>
                <li>• TurtleBot 4 & ROS2 Platforms</li>
              </ul>
            </CardContent>
          </Card>
        </Link>

        <Link href="/services/hardware-equipment">
          <Card className="border-2 border-orange-200 dark:border-orange-900 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer h-full">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white flex items-center justify-between">
                3D Printing Services
                <HiArrowRight className="text-gray-400" />
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Advanced 3D printing services for rapid prototyping and custom part manufacturing.
              </p>
              <ul className="text-gray-500 dark:text-gray-400 space-y-1 text-sm">
                <li>• Bambu Lab P1S 3D Printer</li>
                <li>• Bambu Lab A1 3D Printer</li>
                <li>• Multi-material printing capabilities</li>
              </ul>
            </CardContent>
          </Card>
        </Link>

        <Link href="/services/professional-development">
          <Card className="border-2 border-purple-200 dark:border-purple-900 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer h-full">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white flex items-center justify-between">
                Professional Development
                <HiArrowRight className="text-gray-400" />
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Mentorship, research collaboration, and career advancement in AI and machine learning.
              </p>
              <ul className="text-gray-500 dark:text-gray-400 space-y-1 text-sm">
                <li>• 1-on-1 mentorship</li>
                <li>• Research collaborations</li>
                <li>• Industry connections</li>
              </ul>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="mt-16 p-8 bg-gray-100 dark:bg-gray-800 rounded-lg max-w-3xl text-center">
        <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Access Location</h3>
        <p className="text-purple-700 dark:text-purple-400 font-semibold mb-4">
          📍 Burlingame Library Easton Branch<br />
          1800 Easton Dr, Burlingame, CA 94010
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Most hardware and equipment services are available at our physical location. Remote access available for computing resources and some services.
        </p>
        <div className="space-x-4">
          <a 
            href="https://discord.com/invite/UTxjyNwTeP" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
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
      </div>
    </div>
  );
};

export default Services; 