import { Card, CardContent } from "@/components/ui/card"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-black dark:text-white">
        Welcome to PathOnAI.org 👋
      </h1>
      <p className="leading-7 mb-6 text-black dark:text-white max-w-3xl text-center">
        PathOnAI.org is an open-source non-profit AI research organization focused on advancing AI agent technology. Our mission is to democratize state-of-the-art AI methods, making them more accessible and easier to implement.
      </p>
      <p className="leading-7 mb-12 text-black dark:text-white max-w-2xl text-center">
        We provide a flexible framework that empowers developers to create their own AI agents efficiently.
      </p>
      
      <div className="w-full max-w-4xl space-y-8">
        <Card className="border-2 border-blue-200 dark:border-blue-900 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Current Projects</h2>
            <ul className="text-black dark:text-white space-y-4">
              <li className="flex items-start">
                <span className="font-semibold mr-2">🤖 LiteGUIAgent:</span>
                <span className="text-gray-600 dark:text-gray-300">A library for VLM-based computer control agent. To be released.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">🌐 LiteWebAgentTreeSearch:</span>
                <span className="text-gray-600 dark:text-gray-300">To be released.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200 dark:border-green-900 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Past Projects</h2>
            <ul className="text-black dark:text-white space-y-4">
              <li className="flex items-start">
                <span className="font-semibold mr-2">👥 LiteMultiAgent:</span>
                <span className="text-gray-600 dark:text-gray-300">A library for LLM-based multi-agent applications.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">🌍 LiteWebAgent:</span>
                <span className="text-gray-600 dark:text-gray-300">A library for LLM-based web-agent applications.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">📚 Awesome AI Agents:</span>
                <span className="text-gray-600 dark:text-gray-300">Collection of Materials on AI Agents.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">💻 Natural Language Terminal:</span>
                <span className="text-gray-600 dark:text-gray-300">Takes a natural language command and directly calls into the OS.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;