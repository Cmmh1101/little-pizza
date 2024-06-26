import React, { useEffect } from "react";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import Image from "next/image";
import classes from "./gallery.module.css";

const Gallery = () => {
  const images = [
    {
      src: "/assets/images/photos/cheese-pizza.jpg",
      alt: "Cheese pizza.",
    },
    {
      src: "/assets/images/photos/bbq-pizza.jpg",
      alt: "Cheese pizza.",
    },
    {
      src: "/assets/images/photos/cheese-pizza-1.jpg",
      alt: "Cheese pizza.",
    },
    {
      src: "/assets/images/photos/gnocchi.jpg",
      alt: "Cheese pizza.",
    },
    {
      src: "/assets/images/photos/lasagna.jpg",
      alt: "Cheese pizza.",
    },
    {
      src: "/assets/images/photos/panini.jpg",
      alt: "Cheese pizza.",
    },
    {
      src: "/assets/images/photos/pasta-1.jpg",
      alt: "Cheese pizza.",
    },
    {
      src: "/assets/images/photos/pasta-2.jpg",
      alt: "Cheese pizza.",
    },
    {
      src: "/assets/images/photos/spaghetti-1.jpg",
      alt: "Cheese pizza.",
    },
    {
      src: "/assets/images/photos/spaghetti-2.jpg",
      alt: "Cheese pizza.",
    },
    {
      src: "/assets/images/photos/spaghetti-3.jpg",
      alt: "Cheese pizza.",
    },
    {
      src: "/assets/images/photos/gnocchi.jpg",
      alt: "Cheese pizza.",
    },
  ];

  useEffect(() => {
    initLightboxJS(process.env.LIGHTBOX_KEY!, process.env.LIGHTBOX_PLAN!);
  }, []);

  return (
    <section className="flex flex-col items-center px-0 sm:px-5 md:px-28 lg:px-40 xl:px-60 py-28 bg-black">
      <SlideshowLightbox
        lightboxIdentifier="lightbox1"
        theme="lightbox"
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-1 sm:gap-4 rounded-lg overflow-hidden"
        framework="next"
        images={images}
        showThumbnails={true}
        thumbnailBorder="silver"
        imgAnimation="fade"
      >
        {images.map((image, i) => (
          <div key={i} className={`overflow-hidden ${classes.imageContainer}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              data-lightboxjs="lightbox1"
              quality={80}
              className={`shadow opacity-75 hover:opacity-100 transition hover:scale-110 ease-in-out duration-700 ${classes.image}`}
            />
          </div>
        ))}
      </SlideshowLightbox>
    </section>
  );
};

export default Gallery;
