"use client";
import React from "react";
import MenCleanerImage from "@/assets/images/MenCleaner.jpg";
import WomenCleanerImage from "@/assets/images/WomenCleaner.jpg";
import Image from "next/image";
import { Tilt } from "react-tilt";

const AboutImagesContainer = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mx-4">
      <Tilt options={{ max: 10, scale: 1, speed: 400 }}>
        <Image
          src={MenCleanerImage}
          alt="Animated"
          draggable={false}
          className="w-full md:w-[314px]"
          style={{
            transition: "all 0.6s ease-out",
            transformOrigin: "center",
          }}
        />
      </Tilt>
      <div className="relative mt-3 md:mt-12 w-full">
        {/* Wrapper for Image to maintain responsive layout */}
        <div className="relative w-full">
          <Tilt options={{ max: 10, scale: 1, speed: 400 }}>
            <Image
              src={WomenCleanerImage}
              alt="Animated"
              draggable={false}
              className="w-full  md:w-[314px] h-auto" // Ensures image scales responsively
              style={{
                transition: "all 0.6s ease-out",
                transformOrigin: "center",
              }}
            />
          </Tilt>

          {/* Bottom-right corner div */}
          <div className="flex flex-col bg-skyblue items-center justify-center py-5 px-3 w-32 md:w-44 absolute bottom-0 right-0 ">
            <div className="flex gap-2 text-cyanblue items-center">
              <span className="font-bold text-2xl md:text-4xl">0</span>
              <span className="font-bold text-lg mt-1">+</span>
            </div>
            <span className="text-cyanblue text-base w-full text-center">
              Years Of Experience
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImagesContainer;
