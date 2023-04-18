import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import logo from "../../public/assets/images/logo-light.png"

type Props = {};

const Navbar = (props: Props) => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  return (
    <nav className="w-full relative top-0 left-0 z-50 bg-gray-50 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#">
              <Image src={logo} alt="Little Italy Pizza Logo" width={250} height={200} />
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
              <li
                className={`text-black font-normal md:font-bold text-2xl hover:text-red-600 hover:lg:border-b-4 hover:border-red-600 transition duration-300 ease-in-out ${
                  router.pathname == "/" &&
                  "text-red-600 md:border-b-4 md:border-red-600"
                }`}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`text-black font-normal md:font-bold text-2xl hover:text-red-600 hover:lg:border-b-4 hover:border-red-600 transition duration-300 ease-in-out ${
                  router.pathname == "/AboutUs" &&
                  "text-red-600 md:border-b-4 md:border-red-600"}`}
              >
                <Link href="/AboutUs">About Us</Link>
              </li>
              <li
                className={`text-black font-normal md:font-bold text-2xl hover:text-red-600 hover:lg:border-b-4 hover:border-red-600 transition duration-300 ease-in-out ${
                  router.pathname == "/OrderNow" &&
                  "text-red-600 md:border-b-4 md:border-red-600"}`}
              >
                <a href="/OrderNow">Order Now!</a>
              </li>
              <li
                className={`text-black font-normal md:font-bold text-2xl hover:text-red-600 hover:lg:border-b-4 hover:border-red-600 transition duration-300 ease-in-out ${
                  router.pathname == "/Catering" &&
                  "text-red-600 md:border-b-4 md:border-red-600"}`}
              >
                <Link href="/Catering">Catering</Link>
              </li>
              <li
                className={`text-black font-normal md:font-bold text-2xl hover:text-red-600 hover:lg:border-b-4 hover:border-red-600 transition duration-300 ease-in-out ${
                  router.pathname == "/Contact" &&
                  "text-red-600 md:border-b-4 md:border-red-600"}`}
              >
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
