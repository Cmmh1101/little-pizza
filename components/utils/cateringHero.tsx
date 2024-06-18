import React from "react";
import SectionWrapper from "./SectionWrapper";

interface Props {
  text?: string;
  img?: string;
}

const CateringHero = ({ text }: Props) => {
  return (
    <header
      className="flex justify-center mt-20 items-center w-full h-[60vh] tracking-widest shadow"
      style={{
        backgroundImage: "url('/../assets/images/catering.jpg')",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="text-center">
      <h2 className="text-4xl uppercase md:text-6xl font-extrabold">
          Catering
        </h2>
      </section>
        
    </header>
  );
};

export default CateringHero;
