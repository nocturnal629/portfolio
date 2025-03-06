import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return <h2 className="text-2xl md:text-3xl mb-6 font-bold">{children}</h2>;
};

export default SectionTitle;