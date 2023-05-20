import React from "react";
import ReactZoom from "../components/menu/ReactZoom";
import Head from "next/head";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <>
    <Head>
        <title>Little Italy East Memphis | Our Menu</title>
        <meta
          name="description"
          content="Little Italy East Memphis | Our menu"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="">
      <ReactZoom />
    </div>
    </>
    
  );
};

export default AboutUs;
