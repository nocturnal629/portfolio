import { SkillCategory } from '@/types';
import { DiPython, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPostgresql } from 'react-icons/di';
import { SiTypescript, SiGraphql, SiNextdotjs, SiFastapi, SiAmazon, SiGooglecloud, SiGit, SiDocker } from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai';
import { FaTools } from 'react-icons/fa';
import { BsCodeSlash, BsDatabase, BsCloud, BsGear } from 'react-icons/bs';
import { MdDevices } from 'react-icons/md';

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    icon: BsCodeSlash,
    skills: [
      { name: "Python", icon: DiPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: DiJavascript1 }
    ]
  },
  {
    name: "Frameworks",
    icon: MdDevices,
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: DiReact },
      { name: "Node.js", icon: DiNodejs },
      { name: "FastAPI", icon: SiFastapi }
    ]
  },
  {
    name: "APIs & Integration",
    icon: AiFillApi,
    skills: [
      { name: "REST APIs", icon: AiFillApi },
      { name: "GraphQL", icon: SiGraphql }
    ]
  },
  {
    name: "Databases",
    icon: BsDatabase,
    skills: [
      { name: "MongoDB", icon: DiMongodb },
      { name: "PostgreSQL", icon: DiPostgresql }
    ]
  },
  {
    name: "Cloud & Infrastructure",
    icon: BsCloud,
    skills: [
      { name: "AWS", icon: SiAmazon },
      { name: "GCP", icon: SiGooglecloud }
    ]
  },
  {
    name: "Tools & Practices",
    icon: FaTools,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "CI/CD", icon: BsGear },
      { name: "Docker", icon: SiDocker },
      { name: "Agile Development", icon: FaTools }
    ]
  }
];
