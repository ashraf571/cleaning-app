"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";

import Banner1 from "@/assets/images/HomeSliderImages/HeroAreaAi-removebg.png";
// import Banner2 from "@/assets/images/HomeSliderImages/banner2.png";

import WhiteCircle from "@/assets/images/HomeSliderImages/whiteshape.png";
import GreenCircle from "@/assets/images/HomeSliderImages/greenshape.png";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HomeCarousel = () => {
  const router = useRouter();
  return (
    <div className="w-full mb-5 ">
      <Carousel
        // plugins={[plugin.current]}
        className="relative w-full"
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          {HomeCarouselData.map((Item, index) => {
            return (
              <CarouselItem key={index} className="w-full relative">
                <div className="max-h-[1000px]">
                  <Image
                    src={Item.sliderImage}
                    alt=""
                    className="h-full w-full  object-cover "
                    layout="" // Ensures the image covers the entire section
                    placeholder="blur"
                  />
                </div>

                <div className="flex flex-col gap-3 items-start absolute  top-1/2 left-16 bottom-0  md:bottom-3 -translate-y-1/2 ">
                  <Image
                    src={WhiteCircle}
                    alt=""
                    className="w-24 md:w-36 lg:w-48"
                  />
                  <Image src={GreenCircle} alt="" className="w-12 md:w-20" />
                </div>

                <div className="flex flex-col gap-1 md:gap-5 w-1/2 md:max-w-[690px] absolute  top-1/3 md:top-1/2 left-16 bottom-24 -translate-y-1/2 ">
                  <span className="text-2xl md:text-4xl lg:text-[5.5rem] lg:leading-none font-medium text-primarygreen ">
                    {Item.haeding}{" "}
                  </span>

                  <Button
                    onClick={() => router.push("/service")}
                    className=" w-28 md:w-48 rounded-full bg-primarygreen hover:bg-primarygreen10 font-medium text-white py-4 px-5 text-center  "
                  >
                    Our Services
                  </Button>

                  <Button
                    onClick={() => router.push("/appointment")}
                    className=" bg-primarygreen hover:bg-primarygreen10 font-medium text-white py-4 px-5 text-center rounded-full w-48 md:w-56 shadow-2xl  "
                  >
                    Book An Appointment
                  </Button>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {/* <div className="absolute top-1/2 left-12 md:left-20 -translate-y-1/2 bg-red-500">
          <CarouselPrevious />
        </div>
        <div className="absolute top-1/2 right-12 md:right-20 -translate-y-1/2">
          <CarouselNext />
        </div> */}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;

export const HomeCarouselData = [
  {
    haeding: "Clean Spaces, Smiley Faces.",
    sliderImage: Banner1,
  },
  // {
  //   haeding: "Spotless Spaces, Happy Faces!",
  //   sliderImage: Banner2,
  // },
];
