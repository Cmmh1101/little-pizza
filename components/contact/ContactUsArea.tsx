import React from "react";
import Form from "./Form";

const ContactUsArea = () => {
  return (
    <div className="w-full py-28 pt-48 px-5 flex items-center justify-center flex-col text-white bg-black bg-opacity-80 text-center">
      <h2 className="text-4xl uppercase md:text-6xl font-extrabold mb-5">
        Contact Us
      </h2>
      <div className="flex items-center flex-wrap justify-center rounded-2xl  p-5 text-white bg-black bg-opacity-80 text-center">
        <div className="flex flex-col" style={{ width: "50%", minWidth: "400px" }}>
          
          <a
            href="tel:9017297432"
            className="text-white transition ease-in-out hover:underline"
          >
           Phone: (901) 729-7432
          </a>
          <a
            href="tel:9017297432"
            className="text-white transition ease-in-out hover:underline"
          >
           Text Only: (901) 979-1755
          </a>
          <address className="mb-3">6300 Poplar Ave, Suite 113 Memphis, TN 38119</address>
          <Form />
        </div>
        <div className="w-50 rounded-xl overflow-hidden" style={{ width: "50%", minWidth: "400px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.1869791661384!2d-89.85526102267984!3d35.10204167277975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f84cafe2ad1c9%3A0x906de165e5e3de0c!2s6300%20Poplar%20Ave%20%23113%2C%20Memphis%2C%20TN%2038119!5e0!3m2!1sen!2sus!4v1684559021770!5m2!1sen!2sus"
            className="w-full "
            width="600"
            height="550"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsArea;
