import axios from "axios";
import Cookies from "js-cookie";

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

export const getData = async (type: string | undefined) => {
  const data = await axios.get("https://apidiorakids.ru/api/images");

  const { typeOfClothing, title } = getPathName(type);

  const imageVertical = data.data?.filter(
    (i) => i.type === 0 && i.typeOfClothing === typeOfClothing
  );

  const imageHorizontal = data.data?.filter(
    (i) => i.type === 1 && i.typeOfClothing === typeOfClothing
  );

  return { imageVertical, imageHorizontal, title };
};

export const getMe = async () => {
  try {
    const isAuth = await axios.get("https://apidiorakids.ru/api/auth/me", {
      headers: {
        Authorization: Cookies.get("tokenDiora"),
      },
    });
    if (isAuth) {
      return true;
    }
  } catch (e) {
    console.log("hello");
  }
  return false;
};
