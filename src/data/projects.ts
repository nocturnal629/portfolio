import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: "Care AI Agent",
    description: "An AI-powered virtual agent that handles customer care interactions end-to-end, from querying customer account data and service records to performing actions such as raising complaints, sending notifications, and escalating to live agents when needed.",
    tech: ["Python", "LangGraph", "Agentic AI", "REST APIs", "Azure DevOps"]
  },
  {
    title: "Image AI",
    description: "An AI-powered content moderation platform that validates and filters user-submitted images related to the Kumamon mascot character using multi-agent workflows.",
    tech: ["Python", "FastAPI", "React", "AWS ECS", "AWS Bedrock", "DynamoDB", "S3", "CloudFront", "Docker", "Gemini API", "Claude API"],
    link: "http://kumamon-alb-1722743874.ap-northeast-1.elb.amazonaws.com/"
  },
  {
    title: "Personal RAG",
    description: "A single-user RAG application for chatting with your own notes, PDFs, bookmarks, and articles, with streamed answers and inline citations pointing to exact source chunks.",
    tech: ["Next.js", "TypeScript", "Supabase", "pgvector", "Gemini API", "Tailwind CSS", "Vercel"],
    link: "https://github.com/nocturnal625/personal-RAG"
  },
  {
    title: "Delubyo",
    description: "An interactive text adventure game set in the Philippines during a typhoon disaster, where your choices shape the narrative in an immersive storytelling experience inspired by Lifeline and Firewatch.",
    tech: ["TypeScript", "Vite", "OpenAI API", "Claude API", "Gemini API", "Vercel"],
    link: "https://github.com/nocturnal625/Delubyo"
  },
  {
    title: "AuthentiCute",
    description: "User Authentication and Management System that provides secure login, registration, and user profile management capabilities.",
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "HTML", "Google OAuth", "Docker"],
    link: "https://github.com/nocturnal625/AuthentiCute"
  },
  {
    title: "Wild Forest Community API",
    description: "Lord NFT & Unit Perks API for Wild Forest Community developers and third-party integrations",
    tech: ["TypeScript", "Redis", "Vercel"]
  },
  {
    title: "Wild Forest Community",
    description: "A hub for tools made for the Wild Forest community by the Wild Forest community",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Redis", "Vercel"],
    link: "https://github.com/nocturnal625/wild-forest-community"
  },
  {
    title: "Sierra Weather Bot",
    description: "PH-timezone Discord weather alerts with command support",
    tech: ["Python", "NASA EONET API", "Matplotlib", "NumPy"],
    link: "https://github.com/nocturnal625/Sierra"
  },
  {
    title: "Outlanders",
    description: "A casual, adventure, and strategy-focused tower defense mobile video game that combines fun gameplay with learning about Philippine Literature, specifically Bugtong (Riddles), Alamat (Legends), Kwentong-bayan (Folktales), and Philippine Mythical Creatures",
    tech: ["C#", "Unity", "ShaderLab", "Mathematica", "HLSL"],
    link: "https://github.com/nocturnal625/Outlanders"
  }
];
