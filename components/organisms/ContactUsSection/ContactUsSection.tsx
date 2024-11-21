import ContactForm from "@/components/molecules/ContactForm/ContactForm";
import MapIfram from "@/components/molecules/MapIfram/MapIfram";
import React from "react";

const ContactUsSection = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" max-w-[1200px] w-full flex justify-center items-center ">
        <div className="flex w-full max-lg:flex-col gap-x-4 mx-8 max-lg:p-4  shadow-lg  shadow-cyan-500/50">
            <MapIfram />
            <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
