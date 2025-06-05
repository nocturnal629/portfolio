import { SkillCategory } from '@/types';
import { DiPython, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiLinux, DiRedis, DiPostgresql } from 'react-icons/di';
import { SiTypescript, SiGraphql, SiNextdotjs, SiFastapi, SiFlask, SiSupabase, SiAmazon, SiGooglecloud, SiGit, SiDocker } from 'react-icons/si';
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
      { name: "JavaScript", icon: DiJavascript1 },
      { name: "GraphQL", icon: SiGraphql }
    ]
  },
  {
    name: "Frameworks",
    icon: MdDevices,
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: DiReact },
      { name: "Node.js", icon: DiNodejs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Flask", icon: SiFlask }
    ]
  },
  {
    name: "Databases",
    icon: BsDatabase,
    skills: [
      { name: "MongoDB", icon: DiMongodb },
      { name: "Redis", icon: DiRedis },
      { name: "PostgreSQL", icon: DiPostgresql },
      { name: "Supabase", icon: SiSupabase }
    ]
  },
  {
    name: "Cloud & Infrastructure",
    icon: BsCloud,
    skills: [
      { name: "Linux Servers", icon: DiLinux },
      { name: "AWS", icon: SiAmazon },
      { name: "GCP", icon: SiGooglecloud },
      { name: "REST/GraphQL APIs", icon: AiFillApi }
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