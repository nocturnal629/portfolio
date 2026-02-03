import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    title: "AI/ML & DevOps Engineer",
    company: "Accenture",
    period: "Dec 2025 - Present",
    logo: "/logos/accenture.png",
    responsibilities: [
      "Architected AWS environments using ECS, ECR, S3, and DynamoDB; configured VPC, ALB, and PrivateLink for secure networking to support an AI-assisted content moderation platform",
      "Designed FastAPI endpoints and scalable database schemas powering content upload and review workflows",
      "Managed IAM roles and permissions and established team development environments via AWS CodeCommit for the moderation platform's engineering team"
    ]
  },
  {
    title: "Python Backend Developer",
    company: "FiberFin",
    period: "Aug 2025 - Oct 2025",
    logo: "/logos/fiberfin.png",
    responsibilities: [
      "Architected data workflows with SQLAlchemy ORM and standardized API responses",
      "Implemented Alembic migrations for zero-downtime database updates",
      "Orchestrated Docker and Kubernetes containerization for multi-environment deployments",
      "Designed OAuth 2.0 authentication supporting Google and Sage Intacct integrations, with comprehensive token management, CSRF protection, and encrypted credential storage",
      "Implemented Casbin with combined ABAC and RBAC for multi-tenant hierarchies"
    ]
  },
  {
    title: "Software Developer",
    company: "Axie Infinity Limited",
    period: "Oct 2022 - Nov 2024",
    logo: "/logos/axie-infinity.png",
    responsibilities: [
      "Built internal tools with Retool/Jira/Google Sheets/Discord Bot",
      "Automated Discord community engagement for 50K+ users via Python bots",
      "Provided API/GraphQL and game development support for developers and community",
      "Designed automated workflows and business processes via Jira/Retool integrations",
      "Provided technical support to community builders, ensuring timely delivery to engineering"
    ]
  },
  {
    title: "Technical and Game Support",
    company: "Axie Infinity Limited",
    period: "Aug 2021 - Oct 2022",
    logo: "/logos/axie-infinity.png",
    responsibilities: [
      "Provided support to 30K+ players via Discord and Zendesk tickets",
      "Monitored and moderated Discord channels and servers, resolving technical issues and escalating complex cases to engineering teams",
      "Created and maintained a knowledge base for player issues and game guides",
      "Collaborated with cross-functional teams to improve game documentation and support workflows"
    ]
  }
];
