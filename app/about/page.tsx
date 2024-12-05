import React from "react";

import HeroArea from "@/components/molecules/HeroArea/HeroArea";
import WhoAreWe from "@/components/organisms/WhoAreWe/WhoAreWe";
import OurMission from "@/components/organisms/OurMission/OurMission";
import HowWeWork from "@/components/organisms/HowWeWork/HowWeWork";

export const metadata = {
  title: "About Perth Bright Cleaning Services - Your Trusted Cleaning Experts",
  description:
    "Learn about Perth Bright Cleaning Services (PBCS) and our commitment to providing exceptional cleaning solutions for homes and businesses. Discover our values, eco-friendly practices, and experienced team that puts customer satisfaction first.",
  alternates: {
    canonical: "https://perthbrightcleaningservices.com.au/about",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Perth Bright Cleaning Services - Your Trusted Cleaning Experts",
    description:
      "Discover PBCS's story and dedication to delivering high-quality, eco-friendly cleaning services. Meet our experienced team and explore our mission to create a cleaner, healthier environment.",
    images: "https://perthbrightcleaningservices.com.au/opengraph-image.png",
  },
  icons: [{ rel: "icon", url: "/icon.png" }],
  openGraph: {
    type: "website",
    url: "https://perthbrightcleaningservices.com.au/about",
    siteName: "Perth Bright Cleaning Services",
    title:
      "About Perth Bright Cleaning Services - Your Trusted Cleaning Experts",
    description:
      "Perth Bright Cleaning Services is committed to delivering excellence in residential and commercial cleaning. Learn about our eco-conscious approach, experienced professionals, and unwavering focus on customer satisfaction.",
    images: "https://perthbrightcleaningservices.com.au/opengraph-image.png",
  },
};

const page = () => {
  return (
    <div>
      <HeroArea />
      <WhoAreWe />
      <OurMission />
      <HowWeWork />
    </div>
  );
};

export default page;
