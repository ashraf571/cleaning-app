
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import Heading48 from "@/components/atoms/Heading48/Heading48";
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

const TypesCleaning = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const CleaningVariants = {
    hidden: { y: "4vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const CleaningHeadingVariants = {
    hidden: { y: "-5vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-full bg-cloudblue flex justify-center">
      <div className=" py-10 w-full max-w-[1200px]">
        <div className="">
          <motion.div
            className="flex text-center text-cyanblue justify-center"
            ref={ref}
            variants={CleaningHeadingVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Heading48 heading="Types of Cleaning Service" />
          </motion.div>
          <motion.div
            className="flex w-full  justify-center flex-wrap mt-10"
            ref={ref}
            variants={CleaningVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {TypeCleaningData.map((Item, index) => (
              <div
                key={index}
                className="flex min-w-[220px] mb-5 flex-col items-center gap-3 text-center"
              >
                <Image className="mt-5" height={100} width={100} src={Item.icon} alt={Item.name} />
                <span className="text-darkocean font-semibold text-2xl">
                  {Item.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
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
