"use client";

import React, { ChangeEvent, useState } from "react";
import { Input } from "./Input";
import classes from "./Form.module.scss";
import { Button } from "./Button";

export const AdminPanelForm = () => {
  const [inputs, setInputs] = useState({
    type: "0",
    typeOfClothing: "Boy",
  });

  const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const onChangeFile = async (e: any) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
  };

  return (
    <form className={`${classes.form__adminLogin} ${classes.addImageForm}`}>
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
        <Input
          onChange={onChangeFile}
          file
          name="file"
          type="file"
          placeholder="Ваш Пароль"
        />
        <button className={classes.form__button}>Удалить</button>
      </div>

      {/*<div className={classes.previewImage}>*/}
      {/*  <img src={`https://apidiorakids.ru/${data?.imageUrl}`} alt="" />*/}
      {/*</div>*/}

      <Button text="Отправить" />
    </form>
  );
};
