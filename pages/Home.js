import AboutUs from "@/components/AboutUs/AboutUs";
import ContactUs from "@/components/Contact/Contact";
import HomeBanner from "@/components/Home/HomeBanner/HomeBanner";
import HospitalIntroduction from "@/components/Home/HospitalIntroduction/HospitalIntroduction";
import ImpactSection from "@/components/Home/ImpactSection/ImpactSection";
import MeetOurTeam from "@/components/Home/MeetOurTeam/MeetOurTeam";
import MissionVision from "@/components/Home/MissionVision/MissionVision";
import OurServices from "@/components/Home/OurServices/OurServices";
import OurHistory from "@/components/Ourhistory/OurHistory";
import WhyChooseUs from "@/components/WhyChooseus/WhyChooseus";



const HomePage = () => {
    return (
        <div>
            <HomeBanner />
            <HospitalIntroduction />
            <OurServices />
            <MissionVision />
            <ImpactSection />
            <MeetOurTeam />
            <ContactUs />
            <OurHistory />
            <WhyChooseUs />
            <AboutUs />
        </div>
    );
};

export default HomePage;