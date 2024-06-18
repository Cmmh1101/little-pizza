import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./reactZoom.module.css";
import { FiZoomIn, FiZoomOut, FiRefreshCcw } from "react-icons/fi";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const images = [
  {
    path: "/assets/images/menus/catering-menu-1.png",
    alt: "Menu front",
  },
  {
    path: "/assets/images/menus/catering-menu-2.png",
    alt: "Menu back",
  },
];

const ReactZoom = () => {

  return (
    <div className="bg-black w-[90vw] h-auto rounded-xl drop-shadow-2xl overflow-hidden flex flex-col items-center text-white mx-auto mt-16 mb-14 cursor-grab">
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
                      priority
                      quality={100}
                      className={`shadow ${classes.image}`}
                    />
                  </div>
                </TransformComponent>
                <div className="py-3 flex flex-col md:flex-row justify-center items-center w-full text-center border-b-4 border-white border-opacity-75">
                  Catering Orders with 24 hrs In Advance - {" "}
                  <div className="ml-1">
                    { " "}Call us at{" "}
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
