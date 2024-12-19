"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/assets/images/PerthCleaningLogo.png";
import { Spin as Hamburger } from "hamburger-react";
import { Plus } from "lucide-react";

interface Manus {
  link: string;
  name?: string;
  text?: string;
  subServices?: Array<{ link: string; text: string }>;
}
const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const CloseDrawer = () => {
    setIsOpen(false);
    setOpenServices(false);
    setServicesOpen(false);
  };

  const ServicesToggle = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div
        className="flex gap-4 items-center p-[10px] px-3 md:px-8 bg-white fixed top-0 left-0 right-0 z-20 "
        style={{ boxShadow: "10px 3px 30px rgba(0, 0, 0, 0.10)" }}
        onMouseEnter={()=> setOpenServices(false)}
        onMouseLeave={()=> setOpenServices(false)}
      >
        <Link className="h-20 w-20" href={"/"}>
          <Image src={Logo} alt="L0go" height={100} width={100}></Image>
        </Link>

        <div className=" w-full">
          <div className=" gap-10 justify-end hidden md:flex">
            {TopbarData.map((manu, index) => {
              return (
                <>
                  <Link
                    href={manu.link}
                    key={index}
                    className="text-base font-semibold text-cyanblue"
                    onMouseEnter={() =>
                      setOpenServices(manu.name === "Services" ? true : false)
                    }
                    // onMouseLeave={ () =>  setOpenServices(false)}
                  >
                    <span>{manu.name}</span>
                    {openServices && manu.name === "Services" && (
                      <div className=" fixed w-auto flex flex-col  p-2 bg-white text-cyanblue ">
                        {manu.subServices.map((item, index: number) => (
                          <Link
                            href={item.link}
                            key={index}
                            onClick={() => CloseDrawer()}
                            className="text-lg font-semibold py-1 px-3 "
                          >
                            {item.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </Link>
                </>
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

      {isOpen && <div
        className={`fixed inset-x-0 top-24 md:top-28 bg-white shadow-lg z-10 transition-transform duration-300 mx-auto w-full max-w-[1200px] ${
          isOpen ? "translate-y-0 top-[108px] " : "-translate-y-full"
        }`}
      >
        <div className="relative w-full ">
          <div className=" gap-3 flex flex-col bg-darkblue ">
            {TopbarData.map((manu, index: number) => {
              return (
                <>
                  <Link
                    href={manu.link}
                    key={index}
                    className="text-lg flex justify-between font-semibold text-white py-1 pl-7 border-b border-darkgray capitalize"
                  >
                    <span onClick={() => CloseDrawer()}>{manu.name}</span>
                    {manu.subServices.length > 0 ? (
                      <div className="h-full  w-auto flex justify-end items-center border-l-2 border-plusgray">
                        <Plus
                          onClick={() => ServicesToggle()}
                          size={24}
                          className=" font-semibold text-white"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                  </Link>

                  {servicesOpen &&
                    manu.subServices.map((item: Manus, index: number) => (
                      <Link
                        href={item.link}
                        key={index}
                        onClick={() => CloseDrawer()}
                        className="  text-lg font-semibold text-white py-1 px-14 border-b border-darkgray "
                      >
                        {item.text}
                      </Link>
                    ))}
                </>
              );
            })}
          </div>
        </div>
      </div> }
    </div>
  );
};

export default Topbar;

export const ServiceData = [
  { text: "Commercial Cleaning", link: "commercial-cleaning" },
  { text: "Domestic Cleaning", link: "domestic-cleaning" },
  { text: "Office Cleaning", link: "office-cleaning" },
  // { text: "School Cleaning", link: "school-cleaning" },
  // { text: "Strata Cleaning", link: "strata-cleaning" },
  { text: "Window Cleaning", link: "window-cleaning" },
  // { text: "Industrial Cleaning", link: "industrial-cleaning" },
  // { text: "High Pressure Cleaning", link: "high-pressure-cleaning" },
  // { text: "Tiles and Grout Cleaning", link: "tiles-and-grout-cleaning" },
  { text: "Carpet Cleaning", link: "carpet-cleaning" },
  {
    text: "End-of-Lease Cleaning",
    link: "end-of-lease-cleaning",
  },
  {
    text: "Oven/BBQ/Splashback Cleaning",
    link: "oven-bbq-splashback-cleaning",
  },
];
export const TopbarData = [
  {
    name: "Home",
    link: "/",
    subServices: [],
  },
  {
    name: "About",
    link: "about",
    subServices: [],
  },
  {
    name: "Services",
    link: "service",
    subServices: ServiceData,
  },
  {
    name: "Gallery",
    link: "gallery",
    subServices: [],
  },
  {
    name: "Blog",
    link: "blog",
    subServices: [],
  },
  {
    name: "Contact",
    link: "contact",
    subServices: [],
  },
];
