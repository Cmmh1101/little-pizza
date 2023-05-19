import React from "react";
import SmallHero from "../components/utils/smallHero";
import PDFrender from "../components/menu/PDFrender";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div>
          <SmallHero />
          <PDFrender />
    </div>
  );
};

export default AboutUs;
