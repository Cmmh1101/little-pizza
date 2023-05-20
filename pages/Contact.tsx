import React from "react";
import ContactUsArea from "../components/contact/ContactUsArea";
import Head from "next/head";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <>
      <Head>
        <title>Little Italy East Memphis | Contact us</title>
        <meta name="description" content="Contact us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className="min-h-screen flex"
        style={{
          backgroundImage: "url('/../assets/images/italy-view.jpg')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ContactUsArea />
      </div>
    </>
  );
};

export default AboutUs;
