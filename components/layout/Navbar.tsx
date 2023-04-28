import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/assets/images/logo-light.png"
import NavLinks from "./NavLinks";
import MenuToggle from "@/components/public/assets/images/MenuToggle";

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
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#" className="mx-auto">
              <Image src={logo} alt="Little Italy Pizza Logo" width={250} height={200} />
            </a>
            <div className="md:hidden">
              <MenuToggle navbar={navbar} setNavbar={setNavbar} />
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
