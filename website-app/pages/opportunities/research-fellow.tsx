import { NextPage } from "next";
import SEO from "@/components/SEO";

const ResearchFellow: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
      <SEO
        title="Research Fellow – General Application | PathOnAI.org"
        description="Apply to become a Research Fellow at PathOnAI.org. Learn about qualifications, expectations, and submit your application online."
      />
      <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-black dark:text-white text-center">
        Research Fellow – General Application
      </h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl">
        PathOnAI welcomes applications from passionate researchers interested in AGI, web agents, and multi-agent systems. As a Research Fellow, you will contribute to open-source projects, collaborate with a global team, and help advance the field of artificial intelligence.
      </p>

      <section className="w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Qualifications</h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
          <li>Background in computer science, artificial intelligence, machine learning, or a related field (students and professionals welcome).</li>
          <li>Experience with Python and/or modern AI/ML frameworks (e.g., PyTorch, TensorFlow, JAX).</li>
          <li>Strong problem-solving skills and a passion for open-source research.</li>
          <li>Ability to work independently and collaboratively in a remote, international team.</li>
          <li>Excellent written and verbal communication skills (English).</li>
        </ul>
      </section>

      <section className="w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Expectations</h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
          <li>Contribute to ongoing PathOnAI research projects and open-source codebases.</li>
          <li>Participate in regular team meetings and research discussions.</li>
          <li>Document your work and share findings with the community.</li>
          <li>Collaborate with other fellows, students, and contributors.</li>
          <li>Commit to a minimum engagement period (e.g., 3-6 months, flexible based on your availability).</li>
        </ul>
      </section>

      <div className="w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Application Form</h2>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          Please fill out the form below to apply for the Research Fellow position at PathOnAI.org.
        </p>
        <div className="w-full h-[1200px]">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeMz7KUHxtvNWq7-QjPoUPqESrCRLmqO_OsH7OwEY4-59886A/viewform?embedded=true"
                width="100%"
                height="1200"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Google Form"
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

export default ResearchFellow; 