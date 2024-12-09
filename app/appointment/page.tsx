// import Image from "next/image";
import React from "react";
// import footerImage from "@/assets/images/FooterImages/footer-1-bg-1.jpeg";
import ContactForm from "@/components/molecules/ContactForm/ContactForm";
import HeroArea from "@/components/molecules/HeroArea/HeroArea";

const page = () => {
  return (
    <div>
      <HeroArea />
      <div className="relative  max-lg:px-4 z-10 flex justify-center ">
        <ContactForm isAppointment={true} />
      </div>
    </div>
  );
};
export default page;
