"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import AboutImagesContainer from "@/components/molecules/AboutImagesContainer/AboutImagesContainer";
import AboutContentContainer from "@/components/molecules/AboutContentContainer/AboutContentContainer";

const AboutSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 mx-4 ml-0 py-5 w-full md:mx-auto max-w-[1200px] transform transition-all duration-700 ${
        inView ? "animate-zoomOut" : "scale-50 opacity-0"
      }`}
    >
      <div className="flex justify-center max-w-[full] ">
        <AboutImagesContainer />
      </div>
      <AboutContentContainer />
    </div>
  );
};

export default AboutSection;
