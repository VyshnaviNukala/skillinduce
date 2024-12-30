import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const corporatePrograms = [
  {
    title: 'Corporate Internship Programs',
    description: 'Structured internship programs designed to bridge the gap between academia and industry.',
    icon: Briefcase
  },
  {
    title: 'Placements Assistance',
    description: 'Comprehensive placement support with industry-leading companies.',
    icon: GraduationCap
  }
];

export function CorporatePrograms() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Corporate Programs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {corporatePrograms.map((program) => (
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