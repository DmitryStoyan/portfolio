import React, { useState } from "react";
import styles from "./header.module.css";
import { Menu } from "../menu/Menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.header__navigation}>
        <ul className={`${styles.header__list} ${styles.header__list_left}`}>
          <li className={styles.header__item}>
            <a
              href="#header"
              className={`${styles.header__link} ${styles.header__link_logo} ${styles.header__link_active}`}
            >
              Stoyan
            </a>
          </li>
          <li className={styles.header__item}>
            <button className={styles.header__button}>Change topic</button>
          </li>
        </ul>
        <ul className={`${styles.header__list} ${styles.header__list_right}`}>
          <li className={styles.header__item}>
            <a href="#cases" className={`${styles.header__link}`}>
              Cases
            </a>
          </li>
          <li className={styles.header__item}>
            <a href="#projects" className={styles.header__link}>
              Projects
            </a>
          </li>
          <li className={styles.header__item}>
            <a href="#aboutMe" className={styles.header__link}>
              About me
            </a>
          </li>
          <li className={styles.header__item}>
            <a href="#contacts" className={styles.header__link}>
              Contacts
            </a>
          </li>
        </ul>
        <button
          className={`${styles.menuButton} ${styles.burgerButton}`}
          onClick={toggleMenu}
        ></button>
      </nav>
      {isMenuOpen && <Menu closeMenu={toggleMenu} />}
    </header>
  );
};
