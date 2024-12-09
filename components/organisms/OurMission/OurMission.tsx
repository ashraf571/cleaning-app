"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const OurMission = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  // Variants for the container
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
    <div className="mx-auto max-w-[1200px] mt-5 md:mt-10">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px] px-6 md:px-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        {cardsJson.map((card: cardsJsonIF, index: number) => (
          <motion.div
            key={index}
            className={`flex items-center py-5 md:py-10 px-0 md:px-6 ${
              index === 0
                ? "bg-darkGreen text-white"
                : index === 2
                ? "bg-iceblue text-cyanblue"
                : "bg-primaryYellow text-cyanblue"
            }`}
            variants={cardVariants(index)} // Assign dynamic animation based on index
          >
            <div className="flex flex-col gap-5 text-base text-center p-8">
              <h2 className="text-3xl font-semibold">{card.heading}</h2>
              <p>{card.paragraph}</p>

              <div className="flex flex-col gap-2.5">
                {card.list.map((item: string, itemIndex: number) => (
                  <div
                    key={itemIndex}
                    className="flex gap-7 items-center group"
                  >
                    <div className="flex justify-center items-center h-10 w-10 bg-white rounded-full group-hover:bg-lightblue">
                      <Check
                        size={22}
                        className="text-cyanblue group-hover:text-white"
                      />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurMission;

// Interface for cardsJson
interface cardsJsonIF {
  heading: string;
  paragraph: string;
  list: string[];
}

// Data for cards
export const cardsJson: cardsJsonIF[] = [
  {
    heading: "Our Vision",
    paragraph:
      "Our vision is to be the most trusted name in cleaning, setting new benchmarks for excellence, innovation, and sustainability in the industry.",
    list: ["Trusted provider", "Clean spaces", "Sustainable solutions"],
  },
  {
    heading: "Our Mission",
    paragraph:
      "We offer high-quality cleaning services tailored to your needs, while promoting a healthier environment with eco-friendly practices.",
    list: ["Customized cleaning", "Eco-friendly products", "Reliable service"],
  },
  {
    heading: "Our Goal",
    paragraph:
      "Our goals focus on expanding our reach, improving our service processes, and reinforcing our commitment to eco-friendly practices.",
    list: ["Grow clients", "Boost efficiency", "Go greener"],
  },
];
