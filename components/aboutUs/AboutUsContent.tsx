import React from "react";
import SectionWrapper from "../utils/SectionWrapper";
import { aboutData } from "../../data/aboutData";
import Head from "next/head";

type Props = {};

const AboutUsContent = (props: Props) => {
  console.log(aboutData);
  return (
    <>
      <Head>
        <title>Little Italy East Memphis | Contact us</title>
        <meta name="description" content="Contact us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SectionWrapper>
        <h2 className="text-4xl uppercase md:text-6xl font-extrabold">
          About us
        </h2>
        <div className="my-8">
          {aboutData.map((text, i) => {
            return (
              <p key={i} className="leading-8 my-3">
                {text}
              </p>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
};

export default AboutUsContent;
