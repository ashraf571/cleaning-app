import React from "react";
// import { motion } from 'framer-motion'
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ImageSection = ({ imageUrl }: { imageUrl: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const RightContent = () => ({
    hidden: {
      opacity: 0,
      x: 50, // Left or right depending on index
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
      className="w-full md:w-1/2"
      variants={RightContent()}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      <Image
        className="w-full"
        width={100}
        height={100}
        src={imageUrl}
        alt=" clean office tile window school, industrial "
      />
    </motion.div>
  );
};

export default ImageSection;
