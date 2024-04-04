import React from "react";
import styles from "./header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <nav className={styles.header__navigation}>
      <ul className={`${styles.header__list} ${styles.header__list_left}`}>
        <li className={styles.header__item}>
          <a href="#" className={styles.header__link}>
            Stoyan
          </a>
        </li>
        <li className={styles.header__item}>
          <button className={styles.header__button}>Change topic</button>
        </li>
      </ul>
      <ul className={`${styles.header__list} ${styles.header__list_right}`}>
        <li className={styles.header__item}>
          <a
            href="#"
            className={`${styles.header__link} ${styles.header__link_active}`}
          >
            Cases
          </a>
        </li>
        <li className={styles.header__item}>
          <a href="#" className={styles.header__link}>
            About me
          </a>
        </li>
        <li className={styles.header__item}>
          <a href="#" className={styles.header__link}>
            Price
          </a>
        </li>
        <li className={styles.header__item}>
          <a href="#" className={styles.header__link}>
            Contact
          </a>
        </li>
      </ul>
      <button className={styles.burgerButton}></button>
    </nav>
  </header>
);
