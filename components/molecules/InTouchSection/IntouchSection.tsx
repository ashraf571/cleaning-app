import Heading604840 from "@/components/atoms/Heading60-48-40/Heading60-48-40";
import React from "react";
import { Mail, PhoneCall } from "lucide-react";
import Link from "next/link";

const IntouchSection = () => {
  return (
    <div className="w-full flex justify-center mt-12">
      <div className="  flex flex-col  items-center max-w-[1200px] px-6 md:px-10 lg:px-4">
        <br />

        <Heading604840 heading="Get In Touch With Us" />
        <br />
        <br />

        <p className="text-base text-secondryGray text-center">
          We&apos;re dedicated to keeping your space immaculate! If you have any
          questions, need a quote, or wish to book a cleaning service, our
          friendly team is here to help. Contact us via phone, email, or our
          easy online form. We can&apos;t wait to help your home or office
          sparkle!
        </p>
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* <div className="bg-primaryGray p-12">
            <h2 className="text-xl text-cyanblue font-semibold">Address</h2>{" "}
            <p className="text-secondryGray mt-2">
              10/120 Ladywell Street, Beckenham, Western Australia.
            </p>{" "}
          </div> */}
          <div className="bg-primaryGray p-12 flex flex-col  items-center">
            <h2 className="text-xl text-cyanblue font-semibold">
              {/* Phone Number */}
              <PhoneCall size={45} />
            </h2>{" "}
            <p className="text-secondryGray mt-2 text-lg">
              {" "}
              Call Us:{" "}
              <Link
                className="text-primaryBlue hover:text-classicNavy cursor-pointer"
                href={`tel:${"04347545562"}`}
                // target="_blank"
                // rel="noopener noreferrer"
              >
                {" "}
                04347545562
              </Link>
            </p>{" "}
          </div>
          <div className="bg-primaryGray p-12 flex flex-col items-center">
            <h2 className="text-xl text-cyanblue font-semibold">
              {/* Email Address */}
              <Mail size={45} />
            </h2>{" "}
            <Link
              href="https://mail.google.com/mail/u/0/#compose"
              target="blank"
              rel="noopener noreferrer"
              className="text-primaryBlue mt-2 hover:text-classicNavy text-lg"
            >
              {" "}
              info@perthbrightcleaningservices.com.au{" "}
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntouchSection;
