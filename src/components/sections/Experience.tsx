import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import { experiences } from '@/data/experience';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow
                        dark:bg-slate-800 dark:border-slate-700"
            >
              <div className="flex gap-4 mb-4">
                {exp.logo && (
                  <div className="flex-shrink-0">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={64}
                      height={64}
                      className="rounded-lg object-contain"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{exp.title}</h3>
                    <div className="text-teal-600 dark:text-teal-400 font-medium">{exp.period}</div>
                  </div>
                  <div className="text-lg mb-3 text-gray-600 dark:text-gray-300">{exp.company}</div>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                {exp.responsibilities?.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;