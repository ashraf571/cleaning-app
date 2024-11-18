// components/BackgroundSection.js
import React, { ReactElement } from "react";

interface BackgroundSectionIF{
    children: ReactElement,
    imageUrl: string
}

const BackgroundSection = ({ children, imageUrl }: BackgroundSectionIF) => {
  return (
    <div
      className=" opacity-70 max-md:h-[380px] h-[411px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
};

export default BackgroundSection;
