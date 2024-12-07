import ContactForm from "@/components/molecules/ContactForm/ContactForm";
import MapIfram from "@/components/molecules/MapIfram/MapIfram";
import React from "react";

const ContactUsSection = () => {
  return (
    <div className="w-full flex justify-center items-center bg-red300 mt-12">
      <div className=" bg-green300 w-full flex justify-center items-center ">
        <div
          className="flex flex-col gap-10 lg:flex-row lg:gap-14 w-full  pb-28 mx-12 max-w-[1200px]"
          style={{ boxShadow: "10px 3px 30px rgba(0, 0, 0, 0.10)" }}
        >
          <MapIfram />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
