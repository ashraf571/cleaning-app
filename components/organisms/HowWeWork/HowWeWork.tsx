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

  interface cardsJsonIF {
    heading: string,
    image: string,
    number: string
  }


  const cardsJson : cardsJsonIF[] = [
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
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
                variants={cardVariants}
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
                  <h2 className="mt-6 text-center text-2xl">
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
