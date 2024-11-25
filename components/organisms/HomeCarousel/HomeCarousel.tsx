"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Banner1 from "@/assets/images/HomeSliderImages/banner1.png";
import Banner2 from "@/assets/images/HomeSliderImages/banner2.png";

import WhiteCircle from "@/assets/images/HomeSliderImages/whiteshape.png";
import GreenCircle from "@/assets/images/HomeSliderImages/greenshape.png";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HomeCarousel = () => {
  const router = useRouter();
  // const plugin = React.useRef(
  //   Autoplay({ delay: 1500, stopOnInteraction: true })
  // );
  return (
    <div className="w-full mb-5">
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
                <div className="">
                  <Image
                    src={Item.sliderImage}
                    alt=""
                    className="h-full w-full  object-cover "
                    layout="" // Ensures the image covers the entire section
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

                <div className="flex flex-col gap-5 max-w-[690px] absolute  top-1/2 left-16 bottom-24 -translate-y-1/2 ">
                  <span className="text-2xl md:text-4xl lg:text-[5.5rem] lg:leading-none font-medium text-cyanblue ">
                    {Item.haeding}{" "}
                  </span>

                  <Button className="font-semibold text-base text-white bg-lightblue rounded-full w-28 md:w-48 py-4 md:py-8 px-4 md:px-8 shadow-2xl hover:bg-orange ">
                    Our Services
                  </Button>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="absolute top-1/2 left-12 md:left-20 -translate-y-1/2 bg-red-500">
          <CarouselPrevious />
        </div>
        <div className="absolute top-1/2 right-12 md:right-20 -translate-y-1/2">
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;

export const HomeCarouselData = [
  {
    haeding: "Clean Spaces, Happy Faces.",
    sliderImage: Banner1,
  },
  {
    haeding: "Spotless Spaces, Happy Faces!",
    sliderImage: Banner2,
  },
];
