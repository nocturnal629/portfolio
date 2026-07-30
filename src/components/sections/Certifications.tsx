import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import { certifications } from '@/data/certifications';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
        <SectionTitle>Certifications</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const inner = (
              <>
                <div className="flex-shrink-0">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{cert.name}</h3>
                  <p className="text-sm text-teal-600 dark:text-teal-400 mt-1">{cert.issuer}</p>
                  {cert.date && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{cert.date}</p>
                  )}
                </div>
              </>
            );

            const className =
              'flex flex-col items-center gap-4 p-6 rounded-lg shadow-sm bg-gradient-to-br from-white to-sky-100 hover:shadow-md transition-shadow dark:from-slate-800 dark:to-slate-800 dark:border-slate-700';

            return cert.link ? (
              <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className={className}>
                {inner}
              </a>
            ) : (
              <div key={index} className={className}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
