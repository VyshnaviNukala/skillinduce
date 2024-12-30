// import { useState } from 'react';
// import emailjs from '@emailjs/browser';

// const SERVICE_ID = 'service_ffip1uw';
// const TEMPLATE_ID = 'template_82v28p4';
// const PUBLIC_KEY = 'd5vTWp8xCOo1XGLWO';

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   position: string;
//   experience: string;
//   resume: File | null;
//   coverLetter: string;
// }

// export function useEmailService() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const sendEmail = async (formData: FormData) => {
//     setLoading(true);
//     setError(null);  // Reset any previous errors

//     try {
//       const templateParams = {
//         to_name: 'Hiring Manager',
//         from_name: formData.name,
//         from_email: formData.email,
//         phone: formData.phone,
//         position: formData.position,
//         experience: formData.experience,
//         cover_letter: formData.coverLetter,
//         resume_filename: formData.resume?.name || 'No resume attached',
//       };

//       // If resume is attached, you may need to upload it and get a URL, then send it here
//       if (formData.resume) {
//         // If you're uploading to a server or storage, include the URL here
//         // templateParams.resume_url = resumeUrl; // Add your resume URL if uploading elsewhere
//       }

//       // Send the email via EmailJS
//       await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
//       alert('Application submitted successfully!');
//     } catch (err) {
//       setError('Error submitting application. Please try again later.');
//       console.error('Error sending email:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { sendEmail, loading, error };
// }
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_ffip1uw';
const TEMPLATE_ID = 'template_82v28p4';
const PUBLIC_KEY = 'd5vTWp8xCOo1XGLWO';

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  resumeLink: string;
  coverLetter: string;
}

export function useEmailService() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const sendEmail = async (formData: FormData) => {
    setLoading(true);
    setError(null);

    try {
      const templateParams = {
        to_name: 'Hiring Manager',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: formData.experience,
        cover_letter: formData.coverLetter,
        resume_link: formData.resumeLink,  // Use resumeLink as URL here
      };

      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log('EmailJS Response:', response); // Log response
      return response;
    } catch (err) {
      setError(err as Error);
      console.error('Error sending email:', err); // Log error
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading, error };
}
