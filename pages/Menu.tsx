import React from "react";
import SmallHero from "../components/utils/smallHero";
import Canvas from "../components/menu/Canvas";
import PDFrender from "../components/menu/PDFrender";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div>
          <SmallHero />
          {/* <Canvas /> */}
          <PDFrender />
    </div>
  );
};

export default AboutUs;
