import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import ProjectCard from '@/components/ui/ProjectCard';
import Button from '@/components/ui/Button';
import { projects } from '@/data/projects';

const Projects: React.FC = () => {
  const displayedProjects = projects.slice(0, 9);
  
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-gray-800 dark:text-gray-200">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button 
            href="https://github.com/yourusername?tab=repositories" 
            variant="primary"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;