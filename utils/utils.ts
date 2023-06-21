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

export const uploadImage = async (formData, token) => {
  const data = await axios
    .post<{ imageUrl: string }>(
      "https://apidiorakids.ru/api/upload",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => res.data.imageUrl);

  return { data };
};

export const removeFile = async (imageUrl, token) => {
  const data = await axios
    .delete("https://apidiorakids.ru/api/upload", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { imageUrl },
    })
    .then((res) => res.data.imageUrl);

  return { data };
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

export const addImage = async (image, token) => {
  try {
    const newImage = await axios.post(
      "https://apidiorakids.ru/api/images",
      image,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (newImage) {
      return newImage;
    }
  } catch (e) {
    console.log("Не удалось создать картирку");
  }
  return false;
};
