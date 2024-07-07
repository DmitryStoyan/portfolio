import React from "react";
import styles from "./footer.module.css";
import smile from "../../images/smile.png";

export function Footer() {
  return (
    <footer id="contacts" className={styles.footer}>
      <h3 className={styles.footer__title}>
        ( Leave a request or write to me to start )
      </h3>
      <img className={styles.footer__smile} src={smile} alt="" />

      <div className={styles.footer__wrapper}>
        <nav
          className={`${styles.footer__infoWrapper} ${styles.footer__infoWrapperI}`}
        >
          <h4 className={styles.footer__titleInfo}>I am</h4>
          <ul className={styles.footer__listInfo}>
            <li className={styles.footer__itemInfo}>
              <a href="#" className={styles.footer__linkInfo}>
                Dmitry Stoyan
              </a>
            </li>
          </ul>
        </nav>

        <nav
          className={`${styles.footer__infoWrapper} ${styles.footer__infoWrapperI2}`}
        >
          <h4 className={styles.footer__titleInfo}>Contact me</h4>
          <ul className={styles.footer__listInfo}>
            <li className={styles.footer__itemInfo}>
              <a
                href="#"
                target="_blank"
                className={`${styles.footer__linkInfo} ${styles.footer__link}`}
              >
                stoyandmitri@gmail.com
              </a>
            </li>
            <li className={styles.footer__itemInfo}>
              <a
                href="https://t.me/JombeeMusic"
                target="_blank"
                className={`${styles.footer__linkInfo} ${styles.footer__link}`}
              >
                telegram: @JombeeMusic
              </a>
            </li>
            <li className={styles.footer__itemInfo}>
              <a
                href="https://www.instagram.com/jombeemusic?igsh=MXF3c3ZjbzFrZjRqZA=="
                target="_blank"
                className={`${styles.footer__linkInfo} ${styles.footer__link}`}
              >
                Instagram: Jombeemusic
              </a>
            </li>
            <li className={styles.footer__itemInfo}>
              <a
                href="https://github.com/DmitryStoyan"
                target="_blank"
                className={`${styles.footer__linkInfo} ${styles.footer__link}`}
              >
                GitHub: https://github.com/DmitryStoyan
              </a>
            </li>
          </ul>
        </nav>

        <div
          className={`${styles.footer__infoWrapper} ${styles.footer__infoWrapperT}`}
        >
          <h4 className={styles.footer__titleInfo}>My current time is</h4>
          <ul className={styles.footer__listInfo}>
            <li className={styles.footer__itemInfo}>
              <p className={styles.footer__textInfo}>
                Business time: 09:00-18:00
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
