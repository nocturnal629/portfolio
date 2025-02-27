import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import { projects } from '@/data/projects';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-40 h-40 relative">
            <Image 
              src="/images/profile.jpg"
              alt="nocturnal625"
              fill
              className="rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2 group relative">
              nocturnal625
              <span className="absolute opacity-0 group-hover:opacity-25 transition-opacity duration-800 delay-1000 text-xs bottom-0 right-0 text-teal-600 dark:text-teal-400">
                [type: nocturnal625]
              </span>
            </h1>
            <p className="text-xl mb-4">Software Developer & Automation Engineer</p>
            <p className="mb-4">Metropolitan Manila, Philippines</p>
            <p className="max-w-xl">Specializing in web3, blockchain solutions, and automation for gaming communities. Building meaningful digital experiences with Next.js and Python.</p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-12">
        <SectionTitle>Work Experience</SectionTitle>
        
        <div className="space-y-8">
          {/* Axie Infinity - Software Developer */}
          <div className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow
                      dark:bg-slate-800 dark:border-slate-700">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h3 className="text-xl font-semibold dark:text-white">Software Developer</h3>
              <div className="text-teal-600 dark:text-teal-400 font-medium">Oct 2022 - Present</div>
            </div>
            <div className="text-lg mb-3 dark:text-gray-300">Axie Infinity Limited</div>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Built internal tools with Retool/Jira/Google Sheet/Discord Bot</li>
              <li>Automated Discord community engagement for 200K+ users via Python bots</li>
              <li>Provided API/GraphQL support for team/developers and community members</li>
            </ul>
          </div>
          
          {/* Axie Infinity - Technical Support */}
          <div className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow
                      dark:bg-slate-800 dark:border-slate-700">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h3 className="text-xl font-semibold dark:text-white">Technical and Game Support</h3>
              <div className="text-teal-600 dark:text-teal-400 font-medium">Aug 2021 - Oct 2022</div>
            </div>
            <div className="text-lg mb-3 dark:text-gray-300">Axie Infinity Limited</div>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Provided support to 30K+ players via Discord and Zendesk tickets</li>
              <li>Monitored and moderated Discord channels and servers, resolving technical issues</li>
              <li>Created and maintained a knowledge base for player issues and game guides</li>
            </ul>
          </div>
        </div>
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
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2 text-teal-600 dark:text-teal-400">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">Python</span>
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">JavaScript</span>
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">GraphQL</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-teal-600 dark:text-teal-400">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">Next.js</span>
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">Tailwind CSS</span>
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">React</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2 text-teal-600 dark:text-teal-400">Backend/Tools</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">Node.js</span>
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">REST APIs</span>
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">MongoDB</span>
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">Docker</span>
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">Linux</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-teal-600 dark:text-teal-400">Web3</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">Web3.js</span>
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">Ether.js</span>
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">Smart Contracts/Solidity</span>
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">RPC</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-teal-600 dark:text-teal-400">Platforms</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">Jira</span>
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">Superset</span>
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">Vercel</span>
              <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">Retool</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}