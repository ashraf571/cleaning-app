import React from "react";
import testimonial1 from "@/assets/images/testimonialImages/testimonialImage1.png";
import Image from "next/image";
import { Check } from "lucide-react";

const TestinomialSlider = () => {
  return (
    <div className="bg-darkocean">
      <div className="flex flex-col gap-10 mt-10 mx-14 pb-20 pt-16">
        <div className="flex justify-center">
          <h2 className="font-semibold text-[56px] text-white">
            What Our Customers Say
          </h2>
        </div>

        {/* swiper slider */}

        <div className="relative flex flex-col items-center md:flex-row md:items-center gap-10 py-8 md:py-14 px-8 md:px-14 rounded-2xl bg-white ">
          {/* Bottom Borders */}

          {/* Middle Bottom Border */}
          <div className="absolute -bottom-[20px] left-5  right-5 h-5 bg-testimonialb1 rounded-b-2xl"></div>
          {/* Inner Bottom Border */}
          <div className="absolute -bottom-[40px] left-10 right-10 h-5 bg-testimonialb2 rounded-b-2xl"></div>

          <Image
            src={testimonial1}
            alt=""
            className="h-44 w-44 rounded-full border-[18px] border-white "
            style={{ boxShadow: "10px 3px 30px rgba(0, 0, 0, 0.10)" }}
          />
          <div className="flex justify-center items-center h-8 w-8 rounded-full bg-yellow-300 absolute left-[200px] sm:left-[350px] md:top-14 md:left-44 ">
            <Check size={16} className="text-darkocean" />
          </div>

          <div className="flex flex-col items-center  md:items-start gap-5">
            <span className="text-xl text-darkocean">
              "PCDC Cleaning Service exceeded my expectations! The team was
              punctual and extremely thorough. My house has never looked better"
            </span>

            <span className="text-3xl text-darkocean">Gita Shrestha</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestinomialSlider;

export const testimonialData = [
  {
    image: testimonial1,
    description:
      "PCDC Cleaning Service exceeded my expectations! The team was punctual and extremely thorough. My house has never looked better!",
    name: "Gita Shrestha",
  },
  {
    image: testimonial1,
    description:
      "I’ve used several cleaning services, but PCDC stands out. They always arrive on time, and their attention to detail is impressive. I highly recommend them!",
    name: "Ram Kaji",
  },
  {
    image: testimonial1,
    description:
      "The end of lease cleaning from PCDC was fantastic! They made the process so easy and stress-free. I got my full bond back thanks to their great work!",
    name: "Hari",
  },
];
