import React from "react";
import classes from "./ClothesGallery.module.scss";
import { IImage } from "@/types";

interface IProps {
  title: string;
  imageHorizontal: IImage[];
  imageVertical: IImage[];
}

const ClothesGallery = ({ title, imageVertical, imageHorizontal }: IProps) => {
  return (
    <div className={classes.clothesGallery}>
      <p className={classes.clothesGallery__title}>{title}</p>
      <div className={classes.clothesGallery__items}>
        <div className={classes.clothesGallery__verticalItems}>
          {imageVertical?.map((i: IImage) => (
            <img
              className={classes.clothesGallery__item}
              key={i._id}
              src={`https://apidiorakids.ru/${i.imageUrl}`}
              alt=""
            />
          ))}
        </div>
        <div className={classes.clothesGallery__horizontalItems}>
          {imageHorizontal?.map((i: IImage) => (
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
