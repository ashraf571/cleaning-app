import HeroArea from "@/components/molecules/HeroArea/HeroArea";
import IntouchSection from "@/components/molecules/InTouchSection/IntouchSection";
import ContactUsSection from "@/components/organisms/ContactUsSection/ContactUsSection";
import React from "react";

export const metadata = {
  title: "Contact Perth Bright Cleaning Services - Get in Touch Today",
  description:
    "Have questions or need assistance? Contact Perth Bright Cleaning Services (PBCS) for professional cleaning solutions. We're here to help with your home and office cleaning needs.",
  alternates: {
    canonical: "https://perthbrightcleaningservices.com.au/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Perth Bright Cleaning Services - Get in Touch Today",
    description:
      "Reach out to PBCS for reliable and eco-friendly cleaning services. Contact us via phone, email, or our online form for personalized assistance.",
    images: "https://perthbrightcleaningservices.com.au/opengraph-image.png",
  },
  icons: [{ rel: "icon", url: "/icon.png" }],
  openGraph: {
    type: "website",
    url: "https://perthbrightcleaningservices.com.au/contact",
    siteName: "Perth Bright Cleaning Services",
    title: "Contact Perth Bright Cleaning Services - Get in Touch Today",
    description:
      "Get in touch with Perth Bright Cleaning Services for all your cleaning inquiries. Our team is ready to provide top-quality services for your home and office.",
    images: "https://perthbrightcleaningservices.com.au/opengraph-image.png",
  },
};

const Contact = () => {
  return (
    <div>
      <HeroArea />
      <IntouchSection />
      <ContactUsSection />
    </div>
  );
};

export default Contact;
