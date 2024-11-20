import ContactForm from "@/components/molecules/ContactForm/ContactForm";
import MapIfram from "@/components/molecules/MapIfram/MapIfram";
import React from "react";

const ContactUsSection = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" max-w-[1200px] w-full flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 w-full">
            <MapIfram />
            <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
