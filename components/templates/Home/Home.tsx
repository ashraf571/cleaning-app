import React from "react";
import Topbar from "@/components/organisms/Topbar/Topbar";
import ServiceSection from "@/components/organisms/ServiceSection/ServiceSection";
import AboutSection from "@/components/organisms/AboutSection/AboutSection";

const Home = () => {
  return (
    <div>
      <Topbar />
      <AboutSection />
      <ServiceSection />
    </div>
  );
};

export default Home;
