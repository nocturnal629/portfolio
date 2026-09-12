import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // These paths don't exist — a legitimate crawler has no reason to
        // ever request something it's told not to. A bot that goes looking
        // anyway (many vulnerability scanners parse robots.txt for
        // "interesting" Disallow entries) trips the honeypot in
        // src/middleware.ts and gets logged.
        disallow: ['/private-backup/', '/internal-admin/', '/staff-portal/'],
      },
    ],
    host: 'https://www.nocturnal625.dev',
  };
}
