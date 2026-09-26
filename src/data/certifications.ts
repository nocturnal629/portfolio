import { Certification } from '@/types';

export const certifications: Certification[] = [
  {
    name: 'Certification Name',
    issuer: 'Issuing Organization',
    // logo: '/logos/issuing-organization.png', // optional — drop your own badge/logo in public/logos/
    date: 'Issued Month Year · Expires Month Year',
    link: 'https://www.credly.com/badges/your-badge-id/public_url',
  },
  {
    name: 'Another Certification',
    issuer: 'Another Organization',
    date: 'Issued Month Year',
  },
];
