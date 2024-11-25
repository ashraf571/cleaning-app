import React from "react";
import ServiceSection from "@/components/organisms/ServiceSection/ServiceSection";
import AboutSection from "@/components/organisms/AboutSection/AboutSection";
import TypesCleaning from "@/components/organisms/TypesCleaning/TypesCleaning";
import OurExperts from "@/components/organisms/OurExperts/OurExperts";
import HomeCarousel from "@/components/organisms/HomeCarousel/HomeCarousel";
import TestinomialSlider from "@/components/organisms/TestinomialSlider/TestinomialSlider";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <AboutSection />
      <ServiceSection />
      <TypesCleaning />
      <OurExperts />
      <TestinomialSlider />
    </div>
  );
};

export default Home;
