import React from "react";

import One from "@/assets/images/gallery/1.jpeg";
import Two from "@/assets/images/gallery/2.jpeg";
import Three from "@/assets/images/gallery/3.jpeg";
import Four from "@/assets/images/gallery/4.jpeg";
import Five from "@/assets/images/gallery/5.jpeg";
import Six from "@/assets/images/gallery/6.jpeg";
import Seven from "@/assets/images/gallery/7.jpeg";
import Eight from "@/assets/images/gallery/8.jpeg";
import Nine from "@/assets/images/gallery/9.jpeg";
import Ten from "@/assets/images/gallery/10.jpeg";
import Eleven from "@/assets/images/gallery/11.jpeg";
import Twelove from "@/assets/images/gallery/12.jpeg";
import Thirteen from "@/assets/images/gallery/13.jpeg";
import Fourteen from "@/assets/images/gallery/14.jpeg";
import Fifteen from "@/assets/images/gallery/15.jpeg";
import Sixteen from "@/assets/images/gallery/16.jpeg";
import Seventeen from "@/assets/images/gallery/17.jpeg";
import Eighteen from "@/assets/images/gallery/18.jpeg";
import Nineteen from "@/assets/images/gallery/19.jpeg";
import Twenty from "@/assets/images/gallery/20.jpeg";
import TwentyOne from "@/assets/images/gallery/21.jpeg";
import Image from "next/image";

const Gallery = () => {
  return (
    <div>
      <div className="p-6 flex flex-col justify-center items-center">
        <div className=" p-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 w-full max-w-[1280px]">
            {ImagesArray.map(( image: any, index: number ) => {
                return(
                <Image className="w-full" width={100} height={100} key={index} src={image.src} alt=" sink home toilet " />
            )})}
        </div>
      </div>
    </div>
  );
};

const ImagesArray = [
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven,
  Twelove,
  Thirteen,
  Fourteen,
  Fifteen,
  Seventeen,
  Eighteen,
  Nineteen,
  Twenty,
  TwentyOne,
];
export default Gallery;
