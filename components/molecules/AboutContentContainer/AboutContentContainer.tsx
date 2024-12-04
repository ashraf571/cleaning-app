"use client";

import React from "react";
import Heading from "@/components/atoms/Heading/heading";
import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const AboutContentContainer = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center ">
      <div className=" flex flex-col gap-5 mx-4 max-w-[650px]">
        <Heading heading="About Us" font="48px" />

        <div
          className="border-l-[6px] border-lightblue p-10 text-cyanblue bg-white"
          style={{ boxShadow: "10px 3px 30px rgba(0, 0, 0, 0.10)" }}
        >
          PBCS Cleaning: eco-friendly, professional cleaning for homes and
          businesses.
        </div>

        <Paragraph
          paragraph="AT Perth Bright Cleaning Services (PBCS), we are proud to be known for providing high-quality cleaning, thanks to the hard work and dedication of our expert team. We focus on delivering efficient, reliable, and thorough cleaning, always maintaining the high standards we have set for ourselves.
           We offer a wide range of cleaning services tailored to homes, offices, businesses, and commercial spaces, all while keeping things environmentally friendly. Our services are available 24/7—including weekends, bank holidays, and public holidays—at no extra cost.
           We know everyone’s needs are different, so we customise our cleaning solutions to suit you, making the whole process hassle-free. With strong management, attention to detail, and friendly, responsive customer service, we guarantee complete customer satisfaction."
          font="20px"
        />

        <div className="flex justify-start">
          <Button
            onClick={() => router.push("/about")}
            className="rounded-full text-cyanblue text-base font-semibold bg-skyblue hover:bg-skyblue px-8 md:px-12 py-3 md:py-8 hover:text-white"
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutContentContainer;
