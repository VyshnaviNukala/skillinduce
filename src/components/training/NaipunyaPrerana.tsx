import React from 'react';
import { BookOpen, Users, Award, Briefcase } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Hands-on Training',
    description: 'Practical, industry-focused training with real-world projects'
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Guidance from industry professionals with years of experience'
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'Industry-recognized certification upon program completion'
  },
  {
    icon: Briefcase,
    title: 'Placement Support',
    description: 'Dedicated placement assistance with partner companies'
  }
];

export function NaipunyaPrerana() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Naipunya Prerana Program</h2>
          <p className="mt-4 text-xl text-gray-600">
            A comprehensive skill development program designed for career success
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}