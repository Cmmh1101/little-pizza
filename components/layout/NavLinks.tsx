import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Links {
  path: string;
  name: string;
  toggle: () => void
}

const NavLinks = ({ path, name, toggle }: Links) => {
  const router = useRouter();

  return (
        <li
          className={`text-center text-2xl md:text-lg lg:text-2xl ${name.toLowerCase() === "order now" ? "px-5 py-2 text-white font-semibold rounded-full border border-red-200 bg-red-600 hover:text-white hover:bg-red-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2" : "text-black font-normal md:font-bold hover:text-red-600 hover:lg:border-b-4 hover:border-red-600 transition duration-300 ease-in-out" } ${
            router.pathname == path &&
            "text-red-600 md:border-b-4 md:border-red-600"
          }`}
        >
          <Link href={path} target={name.toLowerCase() === "order now" || name.toLowerCase() === "catering"  ? "_blank":""} onClick={toggle}>{name}</Link>
        </li>
  );
};

export default NavLinks;
