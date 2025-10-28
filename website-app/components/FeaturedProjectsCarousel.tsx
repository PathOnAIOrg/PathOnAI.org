import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const projectData = [
  {
    id: 1,
    title: "VisualTreeSearch",
    description: "An intuitive interface for understanding web agent decision processes. Visualize and understand how web agents make decisions as they navigate complex tasks.",
    path: "/ai-agent-projects/visualtreesearch",
    imagePath: "/images/projects/visualtreesearch/visualtreesearch-architecture.png",
  },
  {
    id: 2,
    title: "LiteWebAgent",
    description: "An open-source suite for VLM-based web-agent applications. Build powerful web agents with vision-language models to automate web tasks.",
    path: "/ai-agent-projects/litewebagent",
    imagePath: "/images/projects/litewebagent/system_design.png",
  },
  {
    id: 3,
    title: "LiteMultiAgent",
    description: "LiteMultiAgent: The Library for LLM-based multi-agent applications.",
    path: "/ai-agent-projects/litemultiagent",
    imagePath: "/images/projects/litemultiagent/visualization.png",
  }
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
    <Card className="w-full max-w-4xl mb-16 mt-8 overflow-hidden relative isolate">
      <CardContent className="p-0">
        <h2 className="text-2xl font-bold px-6 pt-6 mb-4 text-black dark:text-white border-b pb-2">
          Featured Projects
        </h2>

        {/* Project Display - Better structure to avoid overlay issues */}
        <div className="flex flex-col">
          {/* Image container with fixed height instead of padding-top for better control */}
          <div className="relative h-64 w-full"> 
            <Image
              src={projectData[currentIndex].imagePath}
              alt={projectData[currentIndex].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            {/* Navigation controls */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={goToPrevious}
                className="h-full px-4 bg-black/20 hover:bg-black/40 transition-colors"
                aria-label="Previous project"
              >
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={goToNext}
                className="h-full px-4 bg-black/20 hover:bg-black/40 transition-colors"
                aria-label="Next project"
              >
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Navigation hint */}
            <div className="absolute inset-x-0 top-4 flex justify-center pointer-events-none">
              <div className="bg-black/60 text-white text-xs px-3 py-1 rounded-full flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Use arrows to navigate
              </div>
            </div>
          </div>

          {/* Text and button content - Now clearly separated from image section */}
          <div className="bg-black text-white px-6 py-4">
            <h3 className="text-2xl font-bold mb-2">{projectData[currentIndex].title}</h3>
            <p className="text-white/90 mb-4">{projectData[currentIndex].description}</p>
            <Link 
              href={projectData[currentIndex].path}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Learn More
              <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Pagination - Ensure it's outside other containers */}
          <div className="py-4 flex justify-center gap-2 bg-white dark:bg-gray-950">
            {projectData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-10 bg-blue-600' : 'w-3 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedProjectsCarousel;
