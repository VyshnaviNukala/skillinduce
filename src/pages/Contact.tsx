import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Subject"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Your Message"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">Phone & Email</h2>
            <p className="mt-2">
              <strong>Phone:</strong> +91 8844070896
            </p>
            <p>
              <strong>Email:</strong> info@skillinduce.co.in
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Our Office</h2>
            <p className="mt-2">
              64-4-11/7, II & III Floos,
              Pratap Nagar,
              <br />
              Kakinada-533004
              <br />
              Andhra Pradesh, India
            </p>
          </div>

          {/* Google Maps */}
          <div>
            <h2 className="text-2xl font-semibold">Find Us on Google Maps</h2>
            <iframe
              className="w-full h-64 rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.920602965237!2d-122.41941518468206!3d37.7749292797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581bf4896e9e1%3A0xc885f6c4468b7c4c!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sin!4v1695579207189!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
