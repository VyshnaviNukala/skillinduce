import React from 'react';
import { Code, Database, FileSpreadsheet } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Enterprise Data Management',
    description: 'Large-scale data management solution for a Fortune 500 company, handling millions of records efficiently.',
    icon: Database,
    technologies: ['SQL', 'Python', 'AWS'],
    duration: '8 months'
  },
  {
    title: 'Healthcare Analytics Platform',
    description: 'Advanced analytics platform for processing and analyzing medical billing data with strict HIPAA compliance.',
    icon: FileSpreadsheet,
    technologies: ['React', 'Node.js', 'MongoDB'],
    duration: '12 months'
  },
  {
    title: 'Government Registry System',
    description: 'Digital transformation of civil registration system with secure document management.',
    icon: Code,
    technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
    duration: '10 months'
  }
];

export function ProjectOverview() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}