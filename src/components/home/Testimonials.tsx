// import React from 'react';
import review1 from '../images/review1.jpeg';
import review2 from '../images/review2.jpeg'
const testimonials = [
  {
    content: "The hands-on training at Skillinduce was instrumental in landing my dream job.",
    author: "Priya S.",
    role: "Software Developer",
    image: review1
  },
  {
    content: "Their training program perfectly bridges the gap between academia and industry requirements.",
    author: "Rajesh K.",
    role: "IT Professional",
    image: review2
  }
];

export function Testimonials() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}