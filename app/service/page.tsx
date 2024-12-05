import HeroArea from "@/components/molecules/HeroArea/HeroArea";
import ServiceSection from "@/components/organisms/ServiceSection/ServiceSection";
import React from "react";

export const metadata = {
  title: "Our Services - Perth Bright Cleaning Services",
  description:
    "Explore our wide range of professional cleaning services, including residential, commercial, and eco-friendly cleaning. PBCS ensures spotless results for homes and businesses.",
  alternates: {
    canonical: "https://perthbrightcleaningservices.com.au/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Perth Bright Cleaning Services",
    description:
      "Discover expert cleaning services by PBCS. From home to office cleaning, we deliver excellence with eco-friendly solutions tailored to your needs.",
    images: "https://perthbrightcleaningservices.com.au/opengraph-image.png",
  },
  icons: [{ rel: "icon", url: "/icon.png" }],
  openGraph: {
    type: "website",
    url: "https://perthbrightcleaningservices.com.au/services",
    siteName: "Perth Bright Cleaning Services",
    title: "Our Services - Perth Bright Cleaning Services",
    description:
      "At PBCS, we offer top-tier cleaning services for residential and commercial spaces. Trust our experienced team for eco-friendly, reliable cleaning solutions.",
    images: "https://perthbrightcleaningservices.com.au/opengraph-image.png",
  },
};

const service = () => {
  return (
    <div>
      <HeroArea />
      <ServiceSection />
    </div>
  );
};

export default service;
