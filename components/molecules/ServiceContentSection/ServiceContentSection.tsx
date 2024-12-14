import Heading24 from "@/components/atoms/Heading24/Heading24";
import React from "react";
import ListSection from "../ListSections/ListSection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ServiceContentSectionIF {
  heading?: string;
  paragraphs?: string[];
  paragraphs1?: string[];
  list?: string[];
  listDash?: string[];
  list1?: string[];
  isBold?: boolean;
}

const ServiceContentSection = ({
  sectionData,
}: {
  sectionData: ServiceContentSectionIF;
}) => {
  const {
    heading,
    paragraphs,
    list,
    list1,
    isBold = false,
    listDash,
    paragraphs1,
  } = sectionData;

  const { ref, inView } = useInView({ triggerOnce: true });

  const RightContent = () => ({
    hidden: {
      opacity: 0,
      x: -50, // Left or right depending on index
      // scale: index % 2 === 1 ? 0.8 : 1, // Start smaller for index 1
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1, // Zoom to original size for index 1
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  });
  return (
    <motion.div
      className=" w-fill md:w-1/2 "
      variants={RightContent()}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      {heading && <Heading24 heading={heading} />}
      {paragraphs &&
        paragraphs.length > 0 &&
        paragraphs.map((paragraph: string, index: number) => {
          return (
            <p
              key={index}
              className="text-base mb-4 text-secondryGray font-normal"
            >
              {" "}
              {paragraph}{" "}
            </p>
          );
        })}

      {list && list.length > 0 && <ListSection isBold={isBold} list={list} />}
      {listDash && listDash.length > 0 && <ListSection list={listDash} />}

      {paragraphs1 &&
        paragraphs1.length > 0 &&
        paragraphs1.map((paragraph: string, index: number) => {
          return (
            <p
              key={index}
              className="text-base mb-1 leading-7 text-secondryGray font-normal"
            >
              {" "}
              {paragraph}{" "}
            </p>
          );
        })}
      {list1 && (
        <p>
          When performing a standard house cleaning, we cover the following
          tasks:
        </p>
      )}
      {list1 && list1.length > 0 && <ListSection list={list1} />}
    </motion.div>
  );
};

export default ServiceContentSection;
