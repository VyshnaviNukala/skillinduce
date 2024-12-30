import React from 'react';
import { Award, Building } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const governmentPrograms = [
  {
    title: 'PMKVY Training',
    description: 'Pradhan Mantri Kaushal Vikas Yojana certified training programs for skill development.',
    icon: Award
  },
  {
    title: 'MSME Initiatives',
    description: 'Specialized training and development programs for Micro, Small & Medium Enterprises.',
    icon: Building
  }
];

export function GovernmentPrograms() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Government Training Programs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {governmentPrograms.map((program) => (
            <ServiceCard
              key={program.title}
              title={program.title}
              description={program.description}
              icon={program.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}