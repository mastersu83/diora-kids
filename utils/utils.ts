export const getPathName = (key: string | undefined) => {
  let title = "";
  let typeOfClothing = "";
  if (key === "girl") {
    title = "Комплекты на выписку для девочек";
    typeOfClothing = "Girl";
  }
  if (key === "boy") {
    title = "Комплекты на выписку для мальчиков";
    typeOfClothing = "Boy";
  }
  if (key === "others") {
    title = "Пледы на выписку, наборы в кровать, корзины";
    typeOfClothing = "Others";
  }
  if (key === "slider") {
    title = "";
    typeOfClothing = "Slider";
  }
  return { title, typeOfClothing };
};
