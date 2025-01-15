import { getAssets } from "@/utils/get-assets";
import Image from "next/image";

const MeetOurTeam = () => {

    const {ratan, showkat, tayub} = getAssets.team
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      photo: showkat, // Replace with actual photo paths
      bio: "Dr. Sarah leads our medical team with over 15 years of experience in patient care and hospital management.",
    },
    {
      name: "John Doe",
      role: "Rehabilitation Specialist",
      photo: tayub, // Replace with actual photo paths
      bio: "John is dedicated to helping patients regain independence through personalized rehabilitation programs.",
    },
    {
      name: "Emily Smith",
      role: "Mental Health Counselor",
      photo: ratan, // Replace with actual photo paths
      bio: "Emily specializes in providing compassionate mental health support and counseling to patients and families.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of professionals works tirelessly to ensure the
            best care and support for our patients.
          </p>
        </div>

        {/* Team Members */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="flex flex-col items-center">
                {/* Member Photo */}
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full shadow-lg"
                />

                {/* Member Details */}
                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-blue-600">{member.role}</p>
                <p className="mt-4 text-gray-600 text-center">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
