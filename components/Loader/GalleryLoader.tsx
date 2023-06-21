import React from "react";
import classes from "../ClothesGallery/ClothesGallery.module.scss";
import { HorizontalLoader } from "./HorizontalLoader";
import { TitleLoader } from "./TitleLoader";
import { VerticalLoader } from "./VerticalLoader";

const GalleryLoader = () => {
  return (
    <div className={classes.clothesGallery}>
      <p className={classes.clothesGallery__title}>
        <TitleLoader />
      </p>
      <div className={classes.clothesGallery__items}>
        <div className={classes.clothesGallery__verticalItems}>
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <VerticalLoader key={index} />
            ))}
        </div>
        <div className={classes.clothesGallery__horizontalItems}>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <HorizontalLoader key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryLoader;
