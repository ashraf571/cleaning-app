"use client";
import Image from "next/image";
import React from "react";
import footerImage from "@/assets/images/FooterImages/footer-1-bg-1.jpeg";
import { ChevronRight, ChevronUp } from "lucide-react";
import Link from "next/link";
import ContactUs from "./ContactUs";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Footer = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const itemVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className="mt-20 bg-darkcyan">
      <div className="relative text-white  bg-opacity-90 px-5 md:px-10 pt-10 flex flex-col gap-9 mx-auto w-full max-w-[1200px]">
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
                      <div className="flex items-center gap-2">
                        <ChevronRight size={16} className="text-lightblue" />
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
                      <div className="flex items-center gap-2">
                        <ChevronRight size={16} className="text-lightblue" />
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
    link: "commercial-cleaning",
  },
  {
    name: "Office Cleaning",
    link: "office-cleaning",
  },
  {
    name: "Domestic Cleaning",
    link: "domestic-cleaning",
  },
  {
    name: "School Cleaning",
    link: "school-cleaning",
  },
  {
    name: "Carpet Cleaning",
    link: "carpet-cleaning",
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
