
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-8">
            <a
              href="https://github.com/ramanjananamika"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ramanjananamika"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ramanjananamikafolkstc@gmail.com"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="flex items-center justify-center gap-2 text-gray-400">
              Made with <Heart className="text-red-500" size={16} /> by Ramanjan Manchikatla
            </p>
            <p className="text-gray-500 mt-2">
              © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
