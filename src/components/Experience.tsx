
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="text-blue-600 dark:text-blue-400" size={20} />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        AI Developer Intern, Viswam.AI
                      </h3>
                    </div>
                    
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      2021
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>May 2025 – June 2025</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>Remote</span>
                      </div>
                    </div>
                    
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li>• Collaborated with a team in a 4-week intensive open-source program.</li>
                      <li>• Fine-tuned a 7 B parameter LLM on domain-specific corpora, for scalability and raising F1-score from 0.71 to 0.76 (7% uplift).</li>
                      <li>• Hands on experience on the Huggingface platform and the Google Colab (Free GPU).</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Extra-Curricular Activities
                </h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Actively involved in extra-curricular activities, including participating in NSS (National Service Scheme)</li>
                  <li>• Participated in cultural events and social awareness programs</li>
                  <li>• Member of Dharma IT, the technical club of IT department, where I engaged in workshops, coding contests, and technology-oriented collaborative skills</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
