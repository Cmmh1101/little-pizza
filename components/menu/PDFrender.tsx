import { Image } from "@react-pdf/renderer";
import { Document } from "@react-pdf/renderer";

import React from "react";

type Props = {};

const PDFrender = (props: Props) => {
  return (
    <div className="h-screen">
      <object
        data="../assets/images/menus/menu.pdf"
        type="application/pdf"
        style={{ backgroundColor: "#000" }}
        width="100%"
        height="100%"
      >
        {/* <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p> */}
      </object>
    </div>
  );
};

export default PDFrender;
