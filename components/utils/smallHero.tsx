import React from "react";

interface Props {
  text?: string;
}

const smallHero = ({ text }: Props) => {
  return (
    <header
      className="flex items-end w-full h-[40vh] tracking-widest shadow"
      style={{
        backgroundImage: "url('/../assets/images/smallHero.jpg')",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto text-center z-20">
        <a
          href="/"
          target="_blank"
          rel="nonrreferer"
          className="px-5 py-2 text-2xl text-white font-semibold rounded-full border border-red-200 bg-red-600 hover:text-white hover:bg-red-500  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
        >
          Order Now!
        </a>
      </div>
    </header>
  );
};

export default smallHero;
