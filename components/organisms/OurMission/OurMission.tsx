"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const OurMission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Adds delay between each card's animation
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="mx-auto max-w-[1200px]">
      {/* <div className="p-12 flex justify-center items-center"> */}
      <motion.div
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]  px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {cardsJson.map((card: cardsJsonIF, index: number) => (
          <motion.div
            key={index}
            className={`flex items-center py-10 px-6 ${
              index === 0
                ? "bg-primaryYellow text-cyanblue"
                : index === 2
                ? "bg-darkGreen text-white"
                : "bg-iceblue text-cyanblue"
            } `}
            variants={cardVariants}
          >
            <div className="flex flex-col gap-5 text-base text-center p-8">
              <h2 className="text-3xl font-semibold">{card.heading}</h2>
              <p>{card.paragraph}</p>

              <div className="flex flex-col gap-2.5 ">
                {card.list.map((item: string, index: number) => {
                  return (
                    <div key={index} className="flex gap-7 items-center group">
                      <div className="flex justify-center items-center h-10 w-10 bg-white rounded-full  group-hover:bg-lightblue ">
                        <Check
                          size={22}
                          className="text-cyanblue group-hover:text-white"
                        />
                      </div>
                      <span className=" "> {item} </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* </div> */}
    </div>
  );
};

export default OurMission;

interface cardsJsonIF {
  heading: string;
  paragraph: string;
  list: string[];
}

export const cardsJson: cardsJsonIF[] = [
  {
    heading: "Our Vision",
    paragraph:
      "Our vision is to become the most trusted cleaning service, setting the standard for excellence, innovation, and sustainability in the industry.",
    list: ["Trusted provider", "Clean spaces", "Sustainable solutions"],
  },
  {
    heading: "Our Misson",
    paragraph:
      "We provide top-quality, customized cleaning services while promoting a healthier environment with eco-friendly practices.",
    list: ["Customized cleaning", "Eco-friendly products", "Reliable service"],
  },
  {
    heading: "Our Goal",
    paragraph:
      "Our goals focus on expanding our reach, improving our service processes, and reinforcing our commitment to eco-friendly practices.",
    list: ["Grow clients", "Boost efficienc", "Go greener"],
  },
];
