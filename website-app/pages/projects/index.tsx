import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Project data array
const projectData = [
  {
    id: 1,
    title: "VisualTreeSearch",
    description: "An intuitive interface for understanding web agent decision processes. Visualize and understand how web agents make decisions as they navigate complex tasks.",
    path: "/projects/visualtreesearch",
    imagePath: "/images/projects/visualtreesearch/visualtreesearch-architecture.png",
    borderColor: "border-blue-200 dark:border-blue-900"
  },
  {
    id: 2,
    title: "LiteWebAgent",
    description: "An open-source suite for VLM-based web-agent applications. Build powerful web agents with vision-language models to automate web tasks.",
    path: "/projects/litewebagent",
    imagePath: "/images/projects/litewebagent/system_design.png",
    borderColor: "border-green-200 dark:border-green-900"
  },
  {
    id: 3,
    title: "LiteMultiAgent",
    description: "LiteMultiAgent: The Library for LLM-based multi-agent applications.",
    path: "/projects/litemultiagent",
    imagePath: "/images/projects/litemultiagent/visualization.png",
    borderColor: "border-green-200 dark:border-green-900"
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = projectData.length - 1;

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-black dark:text-white">
        Our Projects
      </h1>
      <p className="leading-7 mb-12 text-black dark:text-white max-w-3xl text-center">
        Explore our current and past projects dedicated to advancing open-source development and AGI research.
      </p>
      
      {/* Featured Project Carousel */}
      <div className="w-full max-w-4xl mb-16">
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white border-b pb-2">
          Featured Projects
        </h2>
        
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          {/* Larger Navigation Controls positioned at sides */}
          <div className="absolute inset-y-0 left-0 flex items-center z-30">
            <button
              onClick={goToPrevious}
              className="h-full px-4 bg-black/20 hover:bg-black/40 transition-colors focus:outline-none"
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center z-30">
            <button
              onClick={goToNext}
              className="h-full px-4 bg-black/20 hover:bg-black/40 transition-colors focus:outline-none"
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Project Carousel */}
          <div className="w-full">
            {/* Only show the current project */}
            <div className="w-full">
              <div className="relative aspect-[16/9] w-full bg-gray-200 dark:bg-gray-700">
                {/* Add an explicit fallback if Image fails */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-gray-400">{projectData[currentIndex].title[0]}</div>
                </div>
                
                <Image
                  src={projectData[currentIndex].imagePath}
                  alt={projectData[currentIndex].title}
                  fill
                  className="object-cover z-10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none'; // Hide the broken image
                  }}
                />
                
                {/* Navigation Instruction Overlay */}
                <div className="absolute inset-x-0 top-4 flex justify-center pointer-events-none z-30">
                  <div className="bg-black/60 text-white text-xs px-3 py-1 rounded-full flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    Use arrows to navigate
                  </div>
                </div>
                
                {/* Always visible overlay with content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">{projectData[currentIndex].title}</h3>
                  <p className="text-white/90 mb-4">{projectData[currentIndex].description}</p>
                  <Link 
                    href={projectData[currentIndex].path}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-fit"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pagination Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {projectData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-10 bg-blue-600' : 'w-3 bg-white/80 dark:bg-gray-500/80 hover:bg-white dark:hover:bg-gray-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Your existing cards */}
      <div className="w-full max-w-4xl space-y-8">
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

        <Card className="border-2 border-purple-200 dark:border-purple-900 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Publications</h2>
            <ul className="text-black dark:text-white space-y-4">
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-semibold">VisualTreeSearch: An Intuitive Interface for Understanding Web Agent Decision Processes</span>
                  <span className="text-amber-600 dark:text-amber-400 ml-2">[in submission]</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300">Danqing Zhang, Yaoyao Qian, Shiying He, Yuanli Wang, Jingyi Ni, Junyu Cao</div>
                <div className="text-gray-600 dark:text-gray-300 italic">(Author list may be modified)</div>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-semibold">Web Agent Evaluation Metrics</span>
                  <span className="text-amber-600 dark:text-amber-400 ml-2">[work in progress]</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300">Shiying He, Yaoyao Qian, Danqing Zhang, Yuanli Wang</div>
                <div className="text-gray-600 dark:text-gray-300 italic">(Paper title and author list may be modified)</div>
              </li>
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
                  <span className="font-semibold text-lg">Lite Web Agent Tree Search</span>
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
