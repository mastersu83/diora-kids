"use client";

import React, { FC } from "react";
import classes from "./Form.module.scss";
import { signOut } from "next-auth/react";

interface ButtonPropsTypes {
  text: string;
  logOut?: boolean;
}

export const Button: FC<ButtonPropsTypes> = ({ text, logOut }) => {
  return (
    <>
      {!logOut ? (
        <button type="submit" className={classes.form__button}>
          {text}
        </button>
      ) : (
        <button
          className={classes.form__button}
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          {text}
        </button>
      )}
    </>
  );
};
