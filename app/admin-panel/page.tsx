"use client";

// import React, { useEffect, useState } from "react";
import classes from "./AdminPanel.module.scss";
import { AdminPanelForm, Button } from "@/components/commons";
import Cookies from "js-cookie";

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
