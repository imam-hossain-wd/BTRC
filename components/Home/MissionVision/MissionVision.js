const MissionVision = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-white to-pink-100 py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Our Mission & Vision</h2>
        <p className="mt-2 text-lg text-gray-700 max-w-4xl mx-auto">
          At Beowarish Medical and Rehabilitation Center, our mission and vision drive us to bring hope and change to those who need it most.
        </p>

        {/* Mission and Vision Details */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-.01M12 12h.01M19.07 4.93a10.04 10.04 0 010 14.14A10.04 10.04 0 014.93 4.93a10.04 10.04 0 0114.14 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-blue-600">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To provide free medical treatment, shelter, and rehabilitation services to the abandoned and helpless, restoring their dignity and ensuring their well-being.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-pink-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-.01M12 12h.01M19.07 4.93a10.04 10.04 0 010 14.14A10.04 10.04 0 014.93 4.93a10.04 10.04 0 0114.14 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-pink-600">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              To create a compassionate society where no individual is left untreated, uncared for, or abandoned due to financial hardship or critical health conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;