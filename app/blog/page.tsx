import HeroArea from "@/components/molecules/HeroArea/HeroArea";
import Blogs from "@/components/organisms/Blogs/Blogs";
import React from "react";

export const metadata = {
  title: "Cleaning Tips, Eco-Friendly Hacks & Professional Advice - PBCS Blog",
  description:
    "Discover expert cleaning tips, eco-friendly hacks, and professional advice at the Perth Bright Cleaning Services Blog. Learn how to keep your home or office spotless with our step-by-step guides and solutions.",
  alternates: {
    canonical: "https://perthbrightcleaningservices.com.au/blog",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cleaning Tips, Eco-Friendly Hacks & Professional Advice - PBCS Blog",
    description:
      "Get the best cleaning tips, eco-friendly hacks, and step-by-step guides from PBCS Blog. Maintain a cleaner, healthier home or office effortlessly.",
    images:
      "https://perthbrightcleaningservices.com.au/blog-opengraph-image.png",
  },
  icons: [{ rel: "icon", url: "/icon.png" }],
  openGraph: {
    type: "website",
    url: "https://perthbrightcleaningservices.com.au/blog",
    siteName: "Perth Bright Cleaning Services Blog",
    title:
      "Cleaning Tips, Eco-Friendly Hacks & Professional Advice - PBCS Blog",
    description:
      "Stay ahead with the latest cleaning tips, eco-friendly solutions, and professional guides from the PBCS Blog. Learn to clean smarter, not harder.",
    images:
      "https://perthbrightcleaningservices.com.au/blog-opengraph-image.png",
  },
};

const page = () => {
  return (
    <div>
      {/* <HeroArea />
      <Blogs /> */}
    </div>
  );
};

export default page;
