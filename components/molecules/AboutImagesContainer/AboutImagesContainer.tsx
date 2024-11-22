import React from "react";
import MovingImage from "@/components/atoms/MovingImage/MovingImage";

import MenCleanerImage from "@/assets/images/MenCleaner.jpg";
import WomenCleanerImage from "@/assets/images/WomenCleaner.jpg";
import Image from "next/image";

const AboutImagesContainer = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
      {/* <MovingImage image={peopleCleaning.src} />
      <MovingImage image={womanCleaning.src} /> */}

      <Image
        src={MenCleanerImage}
        alt="MenCleaner"
        className="h-auto w-full md:w-[314px]"
      />
      <div className="relative mt-3 md:mt-12 bg-red500">
        <Image
          src={WomenCleanerImage}
          alt="WomenCleaner"
          className="h-full md:h-auto w-full md:w-[314px] "
        />

        <div className="flex flex-col bg-skyblue items-center justify-center p-5 w-32 md:w-44 absolute bottom-0 md:bottom-8 lg:bottom-14 right-0 ">
          <div className="flex gap-2 text-cyanblue items-center">
            <span className="font-bold text-2xl md:text-4xl">10</span>
            <span className="font-bold text-lg mt-1">+</span>
          </div>

          <span className="text-cyanblue text-base">Years Of Experience</span>
        </div>
      </div>
    </div>
  );
};

export default AboutImagesContainer;
