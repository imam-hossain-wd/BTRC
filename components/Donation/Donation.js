/* eslint-disable react/no-unescaped-entities */
import React from "react";

const DonatePage = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Support Our Cause</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Your donation helps provide food, treatment, and support to the
            unclaimed and homeless individuals in our community. Together, we
            can make a difference.
          </p>
        </div>

        {/* Donation Methods */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bkash */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800">Donate via Bkash</h3>
            <p className="mt-4 text-lg text-gray-600">
              Use the following Bkash number to make your donation.
            </p>
            <div className="mt-6 text-center">
              <p className="text-2xl font-bold text-blue-600">+880123456789</p>
            </div>
          </div>

          {/* Nagad */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800">Donate via Nagad</h3>
            <p className="mt-4 text-lg text-gray-600">
              You can also donate through Nagad using the number below.
            </p>
            <div className="mt-6 text-center">
              <p className="text-2xl font-bold text-orange-500">+880987654321</p>
            </div>
          </div>

          {/* Official Contact Number */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800">Official Contact</h3>
            <p className="mt-4 text-lg text-gray-600">
              For further inquiries or assistance, feel free to contact us via
              the following number.
            </p>
            <div className="mt-6 text-center">
              <p className="text-2xl font-bold text-green-600">+8801122334455</p>
            </div>
          </div>
        </div>

        {/* Donation Purpose */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800">How Your Donation Helps</h3>
          <p className="mt-4 text-lg text-gray-600">
            Your generous donation will go directly to supporting homeless and
            unclaimed individuals in need. Here's how your contribution makes a
            difference:
          </p>
          <ul className="mt-6 space-y-4 text-lg text-gray-600">
            <li>• Providing food and shelter for the homeless</li>
            <li>• Offering medical treatment and rehabilitation</li>
            <li>• Ensuring the basic living needs of unclaimed individuals</li>
            <li>• Providing emotional and psychological support for those in need</li>
          </ul>
          <p className="mt-6 text-lg text-gray-600">
            Every donation, no matter how big or small, makes a significant
            impact. Thank you for helping us make a difference.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Join us in making the world a better place. Your support can change
            lives.
          </p>
          <a
            href="/donate"
            className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonatePage;
