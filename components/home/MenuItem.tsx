import Image from "next/image";
import React from "react";
import classes from "./menuItem.module.css"

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
    <div className="w-60 lg:w-64 flex flex-col items-center my-6 group overflow-hidden">
      <div className={`w-full overflow-hidden h-48 ${classes.img}`}>
        <Image src={item.image} alt={item.name} width={300} height={300} className="transform scale-90 group-hover:scale-110 transition ease-in duration-500" />
      </div>
      <a
        href={item.url}
        target="_blank"
        rel="nonrreferer"
        className="px-5 py-2 text-2xl text-white font-semibold border border-red-200 bg-red-600 hover:text-white hover:bg-red-500  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
      >
        {item.name}
      </a>
    </div>
  );
};

export default MenuItem;
