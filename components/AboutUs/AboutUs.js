import { getAccessToken } from "@/services/auth.service";
import { getAssets } from "@/utils/get-assets";
import Image from "next/image";

const AboutUs = () => {

  const btrc = getAssets.logo.btrc
  return (
    <section className="bg-pastel-blue py-12">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
         
          <Image
                        src={btrc}
                        alt="Hospital"
                        width={600}
                        height={400}
                        className=" w-60 h-60 transparent"
                      />
        </div>

        {/* About Us Content on the right */}
        <div className="ml-8 flex-1">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            The Beowarish Medical and Rehabilitation Center operates under the Beowarish Sewa Foundation,
            founded by the humanitarian visionary Md. Shawkat Hossain. Our foundation focuses on providing
            holistic care, including medical treatment, shelter, and emotional support to those abandoned by society.
          </p>

          {/* Card for team description */}
          <div className="mt-12 bg-gradient-to-r from-yellow-300 to-yellow-500 p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team of dedicated doctors, medical officers, and volunteers work tirelessly to offer care and hope
              to those who have no one else to turn to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
