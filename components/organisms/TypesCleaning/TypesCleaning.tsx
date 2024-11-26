"use client";
import Heading from "@/components/atoms/Heading/heading";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// cart Icon
import cartIcon1 from "@/assets/images/cleaningServiceImages/service-cat-icon-1.png";
import cartIcon2 from "@/assets/images/cleaningServiceImages/service-cat-icon-2.png";
import cartIcon3 from "@/assets/images/cleaningServiceImages/service-cat-icon-3.png";
import cartIcon4 from "@/assets/images/cleaningServiceImages/service-cat-icon-4.png";
import cartIcon5 from "@/assets/images/cleaningServiceImages/service-cat-icon-5.png";
import cartIcon6 from "@/assets/images/cleaningServiceImages/service-cat-icon-6.png";
import cartIcon7 from "@/assets/images/cleaningServiceImages/service-cat-icon-7.png";
import cartIcon8 from "@/assets/images/cleaningServiceImages/service-cat-icon-8.png";
import cartIcon9 from "@/assets/images/cleaningServiceImages/service-cat-icon-9.png";
import Image from "next/image";

const TypesCleaning = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const CleaningVariants = {
    hidden: { y: "20vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const CleaningHeadingVariants = {
    hidden: { y: "-20vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className="bg-cloudblue w-full mx-auto max-w-[1200px]">
      <div className="mt-10 mx-5 md:mx-10">
        <motion.div
          className="flex justify-center pt-8"
          ref={ref}
          variants={CleaningHeadingVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Heading heading="Types of Cleaning Service" font="48px" />
        </motion.div>

        {/* First Row with 5 Items */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-10"
          ref={ref}
          variants={CleaningVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {TypeCleaningData.slice(0, 5).map((Item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 text-center"
            >
              <Image src={Item.icon} alt={Item.name} />
              <span className="text-darkocean font-semibold text-lg sm:text-xl">
                {Item.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Second Row with 4 Items Centered */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:px-24 gap-8 mt-10 "
          ref={ref}
          variants={CleaningVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* <div className="col-span-1 lg:col-span-2"></div>{" "} */}
          {/* Empty space on the left */}
          {TypeCleaningData.slice(5).map((Item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 text-center"
            >
              <Image src={Item.icon} alt={Item.name} />
              <span className="text-darkocean font-semibold text-lg sm:text-xl">
                {Item.name}
              </span>
            </div>
          ))}
          <div className="col-span-1 lg:col-span-2"></div>{" "}
          {/* Empty space on the right */}
        </motion.div>
      </div>
    </div>
  );
};

export default TypesCleaning;

export const TypeCleaningData = [
  { icon: cartIcon1, name: "Floor Cleaning" },
  { icon: cartIcon2, name: "Wall Washing" },
  { icon: cartIcon3, name: "Under Wall Wash" },
  { icon: cartIcon4, name: "Floor Cleaning" },
  { icon: cartIcon5, name: "Floor Cleaning" },
  { icon: cartIcon6, name: "Floor Cleaning" },
  { icon: cartIcon7, name: "Floor Cleaning" },
  { icon: cartIcon8, name: "Floor Cleaning" },
  { icon: cartIcon9, name: "Safe Cleaning" },
];
