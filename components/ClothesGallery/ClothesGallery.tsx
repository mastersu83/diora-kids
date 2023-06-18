"use client";

import React, { useState } from "react";
import classes from "./ClothesGallery.module.scss";
import { IImage } from "@/types";
import { ImagePopup } from "../ImagePopup/ImagePopup";

interface IProps {
  title: string;
  imageHorizontal: IImage[];
  imageVertical: IImage[];
}

const ClothesGallery = ({ title, imageVertical, imageHorizontal }: IProps) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [popupToggle, setPopupToggle] = useState<boolean>(false);

  const togglePopup = (url: string) => {
    setImageUrl(url);
    setPopupToggle(true);
  };

  const closePopup = () => {
    setPopupToggle(false);
  };

  return (
    <div className={classes.clothesGallery}>
      <p className={classes.clothesGallery__title}>{title}</p>
      <div className={classes.clothesGallery__items}>
        <div className={classes.clothesGallery__verticalItems}>
          {imageVertical?.map((i: IImage) => (
            <img
              onClick={() =>
                togglePopup(`https://apidiorakids.ru/${i.imageUrl}`)
              }
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
              onClick={() =>
                togglePopup(`https://apidiorakids.ru/${i.imageUrl}`)
              }
              className={classes.clothesGallery__item}
              key={i._id}
              src={`https://apidiorakids.ru/${i.imageUrl}`}
              alt=""
            />
          ))}
        </div>
      </div>
      <ImagePopup
        url={imageUrl}
        closePopup={closePopup}
        popupToggle={popupToggle}
      />
    </div>
  );
};

export default ClothesGallery;
