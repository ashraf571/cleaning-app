import React from "react";
import ServiceSection from "@/components/organisms/ServiceSection/ServiceSection";
import AboutSection from "@/components/organisms/AboutSection/AboutSection";
import TypesCleaning from "@/components/organisms/TypesCleaning/TypesCleaning";
import OurExperts from "@/components/organisms/OurExperts/OurExperts";
import Footer from "@/components/organisms/FooterSection/Footer";
import HomeCarousel from "@/components/organisms/HomeCarousel/HomeCarousel";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <AboutSection />
      <ServiceSection />
      <TypesCleaning />
      <OurExperts />
    </div>
  );
};

export default Home;
