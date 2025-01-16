const WhyChooseUs = () => {
    return (
      <section className="bg-pastel-pink py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: 24/7 Medical Support */}
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-white">24/7 Medical Support</h3>
              <p className="mt-4 text-white">
                Our dedicated team provides round-the-clock medical attention and care.
              </p>
            </div>
  
            {/* Card 2: Compassion-Driven Care */}
            <div className="bg-gradient-to-r from-teal-400 to-teal-600 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-white">Compassion-Driven Care</h3>
              <p className="mt-4 text-white">
                Every service we provide is motivated by empathy and humanitarian values.
              </p>
            </div>
  
            {/* Card 3: Highly Trained Medical Team */}
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-white">Highly Trained Medical Team</h3>
              <p className="mt-4 text-white">
                Our professional doctors, health officers, and caregivers ensure the highest quality care.
              </p>
            </div>
  
            {/* Card 4: Proven Impact */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-white">Proven Impact</h3>
              <p className="mt-4 text-white">
                Successfully rescued, treated, and reunited multiple individuals with their families.
              </p>
            </div>
  
            {/* Card 5: Holistic Services */}
            <div className="bg-gradient-to-r from-pink-400 to-pink-600 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-white">Holistic Services</h3>
              <p className="mt-4 text-white">
                From medical care to rehabilitation and emotional support, we cover every aspect of well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  