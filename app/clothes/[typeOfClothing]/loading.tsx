import React from "react";
import classes from "../../../components/ClothesGallery/ClothesGallery.module.scss";

import VerticalLoader from "@/components/Loader/VerticalLoader";
import HorizontalLoader from "@/components/Loader/HorizontalLoader";
import TitleLoader from "@/components/Loader/TitleLoader";

const Loading = () => {
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

export default Loading;
