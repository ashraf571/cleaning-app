"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import CleaningOffice from "@/assets/images/full-shot-people-cleaning-office.jpg";
import Heading48 from "@/components/atoms/Heading48/Heading48";
import Image from "next/image";
import { Tilt } from "react-tilt";

const WhoAreWe = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`py-10 mx-auto max-w-[1200px] px-4 lg:px-6 xl:px-10 ${
        inView ? "animate-zoomOut" : "scale-50 opacity-0"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 ">
        <div className="w-full lg:w-[500px] xl:w-[570px]">
          {/* <Image src={CleaningOffice} alt="" className="w-full" /> */}
          <Tilt options={{ max: 10, scale: 1, speed: 400 }}>
            <Image
              src={CleaningOffice}
              alt="Animated"
              draggable={false}
              className="w-full"
              style={{
                transition: "all 0.6s ease-out",
                transformOrigin: "center",
              }}
            />
          </Tilt>
        </div>

        <div className=" flex flex-col gap-8 text-cyanblue lg:mt-0 xl:mt-32 px-0 md:px-10 ">
          <Heading48 heading="Who We Are?" />
          <p className="text-base mt-3">
            {" "}
            Professional Commercial and Domestic Cleaning(PCDC) Services is
            widely recognized as a comprehensive cleaning provider, thanks to
            the skill, professionalism, and dedication of our expert team. We
            prioritize efficiency and quality, maintaining the high standards
            we&apos;ve set for our cleaning services. Offering a variety of
            specialized cleaning solutions, we serve homes, businesses, offices,
            and commercial spaces with an environmentally conscious approach.
          </p>
          <p className="text-base">
            For your convenience, our services are available around the clock,
            including weekends, bank, and public holidays at no extra cost. This
            allows us to fit seamlessly into your schedule. We customize our
            cleaning solutions to meet each client&apos;s specific needs,
            ensuring a hassle-free experience. With strong management,
            high-quality work, a professional approach, and responsive customer
            service, we guarantee complete customer satisfaction.
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 md:gap-5">
            {AttributesData.map((Item, index) => {
              return (
                <div key={index} className="flex gap-3 items-center">
                  <span>{Item.icon}</span>
                  <h2 className=" text-lg">{Item.name} </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;

// svg components here
export const CosteffectiveIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className=" h-8 w-8 e-font-icon-svg e-fas-money-bill"
      viewBox="0 0 640 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"></path>
    </svg>
  );
};

export const ExperiencedTeamIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className=" h-8 w-8 e-font-icon-svg e-fas-people-carry"
      viewBox="0 0 640 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z"></path>
    </svg>
  );
};

export const EcoFriendlyIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className=" h-7 w-7 e-font-icon-svg e-fas-globe-americas"
      viewBox="0 0 496 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path>
    </svg>
  );
};

export const SatisfactionIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className=" h-7 w-7 e-font-icon-svg e-fas-check-circle"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
    </svg>
  );
};

export const AttributesData = [
  {
    icon: <CosteffectiveIcon />,
    name: "Cost-effective",
  },
  {
    icon: <ExperiencedTeamIcon />,
    name: "Experienced team",
  },
  {
    icon: <EcoFriendlyIcon />,
    name: "Eco-Friendly Products",
  },
  {
    icon: <SatisfactionIcon />,
    name: "100% Satisfaction Guarnateed",
  },
];
