import React from "react";
import styles from "./Clothes.module.scss";
import boyImage from "/img/IMG_6391.jpg";
import girlImage from "/img/IMG_6607.JPG.jpg";
import Link from "next/link";
import Image from "next/image";

const Clothes = async () => {
  return (
    <div className={styles.clothes}>
      <p className={styles.clothes__title}>Нарядная одежда для новорожденных</p>
      <div className={styles.clothes__items}>
        <div className={styles.clothes__item}>
          <Image
            className={styles.clothes__img}
            priority={true}
            src={girlImage}
            alt=""
          />
          <Link href="/clothes/girl">
            <button
              className={`${styles.clothes__girlImgBtn} ${styles.clothes__btn}`}
            >
              Для девочек
            </button>
          </Link>
        </div>
        <div className={styles.clothes__item}>
          <Image
            className={styles.clothes__img}
            priority={true}
            src={boyImage}
            alt=""
          />
          <Link href="/clothes/boy">
            <button
              className={`${styles.clothes__boyImgBtn} ${styles.clothes__btn}`}
            >
              Для мальчиков
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Clothes;
