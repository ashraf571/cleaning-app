import ContactForm from "@/components/molecules/ContactForm/ContactForm";
import MapIfram from "@/components/molecules/MapIfram/MapIfram";
import React from "react";

const ContactUsSection = () => {
  return (
    <div className="w-full px-12 max-w-[1200px]  flex justify-center items-center bg-red300 mt-12">
      <div className=" bg-green300 w-full flex justify-center items-center ">
        <div
          // className="flex w-full max-lg:flex-col gap-x-4 max-lg:p-4  shadow-md shadow-cyanblue pb-28"
          className="flex flex-col gap-12 lg:flex-row lg:gap-20 w-full shadow-md shadow-cyanblue pb-28 px-6 md:px-0"
        >
          <MapIfram />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
