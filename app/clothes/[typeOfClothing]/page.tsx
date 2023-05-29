import ClothesGallery from "@/components/ClothesGallery/ClothesGallery";
import React, { FC } from "react";

interface IProps {
  params: {
    typeOfClothing: string;
  };
}

const Page: FC<IProps> = ({ params }) => {
  return (
    <div>
      <ClothesGallery params={params} />
    </div>
  );
};

export default Page;
