// "use client";

// import React, { useEffect, useState } from "react";
import classes from "./AdminLogin.module.scss";
import { AdminForm } from "@/components/commons";
import { redirect } from "next/navigation";
import { getMe } from "@/utils/utils";

const Page = async () => {
  return (
    <div className={classes.admin}>
      <p className={classes.admin__title}>Войти в панель администратора</p>
      <AdminForm />
    </div>
  );
};

export default Page;
