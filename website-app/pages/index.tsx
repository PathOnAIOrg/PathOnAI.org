import { Card, CardContent } from "@/components/ui/card"
import SEO from "@/components/SEO"
import JsonLd from '@/components/JsonLd'

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

              {/* Researchers & Collaborators */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-700 dark:text-purple-300">Researchers & Collaborators</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Yaoyao Qian</p>
                    <p className="text-sm">Researcher</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Shiying He</p>
                    <p className="text-sm">Researcher</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Yuanli Wang</p>
                    <p className="text-sm">Researcher</p>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Jingyi Ni</p>
                    <p className="text-sm">Researcher</p>
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
                    <p className="font-semibold">Jinda Zhang</p>
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
                    <p className="font-semibold">Riely(Yun) Zong</p>
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