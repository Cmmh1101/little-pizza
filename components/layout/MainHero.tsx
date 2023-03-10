import React from "react";

type Props = {};

const MainHero = (props: Props) => {
  return (
    <header className=" flex items-center w-full h-screen ">
      <div className="container mx-auto text-center">
              <h1 className="text-6xl font-bold mb-3">Little Italy East Memphis</h1>
              <p className="font-medium text-2xl mb-3"> Pizza & Pasta</p>
              <button className="px-4 py-1 text-lg text-white font-semibold rounded-full border border-red-200 bg-red-600 hover:text-white hover:bg-red-500  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">Order Now!</button>
      </div>
    </header>
  );
};

export default MainHero;
