import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const jobs = [
  {
    title: 'Technical Trainer',
    location: 'Hyderabad',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Experienced technical trainer needed to conduct IT training programs and develop curriculum.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      'Experience in software development and training',
      'Excellent communication skills',
      'Knowledge of modern web technologies'
    ]
  },
  {
    title: 'Placement Coordinator',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Looking for a dynamic placement coordinator to manage student placements and corporate relationships.',
    requirements: [
      'Previous experience in placement or HR',
      'Strong network of corporate connections',
      'Excellent negotiation skills',
      'Good understanding of IT industry'
    ]
  },
  {
    title: 'Content Developer',
    location: 'Remote',
    type: 'Full-time',
    experience: '2-3 years',
    description: 'Content developer needed to create training materials and documentation for technical courses.',
    requirements: [
      'Strong technical writing skills',
      'Experience in creating educational content',
      'Knowledge of e-learning platforms',
      'Attention to detail'
    ]
  }
];

export function JobListings() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Openings</h2>
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.title} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <div className="flex items-center mt-2 space-x-4">
                    <span className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {job.type}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.experience}
                    </span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}