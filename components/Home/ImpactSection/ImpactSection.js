import Image from "next/image";

const ImpactSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">Our Impact</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-5xl font-bold text-blue-600">80</h3>
            <p className="mt-2 text-lg text-gray-700">Total Patients</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-5xl font-bold text-blue-600">3</h3>
            <p className="mt-2 text-lg text-gray-700">Doctors</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-5xl font-bold text-blue-600">25</h3>
            <p className="mt-2 text-lg text-gray-700">Medical Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
