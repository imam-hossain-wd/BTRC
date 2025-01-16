// import { getAssets } from "@/utils/get-assets";
// import Image from "next/image";

// const OurServices = () => {

//   const { medicalteam,
//     rehabilitation,
//     support,
//     doctor,
//     ambulance,
//     time } = getAssets.icon
//   const services = [
//     {
//       icon: rehabilitation,
//       title: "Rescue and Rehabilitation",
//       description:
//         "We rescue vulnerable individuals from the streets and provide them with shelter, medical care, and emotional support.",
//     },
//     {
//       icon: medicalteam,
//       title: "Free Medical Treatment",
//       description:
//         "We offer free treatment to those in need, ensuring access to essential healthcare services.",
//     },
//     {
//       icon: time,
//       title: "24/7 Medical Team",
//       description:
//         "Our dedicated medical team monitors patient health conditions around the clock to ensure their well-being.",
//     },
//     {
//       icon: doctor,
//       title: "Professional Doctor Services",
//       description:
//         "Highly qualified doctors provide expert medical advice and treatment for patients.",
//     },
//     {
//       icon: ambulance,
//       title: "Free Ambulance Service",
//       description:
//         "We provide free ambulance services, including transporting deceased bodies anywhere in Bangladesh.",
//     },
//     {
//       icon: support,
//       title: "Support for the Helpless",
//       description:
//         "We extend a helping hand to the helpless by offering food, shelter, and necessary support, including fitting artificial limbs (মানুষের কৃত্রিম পা লাগায় দি).",
//     },
//   ];

//   return (
//     <section className="bg-gradient-to-b from-pink-100 to-blue-100 py-12">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-4xl font-extrabold text-gray-800">Our Services</h2>
//         <p className="mt-4 text-lg text-gray-700">
//           We provide a wide range of humanitarian and medical services to support those in need.
//         </p>
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 border-t-4 border-blue-200 hover:border-blue-400"
//             >
//               <div className="flex justify-center items-center bg-blue-100 w-16 h-16 rounded-full mx-auto">
//                 <Image
//                   src={service.icon}
//                   alt={service.title}
//                   width={40}
//                   height={40}
//                   className="object-contain"
//                 />
//               </div>
//               <h3 className="mt-6 text-2xl font-bold text-blue-700">
//                 {service.title}
//               </h3>
//               <p className="mt-4 text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurServices;


import { getAssets } from "@/utils/get-assets";
import Image from "next/image";

const OurServices = () => {
  const {
    medicalteam,
    rehabilitation,
    support,
    doctor,
    ambulance,
    disaster,
    wheelchair,
    artificialLimb,
    surgery,
    infection,
  } = getAssets.icon;

  const services = [
    {
      icon: medicalteam,
      title: "Completely Free Medical Care",
      description:
        "Providing free treatment, shelter, food, and care for abandoned individuals.",
    },
    {
      icon: ambulance,
      title: "Free Transportation of Deceased Bodies",
      description:
        "Assisting families with the transportation of deceased individuals, especially from ICU facilities.",
    },
    {
      icon: doctor,
      title: "Artificial Limb Support",
      description:
        "Providing prosthetic limbs to those who are physically challenged.",
    },
    {
      icon: rehabilitation,
      title: "Wheelchair Distribution",
      description:
        "Distributing wheelchairs to individuals with physical and mental disabilities.",
    },
    {
      icon: doctor,
      title: "Critical Medical Operations Support",
      description:
        "Covering medical expenses for the underprivileged requiring major surgeries.",
    },
    {
      icon: medicalteam,
      title: "Treatment for Severely Infected Individuals",
      description:
        "Providing regular care for patients with severe infections, including those with maggot-infested wounds.",
    },
    // {
    //   icon: medicalteam,
    //   title: "Disaster Relief Aid",
    //   description:
    //     "Standing with vulnerable communities during national disasters and emergencies.",
    // },
  ];

  return (
    <section className="bg-gradient-to-b from-pink-100 to-blue-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">Our Services</h2>
        <p className="mt-4 text-lg text-gray-700">
          At Beowarish Medical and Rehabilitation Center, we are committed to offering a wide range of humanitarian services.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 border-t-4 border-blue-200 hover:border-blue-400"
            >
              <div className="flex justify-center items-center bg-blue-100 w-16 h-16 rounded-full mx-auto">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-blue-700">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;