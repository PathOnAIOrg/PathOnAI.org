import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const projectData = [
  {
    id: 1,
    title: "VisualTreeSearch",
    description: "An intuitive interface for understanding web agent decision processes. Visualize and understand how web agents make decisions as they navigate complex tasks.",
    path: "/projects/visualtreesearch",
    imagePath: "/images/projects/visualtreesearch/visualtreesearch-architecture.png",
    borderColor: "border-blue-200 dark:border-blue-900"
  },
  {
    id: 2,
    title: "LiteWebAgent",
    description: "An open-source suite for VLM-based web-agent applications. Build powerful web agents with vision-language models to automate web tasks.",
    path: "/projects/litewebagent",
    imagePath: "/images/projects/litewebagent/system_design.png",
    borderColor: "border-green-200 dark:border-green-900"
  },
  {
    id: 3,
    title: "LiteMultiAgent",
    description: "LiteMultiAgent: The Library for LLM-based multi-agent applications.",
    path: "/projects/litemultiagent",
    imagePath: "/images/projects/litemultiagent/visualization.png",
    borderColor: "border-green-200 dark:border-green-900"
  },
];

const FeaturedProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = projectData.length - 1;

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-4xl mb-16 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-black dark:text-white border-b pb-2">
        Featured Projects
      </h2>
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        {/* Navigation Controls */}
        <div className="absolute inset-y-0 left-0 flex items-center z-30">
          <button
            onClick={goToPrevious}
            className="h-full px-4 bg-black/20 hover:bg-black/40 transition-colors focus:outline-none"
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center z-30">
          <button
            onClick={goToNext}
            className="h-full px-4 bg-black/20 hover:bg-black/40 transition-colors focus:outline-none"
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {/* Project Carousel */}
        <div className="w-full">
          <div className="w-full">
            <div className="relative aspect-[16/9] w-full bg-gray-200 dark:bg-gray-700">
              {/* Fallback if Image fails */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl font-bold text-gray-400">{projectData[currentIndex].title[0]}</div>
              </div>
              <Image
                src={projectData[currentIndex].imagePath}
                alt={projectData[currentIndex].title}
                fill
                className="object-cover z-10"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              {/* Navigation Instruction Overlay */}
              <div className="absolute inset-x-0 top-4 flex justify-center pointer-events-none z-30">
                <div className="bg-black/60 text-white text-xs px-3 py-1 rounded-full flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  Use arrows to navigate
                </div>
              </div>
              {/* Overlay with content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">{projectData[currentIndex].title}</h3>
                <p className="text-white/90 mb-4">{projectData[currentIndex].description}</p>
                <Link 
                  href={projectData[currentIndex].path}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-fit"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {projectData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'w-10 bg-blue-600' : 'w-3 bg-white/80 dark:bg-gray-500/80 hover:bg-white dark:hover:bg-gray-400'
              }`}
              aria-label={`Go to project ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectsCarousel; 