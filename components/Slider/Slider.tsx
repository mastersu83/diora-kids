"use client";

import React, { FC } from "react";
import classes from "./Slider.module.scss";
import SimpleImageSlider from "react-simple-image-slider";
import image from "/img/IndigoDesigns_BabyBoy_cl+(5)1.png";
import Image from "next/image";

interface SliderProps {
  sliderImages: string[];
}

const Slider: FC<SliderProps> = ({ sliderImages }) => {
  return (
    <div className={classes.slider}>
      <SimpleImageSlider
        width={1200}
        height={750}
        images={sliderImages}
        showBullets={true}
        showNavs={false}
        autoPlay={true}
        autoPlayDelay={1}
        slideDuration={2}
      />

      <Image
        className={classes.slider__image}
        priority={true}
        src={image}
        alt="BabyBoy"
      />
    </div>
  );
};
export default Slider;
