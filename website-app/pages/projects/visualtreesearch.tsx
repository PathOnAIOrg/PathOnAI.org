import { NextPage } from 'next';
import SEO from "@/components/SEO";
import Image from "next/image";
import Link from "next/link";

const VisualTreeSearch: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
      <SEO 
        title="VisualTreeSearch - PathOnAI.org"
        description="An Intuitive Interface for Understanding Web Agent Decision Processes"
      />
      
      {/* Hero Section */}
      <section className="container max-w-4xl mx-auto mb-12">
        <div className="text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-black dark:text-white">
            VisualTreeSearch
          </h1>
          <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">
            Understanding Web Agent Test-time Scaling
          </h2>
          
          <div className="mb-6 text-gray-600 dark:text-gray-300">
            <p className="mb-2">
              <span className="font-semibold">Authors:</span> Danqing Zhang, Yuanli Wang, Shiying He, Yaoyao Qian, Jingyi Ni, Junyu Cao
            </p>
            <p className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-400 italic">
              <span>[in submission]</span>
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              PathOnAI.org, Northeastern University, Boston University, The University of Texas at Austin
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="https://github.com/PathOnAI/VisualTreeSearch-Demo" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <span className="mr-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </span>
              GitHub
            </Link>
            <Link href="#" className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors">
              <span className="mr-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-8 6v-7.5l8-4.5 8 4.5v7.5l-8 4.5-8-4.5z"></path>
                </svg>
              </span>
              Paper
            </Link>
            <Link href="https://www.youtube.com/watch?v=stRNDePQGV0" className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                <span className="mr-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
                </span>
                YouTube
            </Link>
          </div>
        </div>
      </section>
      
      {/* Abstract Section */}
      <section className="container max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Abstract</h2>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          We present VisualTreeSearch, a fully-deployed system for visualizing and understanding web agent test-time scaling. 
          While test-time search algorithms substantially improve web agent success rates, they remain confined to research 
          contexts with limited practical deployment. Our system bridges this gap with three key contributions:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200 mt-4 mb-4 pl-4">
          <li className="mb-2"><span className="font-semibold">Production-ready Solution:</span> A fully-deployed web agent tree search system with cloud-based architecture.</li>
          <li className="mb-2"><span className="font-semibold">Fast State Reset Mechanism:</span> An API-based state reset solution that reduces reset time from 50 to 2 seconds.</li>
          <li className="mb-2"><span className="font-semibold">Interactive Visualization Interface:</span> A web UI that transparently demonstrates the agent&apos;s decision-making process.</li>
        </ol>
        <p className="text-gray-800 dark:text-gray-200">
          VisualTreeSearch provides an intuitive framework for both researchers and users to understand tree search execution in web agents.
        </p>
      </section>

    {/* Video Demo Section */}
        <section className="container max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Video Demonstration</h2>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe 
            className="w-full h-[500px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/stRNDePQGV0"
            title="VisualTreeSearch Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
        <p className="text-gray-800 dark:text-gray-200 text-center">
          Watch the demonstration of VisualTreeSearch in action, showing real-time tree search visualization
          and web agent interactions.
        </p>
      </section>
      
      {/* System Architecture */}
      <section className="container max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">System Architecture</h2>
        <div className="relative w-full h-[500px] mb-6">
          <Image 
            src="/images/projects/visualtreesearch/visualtreesearch-architecture.png" 
            alt="VisualTreeSearch System Architecture" 
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          The VisualTreeSearch system consists of four main components:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">State Reset API</h3>
            <p className="text-gray-800 dark:text-gray-200">
              A specialized service that provides an efficient state reset mechanism, enabling web agents to restore a clean initial 
              state before starting each new trajectory. Reduces reset time from 50 seconds to just 2 seconds.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Backend</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Implements various tree search algorithms (BFS, DFS, MCTS) and manages real-time WebSocket communication with the frontend to transmit agent execution information.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Browser Service</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Provides isolated browser sessions where web agents can execute actions, while also managing automatic
              authentication using Playwright.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Frontend</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Provides the user interface for configuring search tasks, visualizing tree search trajectories, and observing agent behavior through embedded browser views and execution logs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Key Features and Technical Innovations */}
      <section className="container max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Key Technical Innovations</h2>
        <div className="space-y-6">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">API-based State Reset</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When web agents interact with UIs, they modify states that persist in the website&apos;s database, causing evaluation 
              inconsistencies across trajectories. Our solution implements an API-based state reset mechanism with a FastAPI server 
              hosted on AWS EC2 that manages the website database to control website state, reducing reset time from 50 seconds with 
              previous docker container restarts to just 2 seconds.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Cloud-based Architecture</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Unlike previous Vercel-based web agent demos, our system implements AWS ECS container-based services to overcome 
              serverless execution limitations. This architecture supports persistent WebSocket communication and accommodates 
              extended processing times, both of which are essential for comprehensive tree search operations.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Interactive Visualization System</h3>
            <p className="text-gray-800 dark:text-gray-200">
              The VisualTreeSearch frontend visualization system enhances web agent research by providing an interpretable 
              monitoring environment with three main components: a browser interface for real-time web environment view, 
              a D3.js tree visualization highlighting the active trajectory, and a comprehensive execution log documenting 
              the agent&apos;s operational sequence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Visualization Interface */}
      <section className="container max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Visualization Interface</h2>
        <div className="grid grid-cols-1 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Tree Visualization & Live Browser View</h3>
            <div className="relative w-full h-[400px] mb-4">
              <Image 
                src="/images/projects/visualtreesearch/visualtreesearch-demo1.png" 
                alt="Tree Visualization & Browser Interface" 
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-800 dark:text-gray-200">
              The system provides a live view of the browser interaction alongside an interactive tree visualization. 
              The tree shows the exploration paths, with nodes representing different states and actions. Users can see 
              the current trajectory being executed, along with detailed logs of each action.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Configuration Interface</h3>
            <div className="relative w-full h-[400px] mb-4">
              <Image 
                src="/images/projects/visualtreesearch/visualtreesearch-demo2.png" 
                alt="Configuration Interface" 
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-800 dark:text-gray-200">
              The configuration panel allows users to customize search parameters, select algorithms (BFS, DFS, MCTS, LATS), 
              set the starting URL, define goals, specify max depth, and control other advanced settings. This makes it easy to 
              experiment with different search strategies and compare their effectiveness.
            </p>
          </div>
        </div>
      </section>
      
      {/* Search Algorithms */}
      <section className="container max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Supported Search Algorithms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">BFS/DFS</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Basic breadth-first and depth-first search algorithms for systematic exploration of the action space. These provide 
              a baseline for comparing more advanced search strategies.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">MCTS</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Monte Carlo Tree Search, which balances exploration and exploitation through its four phases: selection, expansion,
              simulation, and backpropagation.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">LATS</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Language Agent Tree Search, which unifies reasoning, acting, and planning in language models for more effective
              exploration of complex web interactions.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Custom Algorithms</h3>
            <p className="text-gray-800 dark:text-gray-200">
              The system&apos;s modular design allows researchers to implement and test custom search algorithms and compare their 
              performance with existing methods.
            </p>
          </div>
        </div>
      </section>
      
      {/* Get Started */}
      <section className="container max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Get Started</h2>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          Interested in trying VisualTreeSearch? Our open-source implementation serves as both a demonstration tool and a 
          foundation for future research on agent decision-making optimization. As web agents advance, robust visualization 
          frameworks will be essential for developing more reliable autonomous systems.
        </p>
        <div className="flex justify-center">
          <Link href="https://github.com/PathOnAI/VisualTreeSearch-Demo" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-lg">
            <span className="mr-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </span>
            Explore on GitHub
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VisualTreeSearch;
