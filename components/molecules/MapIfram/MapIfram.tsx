import React from "react";

const MapIfram = () => {
  return (
    <div className=" h-[600px] md:h-[900px] w-[40%] max-lg:w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.440522285119!2d74.2944506742299!3d31.484573148912215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903ee883666d1%3A0x7253ac8053f28429!2s7-9%20College%20Rd%2C%20Quaid-i-Azam%20Campus%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1732133868843!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapIfram;
