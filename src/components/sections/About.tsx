import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { skills } from '@/data/skills';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white/60 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
        <SectionTitle>About Me</SectionTitle>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
            Full Stack LLM Developer at Accenture, working at the intersection of backend engineering, cloud infrastructure, and applied AI. I architect and build AI-assisted systems end-to-end — from AWS infrastructure design and FastAPI backend services to agentic workflow development and frontend integration.
          </p>
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
            My recent work includes designing multi-agent AI pipelines on AWS Bedrock, building content moderation platforms with ECS, DynamoDB, and CloudFront, and engineering scalable backend services with Python, FastAPI, and PostgreSQL. I&apos;m also comfortable on the frontend, building with React, TypeScript, and Next.js. AWS Certified AI Practitioner and Claude Certified Developer Foundation.
          </p>
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
            Before AI became central to my work, I spent two years at Axie Infinity building automation tools and supporting a 50K+ user community, then sharpened my backend skills at FiberFin with OAuth 2.0, multi-tenant RBAC, and zero-downtime database migrations. I care about clean, maintainable code and building things that actually solve problems.
          </p>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            Outside of work, I tinker with robotics and explore cybersecurity as side interests — breaking and building things for fun. I also spend a lot of time in Valorant and League of Legends. If you&apos;re curious about my gaming profiles, try typing <span className="font-mono text-teal-600 dark:text-teal-400 font-medium">nocturnal625</span> on your keyboard. 🎮
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
