"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import classes from "./Form.module.scss";
import { Input } from "./Input";
import { Button } from "./Button";
import axios from "axios";
import Cookies from "js-cookie";
import { IResponse, IUser } from "@/types";
import { useRouter } from "next/navigation";

export const AdminForm = () => {
  const { push } = useRouter();
  const [user, setUser] = useState<IUser>();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const onChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data: IResponse = await axios
        .post("https://apidiorakids.ru/api/auth/login", {
          email: inputs.email,
          password: inputs.password,
        })
        .then((res) => res.data);

      if (data) {
        setUser(data.user);
      }

      Cookies.set("tokenDiora", data.token);
      push("/admin-panel");
    } catch (err) {
      console.log(err.response);
    }

    setInputs({ email: "", password: "" });
  };

  // console.log(!!Cookies.get("tokenDiora"));

  return (
    <form onSubmit={sendEmail} className={classes.form__adminLogin}>
      <Input
        input
        onChange={onChange}
        name="email"
        type="email"
        placeholder="Ваш Email"
        value={inputs.email}
      />
      <Input
        input
        onChange={onChange}
        name="password"
        type="password"
        placeholder="Ваш Пароль"
        value={inputs.password}
      />
      <Button text="Войти" />
    </form>
  );
};
