import ClothesGallery from "@/components/ClothesGallery/ClothesGallery";
import React from "react";
import { getData } from "@/utils/utils";

interface IProps {
  params: {
    typeOfClothing: string;
  };
}

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
