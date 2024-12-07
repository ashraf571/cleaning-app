import React from "react";
import HomePage from "@/components/templates/Home/Home";

export const metadata = {
  title:
    "Perth Bright Cleaning Services - Professional Cleaning Services for Your Home and Office",
  description:
    "Experience top-notch cleaning services with PBCS. We specialize in residential, commercial, and eco-friendly cleaning, ensuring spotless results every time. Book now for a cleaner tomorrow.",
  alternates: {
    canonical: "https://perthbrightcleaningservices.com.au/",
  },
  twitter: {
    card: "summary_large_image",
    title: "PBCS - Professional Cleaning Services for Your Home and Office",
    description:
      "Discover PBCS expert cleaning solutions for homes and businesses. We use eco-friendly products and offer 100% satisfaction guaranteed services.",
    images: "https://perthbrightcleaningservices.com.au/opengraph-image.png",
  },
  icons: [{ rel: "icon", url: "/icon.png" }],
  openGraph: {
    type: "website",
    url: "https://perthbrightcleaningservices.com.au/",
    siteName: "Perth Bright Cleaning Services",
    title:
      "Perth Bright Cleaning Services - Professional Cleaning Services for Your Home and Office",
    description:
      "PBCS delivers reliable cleaning services with a focus on excellence and sustainability. Choose us for a sparkling clean environment at home or work.",
    images: "https://perthbrightcleaningservices.com.au/opengraph-image.png",
  },
};

const page = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default page;
