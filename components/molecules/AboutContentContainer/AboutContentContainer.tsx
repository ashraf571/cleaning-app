"use client";

import React from "react";
import Heading from "@/components/atoms/Heading/page";
import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const AboutContentContainer = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col gap-5">
      <Heading heading="About Us" font="48px" />

      <div
        className="border-l-[6px] border-lightblue p-10 text-cyanblue bg-white"
        style={{ boxShadow: "10px 3px 30px rgba(0, 0, 0, 0.10)" }}
      >
        PCDC Cleaning: eco-friendly, professional cleaning for homes and
        businesses.
      </div>
      <Paragraph
        paragraph="We are recognized as a full-service company, known for the expertise, professionalism, and dedication of our skilled team. With a focus on efficiency and quality, we uphold the high standards we’ve set for our services. Offering a comprehensive range of specialized solutions for homes, businesses, offices, and commercial spaces, we are committed to an eco-friendly approach in all that we do."
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
  );
};

export default AboutContentContainer;
