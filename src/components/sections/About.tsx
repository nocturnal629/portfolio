import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { skills } from '@/data/skills';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
        <SectionTitle>About Me</SectionTitle>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
            Software developer with growing expertise in TypeScript and React for modern web application development. Experienced in Python development, specializing in Discord bot creation and data analytics solutions. Recently transitioned into frontend development while maintaining strong backend skills in API development and database management.
          </p>
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
            Proficient in building responsive web applications using React and TypeScript, with experience in Next.js for full-stack development. Skilled in Python for creating Discord bots and performing data analysis tasks, including data processing, visualization, and insights generation. Experienced in working with both SQL and NoSQL databases, RESTful and GraphQL APIs, and cloud deployment solutions.
          </p>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            Strong foundation in software development principles with experience in version control, CI/CD practices, and collaborative development workflows. Passionate about creating clean, maintainable code and building user-friendly applications that solve real-world problems.
          </p>
          
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Skills</h3>
            
            <div className="space-y-8">
              {skills.map((category, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium mb-3 text-teal-600 dark:text-teal-400 flex items-center">
                    <category.icon className="mr-2 h-5 w-5" />
                    {category.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => {
                      const skillName = typeof skill === 'string' ? skill : skill.name;
                      const SkillIcon = typeof skill === 'string' ? null : skill.icon;
                      
                      return (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 flex items-center"
                        >
                          {SkillIcon && <SkillIcon className="mr-1.5 h-4 w-4" />}
                          {skillName}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
