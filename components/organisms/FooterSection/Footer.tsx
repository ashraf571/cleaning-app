import Image from "next/image";
import React from "react";
import footerImage from "@/assets/images/FooterImages/footer-1-bg-1.jpeg";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-20">
      <Image src={footerImage} alt="" className="absolute " />

      <div className="relative bg-darkcyan text-white  bg-opacity-90  px-10 pt-10 pb-20">
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-5">
            <div className="flex gap-2">
              <div className="w-4 bg-cyanblue"></div>
              <h2>Services</h2>
            </div>

            {footerServices.map((Item, index) => {
              return (
                <Link href={Item.link} key={index} className="">
                  <div className="flex gap-2">
                    <ChevronRight />
                    {Item.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

export const footerServices = [
  {
    name: "Commercial Cleaning",
    link: "",
  },
  {
    name: "Office Cleaning",
    link: "",
  },
  {
    name: "Domestic Cleaning",
    link: "",
  },
  {
    name: "School Cleaning",
    link: "",
  },
  {
    name: "Carpet Cleaning",
    link: "",
  },
];

export const QuickLinks = [
  {
    name: "About",
    link: "",
  },
  {
    name: "Services",
    link: "",
  },
  {
    name: "Gallery",
    link: "",
  },
  {
    name: "Blog",
    link: "",
  },
];
