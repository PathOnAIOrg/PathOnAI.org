import { NextPage } from "next";
import SEO from "@/components/SEO";
import Link from "next/link";
import { useState } from "react";

const opportunities = [
  {
    title: "Research Fellow – General Application",
    description:
      "Apply to join PathOnAI as a Research Fellow. We welcome applicants from all backgrounds interested in AGI, web agents, and multi-agent systems.",
    link: "/opportunities/research-fellow",
    linkLabel: "Apply Now",
    isModal: false,
  },
  {
    title: "Operations Fellow – General Application",
    description:
      "Support PathOnAI's mission by applying your skills in operations, project management, or community building. Open to all backgrounds.",
    link: "/opportunities/operations-fellow",
    linkLabel: "Apply Now",
    isModal: false,
  },
  {
    title: "General Interest Intake",
    description:
      "Submit your information to be considered for future opportunities, events, or collaborations with PathOnAI.",
    link: "/opportunities/intake",
    linkLabel: "Submit Info",
    isModal: false,
  },
  {
    title: "Collaborative Research",
    description:
      "We are open to collaborations with academic labs, industry partners, and independent researchers. Let's push the boundaries of AI together.",
    link: "#collab-modal",
    linkLabel: "Contact Us",
    isModal: true,
  },
];

const Opportunities: NextPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (op: typeof opportunities[0]) => {
    if (op.isModal) {
      setShowModal(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-gray-900 p-4 pt-24">
      <SEO
        title="Opportunities - PathOnAI.org"
        description="Join PathOnAI.org! Explore research fellowships, operations roles, general interest intake, and collaborative research."
      />
      <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-black dark:text-white text-center">
        Opportunities at PathOnAI.org
      </h1>
      <p className="mb-10 text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl">
        We are always looking for passionate individuals to join our mission. Whether you are a student, researcher, developer, or enthusiast, there are many ways to get involved!
      </p>
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {opportunities.map((op, idx) => (
          <div
            key={idx}
            className="border-2 border-blue-200 dark:border-blue-900 rounded-xl shadow-lg p-6 flex flex-col justify-between bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow"
          >
            <div>
              <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">{op.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{op.description}</p>
            </div>
            {op.isModal ? (
              <button
                onClick={() => handleCardClick(op)}
                className="inline-block mt-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-semibold text-center"
              >
                {op.linkLabel}
              </button>
            ) : (
              <Link
                href={op.link}
                target={op.link.startsWith("http") || op.link.startsWith("mailto") ? "_blank" : undefined}
                rel={op.link.startsWith("http") || op.link.startsWith("mailto") ? "noopener noreferrer" : undefined}
                className="inline-block mt-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-semibold text-center"
              >
                {op.linkLabel}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Modal for Collaborative Research */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Collaborative Research Contact</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              We welcome collaboration proposals from academic labs, industry partners, and independent researchers.
            </p>
            <div className="mb-2">
              <span className="font-semibold text-black dark:text-white">Email:</span>{" "}
              <a
                href="mailto:info@pathonai.org?subject=Collaboration%20Proposal"
                className="underline text-blue-600 dark:text-blue-400"
              >
                info@pathonai.org
              </a>
            </div>
            <div>
              <span className="font-semibold text-black dark:text-white">Discord:</span>{" "}
              <span className="text-gray-700 dark:text-gray-300">pathonai</span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
        <p>
          For general inquiries, email us at{" "}
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

export default Opportunities;
