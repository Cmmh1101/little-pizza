import React, { Children } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const SectionWrapper = ({ children }: Props) => {
  return <section className="flex flex-col items-center justify-center h-auto px-10 md:px-28 lg:px-40 xl:px-60 py-28">{children}</section>;
};

export default SectionWrapper;
