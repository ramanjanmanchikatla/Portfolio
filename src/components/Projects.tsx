
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Bitman Buddy - Plant Care Tracker",
      description: "Designed and developed a responsive web application using React to manage and track plant care routines. Enabled users to search plant care information by personality, user experience.",
      tech: ["React", "JavaScript", "CSS", "Plant Care API"],
      category: "Technical Project"
    },
    {
      title: "Smart Dashboard for Monitoring Solutions",
      description: "Implemented advanced web monitoring solutions using n8n.io for data collection, visualization and analysis. Built a dashboard interface to monitor website conditions, alert-side automation scheduler.",
      tech: ["n8n.io", "Dashboard", "Monitoring", "Automation"],
      category: "Technical Project"
    },
    {
      title: "Legal Assistant RAG System",
      description: "Built a Retrieval-Augmented Generation (RAG) based legal assistant using LangChain for document retrieval. Employed multi-prompt LLMs and Pinecone for intelligent search and natural language understanding.",
      tech: ["LangChain", "RAG", "LLM", "Pinecone", "NLP"],
      category: "Legal Assistant RAG"
    },
    {
      title: "Google Gemini Chat Model Integration",
      description: "Developed a web app using React and NodeJS CSR to create personalized cover letters dynamically. Completed by a specific backend using API and integrated the Google Gemini Chat Model and Tasty API.",
      tech: ["React", "Node.js", "Google Gemini", "API Integration"],
      category: "AI Integration"
    },
    {
      title: "AdSense Content Generation Website",
      description: "Automated AdSense content generation via webhooks and serverless deployment on Vercel.",
      tech: ["Webhooks", "Vercel", "Content Generation", "AdSense"],
      category: "Content Automation"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
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
                    <span key={techIndex} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </button>
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
