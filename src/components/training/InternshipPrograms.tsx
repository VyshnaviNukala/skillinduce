import React from 'react';
import { Calendar, Clock, Users, Award } from 'lucide-react';

const programs = [
  {
    title: 'Software Development',
    duration: '6 months',
    seats: '25 per batch',
    certification: 'Industry recognized certification'
  },
  {
    title: 'Data Analytics',
    duration: '4 months',
    seats: '20 per batch',
    certification: 'Professional certification'
  },
  {
    title: 'Digital Marketing',
    duration: '3 months',
    seats: '30 per batch',
    certification: 'Google certification'
  }
];

export function InternshipPrograms() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Internship Opportunities</h2>
          <p className="mt-4 text-xl text-gray-600">
            Gain practical experience with our structured internship programs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.title} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{program.title}</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  Duration: {program.duration}
                </li>
                <li className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  {program.seats}
                </li>
                <li className="flex items-center text-gray-600">
                  <Award className="h-5 w-5 text-blue-600 mr-2" />
                  {program.certification}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}