"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import testimonial1 from "@/assets/images/testimonialImages/BillieTestimonial.jpeg";
import testimonial2 from "@/assets/images/testimonialImages/DalmanTestimonial.jpeg";
import testimonial3 from "@/assets/images/testimonialImages/CamiraTestimonial.jpeg";

import Image from "next/image";
import { Check } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const TestinomialSlider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );

  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const TestimonialHeadingVariants = {
    hidden: { y: "-20vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const TestimonialCardVariants = {
    hidden: { y: "20vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className="bg-primarygreen w-full px-4 md:px-12 ">
      <div className=" w-full  mx-auto max-w-[1200px] ">
        <div className="flex flex-col gap-10 mt-10  pb-20 pt-16 ">
          <motion.div
            className="flex justify-center"
            ref={ref}
            variants={TestimonialHeadingVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="font-semibold md:text-[40px] lg:text-5xl xl:text-6xl  text-white">
              What Our Customers Say
            </h2>
          </motion.div>

          {/* swiper slider */}

          <motion.div
            ref={ref}
            variants={TestimonialCardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Carousel
              plugins={[plugin.current]}
              className="relative w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="">
                {testimonialData.map((Item, index) => {
                  return (
                    <CarouselItem
                      key={index}
                      // className="relative flex flex-col items-center md:flex-row md:items-center gap-10 py-8 md:py-14 px-8 md:px-14 rounded-2xl bg-white "
                      className="basis-[100%] "
                    >
                      <Card className="relative flex flex-col items-center md:flex-row md:items-center gap-10 py-8 md:py-14 px-8 md:px-14 rounded-2xl bg-white mb-12 ">
                        {/* Bottom Borders */}

                        {/* Middle Bottom Border */}
                        <div className="absolute -bottom-[21px] left-5  right-5 h-5 bg-primarygreen10 rounded-b-2xl"></div>
                        {/* Inner Bottom Border */}
                        <div className="absolute -bottom-[41px] left-10 right-10 h-5 bg-primarygreen20 rounded-b-2xl"></div>

                        {/* <div className="  relative"> */}
                        <Image
                          src={Item.image}
                          alt=""
                          className="h-44 w-44 rounded-full border-[18px] border-white object-cover "
                          style={{
                            boxShadow: "10px 3px 30px rgba(0, 0, 0, 0.10)",
                          }}
                        />
                        <div className="flex justify-center items-center h-8 w-8 rounded-full bg-lightyellow absolute left-[200px] sm:left-[350px] md:top-14 md:left-44 ">
                          <Check size={16} className="text-darkocean" />
                        </div>
                        {/* </div> */}

                        <div className="flex flex-col items-center  md:items-start gap-5">
                          <span className="text-base md:text-xl text-darkocean">
                            {Item.description}
                          </span>

                          <span className="text-3xl text-darkocean">
                            {Item.name}
                          </span>
                        </div>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>

              <div className="absolute top-10 right-14 flex items-center">
                <CarouselPrevious className="text-base-primary" />
                <CarouselNext className="text-base-primary" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestinomialSlider;

export const testimonialData = [
  {
    image: testimonial1,
    description:
      "PBCS Cleaning Service exceeded my expectations! The team was punctual and extremely thorough. My house has never looked better!",
    name: "Billie",
  },
  {
    image: testimonial2,
    description:
      "I've used several cleaning services, but PBCS stands out. They always arrive on time, and their attention to detail is impressive. I highly recommend them!",
    name: "Dalman",
  },
  {
    image: testimonial3,
    description:
      "The end of lease cleaning from PBCS was fantastic! They made the process so easy and stress-free. I got my full bond back thanks to their great work!",
    name: "Camira",
  },
];
