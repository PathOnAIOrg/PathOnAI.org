import { NextPage } from 'next';
import SEO from "@/components/SEO";
import Image from "next/image";
import Link from "next/link";

const LiteWebAgent: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
      <SEO 
        title="LiteWebAgent - PathOnAI.org"
        description="The Open-Source Suite for VLM-Based Web-Agent Applications"
      />
      
      {/* Hero Section */}
      <section className="container max-w-4xl mx-auto mb-12">
        <div className="text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-black dark:text-white">
            LiteWebAgent
          </h1>
          <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">
            The Open-Source Suite for VLM-Based Web-Agent Applications
          </h2>
          
          <div className="mb-6 text-gray-600 dark:text-gray-300">
            <p className="mb-2">
              <span className="font-semibold">Authors:</span> Danqing Zhang, Balaji Rama, Jingyi Ni, Shiying He, Fu Zhao, Kunyu Chen, Arnold Chen, Junyu Cao
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              PathOnAI.org, University of Texas at Austin
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="https://github.com/PathOnAI/LiteWebAgent" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <span className="mr-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </span>
              GitHub
            </Link>
            <Link href="https://arxiv.org/abs/2503.02950" className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors">
              <span className="mr-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-8 6v-7.5l8-4.5 8 4.5v7.5l-8 4.5-8-4.5z"></path>
                </svg>
              </span>
              Paper
            </Link>
            <Link href="https://lite-web-agent.pathonai.org/" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                <span className="mr-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"></path>
                </svg>
                </span>
                Demo
            </Link>
            <Link href="https://www.youtube.com/watch?v=lZUDbv5ABkg" className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
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
          We introduce LiteWebAgent, an open-source suite for VLM-based web agent applications. 
          LiteWebAgent addresses a critical gap in the web agent ecosystem by providing an extensible 
          core agent framework featuring planning, memory, and tree search capabilities, alongside a 
          production-ready solution that combines minimal serverless backend configuration and 
          intuitive user and browser interfaces.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200 mt-4 mb-4 pl-4">
          <li className="mb-2"><span className="font-semibold">Extensible Agent Framework:</span> A decoupled action generation and grounding model with support for various agent types and integration with advanced research components.</li>
          <li className="mb-2"><span className="font-semibold">Synchronous and Asynchronous APIs:</span> Seamless integration with FastAPI for asynchronous calls and serverless functions, requiring minimal deployment effort.</li>
          <li className="mb-2"><span className="font-semibold">Flexible User Interface:</span> A comprehensive system configuration panel and chat interface that features voice integration and task execution visualization.</li>
        </ol>
        <p className="text-gray-800 dark:text-gray-200">
          LiteWebAgent bridges the gap between research frameworks and production systems, providing researchers
          and developers with a comprehensive toolkit for deploying VLM-based web agents in real-world applications.
        </p>
      </section>

        {/* Video Demo Section */}
      <section className="container max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Video Demonstration</h2>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe 
            className="w-full h-[500px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/lZUDbv5ABkg"
            title="LiteWebAgent Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
        <p className="text-gray-800 dark:text-gray-200 text-center">
        Watch the demonstration of LiteWebAgent in action, showcasing its lightweight implementation and efficient web automation capabilities.
        </p>
      </section>

      {/* Demo Section */}
      <section className="container max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Demonstration</h2>
        <div className="grid grid-cols-1 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Full-Stack Web Application</h3>
            <div className="relative w-full h-[400px] mb-4">
              <Image 
                src="/images/projects/litewebagent/website_screenshot.png" 
                alt="LiteWebAgent Web Application Interface" 
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-800 dark:text-gray-200">
              The web application provides an interactive chat interface with voice integration and live-action visualization.
              The backend features asynchronous serverless API built with FastAPI and Playwright, allowing for efficient
              remote browser control and agent execution.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Chrome Extension</h3>
            <div className="relative w-full h-[400px] mb-4">
              <Image 
                src="/images/projects/litewebagent/chrome_extension_screenshot.png" 
                alt="LiteWebAgent Chrome Extension Interface" 
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-800 dark:text-gray-200">
              The Chrome extension allows users to control their local browser via the Chrome DevTools Protocol (CDP),
              offering enhanced privacy and personalized browser sessions. The intuitive user interface integrates
              directly within the browser environment, making it easy to issue commands and monitor agent actions.
            </p>
          </div>
        </div>
      </section>
      
      {/* System Architecture */}
      <section className="container max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">System Architecture</h2>
        <div className="relative w-full h-[500px] mb-6">
          <Image 
            src="/images/projects/litewebagent/system_design.png" 
            alt="LiteWebAgent System Architecture" 
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          The LiteWebAgent system consists of three main components:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Frontend</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Provides a user interface with parameter configuration options, a chat interface for issuing commands,
              and a browser interface that displays the agent&apos;s actions in real-time.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Backend</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Handles action generation and grounding, transforming natural language instructions into
              executable code that can be run in the browser environment.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Browser Environment</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Provides the execution environment for agent actions, with support for remote browsers,
              Chrome DevTools Protocol, and Chromium instances.
            </p>
          </div>
        </div>
      </section>
      
      {/* Agent Framework */}
      <section className="container max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Agent Framework</h2>
        <div className="relative w-full h-[500px] mb-6">
          <Image 
            src="/images/projects/litewebagent/agent_workflow.png" 
            alt="LiteWebAgent Agent Workflow" 
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-6">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Decoupled Action Generation and Grounding</h3>
            <p className="text-gray-800 dark:text-gray-200">
              LiteWebAgent decouples action generation from action grounding, allowing for greater flexibility
              and precision in controlling the web interaction process. Action generation uses a VLM to produce
              natural language actions via function calling or prompting, while action grounding transforms
              these natural language instructions into executable Playwright code using webpage observations.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Agent Planning</h3>
            <p className="text-gray-800 dark:text-gray-200">
              The framework supports various planning strategies, including basic function calling agents
              that leverage the LLM&apos;s planning ability, high-level planning agents that replan based on
              action execution trajectory, and context-aware high-level planning agents that incorporate
              environment observations into the planning process.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Agent Memory</h3>
            <p className="text-gray-800 dark:text-gray-200">
              LiteWebAgent incorporates Agent Workflow Memory (AWM) into both the initial plan generation
              and replanning steps, allowing the agent to reference relevant workflows and past experiences
              when executing tasks. This enables more effective task completion and error recovery.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Tree Search Capabilities</h3>
            <p className="text-gray-800 dark:text-gray-200">
              The framework includes implementations of various search algorithms, including Breadth-First
              Search (BFS), Depth-First Search (DFS), and Monte Carlo Tree Search (MCTS). These algorithms
              enable the agent to explore multiple trajectories and balance exploitation with exploration
              when navigating complex web environments.
            </p>
          </div>
        </div>
      </section>
      
      {/* Deployed Systems */}
      <section className="container max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Deployed Systems</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Vercel-based Web Application</h3>
            <p className="text-gray-800 dark:text-gray-200">
              A production-ready full-stack web application that provides users with an agent-controlled
              remote browser. The application features interactive chat with voice integration, live-action
              visualization, and an asynchronous serverless API built with FastAPI and Playwright.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Chrome Extension</h3>
            <p className="text-gray-800 dark:text-gray-200">
              A Chrome extension that leverages LiteWebAgent&apos;s API to control an existing Chrome browser
              via the Chrome DevTools Protocol (CDP). This approach offers enhanced privacy and personalized
              browser sessions, with an intuitive user interface integrated directly within the browser environment.
            </p>
          </div>
        </div>
      </section>
      
      {/* Get Started */}
      <section className="container max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Get Started</h2>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          Interested in trying LiteWebAgent? Our open-source implementation provides researchers and developers
          with a comprehensive toolkit for deploying VLM-based web agents in real-world applications.
        </p>
        <div className="flex justify-center">
          <Link href="https://github.com/PathOnAI/LiteWebAgent" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-lg">
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

export default LiteWebAgent;