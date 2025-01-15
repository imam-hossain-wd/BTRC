import AboutUs from "@/components/AboutUs/AboutUs";
import ContactUs from "@/components/Contact/Contact";
import HomeBanner from "@/components/Home/HomeBanner/HomeBanner";
import HospitalIntroduction from "@/components/Home/HospitalIntroduction/HospitalIntroduction";
import MeetOurTeam from "@/components/Home/MeetOurTeam/MeetOurTeam";
import MissionVision from "@/components/Home/MissionVision/MissionVision";
import OurServices from "@/components/Home/OurServices/OurServices";



const HomePage = () => {
    return (
        <div>
            <HomeBanner />
            <HospitalIntroduction />
            <OurServices />
            <MissionVision />
            <MeetOurTeam />
            <ContactUs />
            <AboutUs />
        </div>
    );
};

export default HomePage;