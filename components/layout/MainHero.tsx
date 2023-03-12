import React from "react";

type Props = {};

const MainHero = (props: Props) => {
  return (
    <header className="flex items-center w-full h-screen">
      <video
        width={100}
        height={100}
        className="absolute bottom-0 object-cover z-0 left-0 w-full h-screen bg-black"
        loop
        autoPlay
        muted
        playsInline
      >
        <source src="../assets/videos/heroPizza1.mp4" type="video/mp4" />
      </video>
      <div className="container mx-auto text-center z-50">
        <h1 className="text-6xl md:text-8xl text-white font-bold mb-5">
          Little Italy East Memphis
        </h1>
        <p className="font-medium text-gray-200 text-2xl mb-5">
          {" "}
          Pizza & Pasta
        </p>
        <button className="px-5 py-2 text-2xl text-white font-semibold rounded-full border border-red-200 bg-red-600 hover:text-white hover:bg-red-500  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">
          Order Now!
        </button>
      </div>
    </header>
  );
};

export default MainHero;
