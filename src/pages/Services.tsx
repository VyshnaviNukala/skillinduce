// import React from 'react';
import { ITServices } from '../components/services/ITServices';
import { GovernmentPrograms } from '../components/services/GovernmentPrograms';
import { CorporatePrograms } from '../components/services/CorporatePrograms';

export default function Services() {
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions for skill development and career growth
          </p>
        </div>
      </div>
      <ITServices />
      <GovernmentPrograms />
      <CorporatePrograms />
    </div>
  );
}