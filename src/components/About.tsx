
import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a curious, tech-infatuated individual with a strong interest in AI automation, 
                web development, and user-centric design. Experienced in building responsive applications 
                using React, Python, and no-code tools like n8n.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Passionate about solving system bottlenecks to solve real-world problems, 
                with expertise in enhancing system performance, optimizing user experiences, 
                and developing innovative solutions with a continuous drive to learn and innovate.
              </p>
              
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                <MapPin size={18} />
                <span>Hyderabad, India</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Calendar size={18} />
                <span>Available for opportunities</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Education</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Bachelor's of Engineering</h4>
                    <p className="text-gray-600 dark:text-gray-300">Vasavi College of Engineering</p>
                    <p className="text-sm text-gray-500">CGPA: 8.9 | Expected 2027</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Intermediate</h4>
                    <p className="text-gray-600 dark:text-gray-300">Narayana Junior College</p>
                    <p className="text-sm text-gray-500">Marks: 963 / 1000 | 2021-2023</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Secondary School</h4>
                    <p className="text-gray-600 dark:text-gray-300">Bhashyam Blooms High School</p>
                    <p className="text-sm text-gray-500">CGPA: 10.0 | 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
