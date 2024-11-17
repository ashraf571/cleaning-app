import React from "react";
import AboutSection from "@/components/organisms/AboutSection/AboutSection";
import Topbar from "@/components/organisms/Topbar/Topbar";
import ServiceSection from "@/components/organisms/ServiceSection/ServiceSection";

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
