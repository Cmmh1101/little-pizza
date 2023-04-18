import React from "react";
import SectionWrapper from "../utils/SectionWrapper";
import pizza from "../../public/assets/images/pizza-light.png"
import Image from "next/image";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="w-full min-h-[40vh] py-28 px-5 lg:px-40 xl:px-60 flex flex-col items-center justify-center bg-green-600 relative overflow-hidden">
          <h3 className="text-3xl uppercase md:text-5xl text-white font-bold text-center z-10">
        Call and Order Your Favorites Now!
        <br />
        <a href="tel:9017250280">(901) 725-0280</a>
      </h3>
      <Image src={pizza} alt="Pizza" width={500} height={500}  className="absolute bottom-0 right-0 transform rotate-45 translate-y-48 translate-x-48 hidden md:block z-1"  />
      <Image src={pizza} alt="Pizza" width={500} height={500} className="absolute top-0 left-0 -translate-y-40  -translate-x-48 hidden md:block z-1"  />
    </div>
  );
};

export default Banner;
