const MissionVision = () => {
    return (
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center">
          {/* Section Heading */}
          <h2 className="text-3xl font-bold text-gray-800">
            Our Mission & Vision
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Guided by a commitment to excellence, our mission and vision define
            the core of our efforts to improve healthcare outcomes and enrich
            lives.
          </p>
  
          {/* Mission and Vision Details */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-blue-600">Our Mission</h3>
              <p className="mt-4 text-gray-600">
                To provide compassionate, high-quality healthcare services that
                improve the lives of our patients and the communities we serve.
                Our mission drives us to offer care that is accessible,
                innovative, and patient-centered.
              </p>
            </div>
  
            {/* Vision Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-blue-600">Our Vision</h3>
              <p className="mt-4 text-gray-600">
                To become a leading healthcare provider recognized for excellence
                in patient care, cutting-edge treatments, and a commitment to
                fostering a healthier future for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default MissionVision;
  