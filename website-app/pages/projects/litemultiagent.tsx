import { NextPage } from 'next';
import SEO from "@/components/SEO";
import Image from "next/image";
import Link from "next/link";

const LiteMultiAgent: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
      <SEO 
        title="LiteMultiAgent - PathOnAI.org"
        description="The Open-Source Hierarchical Multi-Agent Framework"
      />
      
      {/* Hero Section */}
      <section className="container max-w-4xl mx-auto mb-12">
        <div className="text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-black dark:text-white">
            LiteMultiAgent
          </h1>
          <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">
            The Open-Source Hierarchical Multi-Agent Framework
          </h2>
          
          <div className="mb-6 text-gray-600 dark:text-gray-300">
            <p className="mb-2">
              <span className="font-semibold">Authors:</span> Danqing Zhang, Balaji Rama, Shiying He, Jingyi Ni
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              PathOnAI.org, University of Texas at Austin
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="https://github.com/PathOnAI/LiteMultiAgent" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <span className="mr-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </span>
              GitHub
            </Link>
            <Link href="https://pypi.org/project/litemultiagent/" className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors">
              <span className="mr-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16.948 11.088c1.615 0 2.743 0.6 2.743 2.049 0 1.509-1.148 2.089-2.743 2.089h-1.087v-4.137h1.087zm-3.32 9.315h2.232v-5.055h1.007c2.993 0 5.133-1.329 5.133-4.317 0-2.788-1.86-4.357-5.074-4.357h-3.298v13.73zM9.73 20.402h2.273V6.674H9.73v13.73zM5.993 6.674v13.73h2.253v-13.73H5.993z"/>
                </svg>
              </span>
              PyPI
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
          </div>
        </div>
      </section>
      
      {/* Abstract Section */}
      <section className="container max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Abstract</h2>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          We introduce LiteMultiAgent, an open-source hierarchical multi-agent framework for building 
          scalable and efficient agent systems. LiteMultiAgent addresses the limitations of existing 
          multi-agent frameworks by providing a flexible, hierarchical structure that enables efficient 
          task delegation, parallel execution, and specialized agent capabilities.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200 mt-4 mb-4 pl-4">
          <li className="mb-2"><span className="font-semibold">Hierarchical Agent Design:</span> A layered approach that categorizes agents with different tool sets into hierarchies for scalable task management.</li>
          <li className="mb-2"><span className="font-semibold">Tool Registry & Agent Factory:</span> Flexible system allowing users to register custom tools and create specialized agent hierarchies for different tasks.</li>
          <li className="mb-2"><span className="font-semibold">Composite Agent Architecture:</span> Enables agents to utilize both function tools and sub-agents as tools, with natural parallelization through function calling.</li>
        </ol>
        <p className="text-gray-800 dark:text-gray-200">
          LiteMultiAgent provides researchers and developers with a comprehensive toolkit for 
          creating efficient multi-agent systems that can handle complex, multi-domain tasks through 
          specialized agents working in a coordinated hierarchy.
        </p>
      </section>

      {/* Framework Overview Section */}
      <section className="container max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Framework Overview</h2>
        <div className="relative w-full h-[500px] mb-4">
          <Image 
            src="/images/projects/litemultiagent/visualization.png" 
            alt="LiteMultiAgent Framework Overview" 
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-800 dark:text-gray-200 text-center">
          The LiteMultiAgent framework presents a hierarchical approach to multi-agent systems, 
          enabling scalable and efficient task delegation across specialized agents.
        </p>
      </section>

      {/* Agent Types Section */}
      <section className="container max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Agent Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Atomic Agents</h3>
            <div className="relative w-full h-[250px] mb-4">
              <Image 
                src="/images/projects/litemultiagent/visualization_1.png" 
                alt="Atomic Agent Architecture" 
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-800 dark:text-gray-200">
              Atomic agents utilize function tools to perform specific tasks. These agents are the building 
              blocks of the hierarchy, specializing in particular domains or functionalities.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Composite Agents</h3>
            <div className="relative w-full h-[250px] mb-4">
              <Image 
                src="/images/projects/litemultiagent/visualization_2.png" 
                alt="Composite Agent Architecture" 
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-800 dark:text-gray-200">
              Composite agents can utilize both function tools and sub-agents as tools. This design enables 
              natural parallelization through function calling, as agents can delegate tasks to specialized sub-agents.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Function Calling Agents</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Designed to interact with tools through function calls, these agents excel at 
              executing specific, well-defined tasks within their domain of expertise.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">React Agents</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Implement a reasoning-action cycle for complex problem-solving, analyzing tasks, 
              planning solutions, and adapting to changing conditions during execution.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">High-Level Planning Agents</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Focus on strategic planning and task decomposition, breaking complex tasks into 
              simpler subtasks that can be delegated to specialized sub-agents.
            </p>
          </div>
        </div>
      </section>
      
      {/* System Architecture */}
      <section className="container max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">System Architecture</h2>
        <div className="relative w-full h-[500px] mb-6">
          <Image 
            src="/images/projects/litemultiagent/visualization.png" 
            alt="LiteMultiAgent System Architecture" 
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          The LiteMultiAgent system consists of three main components:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Tool Registry</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Centralized repository for registering and managing tools that agents can use. 
              Supports custom tool integration and standardizes tool interfaces across the system.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Agent Factory</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Creates specialized agents with specific tool sets and capabilities, 
              enabling the dynamic construction of agent hierarchies tailored to particular tasks.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Agent Manager</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Coordinates agent interactions and task delegation, managing the flow of information 
              through the hierarchy and ensuring efficient collaboration between agents.
            </p>
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="container max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Key Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Hierarchical Task Delegation</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Enables efficient management of complex tasks by breaking them down into subtasks 
              and delegating them to specialized agents, creating a scalable workflow for 
              multi-domain problem-solving.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Natural Parallelization</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Sub-agents can be executed in parallel through function calling, allowing multiple 
              tasks to be processed simultaneously and significantly improving overall system efficiency.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Flexible Integration</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Seamlessly integrates with other frameworks like LiteWebAgent, combining hierarchical 
              multi-agent capabilities with web browsing functionalities for enhanced system capabilities.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Extensible Architecture</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Designed for easy extension and customization, allowing researchers and developers 
              to add new agent types, tools, and specialized hierarchies to address unique requirements.
            </p>
          </div>
        </div>
      </section>
      
      {/* Implementation Examples */}
      <section className="container max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Implementation Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Multi-Domain Research Assistant</h3>
            <p className="text-gray-800 dark:text-gray-200">
              A hierarchical system of agents that can research topics across multiple domains, with specialized 
              agents for web search, document analysis, data visualization, and report generation working together 
              to produce comprehensive research outputs.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Task Automation System</h3>
            <p className="text-gray-800 dark:text-gray-200">
              A system that combines web automation capabilities with data processing and analysis tools, 
              enabling complex workflows that span multiple applications and services through a hierarchy 
              of specialized agents working in coordination.
            </p>
          </div>
        </div>
      </section>
      
      {/* Get Started */}
      <section className="container max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Get Started</h2>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          Interested in trying LiteMultiAgent? Our open-source implementation provides researchers and developers
          with a flexible framework for building efficient hierarchical multi-agent systems.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <pre className="text-sm text-gray-800 dark:text-gray-200">
            pip install litemultiagent
          </pre>
        </div>
        <div className="flex justify-center">
          <Link href="https://github.com/PathOnAI/LiteMultiAgent" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-lg">
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

export default LiteMultiAgent;