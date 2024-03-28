import React from "react";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <section className={styles.footer}>
      <h3 className={styles.footer__title}>
        ( Leave a request or write to me to start )
        <span className={styles.footer__smile}></span>
      </h3>

      <div className={styles.footer__infoWrapper}>
        <h4 className={styles.footer__titleInfo}>I am</h4>
        <ul className={styles.footer__listInfo}>
          <li className={styles.footer__itemInfo}>
            <a href="#" className={styles.footer__linkInfo}>
              Dmitry Stoyan
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.footer__infoWrapper}>
        <h4 className={styles.footer__titleInfo}>I am</h4>
        <ul className={styles.footer__listInfo}>
          <li className={styles.footer__itemInfo}>
            <a href="#" className={styles.footer__linkInfo}></a>
          </li>
        </ul>
      </div>
    </section>
  );
}
