import { Card, CardContent } from "@/components/ui/card"
import SEO from "@/components/SEO"
import JsonLd from '@/components/JsonLd'

const Home = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PathOnAI.org",
    "url": "https://pathonai.org",
    "logo": "https://pathonai.org/logo.png",
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
          PathOnAI.org is an open-source non-profit AI research organization focused on advancing AI agent technology. Our mission is to democratize state-of-the-art AI methods, making them more accessible and easier to implement.
        </p>
        <p className="leading-7 mb-12 text-black dark:text-white max-w-2xl text-center">
          We provide a flexible framework that empowers developers to create their own AI agents efficiently.
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
        </div>
      </div>
    </>
  );
};

export default Home;