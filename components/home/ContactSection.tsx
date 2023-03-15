import React from "react";

const ContactSection = () => {
  return (
    <div className="w-full h-[50vh] lg:px-40 xl:px-60 flex flex-col items-center justify-center">
      <h2 className="text-4xl mb-4 md:text-6xl uppercase font-bold">Come Find Us</h2>
      <p className="text-2xl uppercase md:text-4xl font-bold text-center">
        In East Memphis on Poplar Ave.
      </p>
      <address>1495 Union Ave, Memphis, TN 38104</address>
    </div>
  );
};

export default ContactSection;
