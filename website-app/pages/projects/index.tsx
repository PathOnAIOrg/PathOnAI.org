import { Card, CardContent } from "@/components/ui/card"
import FeaturedProjectsCarousel from "@/components/FeaturedProjectsCarousel";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-black dark:text-white">
        Our AI Agents Projects
      </h1>
      <p className="leading-7 mb-12 text-black dark:text-white max-w-3xl text-center">
        Explore our current and past projects dedicated to advancing open-source development and AGI research.
      </p>
      
      <FeaturedProjectsCarousel />

      <div className="w-full max-w-4xl space-y-8">

        <Card className="border-2 border-purple-200 dark:border-purple-900 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Publications</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              <span className="text-purple-700 dark:text-purple-400 font-semibold">Purple text</span> indicates authors affiliated with PathOnAI.org.
            </p>
            <ul className="text-black dark:text-white space-y-4">
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-semibold">VisualTreeSearch: Understanding Web Agent Test-time Scaling</span>
                  <a href="https://www.researchgate.net/profile/Danqing-Zhang/publication/391739859_VisualTreeSearch_Understanding_Web_Agent_Test-time_Scaling/links/6825449bdf0e3f544f54797b/VisualTreeSearch-Understanding-Web-Agent-Test-time-Scaling.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                    [Paper]
                  </a>
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  <span className="text-purple-700 dark:text-purple-400 font-semibold">Danqing Zhang</span>, 
                  <span className="text-purple-700 dark:text-purple-400 font-semibold"> Yaoyao Qian</span>, 
                  <span className="text-purple-700 dark:text-purple-400 font-semibold"> Shiying He</span>, 
                  <span className="text-purple-700 dark:text-purple-400 font-semibold"> Yuanli Wang</span>, 
                  <span className="text-purple-700 dark:text-purple-400 font-semibold"> Jingyi Ni</span>, 
                  <span className="text-purple-700 dark:text-purple-400 font-semibold"> Junyu Cao</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 italic">ECML-PKDD&apos;25: 2025 European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases Demo Track</div>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-semibold">LiteMultiAgent: A Multi-Agent Framework for LLM-Based Applications</span>
                  <span className="text-amber-600 dark:text-amber-400 ml-2">[work in progress]</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  <span className="text-purple-700 dark:text-purple-400 font-semibold"> Danqing Zhang</span>, 
                  <span className="text-purple-700 dark:text-purple-400 font-semibold"> Jingyi Ni</span>, 
                </div>
                <div className="text-gray-600 dark:text-gray-300 italic">(Paper title and author list may be modified)</div>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-semibold">Web Agent Evaluation Metrics</span>
                  <span className="text-amber-600 dark:text-amber-400 ml-2">[work in progress]</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  <span className="text-purple-700 dark:text-purple-400 font-semibold">Shiying He</span>, 
                  <span className="text-purple-700 dark:text-purple-400 font-semibold"> Yaoyao Qian</span>, 
                  <span className="text-purple-700 dark:text-purple-400 font-semibold"> Danqing Zhang</span>, 
                  <span className="text-purple-700 dark:text-purple-400 font-semibold"> Yuanli Wang</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 italic">(Paper title and author list may be modified)</div>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-semibold">Tutorial on Landing Generative AI in Industrial Social and E-commerce Recsys</span>
                  <a href="https://dl.acm.org/doi/10.1145/3701716.3715871" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                    [Paper]
                  </a>
                </div>
                <div className="text-gray-600 dark:text-gray-300">Da Xu, <span className="text-purple-700 dark:text-purple-400 font-semibold">Danqing Zhang</span>, Chuanwei Ruan, Lingling Zheng, Bo Yang, Guangyu Yang, Shuyuan Xu and Haixun Wang</div>
                <div className="text-gray-600 dark:text-gray-300 italic">WWW&apos;25: The Web Conference Tutorial</div>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-semibold">LiteWebAgent: The Open-Source Suite for VLM-Based Web-Agent Applications</span>
                  <a href="https://aclanthology.org/2025.naacl-demo.36/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                    [Paper]
                  </a>
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  <span className="text-purple-700 dark:text-purple-400 font-semibold">Danqing Zhang</span>, 
                  <span className="text-purple-700 dark:text-purple-400 font-semibold"> Balaji Rama</span>, 
                  <span className="text-purple-700 dark:text-purple-400 font-semibold"> Jingyi Ni</span>, 
                  <span className="text-purple-700 dark:text-purple-400 font-semibold"> Shiying He</span>, 
                  <span className="text-purple-700 dark:text-purple-400 font-semibold"> Fu Zhao</span>, 
                  <span className="text-purple-700 dark:text-purple-400 font-semibold"> Kunyu Chen</span>, 
                  <span className="text-purple-700 dark:text-purple-400 font-semibold"> Arnold Chen</span>, 
                  <span className="text-purple-700 dark:text-purple-400 font-semibold"> Junyu Cao</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 italic">NAACL&apos;25: 2025 Annual Conference of the North American Chapter of the Association for Computational Linguistics -- System Demonstration Track</div>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-semibold">Tutorial on Landing Generative AI in Industrial Social and E-commerce Recsys</span>
                  <a href="https://dl.acm.org/doi/10.1145/3627673.3679099" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                    [Paper]
                  </a>
                </div>
                <div className="text-gray-600 dark:text-gray-300">Da Xu, <span className="text-purple-700 dark:text-purple-400 font-semibold">Danqing Zhang</span>, Lingling Zheng, Bo Yang, Guangyu Yang, Shuyuan Xu, Cindy Liang</div>
                <div className="text-gray-600 dark:text-gray-300 italic">CIKM&apos;24: The Conference on Information and Knowledge Management (CIKM) Tutorial</div>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-semibold">Survey for Landing Generative AI in Social and E-commerce Recsys -- the Industry Perspectives</span>
                  <a href="https://arxiv.org/abs/2503.02950" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                    [Paper]
                  </a>
                </div>
                <div className="text-gray-600 dark:text-gray-300">Da Xu, <span className="text-purple-700 dark:text-purple-400 font-semibold">Danqing Zhang</span>, Guangyu Yang, Bo Yang, Shuyuan Xu, Lingling Zheng, Cindy Liang</div>
                <div className="text-gray-600 dark:text-gray-300 italic">KDD GenAIRecP&apos;25: Knowledge Discovery and Data Mining (KDD) Generative AI for Recommender Systems and Personalization Workshop, 2024</div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-indigo-200 dark:border-indigo-900 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Research Philosophy</h2>
            <ul className="text-black dark:text-white space-y-3">
              <li className="flex items-start">
                <span className="text-xl mr-2">🔍</span>
                <span>Make user interfaces more intuitive for understanding and interpreting AI decision-making processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-2">🧮</span>
                <span>Formulate real-world applications into mathematical models to find optimal solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-2">🔄</span>
                <span>Bridge the gap between academic research and production applications by raising the bar on code quality</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-2">📊</span>
                <span>Conduct detailed ablation studies to examine when and why approaches work better</span>
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
                  <span className="font-semibold text-lg">Lite Web Agent Tree Search</span>
                  <a href="https://github.com/PathOnAI/LWATS" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
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
                  <span className="font-semibold text-lg">Generative Agent Based Simulation</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 ml-7">
                  Creating realistic multi-agent simulations powered by LLMs to model complex social interactions and emergent behaviors in virtual environments.
                </div>
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
      </div>
    </div>
  );
};

export default Projects;
