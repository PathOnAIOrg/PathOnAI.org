import { Card, CardContent } from "@/components/ui/card"

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-black dark:text-white">
        Our Services
      </h1>
      <p className="leading-7 mb-12 text-black dark:text-white max-w-3xl text-center">
        PathOnAI offers various services to help organizations leverage AI agent technology.
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

        <Card className="border-2 border-yellow-200 dark:border-yellow-900 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Technical Consulting</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Expert guidance on implementing AI agent technology in your organization.
            </p>
            <ul className="text-black dark:text-white space-y-2 list-disc pl-5">
              <li>AI agent architecture design</li>
              <li>Implementation strategy</li>
              <li>Performance optimization</li>
              <li>Custom agent development</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-200 dark:border-red-900 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b pb-2">Educational Resources</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We provide educational materials to help developers understand and implement AI agent technology.
            </p>
            <ul className="text-black dark:text-white space-y-2 list-disc pl-5">
              <li>Technical documentation</li>
              <li>Tutorials and guides</li>
              <li>Code examples</li>
              <li>Best practices</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services; 