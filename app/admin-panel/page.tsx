"use client";

// import React, { useEffect, useState } from "react";
import classes from "./AdminPanel.module.scss";
import { AdminPanelForm, Button } from "@/components/commons";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { getMe } from "@/utils/utils";
import { useEffect, useState } from "react";

const AdminPanel = async () => {
  const onLogOut = () => {
    Cookies.remove("tokenDiora");
  };

  return (
    <div className={classes.root}>
      <div className={classes.logOut__btn}>
        <Button text="Выйти" logOut onClick={onLogOut} />
      </div>
      <AdminPanelForm />
    </div>
  );
};

export default AdminPanel;
