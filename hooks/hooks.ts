import { IImage } from "@/types";
import { getPathName } from "@/utils/utils";
import axios from "axios";
import useSWR from "swr";

export const useImages = (type: string) => {
  const fetcher = (url: string) => axios(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR<IImage[]>(
    `https://apidiorakids.ru/api/images`,
    fetcher
  );

  const { typeOfClothing, title } = getPathName(type);

  if (data) {
    const imageVertical = data.filter(
      (i) => i.type === 0 && i.typeOfClothing === typeOfClothing
    );

    const imageHorizontal = data.filter(
      (i) => i.type === 1 && i.typeOfClothing === typeOfClothing
    );

    const sliderImages = imageHorizontal
      .filter((i) => i.type === 1 && i.typeOfClothing === "Slider")
      .map((i) => "https://apidiorakids.ru/" + i.imageUrl);

    return {
      imageVertical,
      imageHorizontal,
      sliderImages,
      title,
      isLoading,
      isError: error,
    };
  }

  return {
    isError: error,
  };
};
