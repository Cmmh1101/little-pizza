import React from "react";
import SectionWrapper from "../utils/SectionWrapper";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="w-full min-h-[40vh] py-28 px-5 lg:px-40 xl:px-60 flex flex-col items-center justify-center bg-green-600">
          <h3 className="text-3xl uppercase md:text-5xl text-white font-bold text-center">
        Call and Order Your Favorites Now!
        <br />
        <a href="tel:9017250280">(901) 725-0280</a>
      </h3>
    </div>
  );
};

export default Banner;
