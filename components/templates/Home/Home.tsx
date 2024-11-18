import React from "react";
import Topbar from "@/components/organisms/Topbar/Topbar";
import ServiceSection from "@/components/organisms/ServiceSection/ServiceSection";
import AboutSection from "@/components/organisms/AboutSection/AboutSection";
import TypesCleaning from "@/components/organisms/TypesCleaning/TypesCleaning";
import OurExperts from "@/components/organisms/OurExperts/OurExperts";

const Home = () => {
  return (
    <div>
      <Topbar />
      <AboutSection />
      <ServiceSection />
      <TypesCleaning />
      <OurExperts />
    </div>
  );
};

export default Home;
