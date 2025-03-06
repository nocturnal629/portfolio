import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon?: IconType;
}

export interface SkillCategory {
  name: string;
  icon: IconType;
  skills: Array<Skill | string>;
}