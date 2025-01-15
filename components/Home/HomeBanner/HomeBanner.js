// import Image from "next/image";
// import { getAssets } from "@/utils/get-assets";

// const HomeBanner = () => {

//     const hospital = getAssets.hospital.hospital4
//     return (
//         <div>
//             <div className="">
//                 <Image
//                     src={hospital}
//                     alt="Hospital"
//                     width={600}
//                     height={400}
//                     className="shadow-lg w-full h-[700px] cover"
//                 />
//             </div>
//         </div>
//     );
// };

// export default HomeBanner;


import Image from "next/image";
import { getAssets } from "@/utils/get-assets";

const HomeBanner = () => {
  const hospital = getAssets.hospital.hospital4;

  return (
    <div className="relative w-full h-[700px]">
      {/* Background Image */}
      <Image
        src={hospital}
        alt="Hospital"
        layout="fill"
        objectFit="cover"
        className="shadow-lg w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        {/* Welcome Message */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Hospital
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl">
          Dedicated to providing compassionate care and rehabilitation services
          to those in need. Together, we can make a difference.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-6 flex space-x-4">
          <a
            href="/about"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Learn More
          </a>
          <a
            href="/donate"
            className="bg-gray-100 text-blue-600 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
