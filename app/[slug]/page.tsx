// "use client";

import React from "react";

import HeroArea from "@/components/molecules/HeroArea/HeroArea";
import ServicesDetailesSection from "@/components/templates/ServicesDetailes/ServicesDetailesSection";
import { ServiceData } from "@/components/templates/ServicesDetailes/ServiceData";

interface ParamsIF {
  slug: string;
}

// Dynamic metadata function
export async function generateMetadata({ params }: { params: ParamsIF }) {
  const { slug } = params;

  // Find the corresponding metadata for the slug
  const service = ServiceData.find(
    (item: { slug: string }) => item.slug === slug
  );

  // Fallback metadata if slug not found
  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service does not exist.",
    };
  }

  // Safely extract the title and description
  const title = service.text;
  const description =
    service.sections &&
    service.sections.length > 0 &&
    service.sections[0].paragraphs
      ? service.sections[0].paragraphs[0]
      : "Description not available.";

  return {
    title,
    description,
  };
}

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
