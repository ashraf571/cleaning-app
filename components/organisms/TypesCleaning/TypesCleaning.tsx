import Heading from "@/components/atoms/Heading/page";
import React from "react";

// cart Icon
import cartIcon1 from "@/assets/images/cleaningServiceImages/service-cat-icon-1.png";
import cartIcon2 from "@/assets/images/cleaningServiceImages/service-cat-icon-1.png";
import cartIcon3 from "@/assets/images/cleaningServiceImages/service-cat-icon-1.png";
import cartIcon4 from "@/assets/images/cleaningServiceImages/service-cat-icon-1.png";
import cartIcon5 from "@/assets/images/cleaningServiceImages/service-cat-icon-1.png";
import cartIcon6 from "@/assets/images/cleaningServiceImages/service-cat-icon-1.png";
import cartIcon7 from "@/assets/images/cleaningServiceImages/service-cat-icon-1.png";
import cartIcon8 from "@/assets/images/cleaningServiceImages/service-cat-icon-1.png";
import cartIcon9 from "@/assets/images/cleaningServiceImages/service-cat-icon-1.png";

const TypesCleaning = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center ">
        <Heading heading="Types of Cleaning Service" font="48px" />
      </div>
    </div>
  );
};

export default TypesCleaning;

export const TypeCleaningData = [
  {
    icon: cartIcon1,
    name: "Floor Cleaning",
  },
  {
    icon: cartIcon2,
    name: "Wall Wasing",
  },
  {
    icon: cartIcon3,
    name: "Under Wall Wash",
  },
  {
    icon: cartIcon4,
    name: "Floor Cleaning",
  },
  {
    icon: cartIcon5,
    name: "Floor Cleaning",
  },
  {
    icon: cartIcon6,
    name: "Floor Cleaning",
  },
  {
    icon: cartIcon7,
    name: "Floor Cleaning",
  },
  {
    icon: cartIcon8,
    name: "Floor Cleaning",
  },
  {
    icon: cartIcon9,
    name: "Safe Cleaning",
  },
];
