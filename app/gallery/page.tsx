import HeroArea from "@/components/molecules/HeroArea/HeroArea";
import Gallery from "@/components/organisms/Gallery/Gallery";
import React from "react";

export const metadata = {
  title: "Gallery - Perth Bright Cleaning Services",
  description:
    "View our Gallery showcasing the exceptional cleaning transformations by Perth Bright Cleaning Services. Witness the difference our professional team makes for homes and businesses.",
  alternates: {
    canonical: "https://perthbrightcleaningservices.com.au/gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery - Perth Bright Cleaning Services",
    description:
      "Explore our Gallery and see the spotless results delivered by PBCS. From homes to offices, experience the brilliance of our cleaning expertise.",
    images: "https://perthbrightcleaningservices.com.au/opengraph-image.png",
  },
  icons: [{ rel: "icon", url: "/icon.png" }],
  openGraph: {
    type: "website",
    url: "https://perthbrightcleaningservices.com.au/gallery",
    siteName: "Perth Bright Cleaning Services",
    title: "Gallery - Perth Bright Cleaning Services",
    description:
      "Discover stunning cleaning transformations in our Gallery. Perth Bright Cleaning Services is committed to providing top-notch cleaning for every space.",
    images: "https://perthbrightcleaningservices.com.au/opengraph-image.png",
  },
};

const page = () => {
  return (
    <div>
      <HeroArea />
      <Gallery />
    </div>
  );
};

export default page;
