import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SAR-Image Classification",
      description:
        "Developed a deep-learning-based SAR Automatic Target Recognition system using EfficientNet-B0 and transfer learning to classify MSTAR radar imagery across 8 target classes, with a custom neural-network classification head. Integrated with a FastAPI REST backend and React frontend, enabling SAR image uploads, confidence-based predictions, and an LLM-powered helper bot for context-aware explanations.",
      tech: ["EfficientNet-B0", "FastAPI", "React", "Deep Learning", "LLM"],
      category: "Deep Learning",
      code: "https://github.com/ramanjanmanchikatla/SAR_Image",
    },
    {
      title: "Multi-Agent Legacy Code Migration",
      description:
        "Built a 3-agent LLM pipeline (Analyzer → Migrator → Validator) using LangChain and Groq's LLaMA 3.3-70B to autonomously migrate legacy Java codebases to Python with automatic retry logic. Engineered custom agent tooling for static code analysis, syntax validation, and sandboxed execution with subprocess isolation and timeout enforcement.",
      tech: ["LangChain", "LLaMA 3.3-70B", "Groq", "Python", "Java"],
      category: "AI / LLM Agents",
      code: "https://github.com/ramanjanmanchikatla/Legacy-code-Migrator",
    },
    {
      title: "AI Career Navigator",
      description:
        "Built a career guidance platform with 219+ NSQF-aligned courses across 12 sectors that generates personalized learning paths based on user skills, education, and career goals. Developed a hybrid ML engine using Sentence-BERT embeddings, cosine similarity, and rule-based scoring. Integrated OpenRouter with Google Gemini fallback to dynamically generate assessments and perform skill-gap analysis.",
      tech: ["Sentence-BERT", "OpenRouter", "Google Gemini", "ML", "FastAPI"],
      category: "Machine Learning",
      code: "https://github.com/ramanjanmanchikatla/AI-deepfake-detection-and-Fact-Check-",
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
                    <span className="text-sm">GitHub</span>
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
