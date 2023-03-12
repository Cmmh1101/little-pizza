import React, { Children } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const SectionWrapper = ({ children }: Props) => {
  return <section className="flex flex-column items-center justify-center min-h-screen px-10 md:px-28 lg:px-40 xl:px-60">{children}</section>;
};

export default SectionWrapper;
