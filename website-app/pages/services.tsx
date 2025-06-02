import { Card, CardContent } from "@/components/ui/card"

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-black dark:text-white">
        Our Services
      </h1>
      <p className="leading-7 mb-12 text-black dark:text-white max-w-3xl text-center">
      PathOnAI.org is an independent, non-profit organization with a mission to advance open-source development and AGI research through inclusive collaboration, mentorship, and community-driven innovation. We aim to make cutting-edge artificial general intelligence research accessible to all, fostering a diverse ecosystem where knowledge is freely shared.
      </p>
      
      <div className="w-full max-w-4xl space-y-8">
        <Card className="border-2 border-purple-200 dark:border-purple-900 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Research Collaboration</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We collaborate with academic institutions and industry partners on cutting-edge AI agent research.
            </p>
            <ul className="text-black dark:text-white space-y-2 list-disc pl-5">
              <li>Joint research projects</li>
              <li>Co-authored publications</li>
              <li>Open-source contributions</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200 dark:border-blue-900 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Career Development</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We help community members advance their careers in AI and machine learning through personalized support.
            </p>
            <ul className="text-black dark:text-white space-y-2 list-disc pl-5">
              <li>Machine learning help sessions and graduate school application guidance via Zoom:<a href="https://calendly.com/danqingzhang/pathonai-org-office-hours" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                Schedule a session via Calendly
                </a> </li>
              <li>Connecting active community members with companies (two members recently joined an early-stage pre-seed AI startup as founding members)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-orange-200 dark:border-orange-900 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Hardware & Equipment Access</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We provide hands-on access to robotics hardware and tools for learning and experimentation.
            </p>
            <div className="text-gray-700 dark:text-gray-300 mb-4">
              <p className="font-semibold text-purple-700 dark:text-purple-400">
                📍 Available at Burlingame Library Easton Branch<br />
                1800 Easton Dr, Burlingame, CA 94010
              </p>
            </div>
            <ul className="text-black dark:text-white space-y-2 list-disc pl-5">
              <li>
                <strong>Bambu Lab A1 3D Printer</strong> - For prototyping robot parts and custom components
                <a href="https://us.store.bambulab.com/products/a1?srsltid=AfmBOopMF1hLY9DWxxR4p2VoS9DRDnBCPqLyoxLGXLXrxJ-ghAiZ7Hfg" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                  [Product Page]
                </a>
              </li>
              <li>
                <strong>SO-ARM100 Robot Arm</strong> - Low-cost, open-source robotic arm for learning manipulation tasks
                <a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                  [GitHub]
                </a>
              </li>
              <li>
                <strong>LeKiwi Mobile Manipulator</strong> - Mobile robot platform for embodied AI experiments
                <a href="https://github.com/SIGRobotics-UIUC/LeKiwi" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                  [GitHub]
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services; 