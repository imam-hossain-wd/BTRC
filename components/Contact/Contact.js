import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            We’d love to hear from you. Feel free to reach out to us for any
            inquiries or assistance.
          </p>
        </div>

        {/* Contact Form and Details */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-600 font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-600 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            {/* Google Map */}
            <div className="mb-6">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9179569092637!2d-122.40137818468191!3d37.79364287975617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808af1a3c4f9%3A0x3b0d12c7318b1b77!2sHospital!5e0!3m2!1sen!2sus!4v1615395563245!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>

            {/* Address, Phone, Email */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Get in Touch
              </h3>
              <p className="mt-4 text-gray-600">
                <strong>Address:</strong> 123 Healthcare Avenue, San Francisco,
                CA
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Email:</strong> contact@hospital.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
