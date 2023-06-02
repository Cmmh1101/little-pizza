import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import classes from "./reactZoom.module.css";
import { FiZoomIn, FiZoomOut, FiRefreshCcw } from "react-icons/fi";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ReactZoom = () => {
  const images = [
    {
      path: "/assets/images/menus/menu-2.webp",
      alt: "Menu front",
    },
    {
      path: "/assets/images/menus/menu-1.webp",
      alt: "Menu back",
    },
  ];

  return (
    <div className="bg-black w-[90vw] h-auto rounded-xl drop-shadow-2xl overflow-hidden flex flex-col items-center text-white mx-auto mt-44 mb-14 cursor-grab">
      {images.map((image, i) => {
        return (
          <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
            key={i}
          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <React.Fragment>
                <div className="text-2xl h-100">
                  <button
                    className="mx-3 p-3 opacity-75 hover:opacity-100 transition hover:scale-110 ease-in-out duration-700"
                    onClick={() => zoomIn()}
                    title="Zoom in"
                  >
                    <FiZoomIn />
                  </button>
                  <button
                    className="mx-3 p-2 opacity-75 hover:opacity-100 transition hover:scale-110 ease-in-out duration-700"
                    onClick={() => zoomOut()}
                    title="Zoom Out"
                  >
                    <FiZoomOut />
                  </button>
                  <button
                    className="mx-3 p-2 opacity-75 hover:opacity-100 transition hover:scale-110 ease-in-out duration-700"
                    onClick={() => resetTransform()}
                    title="Reset"
                  >
                    <FiRefreshCcw />
                  </button>
                </div>
                <TransformComponent>
                  <div key={i} className={classes.imageContainer}>
                    <Image
                      src={image.path}
                      alt={image.alt}
                      fill
                      quality={80}
                      className={`shadow ${classes.image}`}
                    />
                  </div>
                </TransformComponent>
                <div className="py-3 flex flex-col md:flex-row justify-center items-center w-full text-center border-b-4 border-white border-opacity-75">
                  Dine in, Delivery, and Take Out{" "}
                  <Link
                    href="https://togoorder.com/web/Home/InactiveLocation/2645"
                    target="_blank"
                    className="px-5 py-0 my-0 mx-2 text-white font-semibold rounded-full border border-red-200 bg-red-600 hover:text-white hover:bg-red-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 xs:text-sm"
                  >
                    Order online
                  </Link>{" "}
                  <div>
                    Call{" "}
                    <a
                      href="tel:9017297432"
                      className="transition ease-in-out hover:underline"
                    >
                      (901) 729-7432
                    </a>{" "}
                    to Place Your Order Now{" "}
                  </div>
                </div>
              </React.Fragment>
            )}
          </TransformWrapper>
        );
      })}
    </div>
  );
};

export default ReactZoom;
