import React from "react";
import SectionWrapper from "../layout/SectionWrapper";

type Props = {};

const OrderNow = (props: Props) => {
    const menuItem = [
        {
            image: "/",
            name: "Appetizers"
        },
        {
            image: "/",
            name: "Salads & soups"
        },
        {
            image: "/",
            name: "Panini"
        },
        {
            image: "/",
            name: "Pizza"
        },
        {
            image: "/",
            name: "Pasta"
        },
        {
            image: "/",
            name: "Dessert"
        },
    ]
  return (
    <SectionWrapper>
      <div >
        <h2 className="text-4xl uppercase md:text-6xl font-extrabold">Order Now</h2>
      </div>
    </SectionWrapper>
  );
};

export default OrderNow;
