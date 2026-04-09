
import CareoxSection from "../components/CareoxSection/CareoxSection.";
import ExpertSection from "../components/ExpertSection/ExpertSection";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import ServicesSection from "../components/ServicesSection/ServiceSection";
import WhyCareox from "../components/WhyCareox/WhyCareox";
import HealConsciousSection from "../components/HealConsciousSection";


const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <CareoxSection/>
      <WhyCareox/>
      <ServicesSection/>
      <ExpertSection/>
      <HealConsciousSection/>
      
    </>
  );
};

export default Home;