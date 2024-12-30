// import React from 'react';
import { NaipunyaPrerana } from '../components/training/NaipunyaPrerana';
import { CollegePartners } from '../components/training/CollegePartners';
import { InternshipPrograms } from '../components/training/InternshipPrograms';

export default function Training() {
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Training Programs</h1>
          <p className="mt-4 text-xl text-gray-600">
            Empowering careers through comprehensive training and hands-on experience
          </p>
        </div>
      </div>
      <NaipunyaPrerana />
      <CollegePartners />
      <InternshipPrograms />
    </div>
  );
}