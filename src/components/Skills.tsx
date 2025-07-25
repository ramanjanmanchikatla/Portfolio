
import React from 'react';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "React", "Node.js"]
    },
    {
      icon: <Wrench size={24} />,
      title: "Web Technologies",
      skills: ["HTML/CSS", "Bootstrap", "Tailwind CSS", "Express.js", "RESTful APIs"]
    },
    {
      icon: <Database size={24} />,
      title: "Databases & Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma", "n8n", "NoSQL"]
    },
    {
      icon: <Brain size={24} />,
      title: "Soft Skills",
      skills: ["Problem-solving", "Team Collaboration", "Adaptability", "Willingness to Learn"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-600 dark:text-blue-400">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-gray-600 dark:text-gray-300">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
