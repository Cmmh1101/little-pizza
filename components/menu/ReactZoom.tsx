import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import classes from "./reactZoom.module.css"

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
                <div className="">
                  <button className="mx-3" onClick={() => zoomIn()}>
                    Zoom in
                  </button>
                  <button className="mx-3" onClick={() => zoomOut()}>
                    Zoom out
                  </button>
                  <button className="mx-3" onClick={() => resetTransform()}>
                    Reset
                  </button>
                </div>
                <TransformComponent>
                <div key={i} className={classes.imageContainer}>
            <Image
              src={image.path} alt={image.alt}
              fill
              quality={80}
              className={`shadow ${classes.image}`}
            />
          </div>
                  {/* <div className="w-full">
                  <Image src={image.path} alt={image.alt} width={800} height={800} />
                  </div> */}
                  
                        </TransformComponent>
                        <div>Dine in, Delivery, and Take Out - <Link href="https://togoorder.com/web/Home/InactiveLocation/2645" target="_blank" className="px-5 py-2 text-white font-semibold rounded-full border border-red-200 bg-red-600 hover:text-white hover:bg-red-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">Order online</Link> – Call (901) 725-0280 to Place Your Order Now </div>
              </React.Fragment>
            )}
          </TransformWrapper>
        );
      })}
    </div>
  );
};

export default ReactZoom;
