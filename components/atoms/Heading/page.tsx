import React from "react";

interface HeadingIF {
  font: string;
  heading: string;
}
const Heading = ({ font, heading }: HeadingIF) => {
  return (
    <div className="text-cyanblue font-semibold" style={{ fontSize: font }}>
      {heading}
    </div>
  );
};

export default Heading;
