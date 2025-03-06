import { SkillCategory } from '@/types';
import { DiPython, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiDocker, DiLinux } from 'react-icons/di';
import { SiTypescript, SiGraphql, SiNextdotjs, SiTailwindcss, SiJira, SiVercel } from 'react-icons/si';
import { AiFillApi, AiFillHtml5 } from 'react-icons/ai';
import { FaEthereum, FaTools, FaServer } from 'react-icons/fa';
import { BsCodeSlash, BsFileEarmarkCode } from 'react-icons/bs';
import { RiDashboardFill } from 'react-icons/ri';

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    icon: BsCodeSlash,
    skills: [
      { name: "Python", icon: DiPython },
      { name: "JavaScript", icon: DiJavascript1 },
      { name: "TypeScript", icon: SiTypescript },
      { name: "GraphQL", icon: SiGraphql }
    ]
  },
  {
    name: "Frontend",
    icon: AiFillHtml5,
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: DiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML/CSS", icon: AiFillHtml5 }
    ]
  },
  {
    name: "Backend/Tools",
    icon: FaServer,
    skills: [
      { name: "Node.js", icon: DiNodejs },
      { name: "REST APIs", icon: AiFillApi },
      { name: "MongoDB", icon: DiMongodb },
      { name: "Docker", icon: DiDocker },
      { name: "Linux", icon: DiLinux }
    ]
  },
  {
    name: "Web3",
    icon: FaEthereum,
    skills: [
      { name: "Web3.js", icon: FaEthereum },
      { name: "Ether.js", icon: FaEthereum },
      { name: "Smart Contracts/Solidity", icon: BsFileEarmarkCode },
      { name: "RPC", icon: FaServer }
    ]
  },
  {
    name: "Platforms",
    icon: FaTools,
    skills: [
      { name: "Jira", icon: SiJira },
      { name: "Superset", icon: RiDashboardFill },
      { name: "Vercel", icon: SiVercel },
      { name: "Retool", icon: FaTools }
    ]
  }
];