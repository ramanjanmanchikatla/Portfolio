import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PlantCare - Plant Care Tracker",
      description:
        "Designed and developed a responsive web application using React to manage and track plant care routines. Enabled users to search plant care information by personality, user experience.",
      tech: ["React", "JavaScript", "CSS", "Plant Care API"],
      category: "Technical Project",
      code: "https://github.com/ramanjanmanchikatla/bloom-buddy/tree/main",
      demo: "https://bloom-buddy-one.vercel.app/",
    },
    {
      title: "CarboWise-Know-Your-Emissions",
      description:
        "CarboWise is a machine learning-powered tool that predicts CO₂ emissions of vehicles based on engine specs and fuel data. It uses linear regression for prediction and integrates a Large Language Model (LLM) via LangChain to explain results and answer follow-up questions in simple, human-friendly language.",
      tech: ["Machine Learning", "Langchain", "Rag", "sustainability"],
      category: "Technical Project",
      code: "https://github.com/ramanjanmanchikatla/CarboWise-Know-Your-Emissions",
      demo: "https://carbowise.streamlit.app/",
    },
    {
      title: "Legal Assistant RAG System",
      description:
        "Built a Retrieval-Augmented Generation (RAG) based legal assistant using LangChain for document retrieval. Employed multi-prompt LLMs and Pinecone for intelligent search and natural language understanding.",
      tech: ["LangChain", "RAG", "LLM", "Pinecone", "NLP"],
      category: "Legal Assistant RAG",
      code: "https://github.com/ramanjanmanchikatla/Legal-Assistant-RAG",
      demo: "https://courtmate.streamlit.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <div className="mb-4">
                  <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
