import Image from "next/image";
import React from "react";
import footerImage from "@/assets/images/FooterImages/footer-1-bg-1.jpeg";
import ContactForm from "@/components/molecules/ContactForm/ContactForm";

const page = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <Image
          src={footerImage}
          alt="Footer Background"
          layout="fill" // Ensures it fills the parent container
          objectFit="cover" // Ensures it covers the container
          quality={100}
          priority // Optimize image for above-the-fold content
        />
      </div>

      <div className="relative z-10 flex justify-center ">
        <ContactForm />
      </div>
    </div>
  );
};
export default page;
