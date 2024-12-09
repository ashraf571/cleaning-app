"use client";

import React from "react";

import HeroArea from "@/components/molecules/HeroArea/HeroArea";
import ServicesDetailesSection from "@/components/templates/ServicesDetailes/ServicesDetailesSection";
// import { ServiceData } from "@/components/templates/ServicesDetailes";

interface ParamsIF {
  slug: string;
}

// // Dynamic metadata function
// export async function generateMetadata({ params }: { params: ParamsIF }) {
//   const { slug } = params;

//   // Find the corresponding metadata for the slug
//   const meta = metadata.find((item) => item.slug === slug);

//   // Fallback metadata if slug not found
//   if (!meta) {
//     return {
//       title: "Service Not Found",
//       description: "The requested service does not exist.",
//     };
//   }

//   return {
//     title: meta.title,
//     description: meta.description,
//   };
// }

const serviceDetail = ({ params }: { params: ParamsIF }) => {
  console.log("params", params);

  return (
    <div>
      <HeroArea />
      <ServicesDetailesSection params={params as ParamsIF} />
    </div>
  );
};

export default serviceDetail;
