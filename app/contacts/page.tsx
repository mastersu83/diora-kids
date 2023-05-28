import React from "react";
import classes from "./Contacts.module.scss";
import { ContactsForm } from "@/components/commons";

const Page = () => {
  return (
    <div className={classes.contacts}>
      <p className={classes.contacts__title}>Контакты</p>
      <div className={classes.contacts__box}>
        <div className={classes.contacts__data}>
          <p>8(928)22-00-633</p>
          <p>E:mail diorakids@mail.ru</p>
        </div>
        <ContactsForm />
      </div>
    </div>
  );
};

export default Page;
