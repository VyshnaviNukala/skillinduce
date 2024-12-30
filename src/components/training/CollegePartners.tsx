import React from 'react';

const colleges = [
  {
    name: 'Engineering Institute of Technology',
    location: 'Hyderabad',
    students: '500+',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Technical University',
    location: 'Bangalore',
    students: '300+',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Institute of Advanced Studies',
    location: 'Chennai',
    students: '400+',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  }
];

export function CollegePartners() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Partner Colleges</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {colleges.map((college) => (
            <div key={college.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{college.name}</h3>
                <p className="text-gray-600 mb-2">Location: {college.location}</p>
                <p className="text-blue-600">Students Trained: {college.students}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}