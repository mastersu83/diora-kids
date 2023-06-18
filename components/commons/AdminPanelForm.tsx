"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "./Input";
import classes from "./Form.module.scss";
import { Button } from "./Button";
import { addImage, uploadImage } from "@/utils/utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const AdminPanelForm = () => {
  const { push } = useRouter();
  const [inputs, setInputs] = useState({
    type: "0",
    typeOfClothing: "Boy",
  });

  const { data } = useSession();

  const [image, setImage] = useState("");

  const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const onChangeFile = async (e: any) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    const { data: imageUrl } = await uploadImage(formData, data.user.token);
    setImage(imageUrl);
  };

  const createImage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newImage = await addImage(
        {
          type: inputs.type,
          typeOfClothing: inputs.typeOfClothing,
          imageUrl: image,
        },
        data.user.token
      );
      if (newImage) {
        push(`/clothes/${inputs.typeOfClothing}`);
      }
    } catch (err) {
      console.warn(err);
      alert("Ошибка при загрузке файла");
    }
  };

  return (
    <form
      onSubmit={createImage}
      className={`${classes.form__adminLogin} ${classes.addImageForm}`}
    >
      <select
        className={classes.form__input}
        name="type"
        onChange={onChangeType}
      >
        <option value="0">Вертикальный</option>
        <option value="1">Горизонтаьлный</option>
      </select>
      <select
        className={classes.form__input}
        name="typeOfClothing"
        onChange={onChangeType}
      >
        <option value="Boy">Мальчик</option>
        <option value="Girl">Девочка</option>
        <option value="Others">Конверты, Пледы, Корзины</option>
        <option value="Slider">Слайдер</option>
      </select>
      <div className={classes.inputFileBox}>
        <Input onChange={onChangeFile} file name="file" type="file" />
        <button className={classes.form__button}>Удалить</button>
      </div>

      <div className={classes.previewImage}>
        <img src={`https://apidiorakids.ru/${image}`} alt="" />
      </div>

      <Button text="Отправить" />
    </form>
  );
};
