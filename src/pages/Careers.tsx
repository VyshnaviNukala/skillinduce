// import React from 'react';
import { JobListings } from '../components/careers/JobListings';
import  {ApplicationForm}  from '../components/careers/ApplicationForm';

export default function Careers() {
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Join Our Team</h1>
          <p className="mt-4 text-xl text-gray-600">
            Be part of our mission to transform skill development and education
          </p>
        </div>
      </div>
      <JobListings />
      <ApplicationForm />
    </div>
  );
}