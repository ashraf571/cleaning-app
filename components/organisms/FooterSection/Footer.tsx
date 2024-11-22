import Image from "next/image";
import React from "react";
import footerImage from "@/assets/images/FooterImages/footer-1-bg-1.jpeg";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ContactUs from "./ContactUs";

const Footer = () => {
  return (
    <div className="mt-20">
      <Image
        src={footerImage}
        alt=""
        className="absolute h-full md:h-auto w-full "
        layout="absolute"
      />
      {/* <Image
        src={footerImage}
        alt=""
        className="w-full object-cover absolute h-auto "
        layout="fill" // Ensures the image covers the entire section
      /> */}

      <div className="relative bg-darkcyan  text-white  bg-opacity-90 px-5 md:px-10 pt-10 flex flex-col gap-9">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
            <div className="flex flex-col gap-5">
              <div className="flex gap-5">
                <div className="w-1 bg-cyanblue"></div>
                <h2 className="font-bold text-2xl">Services</h2>
              </div>

              <div className="mt-4 flex flex-col gap-5">
                {footerServices.map((Item, index) => {
                  return (
                    <Link href={Item.link} key={index} className="">
                      <div className="flex gap-2">
                        <ChevronRight size={16} />
                        <span className="font-semibold hover:text-lightblue">
                          {Item.name}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* quick links */}

            <div className="flex flex-col gap-5">
              <div className="flex gap-5">
                <div className="w-1 bg-cyanblue"></div>
                <h2 className="font-bold text-2xl">Quick Links</h2>
              </div>

              <div className="mt-4 flex flex-col gap-5">
                {QuickLinks.map((Item, index) => {
                  return (
                    <Link href={Item.link} key={index} className="">
                      <div className="flex gap-2">
                        <ChevronRight size={16} />
                        <span className="font-semibold hover:text-lightblue">
                          {Item.name}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <ContactUs />
          </div>
        </div>

        <hr className="h-2 w-full" />

        <div className="flex justify-center items-center ">
          <span className="text-white font-semibold">
            Copyright © 2024 PCDC Services | Designed by Nexsewa
          </span>
        </div>
        <div className="bg-red400 h-[2px]"></div>
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
    link: "about",
  },
  {
    name: "Services",
    link: "service",
  },
  {
    name: "Gallery",
    link: "gallery",
  },
  {
    name: "Blog",
    link: "blog",
  },
];
