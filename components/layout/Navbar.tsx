import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/assets/images/logo-light.png"
import NavLinks from "./NavLinks";
import { FiMapPin, FiClock } from "react-icons/fi"


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const linkArray = [
    {
      url: "/",
      linkName: "Home"
    },
    {
      url: "/AboutUs",
      linkName: "About Us"
    },
    {
      url: "https://www.ezcater.com/catering/pvt/little-italy-pizza-memphis-memphis",
      linkName: "Catering"
    },
    {
      url: "/Contact",
      linkName: "Contact"
    },
    {
      url: "https://togoorder.com/web/Home/InactiveLocation/2645",
      linkName: "Order Now"
    },
  ]

  return (
    <nav className="w-full absolute top-0 left-0 z-50 bg-gray-50 shadow">
      <div className="w-full flex justify-center items-center flex-wrap bg-black text-gray-200 text-sm py-1"><p className="flex justify-center items-center text-gray-200 mx-3"><span className="pr-1"><FiMapPin /> </span>6300 Poplar Ave, Suite 113
Memphis, TN 38119</p><p className="flex justify-center items-center text-gray-200 mx-3"><span className="pr-1"><FiClock /> </span>Mon – Thurs 11 AM – 9 PM, Fri - Sat 11 AM - 10 PM, Sun 12 PM - 9 PM</p></div>
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-0 md:py-5 md:block">
            <a href="#" className="mx-auto">
              <Image src={logo} alt="Little Italy Pizza Logo" width={200} height={200} />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {linkArray.map((link, i) => {
                return (
                  <NavLinks key={i} path={link.url} name={link.linkName} />
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
