import React from "react";
import SectionWrapper from "../layout/SectionWrapper";
import MenuItem from "./MenuItem";

type Props = {};

const OrderNow = (props: Props) => {
    const menuItemsData = [
        {
            image: "/",
            name: "Appetizers",
            url: "/"
        },
        {
            image: "/",
            name: "Salads & soups",
            url: "/"
        },
        {
            image: "/",
            name: "Panini"
        },
        {
            image: "/",
            name: "Pizza",
            url: "/"
        },
        {
            image: "/",
            name: "Pasta",
            url: "/"
        },
        {
            image: "/",
            name: "Dessert",
            url: "/"
        },
    ]
  return (
    <SectionWrapper>
          <h2 className="text-4xl uppercase md:text-6xl font-extrabold">Order Now</h2>
          <div className="my-12 flex items-center justify-center flex-wrap">
              {menuItemsData.map((item, i) => {
                  return (
                      <MenuItem key={i} item={item} />
                  )
              })}
          </div>
    </SectionWrapper>
  );
};

export default OrderNow;
