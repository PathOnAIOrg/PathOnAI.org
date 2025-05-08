import { NextPage } from "next";
import SEO from "@/components/SEO";

const Intake: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
      <SEO
        title="General Interest Intake | PathOnAI.org"
        description="Submit your information to be considered for future opportunities, events, or collaborations with PathOnAI.org."
      />
      <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-black dark:text-white text-center">
        General Interest Intake
      </h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl">
        Submit your information to be considered for future opportunities, events, or collaborations with PathOnAI.org. We welcome interest from students, researchers, developers, and enthusiasts worldwide.
      </p>

      <div className="w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Interest Form</h2>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          Please fill out the form below to let us know about your interest in PathOnAI.org.
        </p>
        <div className="w-full h-[800px]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScnmSJhPWoqJ85vkWQNShomywPPNKLnm45LNUG4yfh_yJ9wTw/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="PathOnAI.org General Interest Intake"
            className="rounded-lg bg-white dark:bg-gray-900"
          >
            Loading…
          </iframe>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
        <p>
          For questions, email us at{" "}
          <a
            href="mailto:info@pathonai.org"
            className="underline text-blue-600 dark:text-blue-400"
          >
            info@pathonai.org
          </a>
        </p>
      </div>
    </div>
  );
};

export default Intake; 