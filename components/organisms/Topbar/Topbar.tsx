"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/assets/images/NavbarLogo.jpeg";
import { Spin as Hamburger } from "hamburger-react";
import { Plus } from "lucide-react";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const CloseDrawer = () => {
    setIsOpen(!isOpen);
    setServicesOpen(false);
  };

  const ServicesToggle = () => {
    setServicesOpen(!servicesOpen);
  };

  console.log("value is", servicesOpen);

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div
        className="flex gap-4 items-center p-[10px] px-3 md:px-8 bg-white fixed top-0 left-0 right-0 z-20 "
        style={{ boxShadow: "10px 3px 30px rgba(0, 0, 0, 0.10)" }}
      >
        <Link href={"/"}>
          <Image src={Logo} alt="L0go" height={138} width={138}></Image>
        </Link>

        <div className=" w-full">
          <div className=" gap-10 justify-end hidden md:flex">
            {TopbarData.map((Item, index) => {
              return (
                <Link
                  href={Item.link}
                  key={index}
                  className="text-base font-semibold text-cyanblue"
                >
                  {Item.name}
                </Link>
              );
            })}
          </div>
          <div className="flex justify-end md:hidden">
            <div className="block md:hidden">
              <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>
          </div>
        </div>
      </div>

      {/* Drawer for mobile */}

      <div
        className={`fixed inset-x-0 top-24 md:top-28 bg-white shadow-lg z-10 transition-transform duration-300 mx-auto w-full max-w-[1200px] ${
          isOpen ? "translate-y-0 top-[108px] " : "-translate-y-full"
        }`}
      >
        <div className="relative w-full ">
          <div className=" gap-3 flex flex-col bg-darkblue ">
            {TopbarData.map((Item, index) => {
              return (
                <Link
                  href={Item.link}
                  key={index}
                  className="text-lg font-semibold text-white py-1 px-7 border-b border-darkgray capitalize"
                  onClick={() => CloseDrawer()}
                >
                  {Item.name}
                </Link>
              );
            })}
          </div>

          <div className="h-12 w-12 flex justify-center items-center  absolute top-[39%] bottom-32 right-0 -translate-y-1/2 bg-darkblack border-l-2 border-plusgray">
            <Plus
              onClick={() => ServicesToggle()}
              size={24}
              className=" font-semibold text-white"
            />

            {/* <Hamburger /> */}
          </div>

          <div
            className={`fixed inset-x-0 top-32 bg-white shadow-lg z-20 transition-transform duration-300 
            ${servicesOpen ? "translate-y-0" : "hidden"}`}
          >
            <div className="relative w-full">
              <div className="flex flex-col bg-darkblue gap-3">
                {ServiceData.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    onClick={() => CloseDrawer()}
                    className="text-lg font-semibold text-white py-1 px-14 border-b border-darkgray "
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

export const TopbarData = [
  {
    name: "Home",
    link: "/",
  },
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
  {
    name: "Contact",
    link: "contact",
  },
];

export const ServiceData = [
  { text: "Commercial Cleaning", link: "commercial-cleaning" },
  { text: "Domestic Cleaning", link: "domestic-cleaning" },
  { text: "Office Cleaning", link: "office-cleaning" },
  { text: "School Cleaning", link: "school-cleaning" },
  { text: "Strata Cleaning", link: "strata-cleaning" },
  { text: "Window Cleaning", link: "window-cleaning" },
  { text: "Industrial Cleaning", link: "industrial-cleaning" },
  { text: "High Pressure Cleaning", link: "high-pressure-cleaning" },
  { text: "Tiles and Grout Cleaning", link: "tiles-and-grout-cleaning" },
  { text: "Carpet/Upholstery Cleaning", link: "carpet-upholstery-cleaning" },
  {
    text: "End-of-Lease Cleaning",
    link: "end-of-lease-cleaning",
  },
  {
    text: "Oven/BBQ/Splashback Cleaning",
    link: "oven-bbq-splashback Cleaning",
  },
];
