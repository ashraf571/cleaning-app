import React from "react";

interface ParagraphIF {
  paragraph: string;
  font: string;
}
const Paragraph = ({ paragraph, font }: ParagraphIF) => {
  return (
    <div className="text-cyanblue" style={{ fontSize: font }}>
      {paragraph}
    </div>
  );
};

export default Paragraph;
