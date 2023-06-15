import ClothesGallery from "@/components/ClothesGallery/ClothesGallery";
import React from "react";
import { getData } from "@/utils/utils";

const Page = async ({ params: { typeOfClothing } }) => {
  const { title, imageVertical, imageHorizontal } = await getData(
    typeOfClothing
  );

  return (
    <ClothesGallery
      title={title}
      imageVertical={imageVertical}
      imageHorizontal={imageHorizontal}
    />
  );
};

export default Page;
