import Heading from "@/components/atoms/Heading/page";
import React from "react";

// Images
import CommercialImage from "@/assets/images/serviceSectionImage/CommercialImage.jpg";
import DomesticImage from "@/assets/images/serviceSectionImage/DomesticImage.jpg";
import OfficeImage from "@/assets/images/serviceSectionImage/OfficeImage.jpg";
import SchoolImage from "@/assets/images/serviceSectionImage/SchoolImage.jpg";
import StrataImage from "@/assets/images/serviceSectionImage/StrataImage.jpg";
import WindowImage from "@/assets/images/serviceSectionImage/WindowImage.jpg";
import IndustrialImage from "@/assets/images/serviceSectionImage/IndustrialImage.jpg";
import HighPressureImage from "@/assets/images/serviceSectionImage/HighPressureImage.jpg";
import TilesImage from "@/assets/images/serviceSectionImage/TilesImage.jpg";
import CarpetImage from "@/assets/images/serviceSectionImage/CarpetImage.jpg";
import VacateImage from "@/assets/images/serviceSectionImage/VacateImage.jpg";
import OvenImage from "@/assets/images/serviceSectionImage/OvenImage.jpg";

// icons
import CommercialIcon from "@/assets/images/serviceSectionImage/commercial-clean.png";
import DomesticIcon from "@/assets/images/serviceSectionImage/cleaning.png";
import OfficeIcon from "@/assets/images/serviceSectionImage/office-cleaning.png";
import SchoolIcon from "@/assets/images/serviceSectionImage/school-cleaning.png";
import StrataIcon from "@/assets/images/serviceSectionImage/strata-cleaning.png";
import WindowIcon from "@/assets/images/serviceSectionImage/window-cleaning.png";
import IndustrialIcon from "@/assets/images/serviceSectionImage/industrial-cleaning.png";
import HighPressureIcon from "@/assets/images/serviceSectionImage/high-pressure-cleaning.png";
import TilesIcon from "@/assets/images/serviceSectionImage/tiles-cleaning.png";
import CarpetIcon from "@/assets/images/serviceSectionImage/carpet-1.png";
import VacateIcon from "@/assets/images/serviceSectionImage/rental-cleaning.png";
import OvenIcon from "@/assets/images/serviceSectionImage/bbq-cleaning.png";
import Image from "next/image";

const ServiceSection = () => {
  return (
    <div className="mt-10 mx-14">
      <div className="flex justify-center">
        <Heading heading="Service" font="48px" />
      </div>

      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0 mt-10">
        {ServiceData.map((Item, index) => {
          return (
            <div key={index} className="">
              <Image src={Item.image} alt="" className=" " />

              <div className="flex justify-center">
                <div
                  className="py-12 px-7 bg-red300 w-[84%] bg-white relative bottom-14"
                  style={{ boxShadow: "10px 3px 30px rgba(0, 0, 0, 0.10)" }}
                >
                  <span className="text-cyanblue text-base font-semibold">
                    {Item.text}
                  </span>

                  <div
                    className="rounded-full h-20 w-20 bg-yellow300 bg-white flex justify-center items-center absolute -top-10 right-8  "
                    style={{ boxShadow: "10px 3px 30px rgba(0, 0, 0, 0.10)" }}
                  >
                    <Image src={Item.icon} alt="" width={40} height={40} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSection;

export const ServiceData = [
  {
    image: CommercialImage,
    text: "Commercial Cleaning",
    icon: CommercialIcon,
  },

  {
    image: DomesticImage,
    text: "Domestic Cleaning",
    icon: DomesticIcon,
  },
  {
    image: OfficeImage,
    text: "Office Cleaning",
    icon: OfficeIcon,
  },
  {
    image: SchoolImage,
    text: "School Cleaning",
    icon: SchoolIcon,
  },
  {
    image: StrataImage,
    text: "Strata Cleaning",
    icon: StrataIcon,
  },

  {
    image: WindowImage,
    text: "Window Cleaning",
    icon: WindowIcon,
  },
  {
    image: IndustrialImage,
    text: "Industrial Cleaning",
    icon: IndustrialIcon,
  },
  {
    image: HighPressureImage,
    text: "High Pressure Cleaning",
    icon: HighPressureIcon,
  },
  {
    image: TilesImage,
    text: "Tiles and Grout Cleaning",
    icon: TilesIcon,
  },
  {
    image: CarpetImage,
    text: "Carpet/Upholstry Cleaning",
    icon: CarpetIcon,
  },
  {
    image: VacateImage,
    text: "Vacate/End-of-Lease Cleaning",
    icon: VacateIcon,
  },
  {
    image: OvenImage,
    text: "Oven/BBQ/Splashback Cleaning",
    icon: OvenIcon,
  },
];
