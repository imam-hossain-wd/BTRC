const AboutUs = () => {
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          {/* Section Header */}
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Learn more about our hospital, our history, values, and why we are
            committed to providing exceptional healthcare services to all.
          </p>
  
          {/* Introduction */}
          <div className="mt-12">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our hospital has been a trusted healthcare provider for many years,
              offering high-quality services to improve the health and well-being
              of our community. We are proud of our skilled team, compassionate
              care, and patient-first approach that has earned us a reputation for
              excellence.
            </p>
          </div>
  
          {/* History */}
          <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Our History</h3>
            <p className="mt-4 text-gray-600">
              Founded in 2000, we started as a small clinic with a commitment to
              providing high-quality medical care. Over the years, we have grown
              into a full-fledged hospital equipped with state-of-the-art
              technology, skilled professionals, and comprehensive services.
            </p>
          </div>
  
          {/* Achievements and Milestones */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Awarded Best Hospital</h3>
              <p className="mt-4 text-gray-600">
                In 2023, we were honored with the "Best Hospital of the Year"
                award, recognizing our commitment to patient care and excellence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">100,000+ Patients Served</h3>
              <p className="mt-4 text-gray-600">
                We are proud to have served over 100,000 patients since our
                inception, providing care to individuals from all walks of life.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">State-of-the-Art Facilities</h3>
              <p className="mt-4 text-gray-600">
                Our hospital features modern facilities, including a cutting-edge
                emergency room, fully equipped operating theaters, and advanced
                diagnostic equipment.
              </p>
            </div>
          </div>
  
  
          {/* Why Choose Us */}
          <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h3>
            <p className="mt-4 text-gray-600">
              We are dedicated to providing patient-centered care, leveraging
              advanced medical technologies, and offering a compassionate approach
              to healing. Our experienced team ensures that every patient receives
              the highest level of care, and our modern facilities guarantee the
              best outcomes.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  