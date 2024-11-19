import Heading from "@/components/atoms/Heading/page";
import React from "react";

// expert Images
import Rosalina from "@/assets/images/expertImages/Rosalina.jpeg";
import Rosalina2 from "@/assets/images/expertImages/Rosalina2.jpeg";
import Hilixer from "@/assets/images/expertImages/Hilixer.jpeg";
import Yokoloko from "@/assets/images/expertImages/Yokoloko.jpeg";
import Miranda from "@/assets/images/expertImages/Miranda.jpeg";
import Image from "next/image";

const OurExperts = () => {
  return (
    <div className="mt-20 mx-10 pb-5">
      <div className="flex justify-center">
        <Heading heading="Our Experts" font="48px" />
      </div>

      <div className="grid grid-cols-4 gap-x-8 mt-10 ">
        {ExpertData.map((Item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-5 items-center bg-iceblue  py-5"
            >
              <Image src={Item.image} alt="" className="rounded-full" />
              <span className="text-cyanblue font-semibold text-xl">
                {Item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurExperts;

export const ExpertData = [
  {
    image: Rosalina,
    name: "Rosalina D. William",
  },
  {
    image: Hilixer,
    name: "Hilixer D. Browni",
  },
  {
    image: Yokoloko,
    name: "Yokoloko Y. Pukara",
  },
  {
    image: Miranda,
    name: "Miranda D. Kilixer",
  },
];
