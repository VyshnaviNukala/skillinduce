
// import React, { useState } from 'react';


// // Assuming the useEmailService hook is already set up
// import  {useEmailService}  from '../hooks/useEmailService'; 

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   position: string;
//   experience: string;
//   resumeLink: string;
//   coverLetter: string;
// }

// export default function ApplicationForm() {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     phone: '',
//     position: '',
//     experience: '',
//     resumeLink: '',
//     coverLetter: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       // Call the sendEmail function here
//       const { sendEmail } = useEmailService();  // Assuming you have useEmailService hook
//       await sendEmail(formData);
//       alert('Application sent successfully!');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('There was an error submitting your application.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold mb-6 text-center">Job Application Form</h2>
      
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-lg font-medium mb-2">Full Name:</label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="email" className="block text-lg font-medium mb-2">Email:</label>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="phone" className="block text-lg font-medium mb-2">Phone:</label>
//         <input
//           type="text"
//           name="phone"
//           id="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="position" className="block text-lg font-medium mb-2">Position Applied For:</label>
//         <input
//           type="text"
//           name="position"
//           id="position"
//           value={formData.position}
//           onChange={handleChange}
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="experience" className="block text-lg font-medium mb-2">Experience:</label>
//         <input
//           type="text"
//           name="experience"
//           id="experience"
//           value={formData.experience}
//           onChange={handleChange}
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="resumeLink" className="block text-lg font-medium mb-2">Resume Link (Google Drive or Dropbox):</label>
//         <input
//           type="text"
//           name="resumeLink"
//           id="resumeLink"
//           value={formData.resumeLink}
//           onChange={handleChange}
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="coverLetter" className="block text-lg font-medium mb-2">Cover Letter:</label>
//         <textarea
//           name="coverLetter"
//           id="coverLetter"
//           value={formData.coverLetter}
//           onChange={handleChange}
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//       </div>

//       <div className="flex justify-center">
//         <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
//           Submit Application
//         </button>
//       </div>
//     </form>
//   );
// }

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useEmailService } from '../hooks/useEmailService';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FormTextArea } from './FormTextArea';

import { positions } from '../data/FormData';

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resumeLink: '',  // Resume link (Google Drive, Dropbox, etc.)
    coverLetter: '',
  });

  const { sendEmail, loading, error } = useEmailService();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form Submitted:', formData); // Log form data before sending

    if (!formData.name || !formData.email || !formData.position || !formData.experience) {
      alert('Please fill out all required fields.');
      return;
    }

    try {
      await sendEmail(formData);
      console.log('Email sent successfully');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        resumeLink: '',
        coverLetter: '',
      });
      alert('Application submitted successfully!');
    } catch (err) {
      console.error('Error submitting application:', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (error) {
    return (
      <div className="text-red-600 text-center py-12">
        Error submitting application. Please try again later.
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
              label="Full Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <FormInput
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormSelect
                label="Position Applied For"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                options={positions}
                required
              />

              <FormInput
                label="Years of Experience"
                name="experience"
                type="text"
                value={formData.experience}
                onChange={handleInputChange}
                required
              />
            </div>

            <FormInput
              label="Resume Link (Google Drive or Dropbox)"
              name="resumeLink"
              type="text"
              value={formData.resumeLink}
              onChange={handleInputChange}
              // placeholder="Paste your resume link here"
              required
            />

            <FormTextArea
              label="Cover Letter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              rows={4}
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <Send className="h-4 w-4 mr-2" />
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
