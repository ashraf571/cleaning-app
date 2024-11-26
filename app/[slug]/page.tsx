"use client";

import React from "react";

import HeroArea from "@/components/molecules/HeroArea/HeroArea";
import ServicesDetailesSection from "@/components/templates/ServicesDetailes/ServicesDetailesSection";


const serviceDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
  console.log("params", params);

  return (
    <div>
      <HeroArea />
      <ServicesDetailesSection params={ params } />
    </div>
  );
};

export default serviceDetail;
