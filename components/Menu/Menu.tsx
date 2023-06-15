"use client";

import React, { useEffect, useState } from "react";
import styles from "./Menu.module.scss";
import Link from "next/link";
import { menuItems } from "@/consts/menuLink.data";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

const Menu = () => {
  const pathname = usePathname();

  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    if (Cookies.get("tokenDiora")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [Cookies.get("tokenDiora")]);

  return (
    <ul className={styles.menu}>
      {menuItems.map((link) => (
        <li
          key={link.id}
          className={`${styles.menu__link} ${
            pathname === link.link ? styles.menu__activeLink : ""
          }`}
        >
          <Link href={link.link}>{link.title}</Link>
        </li>
      ))}
      {!isAuth ? (
        <li
          className={`${styles.menu__link} ${
            pathname === "/login" ? styles.menu__activeLink : ""
          }`}
        >
          <Link href="/login">ВОЙТИ</Link>
        </li>
      ) : (
        <li
          className={`${styles.menu__link} ${
            pathname === "/admin-panel" ? styles.menu__activeLink : ""
          }`}
        >
          <Link href="/admin-panel">АДМИН ПАНЕЛЬ</Link>
        </li>
      )}
    </ul>
  );
};

export default Menu;
