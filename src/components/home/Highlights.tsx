import { Award, Users, TrendingUp, PartyPopper } from 'lucide-react';

export function Highlights() {
  const highlights = [
    {
      icon: <PartyPopper className="h-6 w-6" />,
      title: 'NSDC Registered Partner (TP)',
      description: 'Certified training provider recognized by National Skill Development Corporation',
    },
    {
      icon: < Award className="h-6 w-6" />,
      title: 'ISO 9001:2015 Certified Company',
      description: 'Skillinduce Private Limited is proud to be a globally recognized standard company for quality management systems.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Naipunya Prerana Program',
      description: 'Comprehensive skill development program with hands-on training',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Investment Opportunities',
      description: 'Join us in our mission to transform skill development in India',
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Key Highlights
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Skillinduce?
          </p>
        </div>

        <div className="mt-10">
          {/* Adjusted grid classes to have 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  {highlight.icon}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {highlight.title}
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}