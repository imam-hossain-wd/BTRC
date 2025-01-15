import Image from "next/image";

const OurServices = () => {
  const services = [
    {
      icon: "/assets/icons/emergency.svg", // Replace with your icon path
      title: "Emergency Care",
      description:
        "Immediate assistance for critical medical conditions, available 24/7.",
    },
    {
      icon: "/assets/icons/rehabilitation.svg", // Replace with your icon path
      title: "Rehabilitation Services",
      description:
        "Helping patients regain independence with comprehensive rehabilitation programs.",
    },
    {
      icon: "/assets/icons/long-term-care.svg", // Replace with your icon path
      title: "Long-Term Care",
      description:
        "Providing ongoing support for patients with chronic health conditions.",
    },
    {
      icon: "/assets/icons/diagnostics.svg", // Replace with your icon path
      title: "Diagnostic Services",
      description:
        "Advanced diagnostic solutions to identify and treat medical conditions.",
    },
    {
      icon: "/assets/icons/specialized-care.svg", // Replace with your icon path
      title: "Specialized Care",
      description:
        "Expert care tailored to specific medical needs and conditions.",
    },
    {
      icon: "/assets/icons/mental-health.svg", // Replace with your icon path
      title: "Mental Health Support",
      description:
        "Comprehensive mental health care, counseling, and support services.",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600">
          We provide a wide range of medical and rehabilitation services to
          cater to diverse healthcare needs.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={64}
                height={64}
                className="mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold text-blue-600">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
