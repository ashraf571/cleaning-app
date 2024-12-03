"use client";
import React from "react";
import { ChevronUp } from "lucide-react";

const ArrowUp = () => {
  const scrollUP = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="h-12 w-12 rounded-full bg-cyanblue flex justify-center items-center fixed right-10 bottom-10 z-20 cursor-pointer"
      onClick={scrollUP}
    >
      <ChevronUp size={30} color="#ffffff" />
    </div>
  );
};

export default ArrowUp;
