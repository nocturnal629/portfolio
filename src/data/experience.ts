import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    title: "Your Job Title",
    company: "Your Company Name",
    period: "Start Date - Present",
    // logo: "/logos/your-company.png", // optional — drop your own logo in public/logos/
    roles: [
      {
        label: "[Role Title]",
        responsibilities: [
          "Describe your key responsibilities and achievements in this role",
          "Highlight specific technologies or methodologies you used"
        ]
      },
      {
        label: "[Another Role Title]",
        responsibilities: [
          "Use multiple roles to show a promotion or a shift in responsibilities at the same company",
          "Quantify your impact where possible (e.g., improved performance by X%)"
        ]
      }
    ]
  },
  {
    title: "Previous Job Title",
    company: "Previous Company Name",
    period: "Start Date - End Date",
    responsibilities: [
      "List your main responsibilities in this role",
      "Include any notable projects or achievements",
      "Mention technologies or tools you worked with",
      "Describe any growth or learning experiences"
    ]
  }
];
