import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";


const MovingImage = ({ image }: { image: string }) => {
  return (
    <div className="h-[350px] w-[320px]">

      <p> images </p>
      {/* <Tilt options={{ max: 25, scale: 1, speed: 400 }}>
        <motion.img
          src={image}
          alt="Animated"
          draggable={false}
          className="mt-5 md:mt-0 bg-royalblue2 w-full h-full object-cover object-center"
          style={{
            width: "320px",
            height: "350px",
            borderRadius: "20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            mixBlendMode: "luminosity",
            filter:
              //   isTapped
              //     ? "grayscale(0%) saturate(150%)"
              "grayscale(100%)",
          }}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.05,
            filter: "grayscale(0%) saturate(150%)",
          }}
          // onTap={() => setIsTapped(!isTapped)}
        />
      </Tilt> */}
    </div>
  );
};

export default MovingImage;
