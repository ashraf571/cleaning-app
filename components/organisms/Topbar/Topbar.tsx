import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/images/NavbarLogo.jpeg";

const Topbar = () => {
  return (
    <div
      className="flex gap-4 items-center p-5 bg-white fixed top-0 left-0 right-0 z-20 "
      style={{ boxShadow: "10px 3px 30px rgba(0, 0, 0, 0.10)" }}
    >
      <Image src={Logo} alt="L0go" height={120} width={120}></Image>

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
  {
    name: "Contact",
    link: "contact",
  },
];
