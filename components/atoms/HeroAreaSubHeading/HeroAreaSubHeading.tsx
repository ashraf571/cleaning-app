import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const HeroAreaSubHeading = ({ path }: { path: string }) => {
  return (
    <div className=" text-base flex mt-2">
      <a href="/"> Home </a>{" "}
      <span className="mt-1 px-1">
        {" "}
        <FaAngleDoubleRight color="#ffffff" size={16} />
      </span>{" "}
      <span>{path}</span>
    </div>
  );
};

export default HeroAreaSubHeading;
