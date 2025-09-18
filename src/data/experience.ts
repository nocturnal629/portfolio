import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    title: "Python Backend Developer",
    company: "FiberFin",
    period: "Aug 2025 - Present",
    responsibilities: [
      "Architected data workflows with SQLAlchemy ORM and standardized response models, improving API consistency across services",
      "Implemented Alembic migrations enabling zero-downtime database updates with full version control",
      "Orchestrated Docker and Kubernetes containerization for seamless multi-environment deployments and improved scalability",
      "Designed and implemented secure OAuth 2.0 authentication system supporting Google, Sage Intacct, Facebook, and Microsoft 365 integrations with comprehensive token management, CSRF protection, and encrypted credential storage"
    ]
  },
  {
    title: "Software Developer",
    company: "Axie Infinity Limited",
    period: "Oct 2022 - Nov 2024",
    responsibilities: [
      "Built internal tools with Retool/Jira/Google Sheet/Discord Bot",
      "Automated Discord community engagement for 50K+ users via Python bots",
      "Provided API/GraphQL and game development support for team/developers and community members",
      "Designed automated workflows and business processes via Jira/Retool integrations",
      "Provided technical and communication support to community builders, ensuring timely delivery of builds to engineering"
    ]
  },
  {
    title: "Technical and Game Support",
    company: "Axie Infinity Limited",
    period: "Aug 2021 - Oct 2022",
    responsibilities: [
      "Provided support to 30K+ players via Discord and Zendesk tickets",
      "Monitored and moderated Discord channels and servers, resolving technical issues",
      "Created and maintained a knowledge base for player issues and game guides"
    ]
  }
];
