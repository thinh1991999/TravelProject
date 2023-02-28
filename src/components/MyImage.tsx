import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const MyImage = ({
  image,
}: {
  image: {
    alt: string;
    src: string;
  };
}) => (
  <LazyLoadImage
    alt={image.alt}
    effect="blur"
    src={image.src}
    height="100%"
    width="100%"
  />
);
