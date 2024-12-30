import React from 'react';

interface Partner {
  name: string;
  logo: string;
  description: string;
}

const partners: Partner[] = [
  {
    name: 'Wipro',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
    description: 'Strategic partnership for technology training and placement programs.'
  },
  {
    name: 'Excella',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
    description: 'Collaboration on innovative IT solutions and internship opportunities.'
  }
];

export function PartnershipShowcase() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Partners</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center bg-white p-6 rounded-lg shadow-md">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-24 h-24 object-cover rounded-lg mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}