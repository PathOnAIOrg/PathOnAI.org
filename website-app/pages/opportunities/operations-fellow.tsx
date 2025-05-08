import { NextPage } from "next";
import SEO from "@/components/SEO";

const OperationsFellow: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
      <SEO
        title="Operations Fellow – General Application | PathOnAI.org"
        description="Apply to become an Operations Fellow at PathOnAI.org. Learn about qualifications, expectations, and submit your application online."
      />
      <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-black dark:text-white text-center">
        Operations Fellow – General Application
      </h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl">
        PathOnAI welcomes applications from individuals interested in supporting our mission through operations, project management, and community building. As an Operations Fellow, you will help ensure the smooth running of our open-source research community and projects.
      </p>

      <section className="w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Qualifications</h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
          <li>Interest or experience in operations, project management, community building, or related fields.</li>
          <li>Strong organizational and communication skills.</li>
          <li>Ability to work independently and as part of a remote, international team.</li>
          <li>Proactive attitude and willingness to take initiative.</li>
          <li>Familiarity with open-source or research communities is a plus.</li>
        </ul>
      </section>

      <section className="w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Expectations</h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
          <li>Support the planning and execution of PathOnAI projects and events.</li>
          <li>Help coordinate communication among team members and contributors.</li>
          <li>Assist with documentation, onboarding, and community engagement.</li>
          <li>Contribute to the continuous improvement of our operational processes.</li>
          <li>Commit to a minimum engagement period (e.g., 3-6 months, flexible based on your availability).</li>
        </ul>
      </section>

      <div className="w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Application Form</h2>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          Please fill out the form below to apply for the Operations Fellow position at PathOnAI.org.
        </p>
        <div className="w-full h-[900px]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdX6y7CJOXsMMxEdi1Y0KChPvO_Kg823k8wV1tp2SfLLjEi9w/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="PathOnAI.org Operations Fellow Application"
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

export default OperationsFellow; 