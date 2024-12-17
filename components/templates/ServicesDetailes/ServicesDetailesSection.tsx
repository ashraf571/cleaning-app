"use client";
import React from "react";
import { motion } from "framer-motion";

import Heading6040 from "@/components/atoms/Heading60-40-32/Heading60-40-32";
import {
  ServiceContentSectionIF,
  ServiceData,
  ServiceDataIF,
} from "./ServiceData";

import TextThenImageSection from "@/components/organisms/TextThenImageSection/TextThenImageSection";
import ImageThenTextSection from "@/components/organisms/ImageThenTextSection/ImageThenTextSection";
import ServiceImageCrausel from "@/components/organisms/ServiceImageCrausel/ServiceImageCrausel";

interface ParamsIF {
  slug: string;
}

const ServicesDetailesSection = ({ params }: { params: ParamsIF }) => {
  const selectedService: ServiceDataIF | undefined = ServiceData.find(
    (service: ServiceDataIF) => service.slug === params.slug
  );
  if (!selectedService) return;
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="relative w-full flex justify-center">
      <div className=" px-4 w-full max-w-[1200px] gap-10 md:gap-16 flex flex-col ">
        <motion.div
          className="w-full text-center mt-10 md:mt-16"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <Heading6040 heading={selectedService.text} />
        </motion.div>

        {selectedService.sections.map(
          (section: ServiceContentSectionIF, index: number) => {
            return (
              <div key={index} className="w-full gap-5 flex max-md:flex-col ">
                {index % 2 === 0 ? (
                  <TextThenImageSection seviceCardData={section} />
                ) : (
                  <ImageThenTextSection seviceCardData={section} />
                )}
              </div>
            );
          }
        )}

        {params.slug === "commercial-cleaning" && <ServiceImageCrausel />}
      </div>
    </div>
  );
};

export default ServicesDetailesSection;
