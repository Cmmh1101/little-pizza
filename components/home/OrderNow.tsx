import React from "react";
import SectionWrapper from "../utils/SectionWrapper";
import MenuItem from "./MenuItem";
import {menuItemsData} from "../../data/menuItemsData"

type Props = {};

const OrderNow = (props: Props) => {
    
  return (
    <SectionWrapper>
          <h2 className="text-4xl uppercase md:text-6xl font-extrabold">Order Now</h2>
          <div className="my-12 flex items-center justify-evenly flex-wrap lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-28">
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
