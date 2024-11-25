"use client";

import React from "react";

import HeroArea from "@/components/molecules/HeroArea/HeroArea";


const serviceDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
  console.log("params", params);

  return (
    <div>
      <HeroArea />
      <p></p>
    </div>
  );
};

import domesticCleaning1 from '@/assets/images/serviceSectionImage/domistic-cleaning.jpg'
import domesticCleaning2 from '@/assets/images/serviceSectionImage/domestic-cleaning2.jpg'

const serviceDetailData = [
  {
    slug: "domestic-cleaning",
    text: "Domestic Cleaning",
    image: "",
    details: [
      {
        image: domesticCleaning1.src,
        paragraphs: [
          "In order to stay healthy, it’s crucial to keep your living space clean. Cleaning alone is not important; what you use to clean with and whether you disinfect and sanitise are more crucial. Your health and safety will be effectively maintained by our eco-friendly and plant-based product. You are entrusting us with the responsibility for cleaning your house as well as your health. This matters to us much. We are proud of the work we do.",
          "If your home is fresh and clean when you walk in, you’ll feel great. It alters how you feel. That is our area of expertise! We’ll leave your home spotless when we’re done. Additionally, as every property has different needs and a unique layout, you can ask us to complete additional jobs. We are delighted to complete tasks like cleaning the oven, cleaning the barbeque, washing the windows, cleaning the balcony, cleaning the pool fences, cleaning with high pressure, cleaning the tiles and grout, gardening, and removing mould. Additionally, we enjoy doing odd things to facilitate your life.",
        ],
      },
      {
        heading: "We offer following services in regards to Domestic Cleaning",
        image: domesticCleaning2.src,
        list1: [
          "One-Time Cleaning",
          "Monthly Cleaning",
          "Bi-Weekly Cleaning",
          "Weekly Cleaning",
          "Routine/Daily Cleaning",
          "Move-In Cleaning",
          "Blind Cleaning",
        ],
        list2Heading:
          "When performing a standard house cleaning, we cover the following tasks:",
        list2: [
          "Begin with dusting",
          "Wipe down surfaces",
          "Clean kitchen surfaces",
          "Scrub bathrooms and toilets",
          "Wipe laundry room surfaces",
          "Sweep and mop floors",
          "Remove cobwebs and dust",
        ],
      },
    ],
  },
  {
    slug: "domestic-cleaning",
    text: "Domestic Cleaning",
    image: "",
    details: [
      {
        image: domesticCleaning1.src,
        paragraphs: [
          "In order to stay healthy, it’s crucial to keep your living space clean. Cleaning alone is not important; what you use to clean with and whether you disinfect and sanitise are more crucial. Your health and safety will be effectively maintained by our eco-friendly and plant-based product. You are entrusting us with the responsibility for cleaning your house as well as your health. This matters to us much. We are proud of the work we do.",
          "If your home is fresh and clean when you walk in, you’ll feel great. It alters how you feel. That is our area of expertise! We’ll leave your home spotless when we’re done. Additionally, as every property has different needs and a unique layout, you can ask us to complete additional jobs. We are delighted to complete tasks like cleaning the oven, cleaning the barbeque, washing the windows, cleaning the balcony, cleaning the pool fences, cleaning with high pressure, cleaning the tiles and grout, gardening, and removing mould. Additionally, we enjoy doing odd things to facilitate your life.",
        ],
      },
      {
        heading: "We offer following services in regards to Domestic Cleaning",
        image: domesticCleaning2.src,
        list1: [
          "One-Time Cleaning",
          "Monthly Cleaning",
          "Bi-Weekly Cleaning",
          "Weekly Cleaning",
          "Routine/Daily Cleaning",
          "Move-In Cleaning",
          "Blind Cleaning",
        ],
        list2Heading:
          "When performing a standard house cleaning, we cover the following tasks:",
        list2: [
          "Begin with dusting",
          "Wipe down surfaces",
          "Clean kitchen surfaces",
          "Scrub bathrooms and toilets",
          "Wipe laundry room surfaces",
          "Sweep and mop floors",
          "Remove cobwebs and dust",
        ],
      },
    ],
  },
];

export default serviceDetail;
