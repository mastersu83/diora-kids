"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import classes from "./Form.module.scss";
import { Input } from "./Input";
import { Button } from "./Button";
import { IUser } from "@/types";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

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

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email: inputs.email,
        password: inputs.password,
        redirect: false,
      });

      if (res && !res.error) {
        push("/admin-panel");
        // cookies().set("token", data.user.token);
      }
    } catch (err) {
      console.log(err.response);
    }

    setInputs({ email: "", password: "" });
  };

  return (
    <form onSubmit={login} className={classes.form__adminLogin}>
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
