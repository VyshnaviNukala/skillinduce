// import React from 'react';
import { Target, Heart, Users } from 'lucide-react';
import ganesh from '../components/images/ganesh.jpeg';
import rambabu from '../components/images/rambabu.jpeg';
import krishna from '../components/images/krishna.jpeg'
const directors = [
  {
    name: 'Mr. Ganesh Marla',
    role: 'Director',
    bio: 'A visionary leader with over 15 years of experience in skill development and training.',
    image: ganesh
  },
  {
    name: 'Mr. Lakkimsetti Tulasi Krishna',
    role: 'Director',
    bio: 'Expert in corporate training and placement with a decade of industry experience.',
    image: krishna
  },
  {
    name: 'Mr. Jagu Rambabu',
    role: 'Director',
    bio: 'Specializes in government partnerships and skill development initiatives.',
    image: rambabu
  }
];

export default function About() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become the leading skill development organization, transforming lives through quality training and placement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Empowering individuals with industry-relevant skills and creating sustainable employment opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Excellence', 'Innovation', 'Integrity'].map((value) => (
              <div key={value} className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Directors */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {directors.map((director) => (
              <div key={director.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{director.name}</h3>
                  <p className="text-blue-600 mb-4">{director.role}</p>
                  <p className="text-gray-600">{director.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}