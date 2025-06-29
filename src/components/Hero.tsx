
import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6">
            Ramanjan
            <span className="block text-blue-600 dark:text-blue-400">Manchikatla</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            AI Developer & Tech Enthusiast passionate about building innovative solutions 
            with cutting-edge technologies
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 shadow-md">
              Python
            </span>
            <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 shadow-md">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 shadow-md">
              React
            </span>
            <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 shadow-md">
              AI/ML
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/ramanjananamika"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ramanjananamika"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:ramanjananamikafolkstc@gmail.com"
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <Mail size={20} />
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
