"use client";

import Image from "next/image";
import React from "react";
import footerImage from "@/assets/images/FooterImages/footer-1-bg-1.jpeg";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ContactUs from "./ContactUs";

const Footer = () => {
  return (
    <div className="relative bg-darkcyan bg-opacity-90 mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={footerImage}
          alt="Footer Background"
          layout="fill" // Ensures it fills the parent container
          objectFit="cover" // Ensures it covers the container
          quality={100}
          priority // Optimize image for above-the-fold content
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-2 py-12 text-white ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Services and Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Services */}
            <div className="flex flex-col gap-6 ">
              <div className="flex items-center gap-3">
                <div className="w-1 bg-cyanblue h-full"></div>
                <h2 className="font-bold text-2xl">Services</h2>
              </div>

              <div className="mt-4 flex flex-col gap-7">
                {footerServices.map(
                  (Item: { link: string; name: string }, index: number) => {
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
                  }
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-1 bg-cyanblue h-full"></div>
                <h2 className="font-bold text-2xl">Quick Links</h2>
              </div>

              <div className="mt-4 flex flex-col gap-7 ">
                {QuickLinks.map(
                  (Item: { link: string; name: string }, index: number) => {
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
                  }
                )}
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <ContactUs />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white/30 pt-6 text-center">
          <span className="text-white font-semibold">
            Copyright © 2024 PCDC Services | Designed by Nexsewa
          </span>
        </div>
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
    link: "carpet-upholstry-cleaning",
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
