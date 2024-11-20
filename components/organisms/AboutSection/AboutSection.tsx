import React from "react";
import AboutImagesContainer from "@/components/molecules/AboutImagesContainer/AboutImagesContainer";
import AboutContentContainer from "@/components/molecules/AboutContentContainer/AboutContentContainer";
const AboutSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 mx-10 py-5 ">
      <AboutImagesContainer />
      <AboutContentContainer />
    </div>
  );
};

export default AboutSection;
