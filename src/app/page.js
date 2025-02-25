import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import { projects } from '@/data/projects';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <div className="w-32 h-32 mx-auto mb-4 relative">
          <Image 
            src="/images/profile.jpg"
            alt="nocturnal625"
            fill
            className="rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">nocturnal625</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">Software Developer & Automation Engineer</p>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <SectionTitle>Skills</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {/* Languages */}
          <span className="skill-badge">Python</span>
          <span className="skill-badge">JavaScript</span>
          <span className="skill-badge">GraphQL</span>

          {/* Frontend */}
          <span className="skill-badge">Next.js</span>
          <span className="skill-badge">Tailwind CSS</span>
          <span className="skill-badge">React</span>

          {/* Backend/Tools */}
          <span className="skill-badge">Node.js</span>
          <span className="skill-badge">REST APIs</span>
          <span className="skill-badge">MongoDB</span>
          <span className="skill-badge">Docker</span>
          <span className="skill-badge">Linux</span>

          {/* Web3 */}
          <span className="skill-badge">Web3.js</span>
          <span className="skill-badge">Ether.js</span>
          <span className="skill-badge">Smart Contracts</span>

          {/* Platforms */}
          <span className="skill-badge">Jira</span>
          <span className="skill-badge">Superset</span>
          <span className="skill-badge">Vercel</span>
          <span className="skill-badge">GitHub Actions</span>
        </div>
      </section>
    </main>
  );
}