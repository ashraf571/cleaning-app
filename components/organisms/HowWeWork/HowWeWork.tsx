"use client";

import React from "react";
import { motion } from "framer-motion";
import mediumCleaning from "@/assets/images/mediumCleaning.jpg";
import personOfficeCleaning from "@/assets/images/person-taking-care-office-cleaning-300x300.jpg";
import professionalCleaning from "@/assets/images/professionalCleaning.jpg";
import Image from "next/image";
import Heading60 from "@/components/atoms/Heading60-42-40/Heading60";

const HowWeWork = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Adds delay between each card's animation
      },
    },
  };

  // Variants for cards with dynamic animation based on index
  const cardVariants = (index: number) => ({
    hidden: {
      opacity: 0,
      x: index === 0 ? -100 : index === 2 ? 100 : 0, // Left or right depending on index
      scale: index === 1 ? 0.8 : 1, // Start smaller for index 1
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1, // Zoom to original size for index 1
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  });
  return (
    <div className=" text-darkGreen relative w-full">
      <div className="px-12 flex flex-col justify-center items-center">
        <div className="my-8 pb-8">
          <Heading60 heading="How We Work !" />
        </div>
        <motion.div
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cardsJson.map((card: cardsJsonIF, index: number) => {
            return (
              <motion.div
                key={index}
                className="flex relative justify-center items-center"
                variants={cardVariants(index)} // Assign dynamic animation based on index
              >
                <div className=" relative font-bold flex justify-center flex-col text-base p-8">
                  <div className=" relative flex justify-center items-center">
                    <span className="absolute text-[120px] leading-[86px] -z-1 -top-[55px] text-primaryGray">
                      {card.number}
                    </span>
                    <span className="h-16 w-16 shadow-lg shadow-[#0049764b] bg-white flex justify-center items-center rounded-[50%] absolute top-0 left-2 z-10">
                      {card.number}
                    </span>

                    <Image
                      width={100}
                      height={100}
                      className=" z-0 w-56 h-56 items-center rounded-[50%] "
                      src={card.image}
                      alt="cleaning team"
                    />
                  </div>
                  <h2 className="mt-6 text-center text-2xl font-medium">
                    {" "}
                    {card.heading}{" "}
                  </h2>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default HowWeWork;

interface cardsJsonIF {
  heading: string;
  image: string;
  number: string;
}

const cardsJson: cardsJsonIF[] = [
  {
    heading: "Book an Appointment",
    image: personOfficeCleaning.src,
    number: "01",
  },
  {
    heading: "Choose Your Professional",
    image: professionalCleaning.src,
    number: "02",
  },
  {
    heading: "Experience Our Services",
    image: mediumCleaning.src,
    number: "03",
  },
];
