import Slider from "@/components/Slider/Slider";
import { getData } from "@/utils/utils";

export default async function Home() {
  const { imageHorizontal } = await getData("slider");

  const imageUrl = imageHorizontal
    ? imageHorizontal
        .filter((i) => i.type === 1 && i.typeOfClothing === "Slider")
        .map((i) => "https://apidiorakids.ru/" + i.imageUrl)
    : [];

  return (
    <>
      <Slider sliderImages={imageUrl} />
    </>
  );
}
