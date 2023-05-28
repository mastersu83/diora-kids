import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import headerImg from "../../assets/IndigoDesigns_BabyGirl_cl+(5)1.png";
import groupImg from "../../assets/Group1.png";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <Link href="/">
          <Image
            width={490}
            className={styles.header__logo}
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span>
          Это сайт <b>diorakids.com</b>. <br />
          <br /> Мы переехали на <b>diorakids.ru</b>
        </span>
      </div>
      <div>
        <Image
          width={270}
          className={styles.header__img}
          src={headerImg}
          alt="headerImg"
        />
        <p>8(928)22-00-633</p>
        <p>E:mail diorakids@mail.ru</p>
      </div>
      <Image
        className={styles.header__groupImg}
        src={groupImg}
        alt="groupImg"
      />
    </div>
  );
};

export default Header;
