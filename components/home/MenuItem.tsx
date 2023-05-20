import Image from "next/image";
import React from "react";
import classes from "./menuItem.module.css"
import Link from "next/link";

interface Props {
  item: ItemData;
}
interface ItemData {
  name: string;
  image: string;
  url?: string;
}

const MenuItem = ({ item }: Props) => {
  return (
    <div className="w-60 lg:w-64 flex flex-col items-center my-6 group">
      <div className={`w-full h-56 filter group-hover:drop-shadow-2xl transition ease-in duration-500 ${classes.img}`}>
        <Image src={item.image} alt={item.name} width={200} height={200} className="transform  object-none object-left-top scale-90 group-hover:scale-95 transition ease-in duration-500" />
      </div>
      <Link
        href={item.url!}
        target="_blank"
        rel="nonrreferer"
        className="px-5 py-2 text-2xl text-white font-semibold border border-red-200 bg-red-600 hover:text-white hover:bg-red-500  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
      >
        {item.name}
      </Link>
    </div>
  );
};

export default MenuItem;
