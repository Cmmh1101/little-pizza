import React from "react";
import SectionWrapper from "../layout/SectionWrapper";
import MenuItem from "./MenuItem";
import {menuItemsData} from "../../data/menuItemsData"

type Props = {};

const OrderNow = (props: Props) => {
    
  return (
    <SectionWrapper>
          <h2 className="text-4xl uppercase md:text-6xl font-extrabold">Order Now</h2>
          <div className="my-12 flex items-center justify-evenly flex-wrap">
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
