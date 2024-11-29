"use client";

import React from "react";

import HeroArea from "@/components/molecules/HeroArea/HeroArea";
import ServicesDetailesSection from "@/components/templates/ServicesDetailes/ServicesDetailesSection";

interface ParamsIF {
  slug: string
}

const serviceDetail = ({ params }: { params: ParamsIF }) => {
  console.log("params", params);

  return (
    <div>
      <HeroArea />
      <ServicesDetailesSection params={ params as ParamsIF } />
    </div>
  );
};

export default serviceDetail;
