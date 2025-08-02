import { Card, CardContent } from "@/components/ui/card"
import SEO from "@/components/SEO"
import JsonLd from '@/components/JsonLd'
import Link from "next/link"

const Home = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PathOnAI.org",
    "url": "https://pathonai.org",
    "logo": "https://pathonai.org/pathonai_org.png",
    "description": "PathOnAI.org is an open-source non-profit AI research organization focused on advancing AI agent technology.",
    "sameAs": [
      "https://github.com/PathOnAI"
    ]
  };

  return (
    <>
      <SEO 
        title="PathOnAI.org - Open-Source AI Agent Technology"
        description="PathOnAI.org is an open-source non-profit AI research organization focused on advancing AI agent technology. Our mission is to democratize state-of-the-art AI methods."
      />
      <JsonLd data={organizationSchema} />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-4 pt-24">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-black dark:text-white">
          Welcome to PathOnAI.org 👋
        </h1>
        <p className="leading-7 mb-6 text-black dark:text-white max-w-3xl text-center">
        PathOnAI.org is an independent, non-profit organization with a mission to advance open-source development and AGI research through inclusive collaboration, mentorship, and community-driven innovation. We aim to make cutting-edge artificial general intelligence research accessible to all, fostering a diverse ecosystem where knowledge is freely shared.
        </p>
        
        <div className="w-full max-w-4xl space-y-8">
          <Card className="border-2 border-purple-200 dark:border-purple-900 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Our Story</h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  PathOnAI was founded in 2024 by a group of AI researchers and engineers passionate about making advanced AI agent technology accessible to everyone. We believe that by democratizing these technologies, we can accelerate innovation and create more equitable access to powerful AI tools.
                </p>
                <p>
                  Our team consists of researchers and contributors from various backgrounds, united by a common goal: to build open-source AI agent frameworks that are both powerful and easy to use. We collaborate with academic institutions, industry partners, and individual contributors worldwide.
                </p>
                <p>
                  Through our open-source projects, educational resources, and community engagement, we aim to lower the barriers to entry for AI agent development and foster a collaborative ecosystem where knowledge and innovations are freely shared.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* News Section */}
          <Card className="border-2 border-amber-200 dark:border-amber-900 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Latest News</h2>
              <ul className="text-black dark:text-white space-y-4">
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-3">08/01/2025</span>
                    <span className="font-semibold">PathOnAI.org is officially a 501(c)(3) nonprofit organization.</span>
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-3">06/16/2025</span>
                    <span className="font-semibold">&quot;VisualTreeSearch: Understanding Web Agent Test-time Scaling&quot; was accepted by ECML-PKDD 2025.</span>
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-3">06/15/2025</span>
                    <span className="font-semibold">Won the 2025 SF Bay Area LeRobot Hackathon.</span>
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-3">02/28/2025</span>
                    <span className="font-semibold">&quot;LiteWebAgent: The Open-Source Suite for VLM-Based Web-Agent Applications&quot; was accepted by 2025 Annual Conference of the North American Chapter of the Association for Computational Linguistics -- System Demonstration Track (NAACL 2025).</span>
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-3">12/05/2024</span>
                    <span className="font-semibold">&quot;Tutorial on Landing Generative AI in Industrial Social and E-commerce Recsys&quot; was accepted by WWW 2025.</span>
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-3">07/05/2024</span>
                    <span className="font-semibold">Tutorial &quot;Landing Generative AI in Industrial Social and E-commerce Recsys&quot; was accepted by CIKM 2024.</span>
                  </div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-3">07/01/2024</span>
                    <span className="font-semibold">Paper &quot;Survey for Tutorial on Landing GAI in Social and E-commerce Recsys – the Industry Perspectives&quot; was accepted by KDD GenAIRecP 2024.</span>
                  </div>
                </li>
                {/* Add more news items here as they become available */}
              </ul>
            </CardContent>
          </Card>

        {/* Get Involved */}
        <Card className="border-2 border-red-200 dark:border-red-900 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Get Involved</h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  Interested in contributing to our open source research? We welcome collaborators from all backgrounds - whether you&apos;re a researcher, student, or industry professional passionate about AI.
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

          {/* Team Section */}
          <Card className="border-2 border-purple-200 dark:border-purple-900 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Team</h2>
              
              {/* Founders */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-700 dark:text-purple-300">Founders</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">
                      <a
                        href="https://danqingz.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Danqing Zhang
                      </a>
                    </p>
                    <p className="text-sm">Founder</p>
                  </div>
                </div>
              </div>

              {/* Project Leads */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-700 dark:text-purple-300">President</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">
                      <a
                        href="https://h-freax.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Yaoyao Qian
                      </a>
                    </p>
                    <p className="text-sm">President</p>
                  </div>
                </div>
              </div>

              {/* Researchers & Collaborators */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-700 dark:text-purple-300">Researchers & Collaborators</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">
                      <a
                        href="https://pentium3.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Yuanli Wang
                      </a>
                    </p>
                    <p className="text-sm">Researcher</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Jingyi Ni</p>
                    <p className="text-sm">Researcher</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">
                      <a
                        href="https://jindanh.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Jindan Huang
                      </a>
                    </p>
                    <p className="text-sm">Researcher</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Riely(Yun) Zong</p>
                    <p className="text-sm">Researcher</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">
                      <a
                        href="https://jindaxz.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Jinda Zhang
                      </a>
                    </p>
                    <p className="text-sm">Researcher</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Meixu Chen</p>
                    <p className="text-sm">Collaborator</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Yifan Zeng</p>
                    <p className="text-sm">Collaborator</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Junyu Cao</p>
                    <p className="text-sm">Collaborator</p>
                  </div>
                </div>
              </div>

              {/* Contributors */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-700 dark:text-purple-300">Contributors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Arnold Chen</p>
                    <p className="text-sm">Contributor</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Andrew Liang</p>
                    <p className="text-sm">Contributor</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Jiaxun Hao</p>
                    <p className="text-sm">Contributor</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Zixun Zhang</p>
                    <p className="text-sm">Contributor</p>
                  </div>
                </div>
              </div>

              {/* Members */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-700 dark:text-purple-300">Members</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Manpreet Singh</p>
                    <p className="text-sm">Member</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Yusha Arif</p>
                    <p className="text-sm">Member</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Mostofa Shakib</p>
                    <p className="text-sm">Member</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Maximo Rulli</p>
                    <p className="text-sm">Member</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Deepak Pradhan</p>
                    <p className="text-sm">Member</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Da Kuang</p>
                    <p className="text-sm">Member</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Aayush Gupta</p>
                    <p className="text-sm">Member</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Nazifa Mouli</p>
                    <p className="text-sm">Member</p>
                  </div>
                </div>
              </div>

              {/* Alumni */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-700 dark:text-purple-300">Alumni</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Balaji Rama</p>
                    <p className="text-sm">Full Stack Developer</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Kunyu Chen</p>
                    <p className="text-sm">Frontend Developer</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Fu Zhao</p>
                    <p className="text-sm">Researcher</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Shiying He</p>
                    <p className="text-sm">Researcher</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

                    
        </div>
      </div>
    </>
  );
};

export default Home;