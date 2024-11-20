"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

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

  const cardsJson = [
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
      list: [
        "Customized cleaning",
        "Eco-friendly products",
        "Reliable service",
      ],
    },
    {
      heading: "Our Goal",
      paragraph:
        "Our goals focus on expanding our reach, improving our service processes, and reinforcing our commitment to eco-friendly practices.",
      list: ["Grow clients", "Boost efficienc", "Go greener"],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="relative w-full">
      <div className="p-6 flex justify-center items-center">
        <motion.div
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cardsJson.map((card: any, index: number) => (
            <motion.div
              key={card}
              className={` flex items-center p-6 ${
                index === 0
                  ? "bg-primaryYellow text-cyanblue"
                  : index === 2
                  ? "bg-darkGreen text-white"
                  : "bg-iceblue text-cyanblue"
              } `}
              variants={cardVariants}
            >
              <div className="text-base text-center p-8">
                <h2 className="text-3xl">{card.heading}</h2>
                <br />
                <p>{card.paragraph}</p>
                <br />

                <div className="mt-35">
                  <ul className="">
                    {card.list.map((item: any, index: number) => {
                      return (
                        <li key={index} className="flex mb-2 max-lg:justify-center max-lg:items-center">
                          <FaCircleCheck color="#ffffff" size={30} />
                          <span className=" mt-1 ml-6"> {item} </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurMission;
