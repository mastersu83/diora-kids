"use client";

import classes from "./Slider.module.scss";
import SimpleImageSlider from "react-simple-image-slider";
import image from "/img/IndigoDesigns_BabyBoy_cl+(5)1.png";
import Image from "next/image";
import { useImages } from "@/hooks/hooks";
import { SliderLoader } from "../Loader/SliderLoader";

const Slider = () => {
  const { sliderImages } = useImages("slider");

  return (
    <div className={classes.slider}>
      {sliderImages ? (
        <SimpleImageSlider
          width={1200}
          height={750}
          images={sliderImages ? sliderImages : []}
          showBullets={true}
          showNavs={false}
          autoPlay={true}
          autoPlayDelay={1}
          slideDuration={2}
        />
      ) : (
        <SliderLoader />
      )}

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
