import React from "react";
import { Phone } from "lucide-react";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-7">
        <div className="flex gap-5">
          <div className="w-1 bg-cyanblue"></div>
          <h2 className="font-bold text-2xl">Contact Us</h2>
        </div>

        <div className="flex flex-col gap-3 md:flex-row justify-between">
          <h2 className="font-semibold text-base">
            10/120 Ladywell Street,
            <br />
            Beckenham, Western <br /> Australia.
          </h2>

          <div className="flex justify-between pl-5 pr-3 py-5 bg-skyblue  items-center w-56 md:w-72">
            <div className="flex flex-col gap-1">
              <h5 className="font-semibold text-sm text-navyblue">
                Get Free Estimate
              </h5>
              <span className="text-lg md:text-3xl font-semibold text-navyblue">
                0434549209
              </span>
            </div>

            <Phone size={44} className="text-mangoyellow -rotate-90" />
          </div>
        </div>
      </div>
      <hr className="bg-gray-500 mt-8 " />

      <div className="flex flex-col gap-3 xl:flex-row md:justify-between mt-10 ">
        <div className="flex flex-col">
          <div className="flex group">
            <span className="text-cyanblue font-semibold ">T:</span>
            {/* <span className="font-semibold group-hover:text-skyblue">
              0434549209
            </span> */}
            <Link
              className="font-semibold group-hover:text-skyblue cursor-pointer"
              href={`tel:${"0434549209"}`}
              // target="_blank"
              // rel="noopener noreferrer"
            >
              {" "}
              0434549209
            </Link>
          </div>
          <div className="flex group">
            <span className="text-cyanblue font-semibold">E:</span>

            <Link
              href="https://mail.google.com/mail/u/0/#compose"
              target="blank"
              rel="noopener noreferrer"
              className="font-semibold group-hover:text-skyblue"
            >
              {" "}
              info@perthbrightcleaningservices.com.au
            </Link>
          </div>
        </div>

        <div className="flex gap-2">
          {SocialLinks.map((Item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center cursor-pointer items-center h-10 w-10 bg-cyanblue rounded-full hover:bg-lightblue"
              >
                {/* <Link href="#" className=""> */}
                {Item.icon}
                {/* </Link> */}
              </div>
            );
          })}
        </div>
      </div>

      {/* quick links */}
      {/* <hr className="bg-gray-500" /> */}
    </div>
  );
};

export default ContactUs;

// svg component are below

export const FacebookComp = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    </>
  );
};

export const TwitterComp = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    </>
  );
};

export const LinkedinComp = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    </>
  );
};

export const YoutubeComp = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    </>
  );
};

export const SocialLinks = [
  {
    icon: <FacebookComp />,
    link: "#",
  },

  {
    icon: <TwitterComp />,
    link: "#",
  },
  {
    icon: <LinkedinComp />,
    link: "#",
  },
  {
    icon: <YoutubeComp />,
    link: "#",
  },
];
