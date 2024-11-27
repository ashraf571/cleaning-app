"use client";
import Heading from "@/components/atoms/Heading/heading";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Images
import CommercialImage from "@/assets/images/serviceSectionImage/CommercialImage.jpg";
import DomesticImage from "@/assets/images/serviceSectionImage/DomesticImage.jpg";
import OfficeImage from "@/assets/images/serviceSectionImage/OfficeImage.jpg";
import SchoolImage from "@/assets/images/serviceSectionImage/SchoolImage.jpg";
import StrataImage from "@/assets/images/serviceSectionImage/StrataImage.jpg";
import WindowImage from "@/assets/images/serviceSectionImage/WindowImage.jpg";
import IndustrialImage from "@/assets/images/serviceSectionImage/IndustrialImage.jpg";
import HighPressureImage from "@/assets/images/serviceSectionImage/HighPressureImage.jpg";
import TilesImage from "@/assets/images/serviceSectionImage/TilesImage.jpg";
import CarpetImage from "@/assets/images/serviceSectionImage/CarpetImage.jpg";
import VacateImage from "@/assets/images/serviceSectionImage/VacateImage.jpg";
import OvenImage from "@/assets/images/serviceSectionImage/OvenImage.jpg";

// icons
import CommercialIcon from "@/assets/images/serviceSectionImage/commercial-clean.png";
import DomesticIcon from "@/assets/images/serviceSectionImage/cleaning.png";
import OfficeIcon from "@/assets/images/serviceSectionImage/office-cleaning.png";
import SchoolIcon from "@/assets/images/serviceSectionImage/school-cleaning.png";
import StrataIcon from "@/assets/images/serviceSectionImage/strata-cleaning.png";
import WindowIcon from "@/assets/images/serviceSectionImage/window-cleaning.png";
import IndustrialIcon from "@/assets/images/serviceSectionImage/industrial-cleaning.png";
import HighPressureIcon from "@/assets/images/serviceSectionImage/high-pressure-cleaning.png";
import TilesIcon from "@/assets/images/serviceSectionImage/tiles-cleaning.png";
import CarpetIcon from "@/assets/images/serviceSectionImage/carpet-1.png";
import VacateIcon from "@/assets/images/serviceSectionImage/rental-cleaning.png";
import OvenIcon from "@/assets/images/serviceSectionImage/bbq-cleaning.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ServiceSection = () => {
  const router = useRouter();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const animationVariants = {
    hidden: { y: "20vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const ServiceVariants = {
    hidden: { y: "-20vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className="mt-10 md:mx-auto w-full max-w-[1200px] ml-0 px-4">
      <motion.div
        className="flex justify-center"
        variants={ServiceVariants}
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Heading heading="Service" font="48px" />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-32 mt-10"
        variants={animationVariants}
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {ServiceData.map((Item, index) => (
          <div key={index} className="relative ">
            <Image src={Item.image} alt={Item.text} className=" " />
            <div className="absolute  -bottom-24 left-1/2 -translate-x-1/2 ">
              <div
                className="py-7 md:py-12 px-4 md:px-7 w-80 bg-white relative bottom-14 "
                style={{ boxShadow: "10px 3px 30px rgba(0, 0, 0, 0.10)" }}
              >
                <span
                  onClick={() => router.push("/" + Item.slug)}
                  className="text-cyanblue text-base font-semibold cursor-pointer"
                >
                  {Item.text}
                </span>
                <div
                  className="rounded-full h-20 w-20 bg-white flex justify-center items-center absolute -top-10 right-8"
                  style={{ boxShadow: "10px 3px 30px rgba(0, 0, 0, 0.10)" }}
                >
                  <Image src={Item.icon} alt="" width={40} height={40} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceSection;

export const ServiceData = [
  {
    image: CommercialImage,
    text: "Commercial Cleaning",
    slug: "commercial-cleaning",
    icon: CommercialIcon,
  },

  {
    image: DomesticImage,
    text: "Domestic Cleaning",
    slug: "domestic-cleaning",
    icon: DomesticIcon,
  },
  {
    image: OfficeImage,
    text: "Office Cleaning",
    slug: "office-cleaning",
    icon: OfficeIcon,
  },
  {
    image: SchoolImage,
    text: "School Cleaning",
    slug: "school-cleaning",
    icon: SchoolIcon,
  },
  {
    image: StrataImage,
    text: "Strata Cleaning",
    slug: "strata-cleaning",
    icon: StrataIcon,
  },

  {
    image: WindowImage,
    text: "Window Cleaning",
    slug: "window-cleaning",
    icon: WindowIcon,
  },
  {
    image: IndustrialImage,
    text: "Industrial Cleaning",
    slug: "industrial-cleaning",
    icon: IndustrialIcon,
  },
  {
    image: HighPressureImage,
    text: "High Pressure Cleaning",
    slug: "high-pressure-cleaning",
    icon: HighPressureIcon,
  },
  {
    image: TilesImage,
    text: "Tiles and Grout Cleaning",
    slug: "tiles-and-grout-cleaning",
    icon: TilesIcon,
  },
  {
    image: CarpetImage,
    text: "Carpet/Upholstry Cleaning",
    slug: "carpet-upholstry-cleaning",
    icon: CarpetIcon,
  },
  {
    image: VacateImage,
    text: "Vacate/End-of-Lease Cleaning",
    slug: "end-of-lease-cleaning",
    icon: VacateIcon,
  },
  {
    image: OvenImage,
    text: "Oven/BBQ/Splashback Cleaning",
    slug: "oven-bbq-splashback-cleaning",
    icon: OvenIcon,
  },
];
