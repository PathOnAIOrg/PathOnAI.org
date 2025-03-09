import { Card, CardContent } from "@/components/ui/card"

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-black dark:text-white">
        Our Projects
      </h1>
      <p className="leading-7 mb-12 text-black dark:text-white max-w-3xl text-center">
        Explore our current and past projects focused on advancing AI agent technology.
      </p>
      
      <div className="w-full max-w-4xl space-y-8">
        <Card className="border-2 border-purple-200 dark:border-purple-900 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Publications</h2>
            <ul className="text-black dark:text-white space-y-4">
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-semibold">LiteWebAgent: The Open-Source Suite for VLM-Based Web-Agent Applications</span>
                  <a href="https://arxiv.org/abs/2503.02950" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                    [Paper]
                  </a>
                </div>
                <div className="text-gray-600 dark:text-gray-300">Danqing Zhang, Balaji Rama, Jingyi Ni, Shiying He, Fu Zhao, Kunyu Chen, Arnold Chen, Junyu Cao</div>
                <div className="text-gray-600 dark:text-gray-300 italic">NAACL&apos;25: 2025 Annual Conference of the North American Chapter of the Association for Computational Linguistics -- System Demonstration Track</div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200 dark:border-blue-900 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Current Projects</h2>
            <ul className="text-black dark:text-white space-y-4">
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-xl mr-2">🌐</span>
                  <span className="font-semibold text-lg">LiteWebAgentTreeSearch</span>
                  <a href="https://github.com/PathOnAI/LiteWebAgentTreeSearch" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                    [GitHub]
                  </a>
                </div>
                <div className="text-gray-600 dark:text-gray-300 ml-7">
                  Enhancing web agents with tree search algorithms for improved decision-making and task completion.
                </div>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-xl mr-2">🧠</span>
                  <span className="font-semibold text-lg">ARC AGI Experiments</span>
                  <a href="https://github.com/PathOnAI/arc-agi-experiments" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                    [GitHub]
                  </a>
                </div>
                <div className="text-gray-600 dark:text-gray-300 ml-7">Exploring advanced reasoning capabilities in artificial intelligence systems.</div>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-xl mr-2">📚</span>
                  <span className="font-semibold text-lg">Awesome ARC AGI</span>
                  <a href="https://github.com/PathOnAI/awesome-arc-agi" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                    [GitHub]
                  </a>
                </div>
                <div className="text-gray-600 dark:text-gray-300 ml-7">Collection of resources on advanced reasoning and cognitive architectures for AGI.</div>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-xl mr-2">🎮</span>
                  <span className="font-semibold text-lg">3D Embodied Agent</span>
                  <a href="https://github.com/PathOnAI/roblox-game-ai-backend" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                    [GitHub]
                  </a>
                </div>
                <div className="text-gray-600 dark:text-gray-300 ml-7">Developing embodied AI agents for Roblox games.</div>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-xl mr-2">📚</span>
                  <span className="font-semibold text-lg">Awesome 3D Embodied AI</span>
                  <a href="https://github.com/PathOnAI/awesome-3d-embodied-ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                    [GitHub]
                  </a>
                </div>
                <div className="text-gray-600 dark:text-gray-300 ml-7">Curated list of resources for 3D embodied AI research and development.</div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200 dark:border-green-900 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Past Projects</h2>
            <ul className="text-black dark:text-white space-y-4">
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-xl mr-2">👥</span>
                  <span className="font-semibold text-lg">LiteMultiAgent</span>
                  <a href="https://github.com/PathOnAI/LiteMultiAgent" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                    [GitHub]
                  </a>
                </div>
                <div className="text-gray-600 dark:text-gray-300 ml-7">A library for LLM-based multi-agent applications.</div>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-xl mr-2">🌍</span>
                  <span className="font-semibold text-lg">LiteWebAgent</span>
                  <a href="https://github.com/PathOnAI/LiteWebAgent" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                    [GitHub]
                  </a>
                </div>
                <div className="text-gray-600 dark:text-gray-300 ml-7">A library for LLM-based web-agent applications.</div>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-xl mr-2">🤖</span>
                  <span className="font-semibold text-lg">LiteGUIAgent</span>
                  <a href="https://github.com/PathOnAI/LiteGUIAgent" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                    [GitHub]
                  </a>
                </div>
                <div className="text-gray-600 dark:text-gray-300 ml-7">A library for VLM-based computer control agent. To be released.</div>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-xl mr-2">📚</span>
                  <span className="font-semibold text-lg">Awesome AI Agents</span>
                  <a href="https://github.com/PathOnAI/awesome-ai-agents" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                    [GitHub]
                  </a>
                </div>
                <div className="text-gray-600 dark:text-gray-300 ml-7">Collection of Materials on AI Agents.</div>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-xl mr-2">💻</span>
                  <span className="font-semibold text-lg">Natural Language Terminal</span>
                  <a href="https://github.com/PathOnAI/NaturalLanguageTerminal" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                    [GitHub]
                  </a>
                </div>
                <div className="text-gray-600 dark:text-gray-300 ml-7">Takes a natural language command and directly calls into the OS.</div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects; 