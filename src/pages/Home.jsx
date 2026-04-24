import { useState, useEffect } from "react";
import CareoxSection from "../components/CareoxSection/CareoxSection.";
import ExpertSection from "../components/ExpertSection/ExpertSection";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import ServicesSection from "../components/ServicesSection/ServiceSection";
import WhyCareox from "../components/WhyCareox/WhyCareox";
import HealConsciousSection from "../components/HealConsciousSection";
import ConnectPage from "./Connect";

const Home = () => {
  const [showConnect] = useState(() => {
    const navigatedFromOtherPage = sessionStorage.getItem("hc_visited_other");
    sessionStorage.removeItem("hc_visited_other");
    return !navigatedFromOtherPage;
  });

  if (showConnect) {
    return <ConnectPage />;
  }

  return <HomeSections />;
};

export function HomeSections() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <CareoxSection />
      <WhyCareox />
      <ServicesSection />
      <ExpertSection />
      <HealConsciousSection />
    </>
  );
}

export default Home;