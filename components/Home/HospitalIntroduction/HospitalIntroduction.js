import { getAssets } from "@/utils/get-assets";
import Image from "next/image";

const HospitalIntroduction = () => {

    const hospital = getAssets.hospital.hospital2;
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Hospital Image */}
        <div className="md:w-1/2">
          <Image
            src={hospital} // Replace with your hospital image path
            alt="Hospital Building"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Hospital Details */}
        <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
          <h2 className="text-3xl font-semibold text-gray-800">
            About Our Hospital
          </h2>
          <p className="mt-4 text-lg text-gray-600">
          Bewarish Treatment & Rehabilitation Center is committed to providing compassionate care
            and exceptional medical services. Established in [Year], we have
            been serving our community with advanced healthcare and
            rehabilitation solutions.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Equipped with state-of-the-art facilities and an expert team of
            professionals, we ensure every patient receives personalized care in
            a comfortable environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HospitalIntroduction;
