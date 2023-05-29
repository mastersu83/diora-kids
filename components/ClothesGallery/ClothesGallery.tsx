"use client";

import React, { FC } from "react";
import classes from "./ClothesGallery.module.scss";
import { IImage } from "@/consts/images.data";
import { getPathName } from "@/utils/utils";

interface IProps {
  params: {
    typeOfClothing: string;
  };
}

const ClothesGallery: FC<IProps> = ({ params }) => {
  const { typeOfClothing, title } = getPathName(params.typeOfClothing);

  return (
    <div className={classes.clothesGallery}>
      <p className={classes.clothesGallery__title}>{title}</p>
      <div className={classes.clothesGallery__items}>
        <div className={classes.clothesGallery__verticalItems}>
          {[]?.map((i: IImage) => (
            <img
              className={classes.clothesGallery__item}
              key={i._id}
              src={`https://apidiorakids.ru/${i.imageUrl}`}
              alt=""
            />
          ))}
        </div>
        <div className={classes.clothesGallery__horizontalItems}>
          {[]?.map((i: IImage) => (
            <img
              className={classes.clothesGallery__item}
              key={i._id}
              src={`https://apidiorakids.ru/${i.imageUrl}`}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClothesGallery;
