import { SkillCategory } from '@/types';
import { DiPython, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiLinux, DiRedis, DiPostgresql } from 'react-icons/di';
import { SiTypescript, SiGraphql, SiNextdotjs, SiFastapi, SiFlask, SiSupabase, SiAmazon, SiGooglecloud, SiGit, SiDocker, SiKubernetes, SiWordpress } from 'react-icons/si';
import { FaDatabase } from "react-icons/fa";
import { AiFillApi } from 'react-icons/ai';
import { FaTools } from 'react-icons/fa';
import { BsCodeSlash, BsDatabase, BsCloud, BsGear } from 'react-icons/bs';
import { MdDevices, MdWeb } from 'react-icons/md';

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
      { name: "Redis", icon: DiRedis },
      { name: "PostgreSQL", icon: DiPostgresql },
      { name: "Supabase", icon: SiSupabase },
      { name: "NeonDB", icon: FaDatabase }
    ]
  },
  {
    name: "Cloud & Infrastructure",
    icon: BsCloud,
    skills: [
      { name: "Linux Servers", icon: DiLinux },
      { name: "AWS", icon: SiAmazon },
      { name: "GCP", icon: SiGooglecloud }
    ]
  },
  {
    name: "CMS & Web Platforms",
    icon: MdWeb,
    skills: [
      { name: "WordPress", icon: SiWordpress },
      { name: "Elementor", icon: MdDevices }
    ]
  },
  {
    name: "Tools & Practices",
    icon: FaTools,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "CI/CD", icon: BsGear },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Agile Development", icon: FaTools }
    ]
  }
];