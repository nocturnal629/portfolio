import { SkillCategory } from '@/types';
import { DiPython, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiLinux, DiRedis, DiPostgresql } from 'react-icons/di';
import { SiTypescript, SiGraphql, SiNextdotjs, SiFastapi, SiFlask, SiSupabase, SiAmazon, SiGooglecloud, SiGit, SiDocker, SiKubernetes } from 'react-icons/si';
import { FaDatabase } from "react-icons/fa";
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
      { name: "TypeScript", icon: SiTypescript }
    ]
  },
  {
    name: "Frameworks",
    icon: MdDevices,
    skills: [
      { name: "React", icon: DiReact },
      { name: "Flask", icon: SiFlask }
    ]
  },
  {
    name: "APIs & Integration",
    icon: AiFillApi,
    skills: [
      { name: "REST APIs", icon: AiFillApi }
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
      { name: "AWS", icon: SiAmazon }
    ]
  },
  {
    name: "Tools & Practices",
    icon: FaTools,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Agile Development", icon: FaTools }
    ]
  }
];