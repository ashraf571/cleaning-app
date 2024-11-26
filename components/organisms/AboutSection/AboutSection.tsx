import React from "react";
import AboutImagesContainer from "@/components/molecules/AboutImagesContainer/AboutImagesContainer";
import AboutContentContainer from "@/components/molecules/AboutContentContainer/AboutContentContainer";
const AboutSection = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 md:gap-14 mx-4 ml-0 py-5 w-full md:mx-auto max-w-[1200px]">
      <div className="px-4">
        <AboutImagesContainer />
      </div>
      <AboutContentContainer />
    </div>
  );
};

export default AboutSection;
