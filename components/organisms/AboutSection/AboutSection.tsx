import React from "react";
import AboutImagesContainer from "@/components/molecules/AboutImagesContainer/AboutImagesContainer";
import AboutContentContainer from "@/components/molecules/AboutContentContainer/AboutContentContainer";
const AboutSection = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-14 mx-5 md:mx-10 py-5 ">
      <AboutImagesContainer />
      <AboutContentContainer />
    </div>
  );
};

export default AboutSection;
