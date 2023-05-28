"use client";

import React, { useState } from "react";
import styles from "./Menu.module.scss";
import Link from "next/link";
import { menuItems } from "@/consts/menuLink.data";

const Menu = () => {
  const [active, setActive] = useState<string>("/");
  const isAuth = false;
  return (
    <ul className={styles.menu}>
      {menuItems.map((link) => (
        <li
          key={link.id}
          onClick={() => setActive(link.link)}
          className={`${styles.menu__link} ${
            active === link.link ? styles.menu__activeLink : ""
          }`}
        >
          <Link href={link.link}>{link.title}</Link>
        </li>
      ))}
      {!isAuth ? (
        <li
          onClick={() => setActive("login")}
          className={`${styles.menu__link} ${
            active === "login" ? styles.menu__activeLink : ""
          }`}
        >
          <Link href="login">ВОЙТИ</Link>
        </li>
      ) : (
        <li
          onClick={() => setActive("admin-panel")}
          className={`${styles.menu__link} ${
            active === "admin-panel" ? styles.menu__activeLink : ""
          }`}
        >
          <Link href="admin-panel">АДМИН ПАНЕЛЬ</Link>
        </li>
      )}
    </ul>
  );
};

export default Menu;
