import React, { useEffect } from "react";
import styles from "./menu.module.css";

export const Menu = ({ closeMenu }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleMenuClick = (event, targetId) => {
    event.preventDefault();
    closeMenu();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.headerMenu}>
      <nav className={styles.header__navigation}>
        <div className={styles.menu__headerWrapper}>
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
              <button
                className={`${styles.menuButton} ${styles.closeButton}`}
                onClick={closeMenu}
              ></button>
            </li>
          </ul>
        </div>

        <ul className={`${styles.header__list} ${styles.header__list_right}`}>
          <li className={styles.header__item}>
            <a
              href="#cases"
              className={`${styles.header__link} ${styles.header__link_active}`}
              onClick={(e) => handleMenuClick(e, "cases")}
            >
              Cases
            </a>
          </li>
          <li className={styles.header__item}>
            <a
              href="#projects"
              className={styles.header__link}
              onClick={(e) => handleMenuClick(e, "projects")}
            >
              Projects
            </a>
          </li>
          <li className={styles.header__item}>
            <a
              href="#aboutMe"
              className={styles.header__link}
              onClick={(e) => handleMenuClick(e, "aboutMe")}
            >
              About me
            </a>
          </li>
          <li className={styles.header__item}>
            <a
              href="#contacts"
              className={styles.header__link}
              onClick={(e) => handleMenuClick(e, "contacts")}
            >
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
