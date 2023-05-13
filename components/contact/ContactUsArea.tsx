import React from "react";

const ContactUsArea = () => {
  return (
    <div className="w-full py-28 pt-48 px-5  flex items-center flex-wrap justify-center text-white bg-red-600 bg-opacity-25 text-center">
      <div className="" style={{width: "50%", minWidth: "400px"}}>
        <h2 className="text-4xl uppercase font-bold">
          Contact Us
        </h2>
        <p className="text-2xl uppercase">
          In East Memphis on Poplar Ave.
        </p>
        <address>1495 Union Ave, Memphis, TN 38104</address>
      </div>
      <div className="w-50" style={{width: "50%", minWidth: "400px"}}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.8259793699394!2d-90.01387504852843!3d35.13601598022835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d57e0fb2599001%3A0xf0b08078df86e5e4!2s1495%20Union%20Ave%2C%20Memphis%2C%20TN%2038104!5e0!3m2!1sen!2sus!4v1610726424262!5m2!1sen!2sus"
          className="w-full"
          width="600"
          height="450"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsArea;
