import { Card, CardContent } from "@/components/ui/card"
import SEO from "@/components/SEO"
import JsonLd from '@/components/JsonLd'
import Link from "next/link"

const Robotics = () => {
  const roboticsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Robotics Research - PathOnAI.org",
    "url": "https://pathonai.org/robotics",
    "description": "Explore PathOnAI.org's robotics research focusing on embodied AI, 3D environments, and intelligent robotic systems.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "PathOnAI.org",
      "url": "https://pathonai.org"
    }
  };

  return (
    <>
      <SEO 
        title="Robotics Research - PathOnAI.org"
        description="Explore PathOnAI.org's robotics research focusing on embodied AI, 3D environments, and intelligent robotic systems powered by large language models."
      />
      <JsonLd data={roboticsSchema} />
      <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-black dark:text-white">
          Robotics & Embodied AI 🤖
        </h1>
        <p className="leading-7 mb-12 text-black dark:text-white max-w-3xl text-center">
          Open-source research with low cost robots like so-arm100 and Lekiwi.
        </p>
        
        <div className="w-full max-w-4xl space-y-8">
          
          {/* Research Focus */}
          <Card className="border-2 border-purple-200 dark:border-purple-900 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Research Focus</h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  We focus on open-source research with low cost robots like so-arm100 and Lekiwi.
                </p>
                <p>
                  We aim to lower the barrier of entry for beginners and hobbyists to get started with robotics and embodied AI.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Current Projects */}
          <Card className="border-2 border-blue-200 dark:border-blue-900 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Current Projects</h2>
              <ul className="text-black dark:text-white space-y-4">
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🎮</span>
                    <span className="font-semibold text-lg">Awesome LeRobot</span>
                    <a href="https://github.com/TataKKKL/awesome-lerobot" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      [GitHub]
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 ml-7">
                    Curate the know where and know how to understand and use low cost robots like so-arm100 and Lekiwi.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>



          {/* Hardware & Tools */}
          <Card className="border-2 border-orange-200 dark:border-orange-900 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Hardware & Tools Available</h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4 mb-6">
                <p>
                  We provide access to robotics hardware and tools for people interested in getting hands-on experience with robotics and embodied AI. Whether you&apos;re a beginner or experienced researcher, you can try out our equipment.
                </p>
                <p className="font-semibold text-purple-700 dark:text-purple-400">
                  📍 Meet us at Burlingame Library Easton Branch<br />
                  1800 Easton Dr, Burlingame, CA 94010
                </p>
              </div>
              <ul className="text-black dark:text-white space-y-4">
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🖨️</span>
                    <span className="font-semibold text-lg">Bambu Lab A1 3D Printer</span>
                    <a href="https://us.store.bambulab.com/products/a1?srsltid=AfmBOopMF1hLY9DWxxR4p2VoS9DRDnBCPqLyoxLGXLXrxJ-ghAiZ7Hfg" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      [Product Page]
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 ml-7">
                    High-quality 3D printer for prototyping robot parts and custom components.
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🦾</span>
                    <span className="font-semibold text-lg">SO-ARM100 Robot Arm</span>
                    <a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      [GitHub]
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 ml-7">
                    Standard Open Arm 100 - A low-cost, open-source robotic arm perfect for learning manipulation tasks and AI research.
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🚗</span>
                    <span className="font-semibold text-lg">LeKiwi Low-Cost Mobile Manipulator</span>
                    <a href="https://github.com/SIGRobotics-UIUC/LeKiwi" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      [GitHub]
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 ml-7">
                    Mobile robot platform combining holonomic drive with manipulation capabilities, ideal for embodied AI experiments.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

                    {/* Past Projects */}
                    <Card className="border-2 border-green-200 dark:border-green-900 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Past Projects</h2>
              <ul className="text-black dark:text-white space-y-4">
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🎮</span>
                    <span className="font-semibold text-lg">3D Embodied Agent for Roblox</span>
                    <a href="https://github.com/PathOnAI/roblox-game-ai-backend" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      [GitHub]
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 ml-7">
                    Developed intelligent agents that can navigate and interact within Roblox game environments, serving as a testbed for embodied AI research in virtual 3D worlds.
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">📚</span>
                    <span className="font-semibold text-lg">Awesome 3D Embodied AI</span>
                    <a href="https://github.com/PathOnAI/awesome-3d-embodied-ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      [GitHub]
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 ml-7">
                    Curated list of resources for 3D embodied AI research and development.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Get Involved */}
          <Card className="border-2 border-red-200 dark:border-red-900 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Get Involved</h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  Interested in contributing to our robotics research? We welcome collaborators from all backgrounds - whether you&apos;re a researcher, student, or industry professional passionate about embodied AI.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                  <Link 
                    href="/opportunities" 
                    className="inline-flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-center"
                  >
                    View Opportunities
                  </Link>
                  <a 
                    href="https://github.com/PathOnAIOrg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors text-center"
                  >
                    Explore Our Code
                  </a>
                  <a 
                    href="https://discord.com/invite/UTxjyNwTeP" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-center"
                  >
                    Join Our Discord
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Robotics;
