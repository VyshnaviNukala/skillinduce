import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  technologies?: string[];
  duration?: string;
}

export function ProjectCard({ title, description, icon: Icon, technologies, duration }: ProjectCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {technologies && (
        <div className="mb-3">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      {duration && (
        <div className="text-sm text-gray-500">
          Duration: {duration}
        </div>
      )}
    </div>
  );
}