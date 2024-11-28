"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import Heading from "@/components/atoms/Heading/heading";
import React from "react";

// expert Images
import Rosalina from "@/assets/images/expertImages/Rosalina.jpeg";
import Rosalina2 from "@/assets/images/expertImages/Rosalina2.jpeg";
import Hilixer from "@/assets/images/expertImages/Hilixer.jpeg";
import Yokoloko from "@/assets/images/expertImages/Yokoloko.jpeg";
import Miranda from "@/assets/images/expertImages/Miranda.jpeg";
import Image from "next/image";
import Heading604840 from "@/components/atoms/Heading60-48-40/Heading60-48-40";

const OurExperts = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const ExpertHeadingVariants = {
    hidden: { y: "-10vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const ExpertVariants = {
    hidden: { y: "10vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className="mt-20 ml-0 md:mx-auto pb-5 w-full max-w-[1200px] px-4">
      <motion.div
        className="flex justify-center"
        ref={ref}
        variants={ExpertHeadingVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Heading604840 heading="Our Experts" />
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 mt-10 "
        ref={ref}
        variants={ExpertVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {ExpertData.map((Item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-5 items-center bg-iceblue py-10 relative group"
            >
              <Image src={Item.image} alt="" className="rounded-full" />
              <span className="text-cyanblue font-semibold text-xl">
                {Item.name}
              </span>

              <div className="h-14 w-1 bg-cyanblue absolute top-28 right-0 transition-all duration-300 ease-in-out group-hover:top-0"></div>
              <div className="h-14 w-1 bg-cyanblue absolute top-28 left-0 transition-all duration-300 ease-in-out group-hover:top-0"></div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default OurExperts;

export const ExpertData = [
  {
    image: Rosalina,
    name: "Rosalina D. William",
  },
  {
    image: Hilixer,
    name: "Hilixer D. Browni",
  },
  {
    image: Yokoloko,
    name: "Yokoloko Y. Pukara",
  },
  {
    image: Miranda,
    name: "Miranda D. Kilixer",
  },
];
