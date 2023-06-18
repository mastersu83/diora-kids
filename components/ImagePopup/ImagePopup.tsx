import styles from "./ImagePopup.module.scss";

interface IImagePopup {
  url: string;
  closePopup: () => void;
  popupToggle: boolean;
}

export const ImagePopup = ({ url, closePopup, popupToggle }: IImagePopup) => {
  return (
    <div className={`${styles.popup} ${popupToggle ? styles.open : ""}`}>
      <div className={styles.popup__overflow} onClick={closePopup} />
      <div className={styles.popup__content}>
        <img className={styles.img} src={url} alt="" onClick={closePopup} />
      </div>
    </div>
  );
};
