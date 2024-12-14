"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Image1 from "@/assets/images/crauselImage/imagecrausel1.jpeg";
import Image2 from "@/assets/images/crauselImage/imagecrausel2.jpeg";
import Image3 from "@/assets/images/crauselImage/imagecrausel3.jpeg";
import Image4 from "@/assets/images/crauselImage/imagecrausel4.jpeg";
import Image5 from "@/assets/images/crauselImage/imagecrausel5.jpeg";
import Image6 from "@/assets/images/crauselImage/imagecrausel6.jpeg";
import Image7 from "@/assets/images/crauselImage/imagecrausel7.jpeg";
import Image8 from "@/assets/images/crauselImage/imagecrausel8.jpeg";
import Image9 from "@/assets/images/crauselImage/imagecrausel9.jpeg";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const ServiceImageCrausel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }) // Auto-slide every 3 seconds
  );

  return (
    <div className="max-w-[1200px] mx-auto relative ">
      <Carousel
        plugins={[plugin.current]}
        className="relative w-full "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="flex gap-x-0 -ml-0">
          {CarauselImageData.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 pl-0"
            >
              <Image
                src={item.image}
                alt={item.alt}
                className="w-full object-cover "
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          &lt;
        </CarouselPrevious>
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          &gt;
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default ServiceImageCrausel;
export const CarauselImageData = [
  { image: Image1, alt: "Image1" },
  { image: Image2, alt: "Image2" },
  { image: Image3, alt: "Image3" },
  { image: Image4, alt: "Image4" },
  { image: Image5, alt: "Image5" },
  { image: Image6, alt: "Image6" },
  { image: Image7, alt: "Image7" },
  { image: Image8, alt: "Image8" },
  { image: Image9, alt: "Image9" },
];
