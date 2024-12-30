import React from 'react';
import { FileText, Activity, ClipboardList } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const itServices = [
  {
    title: 'XML Tagging',
    description: 'Professional XML tagging services with attention to detail and accuracy.',
    icon: FileText
  },
  {
    title: 'Medical Billing',
    description: 'Comprehensive medical billing solutions with strict compliance standards.',
    icon: Activity
  },
  {
    title: 'Births, Deaths & Marriages Registration',
    description: 'Efficient registration processing and documentation services.',
    icon: ClipboardList
  }
];

export function ITServices() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">IT-ITeS Sector Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {itServices.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

